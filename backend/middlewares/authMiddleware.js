const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ ok: false, message: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ ok: false, message: "Invalid token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ ok: false, message: "Token is not valid" });
  }
}

module.exports = { authenticate };
