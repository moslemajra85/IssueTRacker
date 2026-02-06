import User from "../models/user.js";
import { validateUser } from "../utils/validate.js";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { error } = validateUser(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // extract data from request body
    const { name, email, password } = req.body;

    // chekc if we already have a user with the provided email

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User with this email already exists",
      });
    }

    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  // extract email and password from the request body

  const { email, password } = req.body;

  //  check if there is a user corresponding to the provided email

  const user = await User.findOne({ email });

  // if there is no user corresponding to the provided email return an error

  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // check if the password is correct

  const isMatch = await bcrypt.compare(password, user.password);

  // if the password is incorrect return an error
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // create a token for the user

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  // send the token to the client
  res.status(200).json(token);
};
