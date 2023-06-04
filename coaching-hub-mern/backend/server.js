const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://emir:H6ZRuWmaq6NiJ0u7@cluster0.h4gnpxy.mongodb.net/coaching_hub?retryWrites=true&w=majority", { useNewUrlParser: true})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection was established successfully!")
})

const usersRouter = require("./routes/users")
app.use("/users", usersRouter)

app.listen(port, () => {
    console.log("listen on port " + port)
})