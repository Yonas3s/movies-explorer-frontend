import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute ({ element: Component, ...props }) {
  return props.loggedIn ? (<Component {...props} replace />
  ) : (
    <Navigate to="/" replace />
  );
};