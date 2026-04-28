import { Router } from "express";
<<<<<<< HEAD
=======
import {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  getTeamStats,
} from "../controllers/teams.controller";
>>>>>>> 968ac5afc5659f22646000df9bcacd8279b89b2a
import { requireAuth, requireAdmin } from "../middleware/auth";

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
