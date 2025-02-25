import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Admin Panel</div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className='sidebar-link'>Dashboard</Link>
        </li>
        <li>
          <Link to="/history" className='sidebar-link'>Riwayat Prestasi</Link>
        </li>
          <li>
          <Link to="#" className='sidebar-link'>Log out</Link>
          </li>
      </ul>
    </div>
  );
};

export default Sidebar;
