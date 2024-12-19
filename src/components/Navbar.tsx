import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaEnvelope, FaGithub, FaYoutube, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
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

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

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
              className="w-12 h-12 hover:scale-110 transition-transform duration-300"
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
          <ul></ul>
          <ThemeToggle />
        </div>
          <ul className="md:hidden focus:outline-none fixed right-14 z-50">
          <ThemeToggle />
          </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none dark:text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-gray-50 dark:bg-gray-800 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <ul className="flex flex-col items-center gap-6 mt-24 text-lg font-medium">
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
          <div className="flex flex-col gap-2 mt-8 items-center absolute bottom-0 pb-32">

            <div className="flex justify-center gap-6 absolute bottom-0 items-center pb-20">
              <a href="mailto:emiraydin1625@hotmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={38} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://github.com/ibrahimemiraydin" target="_blank" rel="noopener noreferrer">
                <FaGithub size={38} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://youtube.com/@DejavuTR" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={38} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
              </a>
            </div>
            <div className="flex justify-center gap-6 absolute bottom-0 items-center pb-6">
              <a href="https://discord.gg/vVqSqUhNb9" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={38} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
             </a>
             <a href="https://instagram.com/emiraydin.16" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={38} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://twitter.com/emiraydin1625" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={38} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors" />
            </a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;