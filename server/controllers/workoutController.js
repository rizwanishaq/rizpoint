const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Workout = require("../models/workoutModel.js");

// Get all workouts
getWorkouts = asyncHandler(async (req, res) => {
  const user_id = req.user._id;
  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(workouts);
});

// Get a single workout
getWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404);
    throw new Error("No such workout");
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(404);
    throw new Error("Workout not found");
  }
  res.status(200).json(workout);
});

// Post a new workout
const createWorkout = asyncHandler(async (req, res) => {
  const { title, load, reps } = req.body;
  const user_id = req.user._id;

  const workout = await Workout.create({ title, load, reps, user_id });
  if (workout) {
    res.status(200).json(workout);
  } else {
    res.status(400);
    throw new Error("workout");
  }
});

// Delete a workout
deleteWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404);
    throw new Error("No such workout");
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (workout) {
    res.status(200).json(workout);
  } else {
    res.status(400);
    throw new Error("missing fields");
  }
});

// Update a workout
updateWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404);
    throw new Error("No such workout");
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (workout) {
    res.status(200).json(workout);
  } else {
    res.status(400);
    throw new Error("something wrong with the update");
  }
});

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
