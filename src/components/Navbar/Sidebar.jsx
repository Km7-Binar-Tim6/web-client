import { Link } from "@tanstack/react-router";
import { FaList, FaUserPlus } from "react-icons/fa"; // Icon tambahan untuk "Create Student"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarOpen }) => {
  const { user } = useSelector((state) => state.auth); // Mengambil data user dari state

  return (
    <aside
      id="sidebar"
      className={`sidebar ${sidebarOpen ? "open" : ""} d-flex flex-column`}
    >
      <div className="h-100 sidebar-content">
        <div className="sidebar-logo p-3">
          <Link to="/" className="fw-bold fs-5">
            Students
          </Link>
        </div>
        <ul className="nav flex-column sidebar-nav p-0">
          <li className="sidebar-header p-3 small">Admin Elements</li>

          <li className="sidebar-item">
            <Link
              to="/"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> Dashboard
            </Link>
          </li>

          <li className="sidebar-item">
            <Link
              to="/cars"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> Car List
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/manufacture"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> Manufacture
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/transmission"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> Transmission
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/type"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> Type
            </Link>
          </li>

          <li className="sidebar-item">
            <Link
              to="/model"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> Model
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/caroptions"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> Car Options
            </Link>
          </li>

          {/* Link Create Student hanya muncul jika user dengan role_id = 1 */}
          {user && user.role_id === 1 && (
            <li className="sidebar-item">
              <Link
                to="/cars/create"
                className="nav-link sidebar-link d-flex align-items-center"
              >
                <FaUserPlus className="me-2" /> Create Car
              </Link>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
