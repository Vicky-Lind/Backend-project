import { Router } from "express";
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  getTopScorers
} from "../controllers/player.controller";
import { auth, isAdmin } from "../middleware/auth";

const router = Router();


router.get("/", getPlayers);


router.get("/top-scorers", getTopScorers);


router.get("/:id", getPlayerById);


router.post("/", auth, isAdmin, createPlayer);


router.put("/:id", auth, isAdmin, updatePlayer);

router.delete("/:id", auth, isAdmin, deletePlayer);

export default router;