import { prisma } from "../prisma";
import type {RequestHandler } from "express"

export const getPlayers: RequestHandler = async (req, res) => {
  const players = await prisma.player.findMany();
  res.json(players);
};

export const createPlayer: RequestHandler = async (req, res) => {
  const player = await prisma.player.create({
    data: req.body
  });
  res.json(player);
};

export const deletePlayer: RequestHandler = async (req, res) => {
  await prisma.player.delete({
    where: { id: Number(req.params.id) }
  });
  res.json({ message: "Deleted" });
};