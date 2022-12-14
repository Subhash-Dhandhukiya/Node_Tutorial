require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
app.use(express.json());

const mainRouter = require("./routes/main");
const connectDB = require("./db/connect");

app.use("/api/v1", mainRouter);

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddlewar = require("./middleware/error-handler");

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
