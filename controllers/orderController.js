const Order = require("../models/orderModel");

const getOrders = (req, res) => {
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

const postOrder = async (req, res) => {
  const success = false;
  const postedOrder = req.body;
  const newOrder = new Order(postedOrder);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({
      status: "success",
      order: savedOrder,
    });
  } catch (error) {
    res.status(200).json({
      status: "failed",
      message: error.message,
    });
  }
};

const updateOrder = (req, res) => {
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

const deleteOrder = (req, res) => {
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

module.exports = {
  getOrders,
  postOrder,
  updateOrder,
  deleteOrder,
};
