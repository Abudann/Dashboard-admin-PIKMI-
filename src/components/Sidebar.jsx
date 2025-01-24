import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
        <button className="close-btn" onClick={toggleSidebar}>
          &times; {/* Icon close */}
        </button>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" onClick={toggleSidebar}>Dashboard</Link>
        </li>
        <li>
          <Link to="/history" onClick={toggleSidebar}>Riwayat Prestasi</Link>
        </li>
        <li>
          <Link to="#" onClick={toggleSidebar}>Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
