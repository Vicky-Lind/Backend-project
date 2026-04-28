import { Router } from "express";
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  getTopScorers,
  getPlayerStats,
} from "../controllers/player.controller";
import { requireAuth, requireAdmin } from "../middleware/auth";

const router = Router();
// console.log("requireAuth:", typeof requireAuth);
// console.log("requireAdmin:", typeof requireAdmin);
// console.log("createPlayer:", typeof createPlayer);

// READ (public)
router.get("/", getPlayers);
router.get("/top-scorers", getTopScorers);
router.get("/:id/stats", getPlayerStats);
router.get("/:id", getPlayerById);

// CREATE (admin only)
router.post("/", createPlayer);

// UPDATE (admin only)
router.put("/:id", updatePlayer);

// DELETE (admin only)
router.delete("/:id", deletePlayer);

export default router;