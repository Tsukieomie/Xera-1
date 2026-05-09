import type { Express } from "express";
import type { Server } from "node:http";
import { storage } from "./storage";
import {
  insertCaseSchema, insertEvidenceSchema,
  insertEventSchema, insertHypothesisSchema,
} from "@shared/schema";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.get("/api/cases", async (_req, res) => res.json(await storage.listCases()));
  app.get("/api/cases/:id", async (req, res) => {
    const c = await storage.getCase(req.params.id);
    if (!c) return res.status(404).json({ error: "not found" });
    res.json(c);
  });
  app.post("/api/cases", async (req, res) => {
    const parsed = insertCaseSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    res.json(await storage.createCase(parsed.data));
  });
  app.patch("/api/cases/:id", async (req, res) => {
    const parsed = insertCaseSchema.partial().safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    res.json(await storage.updateCase(req.params.id, parsed.data));
  });

  app.get("/api/cases/:id/evidence", async (req, res) => res.json(await storage.listEvidence(req.params.id)));
  app.post("/api/cases/:id/evidence", async (req, res) => {
    const parsed = insertEvidenceSchema.safeParse({ ...req.body, caseId: req.params.id });
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    res.json(await storage.createEvidence(req.params.id, parsed.data));
  });
  app.patch("/api/evidence/:id", async (req, res) => {
    const parsed = insertEvidenceSchema.partial().safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    res.json(await storage.updateEvidence(req.params.id, parsed.data));
  });
  app.delete("/api/evidence/:id", async (req, res) => { await storage.deleteEvidence(req.params.id); res.json({ ok: true }); });

  app.get("/api/cases/:id/events", async (req, res) => res.json(await storage.listEvents(req.params.id)));
  app.post("/api/cases/:id/events", async (req, res) => {
    const parsed = insertEventSchema.safeParse({ ...req.body, caseId: req.params.id });
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    res.json(await storage.createEvent(req.params.id, parsed.data));
  });
  app.delete("/api/events/:id", async (req, res) => { await storage.deleteEvent(req.params.id); res.json({ ok: true }); });

  app.get("/api/cases/:id/hypotheses", async (req, res) => res.json(await storage.listHypotheses(req.params.id)));
  app.post("/api/cases/:id/hypotheses", async (req, res) => {
    const parsed = insertHypothesisSchema.safeParse({ ...req.body, caseId: req.params.id });
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    res.json(await storage.createHypothesis(req.params.id, parsed.data));
  });
  app.patch("/api/hypotheses/:id", async (req, res) => {
    const parsed = insertHypothesisSchema.partial().safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    res.json(await storage.updateHypothesis(req.params.id, parsed.data));
  });
  app.delete("/api/hypotheses/:id", async (req, res) => { await storage.deleteHypothesis(req.params.id); res.json({ ok: true }); });

  return httpServer;
}
