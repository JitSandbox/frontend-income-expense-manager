import { Navigate } from "react-router-dom";
import { authService } from "./authService";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
