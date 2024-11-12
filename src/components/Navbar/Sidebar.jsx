import { Link } from "@tanstack/react-router";
import { FaList } from "react-icons/fa";
import PropTypes from "prop-types";

const Sidebar = ({ sidebarOpen }) => {
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
              to="/students"
              className="nav-link sidebar-link d-flex align-items-center"
            >
              <FaList className="me-2" /> StudentsList
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
        </ul>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
