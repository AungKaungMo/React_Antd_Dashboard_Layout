import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";

type ProtectedRouteProps = {
  element: JSX.Element;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
