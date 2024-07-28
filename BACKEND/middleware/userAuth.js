const jwt = require("jsonwebtoken");
const config = require("../config/config");

function userAuth(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.jwtSecret);

    if (decoded.user.role === "user" || decoded.user.role === "admin") {
      req.user = decoded;
      next();
    } else {
      res.status(403).send("Access denied.");
    }
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = userAuth;
