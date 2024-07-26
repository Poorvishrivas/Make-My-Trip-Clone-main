module.exports = {
  jwtSecret: process.env.JWT_SECRET || "MyScretKey",
  mongoURI: process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/poorvi",
};
