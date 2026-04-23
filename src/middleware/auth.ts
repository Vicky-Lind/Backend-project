import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const auth: RequestHandler = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) return res.sendStatus(401);

  const parts = header.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.sendStatus(401);
  }

  const token = parts[1];

  if (!token) return res.sendStatus(401); 

  try {
    const decoded = jwt.verify(token, "SECRET");
    req.user = decoded;
    next();
  } catch {
    res.sendStatus(403);
  }
};


export const isAdmin: RequestHandler = (req, res, next) => {
  // make sure user exists
  if (!req.user || typeof req.user === "string") {
    return res.sendStatus(403);
  }

  // check role
  if (req.user.role !== "ADMIN") {
    return res.sendStatus(403);
  }

  next();
};