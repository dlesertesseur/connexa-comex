import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppStateContext } from "../context/AppStateContext";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AppStateContext);

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};
