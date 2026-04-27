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

router.get("/", getPlayers);

router.get("/top-scorers", getTopScorers);

// PLAYER STATS
router.get("/:id/stats", getPlayerStats);

router.get("/:id", getPlayerById);

router.post("/", auth, isAdmin, createPlayer);

router.put("/:id", auth, isAdmin, updatePlayer);
// READ (public)
router.get("/", getPlayers);
router.get("/:id", getPlayerById);

// CREATE (admin only)
router.post("/", requireAuth, requireAdmin, createPlayer);

// UPDATE (admin only)
router.put("/:id", requireAuth, requireAdmin, updatePlayer);

// DELETE (admin only)
router.delete("/:id", requireAuth, requireAdmin, deletePlayer);

export default router;
