import { prisma } from "../prisma";
import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const register: RequestHandler = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    const hashed = await bcrypt.hash(String(password), 10);

    const user = await prisma.user.create({
      data: {
        username: String(username),
        password: hashed,
        role: role || "USER",
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Error registering user",
      error,
    });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { username: String(username) },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid" });
    }

    const valid = await bcrypt.compare(String(password), user.password);

    if (!valid) {
      return res.status(401).json({ message: "Invalid" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      "SECRET"
    );

    res.json({ token });
  } catch (error) {
    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Error logging in",
      error,
    });
  }
};