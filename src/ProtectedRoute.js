import React from "react";
import { useAuth } from "./Components/AuthContext/AuthContext";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element: Component, role, ...rest }) => {
  const { user, role: userRole } = useAuth();

  return (
    <Route
      {...rest}
      element={
        user && userRole === role ? <Component /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
