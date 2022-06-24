import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import PieChart from "./pages/PieChart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/piechart" element={<PieChart />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </>
  );
}

export default App;
