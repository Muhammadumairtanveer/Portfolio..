import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import img1 from "../assets/umair.png"; // Import your profile image
import img2 from "../assets/programming.png"
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown on click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown on mouse leave
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          )}
        </div>
        {/* Add logo here */}
        <Link to="/" className="btn btn-ghost text-xl flex items-center">
          <img 
            src={img2} // Replace with your logo URL
            alt="Umair's Logo" 
            className="w-10 h-10 mr-2" 
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/" className="w-10 h-10 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={img1} alt="Umair's Profile" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
