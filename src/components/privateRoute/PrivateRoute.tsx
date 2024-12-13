import React from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./PrivateRouteProps";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isLogged, children }) => {
  return isLogged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
