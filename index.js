const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);

mongoose.connect("mongodb+srv://admin:admin@cluster0.knd04xn.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('server is connected with mongodb');
}).catch(err => {
    console.log(err.message);
})

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success", message: "the server is serving the data"
    })
})

const PORT = 5000

app.listen(PORT, ()=> {
    console.log("server is running in the port", PORT)
})