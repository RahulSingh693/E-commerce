const jwt = require("jsonwebtoken");
const JWT_SECRET= "hwrbakmanqosnmzlajdksrutbsjzykanjscchuwniescbhscjw";

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