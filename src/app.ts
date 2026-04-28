import express from "express";
import cors from "cors";

import { requestLogger } from "./middleware/requestLogger";
import { healthCheck } from "./utils/healthCheck";

import playerRoutes from "./routes/player.routes";
import matchRoutes from "./routes/matches.routes";
import teamRoutes from "./routes/teams.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Attach logger middleware
app.use(requestLogger);

app.get("/", (req, res) => {
  res.json({
    message: "⚽ API is running ⚽",
    endpoints: {
      players: ["/players", "/players/:id"],
      matches: ["/matches", "/matches/:id"],
      teams: ["/teams", "/teams/:id"],
      health: "/health",
    },
  });
});

// Health check route
app.get("/health", (req, res) => {
  res.json(healthCheck());
});

// Attach routes
app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);

export default app;
