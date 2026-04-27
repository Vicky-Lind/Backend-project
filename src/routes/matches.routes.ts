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
import { auth, isAdmin } from "../middleware/auth";

const router = Router();

// READ
router.get("/", getMatches);
router.get("/:id", getMatchById);

// CREATE
router.post("/", auth, isAdmin, createMatch);

// UPDATE
router.put("/:id", auth, isAdmin, updateMatch);

// DELETE
router.delete("/:id", auth, isAdmin, deleteMatch);

// MATCH STATS
router.post("/:id/stats", auth, isAdmin, createMatchStat);
router.get("/:id/stats", getMatchStats);

export default router;