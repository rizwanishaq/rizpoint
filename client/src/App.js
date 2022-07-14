import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import PieExample from "./pages/PieExample";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import ScatterPlot from "./pages/ScatterPlot";
// import VisxExample from "./pages/VisxExample";
import ApexChart from "./pages/ApexChart";
import ReChartExample from "./pages/ReChartExample";
import WorkOuts from "./pages/WorkOuts";
import ImagePreview from "./pages/ImagePreview";
import ExpenseTracker from "./pages/ExpenseTracker";
import CovidTracker from "./pages/CovidTracker";
import RealTimeChart from "./pages/RealTimeChart";
import SimpleFirebase from "./pages/SimpleFirebase";
import RealTimeApexChart from "./pages/RealTimeApexChart";
import VoiceAssistant from "./pages/VoiceAssistant";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Personal />} />
        <Route path="/piechart" element={<ScatterPlot />} />
        {/* <Route
          path="/simple"
          element={<VisxExample width={900} height={500} />}
        /> */}
        <Route path="/pies" element={<PieExample />} />
        <Route path="/apexchart" element={<ApexChart />} />
        <Route path="/rechart" element={<ReChartExample />} />
        <Route path="/workouts" element={<WorkOuts />} />
        <Route path="/imagepreview" element={<ImagePreview />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        <Route path="/covidtracker" element={<CovidTracker />} />
        <Route path="/realtimechart" element={<RealTimeChart />} />
        <Route path="/firebasetutorial" element={<SimpleFirebase />} />
        <Route path="/realtimeapexchart" element={<RealTimeApexChart />} />
        <Route path="//voicecontrolsystem" element={<VoiceAssistant />} />
      </Routes>
    </>
  );
}

export default App;
