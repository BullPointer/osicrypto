/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useExchangeContext } from "../context/ExchangeContext";

export const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const { createXData } = useExchangeContext();

  if (!createXData) {
    return (
      <Navigate
        to={"/osicrypto/exchange"}
        state={{ path: location.pathname }}
      />
    );
  }

  return children;
};
