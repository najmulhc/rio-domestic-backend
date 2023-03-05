const { Schema, default: mongoose } = require("mongoose");
const Product = require("./productModel");
const User = require("./userModel");

const orderSchema = new Schema({
  products: {
    type: [Product],
    required: true,
  },
  user: {
    type: User,
    required: true,
  },
  totalAmaount: {
    type: Number,
    required: true,
  },
  totalPhone: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
