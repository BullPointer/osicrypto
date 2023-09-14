/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("token"));
  const expiredTimestamp = token.exp;
  const currentTimestamp = Math.floor(Date.now() / 1000);

  if (children && (!token || expiredTimestamp < currentTimestamp)) {
    localStorage.removeItem("token");
    return <Navigate to={"/sign-in"} state={{ path: location.pathname }} />;
  }

  return children;
};
