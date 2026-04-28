import { Router } from "express";
import {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  getTeamStats,
} from "../controllers/teams.controller";

const router = Router();

// PUBLIC routes
router.get("/", getTeams);
router.get("/:id/stats", getTeamStats);
router.get("/:id", getTeamById);

// ADMIN ONLY routes
router.post("/", createTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

export default router;