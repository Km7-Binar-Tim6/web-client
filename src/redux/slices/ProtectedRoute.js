import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation(); // Dapatkan path saat ini

  useEffect(() => {
    // Jika user tidak login dan bukan pada halaman "/login" atau "/register", arahkan ke /login
    if (
      !token &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate({ to: "/login" });
    }
  }, [token, navigate, location.pathname]);

  if (
    !token &&
    location.pathname !== "/login" &&
    location.pathname !== "/register"
  ) {
    return null; // Tampilkan indikator loading saat redirecting, jika diperlukan
  }

  return children; // Render konten yang dilindungi jika user sudah login
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a required node (any renderable content)
};

export default ProtectedRoute;
