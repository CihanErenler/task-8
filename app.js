const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

const port = 3000;

// Import route
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

// Routers
app.get("/", (req, res) => {
  res.send("This is home page");
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to db")
);

app.listen(port, () => console.log("Server running at port ", port));
