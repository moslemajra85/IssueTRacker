import express from "express";

import { register, login } from "../controllers/authController.js";

const router = express.Router();

// post request to /api/auth/register
router.post("/register", register);

// post request to /api/auth/login

router.post("/login", login);

export default router;
