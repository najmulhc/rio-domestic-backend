const { Schema, default: mongoose } = require("mongoose");
const Product = require("./productModel");

const orderSchema = new Schema({
  products: {
    type: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        brand: { type: String, required: true },
        ram: { type: Number, required: true },
        screen: {
          size: { type: Number, required: true },
          type: { type: String, required: true },
        },
        processor: { type: String, required: true },
        stock: { type: Number, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number },
      },
    ],
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
