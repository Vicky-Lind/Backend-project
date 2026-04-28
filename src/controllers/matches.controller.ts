import { prisma } from "../prisma";

import type { RequestHandler } from "express";

// GET /matches

export const getMatches: RequestHandler = async (req, res) => {
  const matches = await prisma.match.findMany();

  res.json(matches);
};

// GET /matches/:id

export const getMatchById: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  const match = await prisma.match.findUnique({
    where: { id },
  });

  if (!match) {
    return res.status(404).json({ message: "Match not found" });
  }

  res.json(match);
};

// POST /matches

export const createMatch: RequestHandler = async (req, res) => {
  const { homeScore, awayScore } = req.body;

  const match = await prisma.match.create({
    data: {
      homeScore,
      awayScore,
    },
  });

  res.status(201).json(match);
};

// PUT /matches/:id

export const updateMatch: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const updated = await prisma.match.update({
      where: { id },

      data: req.body,
    });

    res.json(updated);
  } catch {
    res.status(404).json({ message: "Match not found" });
  }
};

// DELETE /matches/:id

export const deleteMatch: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.match.delete({
      where: { id },
    });

    res.json({ message: "Match deleted" });
  } catch {
    res.status(404).json({ message: "Match not found" });
  }
};
