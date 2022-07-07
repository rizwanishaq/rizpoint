import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import WorkoutContextProvider from "./contexts/workout/WorkoutContext";
import ExpenseTrackerContextProvider from "./contexts/expensetracker/ExpenseTrackerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <ExpenseTrackerContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </ExpenseTrackerContextProvider>
  </BrowserRouter>
);
