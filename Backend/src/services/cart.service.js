const Cart = require("../models/cart.model.js");

const createCart = async (User) => {
  try {
    const newCart = await new Cart({ User });
    const cartCreated = await newCart.save();
    return cartCreated;

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createCart
};
