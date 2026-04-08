import { Router } from "express";
import {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam
} from "../controllers/teams.controller";
import { auth, isAdmin } from "../middleware/auth";

const router = Router();

// READ
router.get("/", getTeams);
router.get("/:id", getTeamById);

// CREATE
router.post("/", auth, isAdmin, createTeam);

// UPDATE
router.put("/:id", auth, isAdmin, updateTeam);

// DELETE
router.delete("/:id", auth, isAdmin, deleteTeam);

export default router;