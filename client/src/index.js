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
import AuthContextProvider from "./contexts/auth/AuthContext";
import LocationContextProvider from "./contexts/location/LocationContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <LocationContextProvider>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <ExpenseTrackerContextProvider>
            <WorkoutContextProvider>
              <App />
            </WorkoutContextProvider>
          </ExpenseTrackerContextProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </LocationContextProvider>
  </BrowserRouter>
);
