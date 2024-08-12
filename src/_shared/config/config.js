const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

const JWT = {
  key: process.env.JWT_SECRET_KEY,
  expires: process.env.JWT_SECRET_KEY_EXPIRES,
};
const REFRESHJWT = {
  refreshKey: process.env.REFRESH_JWT_SECRET_KEY,
  refreshExpires: process.env.REFRESH_JWT_SECRET_KEY_EXPIRES,
};

const MONGODB = {
  url: process.env.MONGO_URI,
  urlIntegration: process.env.MONGO_URI_INTEGRATION,
};

module.exports = {
  PORT,
  JWT,
  REFRESHJWT,
  URL: "/api",
  NODE_ENV: process.env.NODE_ENV,
  MONGODB,
};
