const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middlewares/authMiddleware");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// Get all workouts
router.get("/", getWorkouts);
// Get a single workout
router.get("/:id", getWorkout);
// Create a new workout
router.post("/", createWorkout);
// Delete a workout
router.delete("/:id", deleteWorkout);
// Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
