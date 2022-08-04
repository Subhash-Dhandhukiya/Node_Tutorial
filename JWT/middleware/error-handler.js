const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Something went wrong, Please Try again" });
};

module.exports = errorHandlerMiddleware;
