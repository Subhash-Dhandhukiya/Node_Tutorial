const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  //   console.log(req.headers.authrization);

  const authHeader = req.header.authorization;
  if (!authHeader || !authHeader.starsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorization to access this route");
  }
};

module.exports = authenticationMiddleware;
