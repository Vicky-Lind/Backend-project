import { Router } from "express";
import { requireAuth, requireAdmin } from "../middleware/requireAuth";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Public route" });
});

router.post("/", requireAuth, requireAdmin, (req, res) => {
  res.json({ message: "Only admins can create" });
});

export default router;
