require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddlewar = require("./middleware/error-handler");

app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorHandlerMiddlewar);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, console.log(`Service is Listing at port ${PORT}....`));
  } catch (error) {
    console.log("Error =>", error);
  }
};

start();
