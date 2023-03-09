const express = require("express");
const { postOrder, getOrders, updateOrder } = require("../controllers/orderController");
const orderRouter = express.Router();

orderRouter.post("/", postOrder).get('/', getOrders).patch("/:id", updateOrder)


module.exports = orderRouter;