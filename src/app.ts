import express from "express";
import cors from "cors";

<<<<<<< HEAD
=======
import { requestLogger } from "./middleware/requestLogger";
import { healthCheck } from "./utils/healthCheck";

>>>>>>> 968ac5afc5659f22646000df9bcacd8279b89b2a
import playerRoutes from "./routes/player.routes";
import matchRoutes from "./routes/matches.routes";
import teamRoutes from "./routes/teams.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Attach logger middleware
app.use(requestLogger);

// Health check route
app.get("/health", (req, res) => {
  res.json(healthCheck());
});

// Attach routes
app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);

export default app;