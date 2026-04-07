import { prisma } from "../prisma";
import type { RequestHandler } from "express";

// GET /players
export const getPlayers: RequestHandler = async (req, res) => {
  const players = await prisma.player.findMany();
  res.json(players);
};

// GET /players/:id
export const getPlayerById: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  const player = await prisma.player.findUnique({
    where: { id }
  });

  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.json(player);
};

// POST /players
export const createPlayer: RequestHandler = async (req, res) => {
  const { name, goals, assists } = req.body;

  const player = await prisma.player.create({
    data: {
      name,
      goals: goals ?? 0,
      assists: assists ?? 0
    }
  });

  res.status(201).json(player);
};


export const updatePlayer: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const updatedPlayer = await prisma.player.update({
      where: { id },
      data: req.body
    });

    res.json(updatedPlayer);
  } catch {
    res.status(404).json({ message: "Player not found" });
  }
};

// DELETE /players/:id
export const deletePlayer: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.player.delete({
      where: { id }
    });

    res.json({ message: "Player deleted" });
  } catch {
    res.status(404).json({ message: "Player not found" });
  }
};

// ⭐ EXTRA FEATURE: GET /players/top-scorers
export const getTopScorers: RequestHandler = async (req, res) => {
  const players = await prisma.player.findMany({
    orderBy: {
      goals: "desc"
    },
    take: 5
  });

  res.json(players);
};