import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ========== Cases ==========
export const cases = sqliteTable("cases", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull().default(""),
  status: text("status").notNull().default("active"), // active | cold | resolved
  createdAt: integer("created_at").notNull(),
});

export const insertCaseSchema = createInsertSchema(cases).omit({ id: true, createdAt: true });
export type InsertCase = z.infer<typeof insertCaseSchema>;
export type Case = typeof cases.$inferSelect;

// ========== Evidence ==========
// type: document | image | testimony | physical | digital | osint | record
// epistemic: fact | claim | assumption | unknown
export const evidence = sqliteTable("evidence", {
  id: text("id").primaryKey(),
  caseId: text("case_id").notNull(),
  title: text("title").notNull(),
  type: text("type").notNull().default("document"),
  epistemic: text("epistemic").notNull().default("claim"),
  sourceUrl: text("source_url").default(""),
  reliability: integer("reliability").notNull().default(3), // 1..5 (A..E inverted)
  relevance: integer("relevance").notNull().default(3), // 1..5
  occurredAt: text("occurred_at").default(""), // ISO date string of event
  notes: text("notes").default(""),
  tags: text("tags").default("[]"), // JSON array of strings
  createdAt: integer("created_at").notNull(),
});

export const insertEvidenceSchema = createInsertSchema(evidence).omit({ id: true, createdAt: true }).extend({
  reliability: z.number().int().min(1).max(5),
  relevance: z.number().int().min(1).max(5),
});
export type InsertEvidence = z.infer<typeof insertEvidenceSchema>;
export type Evidence = typeof evidence.$inferSelect;

// ========== Timeline events ==========
export const events = sqliteTable("events", {
  id: text("id").primaryKey(),
  caseId: text("case_id").notNull(),
  title: text("title").notNull(),
  occurredAt: text("occurred_at").notNull(), // ISO date
  description: text("description").default(""),
  certainty: text("certainty").notNull().default("confirmed"), // confirmed | reported | inferred
  evidenceIds: text("evidence_ids").default("[]"), // JSON array
  createdAt: integer("created_at").notNull(),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true, createdAt: true });
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

// ========== Hypotheses ==========
export const hypotheses = sqliteTable("hypotheses", {
  id: text("id").primaryKey(),
  caseId: text("case_id").notNull(),
  title: text("title").notNull(),
  statement: text("statement").notNull().default(""),
  confidence: integer("confidence").notNull().default(50), // 0..100
  supportIds: text("support_ids").default("[]"), // evidence ids
  contradictIds: text("contradict_ids").default("[]"),
  nextTests: text("next_tests").default("[]"), // JSON array of strings
  status: text("status").notNull().default("open"), // open | shelved | confirmed | refuted
  createdAt: integer("created_at").notNull(),
});

export const insertHypothesisSchema = createInsertSchema(hypotheses).omit({ id: true, createdAt: true }).extend({
  confidence: z.number().int().min(0).max(100),
});
export type InsertHypothesis = z.infer<typeof insertHypothesisSchema>;
export type Hypothesis = typeof hypotheses.$inferSelect;

// Keep users table to not break imports, unused
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});
export const insertUserSchema = createInsertSchema(users).pick({ username: true, password: true });
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
