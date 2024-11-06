import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FlightSelection from "./Components/FlightSelection/FlightSelection";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./Components/AuthContext/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute role="staff" />}>
            <Route path="/check-in" element={<FlightSelection />} />
          </Route>
          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
