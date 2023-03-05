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

const postOrder = (req, res) => {
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
