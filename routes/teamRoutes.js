import express from "express";
import { getAllTeams } from "../controllers/teamController.js";

import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

// get request /api/teams
router.get("/", verifyToken, getAllTeams);

export default router;
