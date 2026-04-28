import { prisma } from "../prisma";
import type { RequestHandler } from "express";

// GET /teams
export const getTeams: RequestHandler = async (req, res) => {
  const teams = await prisma.team.findMany();
  res.json(teams);
};

// GET /teams/:id
export const getTeamById: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  const team = await prisma.team.findUnique({
    where: { id }
  });

  if (!team) {
    return res.status(404).json({ message: "Team not found" });
  }

  res.json(team);
};

// POST /teams
export const createTeam: RequestHandler = async (req, res) => {
  const { name } = req.body;

  const team = await prisma.team.create({
    data: { name }
  });

  res.status(201).json(team);
};

// PUT /teams/:id
export const updateTeam: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const updated = await prisma.team.update({
      where: { id },
      data: req.body
    });

    res.json(updated);
  } catch {
    res.status(404).json({ message: "Team not found" });
  }
};

// DELETE /teams/:id
export const deleteTeam: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.team.delete({
      where: { id }
    });

    res.json({ message: "Team deleted" });
  } catch {
    res.status(404).json({ message: "Team not found" });
  }
};

// GET /teams/:id/stats
export const getTeamStats: RequestHandler = async (req, res) => {
  try {
    const teamId = Number(req.params.id);

    const stats = await prisma.matchPlayerStat.findMany({
      where: { teamId }
    });

    if (stats.length === 0) {
      return res.json({
        teamId,
        totalGoals: 0,
        totalAssists: 0,
        totalYellowCards: 0,
        totalRedCards: 0,
        totalMinutes: 0
      });
    }

    const totals = stats.reduce(
      (acc, stat) => {
        acc.totalGoals += stat.goals;
        acc.totalAssists += stat.assists;
        acc.totalYellowCards += stat.yellowCards;
        acc.totalRedCards += stat.redCards;
        acc.totalMinutes += stat.minutesPlayed;
        return acc;
      },
      {
        totalGoals: 0,
        totalAssists: 0,
        totalYellowCards: 0,
        totalRedCards: 0,
        totalMinutes: 0
      }
    );

    res.json({
      teamId,
      ...totals
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching team stats", error });
  }
};
