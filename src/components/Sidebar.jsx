// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4">
    
        <ul className="mt-4">
          <li className="mb-8 mt-28 text-3xl">
            <Link to="/" onClick={toggleSidebar} className="hover:underline">
              Homepage
            </Link>
          </li>
          <li className="mb-8 text-3xl">
            <Link to="/menu" onClick={toggleSidebar} className="hover:underline">
              Menu
            </Link>
          </li>
          <li className="mb-8 text-3xl">
            <Link to="/favourites" onClick={toggleSidebar} className="hover:underline">
              My Favourites
            </Link>
          </li>
          <li className="mb-80 text-3xl">
            <Link to="/meal-generator" onClick={toggleSidebar} className="hover:underline">
              Random Meal
            </Link>
          </li>
          <li className=" text-3xl">
            <Link to="/about" onClick={toggleSidebar} className="hover:underline">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
