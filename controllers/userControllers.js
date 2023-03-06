const User = require("../models/userModel");
const userModel = require("../models/userModel");
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
  const { email, role } = req.body;
  const foundUseer = await userModel.findOneAndUpdate(
    { email: email },
    { role: role },
    { new: true }
  );
  console.log(foundUseer);
  if (foundUseer) {
    res.status(200).json({
      status: "success",
      user: foundUseer,
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
 console.log(user);
 if (!user) {
   res.status(200).json({
     status: "failed",
     message: "user does not exist.",
   });
 } else if (user.password !== password) {
   res.status(200).json({
     status: "failed",
     message: "user entered wrong password",
   });
 } else {
   res.status(200).json({
     status: "success",
     user: user,
   });
 }
  
};

module.exports = { addUser, editUser, loginUser };
