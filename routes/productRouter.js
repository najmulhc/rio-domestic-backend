const express = require("express");
const {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/", getProducts).post("/", postProduct).patch("/:id", updateProduct).delete("/:id", deleteProduct);

module.exports = productRouter;
