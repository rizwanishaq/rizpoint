const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const os = require("os-utils");

const httpServer = require("http");
require("dotenv").config();

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");

// express app
const app = express();
const server = httpServer.createServer(app);

// middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

// Routes
app.use("/api/workouts", require("./routes/workoutsRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(notFound);
app.use(errorHandler);

// connect to MongoDB
connectDB();

const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});

let tick = 0;
// 1. listen for socket connections
io.on("connection", (socket) => {
  // 2. every second, emit a 'cpu' event to user
  setInterval(() => {
    os.cpuUsage((cpuPercent) => {
      socket.emit("cpu", {
        name: tick++,
        value: cpuPercent * 100,
      });
    });
  }, 1000);
});

// list for requests
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
