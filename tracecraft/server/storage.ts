import { cases, evidence, events, hypotheses, users } from "@shared/schema";
import type {
  Case, InsertCase,
  Evidence, InsertEvidence,
  Event, InsertEvent,
  Hypothesis, InsertHypothesis,
  User, InsertUser,
} from "@shared/schema";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { eq, and } from "drizzle-orm";
import { randomUUID } from "node:crypto";

const sqlite = new Database("data.db");
sqlite.pragma("journal_mode = WAL");

// Bootstrap tables (no migrations in dev)
sqlite.exec(`
CREATE TABLE IF NOT EXISTS cases (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'active',
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS evidence (
  id TEXT PRIMARY KEY,
  case_id TEXT NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'document',
  epistemic TEXT NOT NULL DEFAULT 'claim',
  source_url TEXT DEFAULT '',
  reliability INTEGER NOT NULL DEFAULT 3,
  relevance INTEGER NOT NULL DEFAULT 3,
  occurred_at TEXT DEFAULT '',
  notes TEXT DEFAULT '',
  tags TEXT DEFAULT '[]',
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  case_id TEXT NOT NULL,
  title TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  description TEXT DEFAULT '',
  certainty TEXT NOT NULL DEFAULT 'confirmed',
  evidence_ids TEXT DEFAULT '[]',
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS hypotheses (
  id TEXT PRIMARY KEY,
  case_id TEXT NOT NULL,
  title TEXT NOT NULL,
  statement TEXT NOT NULL DEFAULT '',
  confidence INTEGER NOT NULL DEFAULT 50,
  support_ids TEXT DEFAULT '[]',
  contradict_ids TEXT DEFAULT '[]',
  next_tests TEXT DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'open',
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
`);

export const db = drizzle(sqlite);

const now = () => Date.now();
const id = () => randomUUID();

export interface IStorage {
  // cases
  listCases(): Promise<Case[]>;
  getCase(id: string): Promise<Case | undefined>;
  createCase(data: InsertCase): Promise<Case>;
  updateCase(id: string, data: Partial<InsertCase>): Promise<Case | undefined>;
  deleteCase(id: string): Promise<void>;
  // evidence
  listEvidence(caseId: string): Promise<Evidence[]>;
  createEvidence(caseId: string, data: InsertEvidence): Promise<Evidence>;
  updateEvidence(id: string, data: Partial<InsertEvidence>): Promise<Evidence | undefined>;
  deleteEvidence(id: string): Promise<void>;
  // events
  listEvents(caseId: string): Promise<Event[]>;
  createEvent(caseId: string, data: InsertEvent): Promise<Event>;
  deleteEvent(id: string): Promise<void>;
  // hypotheses
  listHypotheses(caseId: string): Promise<Hypothesis[]>;
  createHypothesis(caseId: string, data: InsertHypothesis): Promise<Hypothesis>;
  updateHypothesis(id: string, data: Partial<InsertHypothesis>): Promise<Hypothesis | undefined>;
  deleteHypothesis(id: string): Promise<void>;
  // users (legacy)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class DatabaseStorage implements IStorage {
  // cases
  async listCases() { return db.select().from(cases).all(); }
  async getCase(cid: string) { return db.select().from(cases).where(eq(cases.id, cid)).get(); }
  async createCase(data: InsertCase) {
    return db.insert(cases).values({ id: id(), createdAt: now(), ...data }).returning().get();
  }
  async updateCase(cid: string, data: Partial<InsertCase>) {
    return db.update(cases).set(data).where(eq(cases.id, cid)).returning().get();
  }
  async deleteCase(cid: string) {
    db.delete(evidence).where(eq(evidence.caseId, cid)).run();
    db.delete(events).where(eq(events.caseId, cid)).run();
    db.delete(hypotheses).where(eq(hypotheses.caseId, cid)).run();
    db.delete(cases).where(eq(cases.id, cid)).run();
  }
  // evidence
  async listEvidence(caseId: string) { return db.select().from(evidence).where(eq(evidence.caseId, caseId)).all(); }
  async createEvidence(caseId: string, data: InsertEvidence) {
    return db.insert(evidence).values({ id: id(), createdAt: now(), ...data, caseId }).returning().get();
  }
  async updateEvidence(eid: string, data: Partial<InsertEvidence>) {
    return db.update(evidence).set(data).where(eq(evidence.id, eid)).returning().get();
  }
  async deleteEvidence(eid: string) { db.delete(evidence).where(eq(evidence.id, eid)).run(); }
  // events
  async listEvents(caseId: string) { return db.select().from(events).where(eq(events.caseId, caseId)).all(); }
  async createEvent(caseId: string, data: InsertEvent) {
    return db.insert(events).values({ id: id(), createdAt: now(), ...data, caseId }).returning().get();
  }
  async deleteEvent(eid: string) { db.delete(events).where(eq(events.id, eid)).run(); }
  // hypotheses
  async listHypotheses(caseId: string) { return db.select().from(hypotheses).where(eq(hypotheses.caseId, caseId)).all(); }
  async createHypothesis(caseId: string, data: InsertHypothesis) {
    return db.insert(hypotheses).values({ id: id(), createdAt: now(), ...data, caseId }).returning().get();
  }
  async updateHypothesis(hid: string, data: Partial<InsertHypothesis>) {
    return db.update(hypotheses).set(data).where(eq(hypotheses.id, hid)).returning().get();
  }
  async deleteHypothesis(hid: string) { db.delete(hypotheses).where(eq(hypotheses.id, hid)).run(); }
  // users
  async getUser(uid: number) { return db.select().from(users).where(eq(users.id, uid)).get(); }
  async getUserByUsername(username: string) { return db.select().from(users).where(eq(users.username, username)).get(); }
  async createUser(insertUser: InsertUser) { return db.insert(users).values(insertUser).returning().get(); }
}

