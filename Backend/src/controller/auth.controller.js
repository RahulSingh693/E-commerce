const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider");
const cartService = require("../services/cart.service.js");

const register = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (user) {
      return res.status(400).send({ message: " User already exists" });
    }
    const newUser = await userService.createUser(req.body);
    const token = jwtProvider.generateToken(newUser._id);

    await cartService.createCart({ newUser });

    return res
      .status(200)
      .send({ token, message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }
    const token = jwtProvider.generateToken(user._id);
    res.status(200).send({ token, message: "Login successful" });

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}; 

module.exports = {
  register,
  login,
};
