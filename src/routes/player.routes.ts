import { Router } from "express";
import { getPlayers, createPlayer, deletePlayer } from "../controllers/player.controller";
import { auth, isAdmin } from "../middleware/auth";

const router = Router();

router.get("/", getPlayers);
router.post("/", auth, isAdmin, createPlayer);
router.delete("/:id", auth, isAdmin, deletePlayer);

export default router;