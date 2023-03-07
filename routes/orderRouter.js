const express = require("express");
const { postOrder } = require("../controllers/orderController");
const orderRouter = express.Router();

orderRouter.post("/", postOrder)


module.exports = orderRouter ;