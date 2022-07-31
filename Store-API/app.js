require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello This is Ready to fire");
});

app.use("/api/v1/products", productRouter);

//products Routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is Listening port ${port}...`));
  } catch (error) {
    console.log("Error =>", error);
  }
};

start();
