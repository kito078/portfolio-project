import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";

import { FaHornbill } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar-container mb-12 z-10  bg-neutral relative mx-auto p-2 px-6 sticky top-0">
      <div className="container-one">
        {/* flex container for Nav Items */}
        <div className="flex items-center justify-between space-x-20 my-2">
          {/* logo */}

          <div className="flex  px-2 mx-2">
            <FaHornbill className="inline pr-2 mt-2 md:mt-5 text-4xl" />
            <h4 className="text-xl mt-3 md:mt-6  font-bold align-middle">
              Kessian
            </h4>
          </div>

          {/* Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayisBlue md:flex">
            <h5 className="tracking-widest hover:text-blue-500  text-sm font-semibold cursor-pointer">
              Home |
            </h5>
            <h5
              to="/about"
              className="tracking-widest hover:text-blue-500 text-sm cursor-pointer font-semibold"
            >
              About |
            </h5>
          </div>
          {/* hamburger Button */}
          <button
            id="menu-btn"
            className={`${
              isOpen ? "open" : "block"
            } z-30  md:hidden focus:outline-none hamburger`}
            onClick={toggleHandler}
          >
            {/* humburger lines */}
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed inset-0 z-20 md:hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-black`}
        >
          <div className="w-full py-3 text-center">
            <a href="#home" className="block font-semibold cursor-pointer">
              Home
            </a>
          </div>
          <div className="w-full py-3  text-center">
            <a href="#about" className="block font-semibold cursor-pointer">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
