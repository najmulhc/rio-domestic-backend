const express = require("express");
const { addUser, editUser, loginUser } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/", addUser).patch('/', editUser).post("/login", loginUser);

module.exports = userRouter;