export const storage = new DatabaseStorage();

// ========== Seed data ==========
function seedIfEmpty() {
  const existing = sqlite.prepare("SELECT COUNT(*) as c FROM cases").get() as { c: number };
  if (existing.c > 0) return;

  const caseId = "case-harborlight";
  const t = Date.now();
  sqlite.prepare(`INSERT INTO cases (id, title, summary, status, created_at) VALUES (?, ?, ?, ?, ?)`).run(
    caseId,
    "The Harborlight Disappearance",
    "On the night of 2024-03-14, freelance journalist Mara Quinn vanished from the Harborlight ferry terminal in Astoria after a meeting with an anonymous source. Her notebook was never recovered. Public CCTV captured her boarding the 22:40 ferry but no footage exists of her disembarking. This is a fictional sample case used to demonstrate Tracecraft.",
    "active",
    t,
  );

  const ev = (e: { title: string; type: string; epistemic: string; reliability: number; relevance: number; occurredAt?: string; sourceUrl?: string; notes?: string; tags?: string[]; }) => {
    const eid = id();
    sqlite.prepare(`INSERT INTO evidence (id, case_id, title, type, epistemic, source_url, reliability, relevance, occurred_at, notes, tags, created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`).run(
      eid, caseId, e.title, e.type, e.epistemic,
      e.sourceUrl ?? "", e.reliability, e.relevance,
      e.occurredAt ?? "", e.notes ?? "", JSON.stringify(e.tags ?? []), t,
    );
    return eid;
  };

  const ev1 = ev({ title: "Ferry CCTV: boarding 22:40", type: "digital", epistemic: "fact", reliability: 5, relevance: 5, occurredAt: "2024-03-14T22:40", sourceUrl: "https://example.gov/astoria-portauth/cctv/2024-03-14", notes: "Timestamped footage from Astoria Port Authority. Subject visible boarding alone, carrying a brown leather satchel.", tags: ["cctv","port-authority","timestamped"] });
  const ev2 = ev({ title: "Source meeting at Pier 9 cafe", type: "testimony", epistemic: "claim", reliability: 3, relevance: 4, occurredAt: "2024-03-14T21:15", notes: "Barista recalls Quinn meeting an unidentified man with a navy raincoat for ~30 minutes. No audio. Memory may be unreliable two weeks later.", tags: ["witness","cafe"] });
  const ev3 = ev({ title: "Unsent draft: 'Greenline shipments'", type: "document", epistemic: "fact", reliability: 5, relevance: 5, occurredAt: "2024-03-14T19:02", sourceUrl: "https://example.org/leaks/quinn-draft-greenline", notes: "Draft article on her laptop names Greenline Logistics in connection with undeclared cargo. Last modified two hours before the meeting.", tags: ["draft","greenline"] });
  const ev4 = ev({ title: "Conflicting witness: 'saw her at diner 23:30'", type: "testimony", epistemic: "claim", reliability: 2, relevance: 3, occurredAt: "2024-03-14T23:30", notes: "Anonymous tip claims subject was seen at a diner across the bay at 23:30. Contradicts ferry departure (no return ferry until 06:00). Likely mistaken identification.", tags: ["tip","contradiction"] });
  const ev5 = ev({ title: "Phone last ping: cell tower A-7", type: "digital", epistemic: "fact", reliability: 5, relevance: 5, occurredAt: "2024-03-14T22:51", sourceUrl: "https://example.com/carrier-records/A7", notes: "Carrier records place phone at tower A-7 near the channel mid-crossing. Phone goes dark at 22:53.", tags: ["phone","tower"] });
  const ev6 = ev({ title: "Greenline shipping manifest (partial)", type: "document", epistemic: "claim", reliability: 3, relevance: 4, occurredAt: "2024-03-12", sourceUrl: "https://example.org/leaks/manifest-partial", notes: "Partial manifest obtained via a third party. Authenticity not independently verified.", tags: ["greenline","manifest","unverified"] });
  const ev7 = ev({ title: "Anonymous email: 'they know'", type: "digital", epistemic: "claim", reliability: 2, relevance: 3, occurredAt: "2024-03-13T08:11", notes: "Threatening email sent from a one-time address the day before. Headers suggest a VPN exit in another country. Sender unknown.", tags: ["threat","email"] });
  const ev8 = ev({ title: "Family statement: planned overnight trip", type: "testimony", epistemic: "claim", reliability: 4, relevance: 2, occurredAt: "2024-03-14", notes: "Sister states Quinn told her she planned to spend the night with the source's contact across the bay; no mention of returning home.", tags: ["family","plan"] });
  const ev9 = ev({ title: "Notebook never recovered", type: "physical", epistemic: "fact", reliability: 5, relevance: 4, occurredAt: "", notes: "Quinn's brown leather notebook is missing. Last seen on her at boarding (per CCTV).", tags: ["physical","missing"] });

  const evt = (e: { title: string; occurredAt: string; description?: string; certainty?: string; evidenceIds?: string[] }) => {
    sqlite.prepare(`INSERT INTO events (id, case_id, title, occurred_at, description, certainty, evidence_ids, created_at) VALUES (?,?,?,?,?,?,?,?)`).run(
      id(), caseId, e.title, e.occurredAt, e.description ?? "", e.certainty ?? "confirmed", JSON.stringify(e.evidenceIds ?? []), t,
    );
  };
  evt({ title: "Draft article last modified", occurredAt: "2024-03-14T19:02", description: "Subject saves a draft naming Greenline Logistics.", certainty: "confirmed", evidenceIds: [ev3] });
  evt({ title: "Cafe meeting with anonymous source", occurredAt: "2024-03-14T21:15", description: "~30 minute meeting at Pier 9 cafe.", certainty: "reported", evidenceIds: [ev2] });
  evt({ title: "Boards 22:40 ferry, alone", occurredAt: "2024-03-14T22:40", description: "Astoria terminal CCTV.", certainty: "confirmed", evidenceIds: [ev1] });
  evt({ title: "Phone ping mid-crossing", occurredAt: "2024-03-14T22:51", description: "Tower A-7 ping; phone goes dark at 22:53.", certainty: "confirmed", evidenceIds: [ev5] });
  evt({ title: "Reported diner sighting (contradicts)", occurredAt: "2024-03-14T23:30", description: "Tip places her ashore across the bay; no return ferry until 06:00.", certainty: "inferred", evidenceIds: [ev4] });

  const hyp = (h: { title: string; statement: string; confidence: number; support: string[]; contradict: string[]; nextTests: string[]; status?: string }) => {
    sqlite.prepare(`INSERT INTO hypotheses (id, case_id, title, statement, confidence, support_ids, contradict_ids, next_tests, status, created_at) VALUES (?,?,?,?,?,?,?,?,?,?)`).run(
      id(), caseId, h.title, h.statement, h.confidence,
      JSON.stringify(h.support), JSON.stringify(h.contradict), JSON.stringify(h.nextTests),
      h.status ?? "open", t,
    );
  };
  hyp({
    title: "Targeted: silenced over Greenline story",
    statement: "Quinn was targeted by a party connected to Greenline Logistics to prevent publication of her draft, intercepted during or after the ferry crossing.",
    confidence: 55,
    support: [ev3, ev5, ev7, ev9],
    contradict: [ev8],
    nextTests: [
      "Request full Greenline manifests via FOIA / port records corroboration.",
      "Validate threat-email headers with a second analyst.",
      "Interview the cafe source (raincoat man) if traceable.",
    ],
  });
  hyp({
    title: "Voluntary disappearance",
    statement: "Quinn chose to go off-grid, possibly with the cafe source's contact, and the missing-person framing is premature.",
    confidence: 20,
    support: [ev8, ev2],
    contradict: [ev3, ev9, ev7],
    nextTests: [
      "Check overseas border records and known associates.",
      "Verify whether draft article was scheduled to publish (suggests intent to stay).",
    ],
  });
  hyp({
    title: "Accident at sea",
    statement: "Quinn fell or was knocked overboard during the crossing; phone going dark at 22:53 marks the time.",
    confidence: 25,
    support: [ev1, ev5],
    contradict: [ev4],
    nextTests: [
      "Coast guard tide and current modeling for 22:51-23:10.",
      "Re-examine ferry deck footage frame-by-frame.",
    ],
  });
}

seedIfEmpty();
