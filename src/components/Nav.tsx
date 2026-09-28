import React from 'react';
import logoText from "../assets/logo-text.png";

const Nav = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src={logoText} 
              alt="Dev Stack Logo" 
              className="h-8 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-500">
          <li>
            <a 
              href="#home" 
              className="text-pink-600 transition-colors duration-150"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-gray-900 transition-colors duration-150"
            >
              Technologies
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-gray-900 transition-colors duration-150"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-gray-900 transition-colors duration-150"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-gray-900 transition-colors duration-150"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-5">
          <button 
            type="button" 
            className="text-[13px] font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            Sign In
          </button>
          <button 
            type="button" 
            className="text-[13px] font-semibold text-white bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-lg transition-all duration-150 shadow-sm active:scale-95"
          >
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Nav;