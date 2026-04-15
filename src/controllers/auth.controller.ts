import { prisma } from "../prisma";
import * as bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";

export const register: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: "Missing fields" });
      return;
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashed,
      },
      select: {
        id: true,
        username: true,
        role: true,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
};

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Missing fields" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  const token = jwt.sign({ id: user.id, role: user.role }, "SECRET", {
    expiresIn: "1h",
  });

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  });
};
