import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Çeviri desteği
import ThemeToggle from "./ThemeToggle";
import ContactDropdown from "./ContactDropdown";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null); // Navbar reference
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Sayfa kaydırıldığında navbar'ı kontrol etmek için
  const hoverTimeout = useRef<number | null>(null);

  const { t } = useTranslation(); // useTranslation hook'u

  // Sayfa kaydırıldığında navbar'ın saydamlığını ve gölgeyi ayarlamak için
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Sayfa kaydırıldıysa navbar'a gölge ve saydamlık ekle
      } else {
        setIsScrolled(false); // Sayfa başında ise gölgeyi kaldır
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dropdown için mouse olayları
  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms gecikme
  };

  return (
    <nav
      ref={navbarRef}
      className={`transition-all duration-300 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 fixed top-0 left-0 right-0 z-10 ${
        isScrolled
          ? "bg-opacity-90 shadow-lg dark:bg-opacity-90 dark:shadow-lg" // Kaydırıldığında her iki modda da saydamlık ve gölge
          : "bg-opacity-100 shadow-none dark:bg-opacity-100 dark:shadow-none" // Kaydırılmadığında her iki modda da opaklık ve gölgeyi kaldır
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-90">
            <Link to="/">
            <img src="./public/icons/android-chrome-512x512.png" alt="Emir Aydın" className="w-12 h-12 " />
            </Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-blue-500 transition-colors"
              >
                {t("navbar.projects")}
              </Link>
            </li>
            {/* Contact Dropdown */}
            <li
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="hover:text-blue-500 cursor-pointer flex items-center gap-1">
                {t("navbar.contact")}
                <FaChevronDown
                  size={12}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </span>
              {/* Dropdown menu component */}
              <ContactDropdown isDropdownOpen={isDropdownOpen} navbarHeight={50} />
            </li>
          </ul>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                to="/"
                className="text-lg font-medium hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-lg font-medium hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.projects")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navbar.contact")}
              </Link>
            </li>
            {/* Theme Toggle */}
            <div>
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
