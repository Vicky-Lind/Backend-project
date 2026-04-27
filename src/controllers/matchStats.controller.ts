import type { Request, Response } from "express";
import { prisma } from "../prisma";

// POST /matches/:id/stats
export const createMatchStat = async (req: Request, res: Response) => {
  try {
    const matchId = parseInt(req.params.id as string);

    const {
      playerId,
      teamId,
      goals = 0,
      assists = 0,
      yellowCards = 0,
      redCards = 0,
      minutesPlayed = 0,
    } = req.body;

    const stat = await prisma.matchPlayerStat.create({
      data: {
        matchId,
        playerId,
        teamId,
        goals,
        assists,
        yellowCards,
        redCards,
        minutesPlayed,
      },
    });

    res.status(201).json(stat);
  } catch (error) {
    res.status(500).json({ message: "Error creating match stat", error });
  }
};

// GET /matches/:id/stats
export const getMatchStats = async (req: Request, res: Response) => {
  try {
    const matchId = parseInt(req.params.id as string);

    const stats = await prisma.matchPlayerStat.findMany({
      where: { matchId },
    });

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching match stats", error });
  }
};