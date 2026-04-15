import { Router } from "express";
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} from "../controllers/player.controller";
import { requireAuth, requireAdmin } from "../middleware/auth";

const router = Router();

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
