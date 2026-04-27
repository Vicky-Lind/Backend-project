import { Router } from "express";
import {
  getMatches,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
} from "../controllers/matches.controller";
import {
  createMatchStat,
  getMatchStats,
} from "../controllers/matchStats.controller";
import { requireAuth, requireAdmin } from "../middleware/auth";

const router = Router();

// READ
router.get("/", getMatches);
router.get("/:id", getMatchById);

// CREATE
router.post("/", requireAuth, requireAdmin, createMatch);

// UPDATE
router.put("/:id", requireAuth, requireAdmin, updateMatch);

// DELETE
router.delete("/:id", requireAuth, requireAdmin, deleteMatch);

// MATCH STATS
router.post("/:id/stats", requireAuth, requireAdmin, createMatchStat);
router.get("/:id/stats", getMatchStats);

export default router;