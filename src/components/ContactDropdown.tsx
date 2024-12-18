import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaEnvelope size={30} />, link: "mailto:emiraydin1625@hotmail.com", bgColor: "bg-gray-500" },
  { id: 2, icon: <FaGithub size={30} />, link: "https://github.com/ibrahimemiraydin", bgColor: "bg-black" },
  { id: 3, icon: <FaInstagram size={30} />, link: "https://instagram.com/emiraydin.16", bgColor: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" },
  { id: 4, icon: <FaYoutube size={30} />, link: "https://youtube.com/@DejavuTR", bgColor: "bg-red-600" },
  { id: 5, icon: <FaTwitter size={30} />, link: "https://twitter.com/emiraydin1625", bgColor: "bg-blue-500" },
  { id: 6, icon: <FaDiscord size={30} />, link: "https://discord.gg/vVqSqUhNb9", bgColor: "bg-indigo-500" },
];

interface ContactDropdownProps {
  isDropdownOpen: boolean;
  navbarHeight: number; // Accept navbar height as a prop
}

const ContactDropdown: React.FC<ContactDropdownProps> = ({
  isDropdownOpen,
  navbarHeight,
}) => {
  const [dropdownTop, setDropdownTop] = useState<number>(navbarHeight);

  // Set the dropdown top to the navbar height when dropdown is toggled
  useEffect(() => {
    if (isDropdownOpen) {
      setDropdownTop(navbarHeight);
    }
  }, [isDropdownOpen, navbarHeight]);

  if (!isDropdownOpen) return null;

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 z-50"
      style={{ top: `${dropdownTop}px` }} // Positioning the dropdown right below the navbar
    >
      <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg w-64 py-4 border-2 border-gray-300 dark:border-gray-500">
        <div className="grid grid-cols-3 gap-6 px-4" >
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex justify-center items-center p-4 rounded-lg text-white dark:text-white ${social.bgColor} hover:ring-2 hover:ring-blue-500 focus:outline-none transition-all`}
            >
              <div className="text-3xl">{social.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDropdown;