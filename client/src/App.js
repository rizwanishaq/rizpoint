import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import ScatterPlot from "./pages/ScatterPlot";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Personal />} />
        <Route path="/piechart" element={<ScatterPlot />} />
      </Routes>
    </>
  );
}

export default App;
