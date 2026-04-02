import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import playerRoutes from "./routes/player.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/players", playerRoutes);

export default app;