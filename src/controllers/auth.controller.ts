import { prisma } from "../prisma";
import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const register: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { username, password: hashed }
  });

  res.json(user);
};

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) return res.status(401).json({ message: "Invalid" });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(401).json({ message: "Invalid" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "SECRET"
  );

  res.json({ token });
};