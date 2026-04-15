import * as express from "express";
import * as cors from "cors";
import authRoutes from "./routes/auth.routes";
import playerRoutes from "./routes/player.routes";
import matchRoutes from "./routes/matches.routes";
import teamRoutes from "./routes/teams.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);

export default app;
