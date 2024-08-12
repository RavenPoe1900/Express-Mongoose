const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = (req, res, next) => {
  const header = req.header("Authorization");

  if (!header) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  const token = header.startsWith("Bearer ") ? header.substring(7) : null;

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }
  try {
    var bearer = header.split(" ");
    const decoded = jwt.verify(bearer[1].split('"')[1], config.JWT.key);

    req.user = decoded.userId;
    next();
  } catch (err) {
    console.log(err);

    res.status(401).json({ error: "Token is not valid" });
  }
};
