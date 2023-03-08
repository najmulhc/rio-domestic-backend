const { Schema, default: mongoose } = require("mongoose"); 

 const ProductSchema = new Schema({
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
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product, {ProductSchema};
