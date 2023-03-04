const express = require("express");
const { addUser, editUser } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/", addUser).patch('/:id', editUser);

module.exports = userRouter;