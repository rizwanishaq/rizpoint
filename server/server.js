const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

// Routes
app.use("/api/workouts", require("./routes/workoutsRoutes"));
app.use(notFound);
app.use(errorHandler);

// connect to MongoDB
connectDB();

// list for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
