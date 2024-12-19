import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // v2'de simgeler burada


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 "
    >
      <ul className="transition-transform duration-500 rotate-0 dark:-rotate-90">
      {/* Eğer tema dark ise Ay simgesini, light ise Güneş simgesini göster */}
      {theme === "dark" ? (
        <MoonIcon className="w-6 h-6 text-blue-500 dark:text-white" />
      ) : (
        <SunIcon className="w-6 h-6 text-yellow-500 dark:text-white" />
      )}
      </ul>

    </button>
  );
};

export default ThemeToggle;