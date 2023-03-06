const express = require("express");
const { addUser, editUser, loginUser } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/", addUser).patch('/', editUser).get("/login", loginUser);

module.exports = userRouter;
