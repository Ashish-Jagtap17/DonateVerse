const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    // ✅ Always use the same secret everywhere
    const verified = jwt.verify(token, "secretKey");

    req.user = {
      id: verified.id,
      role: verified.role || "restaurant", // default role = restaurant
    };

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

// Middleware to restrict routes by role
const allowRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res
        .status(403)
        .json({ message: `Forbidden: Access restricted to ${role}` });
    }
    next();
  };
};

module.exports = { verifyToken, allowRole };
