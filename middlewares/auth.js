import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    // extract the token from request header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // verify the

    const encoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = encoded;

    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
