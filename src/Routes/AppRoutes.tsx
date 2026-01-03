import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import ProtectedRoute from "../auth/ProtectedRoute";

type RouteConfig = {
  path: string;
  element: React.ReactElement;
};

const routes: RouteConfig[] = [
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
];

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      {routes.map((r) =>
        r.path === "/login" ? (
          <Route key={r.path} path={r.path} element={r.element} />
        ) : (
          <Route
            key={r.path}
            path={r.path}
            element={<ProtectedRoute>{r.element}</ProtectedRoute>}
          />
        )
      )}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
