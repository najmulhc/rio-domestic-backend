const userModel = require("../models/userModel");
const mongoose = require("mongoose");
const addUser = async (req, res) => {
  const data = req.body;
  const newUser = new userModel(data);
  const savedUser = await newUser.save();
  res.status(200).json({
    status: "success",
    user: savedUser,
  });
};

const editUser = async (req, res) => {
  const { id } = req.params;

  const foundUseer = await userModel.find({
    _id: id,
  });
  console.log(foundUseer);
  if (foundUseer[0]) {
    res.status(200).json({
      status: "success",
      user: foundUseer[0],
    });
  } else {
    res.status(400).json({
      status: "failed",
      error: {
        message: "user does not exists.",
      },
    });
  }
};

module.exports = { addUser, editUser };
