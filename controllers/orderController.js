const Order = require("../models/orderModel");

const getOrders = async (req, res) => {
  const orders = await Order.find();

  res.status(200).json({
    status: "success",
    data: {
      orders: orders,
    },
  });
};

const postOrder = async (req, res) => {
  const success = false;
  const postedOrder = { ...req.body, status: "Pending" };
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

const updateOrder = async (req, res) => {
  const { stat } = req.body;
  const { id } = req.params;

  const updatedOrder = await Order.findByIdAndUpdate(id, {
    $set: { status: stat },
  });

  res.status(200).json({
    status: "success",
    order: updatedOrder,
  });
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
