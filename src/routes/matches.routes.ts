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
router.post("/", createMatch);

// UPDATE
router.put("/:id", updateMatch);

// DELETE
router.delete("/:id", deleteMatch);

// MATCH STATS
router.post("/:id/stats", createMatchStat);
router.get("/:id/stats", getMatchStats);

export default router;
