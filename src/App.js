import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FlightSelection from "./Components/FlightSelection/FlightSelection";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/check-in" element={<FlightSelection />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/check-in" />} />
      </Routes>
    </Router>
  );
};

export default App;
