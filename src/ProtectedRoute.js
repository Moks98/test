import React from "react";
import { useAuth } from "./Components/AuthContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const { user, role: userRole } = useAuth();

  console.log("User:", user);
  console.log("User Role:", userRole);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
