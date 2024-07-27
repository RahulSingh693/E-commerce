const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (userId) => {
  const token =  jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1d" });
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const getUserIdFromToken = (token) => {
  const decodedToken = verifyToken(token);
  return decodedToken.id;
};

module.exports = {
  generateToken,
  verifyToken,
  getUserIdFromToken,
};