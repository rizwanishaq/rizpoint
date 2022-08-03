const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      error: "You must be logged in to access this resource",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ error: "You must be logged in to access this resource" });
  }
};

module.exports = requireAuth;
