const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")


const app = express();

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).json({
        status: "success", message: "the server is serving the data"
    })
})

const PORT = 5000

app.listen(PORT, ()=> {
    console.log("server is running in the port", PORT)
})