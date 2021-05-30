const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

// Setup server
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:["http://localhost:3000"],
  credentials: true
}));

// connect to mongoDB
mongoose.connect(
  process.env.MDB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) return console.log(error);
    console.log("Connected to MongoDB...");
  }
);

// Set up routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));
