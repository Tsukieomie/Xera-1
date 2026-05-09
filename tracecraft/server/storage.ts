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
import { eq, and, desc } from "drizzle-orm";
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
  async listCases() { return db.select().from(cases).orderBy(desc(cases.createdAt)).all(); }
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
  if (existing.c === 0) seedHarborlight();

  const sharpExists = sqlite.prepare("SELECT COUNT(*) as c FROM cases WHERE id = ?").get("case-sharp-grove-rf-hearing") as { c: number };
  if (sharpExists.c === 0) seedSharpGrove();
}

function seedHarborlight() {
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

function seedSharpGrove() {
  const caseId = "case-sharp-grove-rf-hearing";
  // Bump createdAt above Harborlight so this case becomes the active (newest-first) case.
  const t = Date.now() + 1000;
  const PDF = "/documents/sharp-grove-rf-hearing-v6.pdf";

  sqlite.prepare(`INSERT INTO cases (id, title, summary, status, created_at) VALUES (?, ?, ?, ?, ?)`).run(
    caseId,
    "Sharp/Grove RF-Hearing Evidence Update (Memorandum v6)",
    "Working evidence memorandum (v6, May 8 2026) on Joseph C. Sharp, H. Mark Grove, O. P. Gandhi, the WRAIR Department of Microwave Research, Project Pandora/BIZARRE, the Justesen 1975 secondary report of a 1973 voice/digit demonstration, the Sharp/Grove/Gandhi 1974 IEEE acoustic-signals paper, USAF RF-hearing patents US6470214B1 and US6587729B2, the SBIR AF93-026 / F41624-93-C-9013 Phase I and F41624-95-C-9007 Phase II program trail, Brunkan US4877027A, MEDUSA, and modern microwave-bioeffects / Havana-syndrome literature. Bottom line: the deeper investigation strengthens the middle of the chain — there is a real Air Force research-and-patent trail on RF-hearing speech communication in the 1990s and an officially corroborated SBIR Phase II contract via the USAF FY2000 FOIA log — but it does not establish mind control, operational deployment, listener-naive intelligible RF speech, or a primary-source 1973 Sharp/Grove voice/digit demonstration. Investigative work product, not legal advice. Source provenance and admissibility must be independently verified by counsel before evidentiary use. Primary source memorandum is loaded into Tracecraft as a PDF asset.",
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

  // Source memorandum itself
  const evMemo = ev({
    title: "Evidence Memorandum v6 — Sharp/Grove, PANDORA/BIZARRE, RF-hearing (May 8 2026)",
    type: "document", epistemic: "fact", reliability: 4, relevance: 5,
    occurredAt: "2026-05-08", sourceUrl: PDF,
    notes: "Working evidence memorandum / counsel briefing prepared by Perplexity Computer (investigative drafting agent). Investigative work product, not legal advice. Loaded as the primary source artifact for this case.",
    tags: ["memo","v6","counsel-briefing","work-product"],
  });

  // Pandora primary records
  const ev1979 = ev({
    title: "1979 Senate staff report — Pandora primate work, Sharp as initial PI",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "1979",
    notes: "Names Maj. Joseph Sharp as initial principal investigator of the Pandora primate work funded by ARPA at WRAIR; documents 4–5 mW/cm² special signal; lab human studies never carried out due to DOD informed-consent concerns; classified records destroyed Sept. 1973 and June 29, 1978; Pandora terminated March 20, 1970.",
    tags: ["pandora","wrair","senate","primary"],
  });
  const evJHU = ev({
    title: "Oct 1966 JHU/APL Operational Procedure — Pandora microwave test facility",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "1966-10",
    notes: "JHU/APL operational-procedure document for the WRAIR/Forest Glen S-band facility; external distribution list includes J. Sharp and H. M. Grove.",
    tags: ["jhu-apl","pandora","wrair","forest-glen","primary"],
  });
  const evApr69 = ev({
    title: "Apr 21 1969 Pandora meeting minutes — Grove reviews USS Saratoga / Big Boy radar",
    type: "document", epistemic: "fact", reliability: 5, relevance: 4,
    occurredAt: "1969-04-21",
    notes: "H. Mark Grove (WPAFB) reviewed USS Saratoga / Big Boy radar power-density measurements; ≤ 1 mW/cm² at 80–90% radar operation; no significant differences; WRAIR human studies proposed but not finally approved.",
    tags: ["pandora","grove","wpafb","minutes","primary"],
  });
  const evMay69 = ev({
    title: "May 12 1969 Pandora human-protocol minutes — preliminary WRAIR draft",
    type: "document", epistemic: "fact", reliability: 5, relevance: 4,
    occurredAt: "1969-05-12",
    notes: "Preliminary classified WRAIR draft for 8 subjects, 90 days, 4.5–5 mW/cm². Planning, not execution.",
    tags: ["pandora","wrair","protocol","primary"],
  });
  const evCesaro = ev({
    title: "1965 ARPA / Cesaro initiating memorandum — Pandora mandate",
    type: "document", epistemic: "fact", reliability: 5, relevance: 4,
    occurredAt: "1965",
    notes: "Establishes Pandora's mandate around radiation effects on humans tied to the Moscow Embassy / TUMS signal; Mark Grove (WPAFB Avionics Lab) named as ARPA monitor/coordinator. No speech-transmission reference.",
    tags: ["arpa","cesaro","pandora","tums","primary"],
  });
  const evBizarre = ev({
    title: "Project BIZARRE progress report — Pandora/TUMS context",
    type: "document", epistemic: "fact", reliability: 4, relevance: 4,
    notes: "Pandora/TUMS context; modulated test levels; behavioral-control / weapon-application language. Important context, not proof of weapon or speech system.",
    tags: ["bizarre","pandora","tums","primary"],
  });
  const evRand = ev({
    title: "RAND/Koslov 1969 review — Pandora data inconclusive",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "1969-11",
    notes: "Review for Lukasik (DARPA): Pandora data did not present evidence of behavioral change due to the special signal within reasonable scientific criteria; behavioral changes attributable to systematic error or equipment malfunction.",
    tags: ["rand","koslov","darpa","pandora","primary","negative-finding"],
  });
  const evDarpa77 = ev({
    title: "1977 DARPA letter to Senator Magnuson — Pandora termination",
    type: "document", epistemic: "fact", reliability: 5, relevance: 4,
    occurredAt: "1977",
    notes: "Pandora terminated March 1970; assets transferred to WRAIR; total cost $4,615,000; raw-data disposition unknown.",
    tags: ["darpa","pandora","termination","primary"],
  });
  const evNSA22 = ev({
    title: "NSArchive 2022 'Moscow Signals Declassified' overview",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "2022",
    sourceUrl: "https://nsarchive.gwu.edu/",
    notes: "PANDORA/BIZARRE failed to prove the Soviet-beam degradation hypothesis; corrected Moscow power ≤ 0.05 mW/cm²; states no direct human radiation testing under PANDORA/BIZARRE was performed.",
    tags: ["nsarchive","pandora","moscow-signal","primary","negative-finding"],
  });

  // USAF RF-hearing patent family
  const ev214 = ev({
    title: "U.S. Patent 6,470,214 B1 — Method/device for RF hearing effect (USAF; O'Loughlin & Loree)",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "2002-10-22",
    sourceUrl: "https://patents.google.com/patent/US6470214B1/en",
    notes: "Filed Dec 13 1996; issued Oct 22 2002. Suppressed-carrier modulation, audio preprocessor, square-root processor. Patent text states pulsed-carrier modulation distorted speech as experimentally confirmed and that intelligibility could depend on listener pre-advice. Now expired. Assignee: Department of the Air Force.",
    tags: ["usaf","patent","rf-hearing","oloughlin","loree","primary"],
  });
  const ev729 = ev({
    title: "U.S. Patent 6,587,729 B2 — Apparatus for audibly communicating speech via RF hearing (divisional)",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "2003-07-01",
    sourceUrl: "https://patents.google.com/patent/US6587729B2/en",
    notes: "Divisional of US6470214B1. Apparatus claims for audibly communicating speech using the RF-hearing effect. Inherits the parent's prior-art acknowledgment that, if the listener did not know the content, the audio signal was unintelligible in the prior experimental context. Now expired.",
    tags: ["usaf","patent","rf-hearing","divisional","primary"],
  });

  // SBIR program trail
  const evFOIA = ev({
    title: "USAF FY2000 FOIA log — case 00-F-0013 (Cherney) corroborates SBIR Phase II F41624-95-C-9007",
    type: "record", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "2000",
    sourceUrl: "https://www.theblackvault.com/",
    notes: "Cherney request for 'Copies of Communicating Via the Microwave Auditory Effect — DOD SBIR Contract #F41624-95-C-9007.' Officially corroborates the existence of the Phase II contract. Technical results themselves are not in the public file reviewed here.",
    tags: ["foia","usaf","sbir","phase-ii","primary","corroboration"],
  });
  const evPhaseI = ev({
    title: "SBIR Phase I AF93-026 / F41624-93-C-9013 (Kohn / SEA, 1993)",
    type: "document", epistemic: "claim", reliability: 3, relevance: 5,
    occurredAt: "1993-05-17",
    notes: "Phase I details: control 93AL-185; $37,806; 17 May–17 Dec 1993; reportedly concluding voice communications via the microwave auditory effect are 'highly feasible'. Survives principally on an archived mirror of a defunct federal SBIR abstract page. Materially corroborated by the Phase II FOIA-log entry and the later USAF patent family. Authenticated-but-incomplete.",
    tags: ["sbir","phase-i","af93-026","kohn","sea","authenticated-incomplete"],
  });

  // Sharp/Grove/Gandhi 1974 IEEE paper + thermoacoustic mechanism
  const evIEEE74 = ev({
    title: "Sharp, Grove, Gandhi 1974 (IEEE Trans. MTT) — 1500 MHz 14-µs pulsed microwave clicks in absorbers",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "1974",
    notes: "Manuscript Oct 25 1973; revised Jan 11 1974. Demonstrates audible clicks generated by 1500 MHz, 14-µs pulsed microwave energy in absorber materials. Confirms acoustic signals in absorbers. Does not mention voice, speech, digit-word transmission, or Pandora.",
    tags: ["ieee","sharp","grove","gandhi","peer-review","clicks"],
  });
  const evFoster74 = ev({
    title: "Foster & Finch 1974 (Science) — thermoacoustic mechanism for microwave hearing",
    type: "document", epistemic: "fact", reliability: 5, relevance: 4,
    occurredAt: "1974",
    notes: "Establishes the underlying thermoacoustic mechanism for microwave hearing/clicks. Mechanism evidence; not speech evidence.",
    tags: ["foster","finch","peer-review","thermoacoustic"],
  });

  // Modern reviews
  const evFGZ = ev({
    title: "Foster, Garrett, Ziskin modern review — practical weaponization 'unlikely or operationally implausible'",
    type: "document", epistemic: "fact", reliability: 5, relevance: 5,
    occurredAt: "2021",
    notes: "Concludes practical weaponization with currently known systems is unlikely or operationally implausible; classified high-power RF uncertainties prevent absolute closure.",
    tags: ["peer-review","weaponization","foster","garrett","ziskin"],
  });
  const evNAS20 = ev({
    title: "National Academies 2020 — directed pulsed RF most consistent mechanism for State Department symptoms",
    type: "document", epistemic: "fact", reliability: 5, relevance: 4,
    occurredAt: "2020",
    notes: "Acute signs and symptoms reported by State Department personnel most consistent among considered mechanisms with directed, pulsed RF energy. Committee had limited information; no source identification.",
    tags: ["nas","havana-syndrome","peer-review","directed-rf"],
  });
  const evBaloh = ev({
    title: "Bartholomew & Baloh skeptical review — 2023 IC: foreign sonic/microwave device 'highly unlikely'",
    type: "document", epistemic: "fact", reliability: 4, relevance: 4,
    notes: "Cites 2023 U.S. intelligence-community judgment that a foreign sonic or microwave device is highly unlikely to explain Havana cases; criticizes earlier studies for over-reading weak clinical data.",
    tags: ["bartholomew","baloh","havana-syndrome","skeptical","peer-review"],
  });

  // Justesen 1975 — secondary, single-source
  const evJustesen75 = ev({
    title: "Justesen 1975 'Microwaves and Behavior' — Note 2: Sharp/Grove personal communication Sep 28 1973",
    type: "document", epistemic: "claim", reliability: 3, relevance: 5,
    occurredAt: "1975",
    notes: "American Psychologist article. The voice/digit-word claim is supported by Note 2: 'Sharp, J. C., & Grove, M. Personal communication, September 28, 1973.' Single-source secondary account citing a personal communication. Sharp/Grove/Gandhi 1974 IEEE paper does not corroborate voice/digit transmission.",
    tags: ["justesen","secondary","single-source","personal-communication"],
  });
  const evJustesen79 = ev({
    title: "Justesen 1979 follow-up — does NOT repeat the Sharp/Grove voice/digit anecdote",
    type: "document", epistemic: "fact", reliability: 4, relevance: 4,
    occurredAt: "1979",
    notes: "Follow-up paper by the original author. Does not repeat the 1973 voice/digit anecdote — a negative continuity signal from the original author.",
    tags: ["justesen","negative","silence","secondary"],
  });

  // Brunkan + MEDUSA prior art
  const evBrunkan = ev({
    title: "U.S. Patent 4,877,027 (Brunkan) — Hearing system, 100 MHz–10 GHz",
    type: "document", epistemic: "fact", reliability: 4, relevance: 3,
    occurredAt: "1989-10-31",
    sourceUrl: "https://patents.google.com/patent/US4877027A/en",
    notes: "Microwave-induced hearing using 100 MHz–10 GHz radiation, bursts of pulses, audio modulation. Patent claims and prior-art evidence; not deployment proof.",
    tags: ["brunkan","patent","prior-art"],
  });
  const evMedusa = ev({
    title: "MEDUSA reporting (New Scientist; Wired, 2007–08) — Sierra Nevada 'Mob Excess Deterrent Using Silent Audio'",
    type: "document", epistemic: "claim", reliability: 3, relevance: 3,
    occurredAt: "2008",
    notes: "Sierra Nevada Corp 'Mob Excess Deterrent Using Silent Audio'; Phase I hardware design; James Lin warns about power and possible neural damage; no field deployment documented. Prototype/prior-art evidence, not deployment proof.",
    tags: ["medusa","sierra-nevada","prototype","prior-art","secondary"],
  });

  // Negative searches
  const evGlaser = ev({
    title: "Glaser bibliography — no 'Sharp & Grove Note 2' record located",
    type: "record", epistemic: "fact", reliability: 4, relevance: 4,
    notes: "Closest entries: Sharp & Papeziello 1971 (rat thymidine uptake); MR0094 Hawkins/Grove/Heiple/Schrot (Mar 1973, 32 pp.); Gandhi entries; Justesen 1975/1978; broader microwave-hearing literature. Deliberate search did not find a Sharp/Grove voice/digit technical record.",
    tags: ["glaser","negative","bibliography","sharp","grove"],
  });
  const evWRAIR83 = ev({
    title: "WRAIR FY1983 annual report — no Sharp/Grove/Pandora/RF-hearing hits",
    type: "record", epistemic: "fact", reliability: 4, relevance: 3,
    occurredAt: "1983",
    notes: "Work Unit 214 (Millimeter Wave Biophysics); Work Unit 041 (Microwave Radiation Hazards); no Sharp/Grove/Gandhi/Justesen/Pandora/RF-hearing hits.",
    tags: ["wrair","negative","annual-report"],
  });
  const evWRAIR74 = ev({
    title: "WRAIR 1973–74 annual report (DTIC ADA009338) — no matching voice/digit experiment",
    type: "record", epistemic: "fact", reliability: 4, relevance: 4,
    occurredAt: "1974",
    notes: "Establishes the relevant WRAIR microwave-research environment for Sharp/Grove; the public copy reviewed contains no matching voice/digit experiment.",
    tags: ["wrair","negative","dtic"],
  });

  // Open questions / unknowns
  const evUnknownPhaseII = ev({
    title: "Phase II final report (F41624-95-C-9007) — not located in public file",
    type: "record", epistemic: "unknown", reliability: 3, relevance: 5,
    notes: "Officially corroborated by FY2000 FOIA log but the technical Phase II deliverables are not in the open file. Decisive next record would be Phase II final report and segregable interim deliverables.",
    tags: ["sbir","phase-ii","unknown","foia-target"],
  });
  const evUnknownTask = ev({
    title: "Hypothesized 1973 ARPA/WRAIR task order tying Sharp/Grove to a speech-modulation tasking — not located",
    type: "record", epistemic: "unknown", reliability: 3, relevance: 4,
    notes: "No primary-document 1973 task order tying Sharp and Grove to a classified speech-modulation tasking has been located in any reviewed source.",
    tags: ["task-order","unknown","negative"],
  });

  // ========== Timeline events ==========
  const evt = (e: { title: string; occurredAt: string; description?: string; certainty?: string; evidenceIds?: string[] }) => {
    sqlite.prepare(`INSERT INTO events (id, case_id, title, occurred_at, description, certainty, evidence_ids, created_at) VALUES (?,?,?,?,?,?,?,?)`).run(
      id(), caseId, e.title, e.occurredAt, e.description ?? "", e.certainty ?? "confirmed", JSON.stringify(e.evidenceIds ?? []), t,
    );
  };
  evt({ title: "ARPA / Cesaro initiating memorandum — Pandora mandate established", occurredAt: "1965-01-01", description: "Sets Pandora's mandate around radiation effects on humans tied to Moscow Embassy / TUMS signal; Grove (WPAFB) named as ARPA monitor.", certainty: "confirmed", evidenceIds: [evCesaro] });
  evt({ title: "JHU/APL operational procedure for Pandora microwave test facility", occurredAt: "1966-10-01", description: "External distribution list includes J. Sharp and H. M. Grove.", certainty: "confirmed", evidenceIds: [evJHU] });
  evt({ title: "Pandora meeting — Grove reviews USS Saratoga / Big Boy radar measurements", occurredAt: "1969-04-21", description: "≤ 1 mW/cm² at 80–90% radar operation; no significant differences; WRAIR human studies proposed but not finally approved.", certainty: "confirmed", evidenceIds: [evApr69] });
  evt({ title: "Pandora human-protocol minutes — preliminary WRAIR draft", occurredAt: "1969-05-12", description: "Preliminary classified WRAIR draft for 8 subjects, 90 days, 4.5–5 mW/cm². Planning, not execution.", certainty: "confirmed", evidenceIds: [evMay69] });
  evt({ title: "RAND/Koslov review — Pandora behavioral data inconclusive/negative", occurredAt: "1969-11-01", description: "Review for Lukasik (DARPA) attributes apparent effects to systematic error or equipment malfunction.", certainty: "confirmed", evidenceIds: [evRand] });
  evt({ title: "Project Pandora terminated", occurredAt: "1970-03-20", description: "Pandora terminated; assets transferred to WRAIR; total cost $4,615,000; raw-data disposition unknown.", certainty: "confirmed", evidenceIds: [evDarpa77, ev1979] });
  evt({ title: "Sharp/Grove personal communication cited by Justesen 1975 (Note 2)", occurredAt: "1973-09-28", description: "The single source linking Sharp and Grove to a speech/digit-word demonstration. Personal communication, not a primary technical record.", certainty: "reported", evidenceIds: [evJustesen75] });
  evt({ title: "Sharp, Grove, Gandhi IEEE Trans. MTT paper — 1500 MHz 14-µs pulses, clicks in absorbers", occurredAt: "1974-01-01", description: "Manuscript Oct 25 1973; revised Jan 11 1974. Acoustic clicks in absorber materials; no voice, no speech, no digit-word transmission.", certainty: "confirmed", evidenceIds: [evIEEE74, evFoster74] });
  evt({ title: "Justesen 'Microwaves and Behavior' published (American Psychologist)", occurredAt: "1975-01-01", description: "Note 2 attributes voice/digit recognition to Sharp & Grove personal communication of Sep 28 1973. Single-source secondary account.", certainty: "confirmed", evidenceIds: [evJustesen75] });
  evt({ title: "Justesen 1979 follow-up — does not repeat voice/digit anecdote", occurredAt: "1979-01-01", description: "Negative continuity signal from the original author.", certainty: "confirmed", evidenceIds: [evJustesen79] });
  evt({ title: "SBIR Phase I AF93-026 / F41624-93-C-9013 awarded (Kohn / SEA)", occurredAt: "1993-05-17", description: "$37,806 award, 17 May–17 Dec 1993; abstract reportedly concludes voice communications via microwave auditory effect are 'highly feasible'. Authenticated-but-incomplete.", certainty: "reported", evidenceIds: [evPhaseI] });
  evt({ title: "U.S. Patent 6,470,214 B1 filed (USAF; O'Loughlin & Loree)", occurredAt: "1996-12-13", description: "Method/device for implementing the RF hearing effect; suppressed-carrier modulation; assignee Department of the Air Force.", certainty: "confirmed", evidenceIds: [ev214] });
  evt({ title: "FOIA case 00-F-0013 (Cherney) — corroborates SBIR Phase II F41624-95-C-9007", occurredAt: "2000-01-01", description: "USAF FY2000 FOIA log entry. Officially authenticates the Phase II contract by name/number; technical results not in public file.", certainty: "confirmed", evidenceIds: [evFOIA] });
  evt({ title: "U.S. Patent 6,470,214 B1 issued", occurredAt: "2002-10-22", description: "Issued to USAF.", certainty: "confirmed", evidenceIds: [ev214] });
  evt({ title: "U.S. Patent 6,587,729 B2 issued (divisional)", occurredAt: "2003-07-01", description: "Apparatus claims for audibly communicating speech using the RF-hearing effect.", certainty: "confirmed", evidenceIds: [ev729] });
  evt({ title: "MEDUSA reporting cycle (New Scientist; Wired)", occurredAt: "2008-01-01", description: "Sierra Nevada 'Mob Excess Deterrent Using Silent Audio' Phase I; James Lin warns about power and neural damage; no field deployment documented.", certainty: "reported", evidenceIds: [evMedusa] });
  evt({ title: "National Academies report — directed pulsed RF most-consistent mechanism", occurredAt: "2020-12-01", description: "State Department personnel symptoms; committee had limited information; no source identified.", certainty: "confirmed", evidenceIds: [evNAS20] });
  evt({ title: "NSArchive 'Moscow Signals Declassified' overview", occurredAt: "2022-01-01", description: "PANDORA/BIZARRE failed to prove the Soviet-beam degradation hypothesis; corrected Moscow power ≤ 0.05 mW/cm²; no direct human radiation testing under PANDORA/BIZARRE.", certainty: "confirmed", evidenceIds: [evNSA22] });
  evt({ title: "Evidence Memorandum v6 prepared", occurredAt: "2026-05-08", description: "Working evidence memorandum / counsel briefing prepared by Perplexity Computer; supersedes v5; upgrades AF93-026/F41624-95-C-9007 program trail to authenticated-but-incomplete via FOIA-log corroboration.", certainty: "confirmed", evidenceIds: [evMemo] });

  // ========== Hypotheses ==========
  const hyp = (h: { title: string; statement: string; confidence: number; support: string[]; contradict: string[]; nextTests: string[]; status?: string }) => {
    sqlite.prepare(`INSERT INTO hypotheses (id, case_id, title, statement, confidence, support_ids, contradict_ids, next_tests, status, created_at) VALUES (?,?,?,?,?,?,?,?,?,?)`).run(
      id(), caseId, h.title, h.statement, h.confidence,
      JSON.stringify(h.support), JSON.stringify(h.contradict), JSON.stringify(h.nextTests),
      h.status ?? "open", t,
    );
  };

  hyp({
    title: "Official RF-hearing research/patent trail existed and is corroborated",
    statement: "From the 1960s Pandora/BIZARRE program through the 1990s SBIR AF93-026 / F41624-93-C-9013 Phase I and F41624-95-C-9007 Phase II contracts and the USAF RF-hearing patent family (US6470214B1, US6587729B2), the U.S. Air Force pursued RF-hearing speech communication seriously enough to fund research, file patents, and obtain granted claims to a signal-processing solution. The Phase II contract is officially corroborated by the USAF FY2000 FOIA log case 00-F-0013.",
    confidence: 90,
    support: [ev1979, evJHU, evApr69, evCesaro, evIEEE74, ev214, ev729, evFOIA, evPhaseI, evMemo],
    contradict: [],
    nextTests: [
      "FOIA the Phase II final report and any segregable interim deliverables tied to F41624-95-C-9007.",
      "Locate the Armstrong Laboratory / OEDR feasibility study referenced in the Phase I abstract.",
      "Pull the official Phase I final report through DTIC or USAF archival channels.",
    ],
  });

  hyp({
    title: "1973 Sharp/Grove voice/digit demonstration occurred as publicly described",
    statement: "Sharp and Grove demonstrated, in 1973, that voice recordings of digit words could be transmitted via zero-crossing-triggered microwave pulses such that human listeners could hear and distinguish the words.",
    confidence: 25,
    support: [evJustesen75],
    contradict: [evIEEE74, evJustesen79, evGlaser, evWRAIR83, evWRAIR74, evRand],
    nextTests: [
      "Locate any underlying Sharp/Grove technical report, lab notebook, or task order from 1973.",
      "Interview surviving WRAIR/Forest Glen microwave-research personnel of that era.",
      "Compare the IEEE 1974 absorber-clicks methodology with any cited human-listener protocol.",
      "Search WRAIR archival finding aid and DTIC for any Sharp/Grove 1973 microwave-speech document.",
    ],
    status: "open",
  });

  hyp({
    title: "Operational listener-naive RF speech or mind-control deployment is established",
    statement: "Open-source records establish that an RF-hearing speech weapon was operationally deployed and capable of delivering reliable, private, intelligible speech to a listener who is not preadvised of the content, and/or that PANDORA/BIZARRE proved mind control.",
    confidence: 5,
    support: [],
    contradict: [evRand, ev1979, evNSA22, ev214, ev729, evFGZ, evBaloh, evMemo],
    nextTests: [
      "Identify any open primary record of listener-naive intelligible RF speech test scores at useful range/power.",
      "Identify any open record of operational deployment, transition, or fielded use.",
      "Until such records surface, treat 'mind control' and 'operational voice-to-skull' framings as not supported.",
    ],
    status: "shelved",
  });

  hyp({
    title: "AF93-026 SBIR program is a hoax or activist-mirror artifact",
    statement: "The SBIR AF93-026 / F41624-93-C-9013 Phase I and the F41624-95-C-9007 Phase II contracts are a hoax or exist principally as activist-mirror narrative without underlying federal record.",
    confidence: 5,
    support: [],
    contradict: [evFOIA, evPhaseI, ev214, ev729],
    nextTests: [
      "Treat the FY2000 FOIA-log corroboration as the falsifying record for any 'hoax' framing.",
      "Continue to seek the Phase I and Phase II primary deliverables but do not retreat to the hoax hypothesis.",
    ],
    status: "refuted",
  });

  hyp({
    title: "Havana-syndrome cases are caused by an RF-hearing voice-to-skull weapon",
    statement: "The Havana-syndrome cluster of acute signs and symptoms in U.S. State Department personnel is caused by a deployed RF-hearing voice-to-skull weapon descended from the WRAIR / SBIR / USAF patent lineage.",
    confidence: 10,
    support: [evNAS20],
    contradict: [evFGZ, evBaloh, ev214, ev729],
    nextTests: [
      "Track 2023+ U.S. intelligence-community assessments and any updated National Academies follow-up.",
      "Distinguish biological-plausibility claims from operational-deployment claims; never conflate.",
      "Watch for newly declassified incident-specific RF measurements.",
    ],
    status: "open",
  });
}

seedIfEmpty();
