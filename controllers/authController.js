import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { validateUser } from "../utils/validate.js";

export const register = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    res.json({ message: "User registered successfully" });
  } catch (error) {}
};
