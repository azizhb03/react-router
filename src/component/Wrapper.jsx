import { Navigate } from "react-router-dom";



export const PublicWrapper = ({ children }) => {
  return localStorage.getItem("auth") ? <Navigate to="/404" /> : children;
};

export const PrivateWrapper = ({ children }) => {
  return localStorage.getItem("auth") ? children : <Navigate to="/404" />;
};
