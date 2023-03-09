const { default: mongoose } = require("mongoose");
const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      products: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getSingleProduct = (req, res) => {
  const success = false;
  if (success) {
    res.status(200).json({
      status: "success",
      data: {
        user: "yes sir",
      },
    });
  } else {
    res.status(400).json({
      status: "failed",
      message: "something went wrong",
    });
  }
};

const updateProduct = (req, res) => {
  const updates = req.body;
  const { id } = req.params;

  const filter = { _id: id };
  const update = { ...updates };
  const options = { new: false };
  Product.findByIdAndUpdate(
    filter,
    update,
    options,
    async (error, updatedProduct) => {
      if (error) {
        await res.status(400).json({
          status: "failed",
          message: error.message,
        });
      } else {
        await res.status(200).json({
          status: "success",
          product: updatedProduct,
        });
      }
    }
  );
};
const postProduct = async (req, res) => {
  const postedProduct = req.body;

  try {
    const newProduct = new Product(postedProduct);
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res.status(200).json({
      status: "success",
      product: savedProduct,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deleteable = await Product.findOneAndDelete({ _id: id });
  res.status(200).json({
    status: "success",
    product: deleteable,
  });
};

module.exports = {
  getProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
