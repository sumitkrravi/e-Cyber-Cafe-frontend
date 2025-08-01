// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Agar user hi nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Agar role allow nahi hai
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
