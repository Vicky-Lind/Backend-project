import { Router } from "express";
import {
  getMatches,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
} from "../controllers/matches.controller";
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

export default router;
