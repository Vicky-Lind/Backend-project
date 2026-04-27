import express from "express";
import cors from "cors";

import playerRoutes from "./routes/player.routes";
import matchRoutes from "./routes/matches.routes";
import teamRoutes from "./routes/teams.routes";

const app = express();

app.use(cors());
app.use(express.json());
console.log("DB URL:", process.env.DATABASE_URL);

app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);

export default app;