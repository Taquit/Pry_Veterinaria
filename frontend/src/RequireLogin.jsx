import {Navigate} from "react-router-dom";

export default function RequireLogin({ children }) {
  const ok = localStorage.getItem("logged_in") === "1";
  return ok ? children : <Navigate to="/login" replace />;
}

