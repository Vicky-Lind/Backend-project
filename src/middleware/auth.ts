import type { Request, Response, NextFunction, RequestHandler } from "express";
import * as jwt from "jsonwebtoken";

type UserRole = "USER" | "ADMIN";

interface TokenPayload {
  id: number;
  role: UserRole;
}

export interface requireAuthRequest extends Request {
  requireAuthUser?: TokenPayload;
}

export const requireAuth: RequestHandler = (req, res, next) => {
  const header = req.headers.requireAuthorization;

  if (!header) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const parts = header.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    res.status(401).json({ message: "Invalid token format" });
    return;
  }

  const token = parts[1];

  if (!token) {
    res.status(401).json({ message: "Token missing" });
    return;
  }

  try {
    const decoded = jwt.verify(token, "SECRET") as unknown as TokenPayload;

    (req as requireAuthRequest).requireAuthUser = decoded;

    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const requireAdmin: RequestHandler = (req, res, next) => {
  const requireAuthReq = req as requireAuthRequest;

  if (!requireAuthReq.requireAuthUser) {
    res.status(401).json({ message: "Not requireAuthenticated" });
    return;
  }

  if (requireAuthReq.requireAuthUser.role !== "ADMIN") {
    res.status(403).json({ message: "Admin only" });
    return;
  }

  next();
};
