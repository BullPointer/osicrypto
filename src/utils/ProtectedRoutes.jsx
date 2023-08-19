/* eslint-disable react/prop-types */
import { Navigate, useLocation, useSearchParams } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const location = useLocation();

  if (!id) {
    return (
      <Navigate
        to={"/osicrypto/exchange"}
        state={{ path: location.pathname }}
      />
    );
  }

  return children;
};
