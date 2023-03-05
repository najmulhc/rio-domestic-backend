const express = require("express");
const {
  getProducts,
  postProduct,
  updateProduct,
} = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/", getProducts).post("/", postProduct).patch("/:id", updateProduct);

module.exports = productRouter;
