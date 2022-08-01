import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../context";

const ProtectedRoute = () => {
  const { authUser } = authContext();

  if (!authUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
