import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import ContactDropdown from "./ContactDropdown";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeout = useRef<number | null>(null);
  const location = useLocation();

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      ref={navbarRef}
      className={`transition-all duration-300 fixed top-0 left-0 right-0 z-10 ${
        isScrolled
          ? "bg-gray-50/90 dark:bg-gray-800/90 shadow-lg"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          <Link to="/">
            <img
              src="../icons/android-chrome-512x512.png"
              alt="Emir Aydın"
              className="w-12 h-12"
            />
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                className={`relative group transition-colors ${
                  isActive("/")
                    ? "text-blue-500"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                }`}
              >
                {t("navbar.home")}
                <span
                  className={`absolute bottom-[-2px] left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isActive("/") ? "scale-x-100" : ""
                  }`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`relative group transition-colors ${
                  isActive("/projects")
                    ? "text-blue-500"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                }`}
              >
                {t("navbar.projects")}
                <span
                  className={`absolute bottom-[-2px] left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isActive("/projects") ? "scale-x-100" : ""
                  }`}
                ></span>
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center gap-1 cursor-pointer">
                <Link
                  to="/contact"
                  className={`relative group transition-colors ${
                    isActive("/contact")
                      ? "text-blue-500"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                  }`}
                >
                  {t("navbar.contact")}
                  <span
                    className={`absolute bottom-[-2px] left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      isActive("/contact") ? "scale-x-100" : ""
                    }`}
                  ></span>
                </Link>
                <FaChevronDown
                  size={12}
                  className="dark:text-white transition-transform duration-200 group-hover:rotate-180"
                />
              </span>
              <ContactDropdown
                isDropdownOpen={isDropdownOpen}
                navbarHeight={50}
              />
            </li>
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-gray-50 dark:bg-gray-800 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-800 dark:text-gray-200"
          onClick={() => setIsMenuOpen(false)}
        >
          ✖
        </button>
        <ul className="flex flex-col items-center z-50 gap-6 mt-12 text-lg font-medium">
          <li>
            <Link
              to="/"
              className={`relative group transition-colors ${
                isActive("/")
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.home")}
              <span
                className={`absolute bottom-[-2px] left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  isActive("/") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`relative group transition-colors ${
                isActive("/projects")
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.projects")}
              <span
                className={`absolute bottom-[-2px] left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  isActive("/projects") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`relative group transition-colors ${
                isActive("/contact")
                  ? "text-blue-500"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.contact")}
              <span
                className={`absolute bottom-[-2px] left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  isActive("/contact") ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
          </li>
          <div>
            <ThemeToggle />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
