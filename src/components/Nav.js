import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-2xl">
            TODOOS<span className="text-yellow-500 text-[40px] space-x-1">.</span>
          </div>
          <div className="md:hidden">
            <button
              className="text-white text-2xl"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
          <ul
            className={`md:flex items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4 text-xl uppercase ${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex`}
          >
            <li>
              <Link
                to="/"
                className="text-white hover:text-yellow-500 duration-300 font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <ScrollLink
                to="prices"
                smooth={true}
                duration={500}
                className="text-white hover:text-yellow-500 duration-300 cursor-pointer"
              >
                Prices
              </ScrollLink>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-yellow-500 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-500 duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link to="/signin">
              <button
                className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white duration-300"
              >
                Sign in
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
