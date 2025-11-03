import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";
import akash from "../assets/logo/white.svg";
import "../styles/global.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-(--color-surface) text-(--color-text) shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-(--color-background) flex items-center justify-center overflow-hidden">
              <img
                src={akash}
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-semibold text-lg text-(--color-primary-light)">
              Akash Gupta
            </span>
          </div>

          {/* Center: Desktop Menu */}
          {/* <SparkleNavbar> */}
          <div>
            <ul className="hidden md:flex space-x-6 text-sm font-medium border border-[var(--color-primary)] p-1 rounded-full px-7 transition-all duration-300 ease-in-out">
              <li className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--color-primary-light)] hover:text-[var(--color-text)]">
                Home
              </li>
              <li className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--color-primary-light)] hover:text-[var(--color-text)]">
                About
              </li>
              <li className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--color-primary-light)] hover:text-[var(--color-text)]">
                Projects
              </li>
              <li className="cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--color-primary-light)] hover:text-[var(--color-text)]">
                Contact
              </li>
            </ul>
          </div>

          {/* </SparkleNavbar> */}

          {/* Right: Search + Login */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center bg-(--color-background) rounded-md border-[#7C3AED] border-2  px-3 py-1 ">
              <input
                type="text"
                placeholder="Menu"
                className="bg-transparent outline-none text-sm text-(--color-text) placeholder-gray-400 "
              />
              <Search size={16} className="ml-2 text-gray-400" />
            </div>

            <button className="flex items-center space-x-1 border border-[var(--color-primary)] p-1 rounded-full px-2 transition-all duration-300 ease-in-out">
              <User size={22} />
              <a href="#contact">
                <span>
                  Hire Me!
                </span>
              </a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-(--color-text) focus:outline-none"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-(--color-background) border-t border-(--color-primary-dark)]">
          <ul className="flex flex-col space-y-3 px-4 py-3 text-sm">
            <li className="hover:text-(--color-accent) cursor-pointer">Home</li>
            <li className="hover:text-(--color-accent) cursor-pointer">About</li>
            <li className="hover:text-(--color-accent) cursor-pointer">Projects</li>
            <li className="hover:text-(--color-accent) cursor-pointer">Contact</li>
            <li>
              <div className="flex items-center mt-2 space-x-2">
                <div className="flex items-center bg-(--color-surface) rounded-md px-3 py-1 w-full">
                  <input
                    type="text"
                    placeholder="Menu"
                    className="bg-transparent outline-none text-sm text-(--color-text) placeholder-gray-400 w-full"
                  />
                  <Search size={16} className="ml-2 text-gray-400" />
                </div>
                  <button className="flex items-center space-x-1 border border-[var(--color-primary)] p-1 rounded-full px-2 transition-all duration-300 ease-in-out">
                    <User size={22} />
                    <a href="#contact">
                      <span>
                        Hire Me!
                      </span>
                    </a>
                  </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
