import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/completed-tasks">Completed Tasks</Link>
        </li>
        <li>
          <Link to="/deadlines">Deadlines</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
