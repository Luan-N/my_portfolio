import { useEffect, useState } from "react";
import { LuSquareMenu } from "react-icons/lu";
import {FaMoon, FaSun} from "react-icons/fa"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference on initial load
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return "dark";
    }
    return "light";
  });

  // Apply the theme to the document and save to localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Runs whenever theme changes

  // Toggle theme on button click
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""; //disable scrolling
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-20 bg-blue-400/40 backdrop-blur-lg border-b border-white/10 shadow-blue-400/20 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="relative w-14 h-7 dark:bg-black bg-yellow-400 rounded-full flex items-center p-1 cursor-pointer hover:opacity-80 transition-colors duration-300 border border-white" onClick={toggleTheme}>
            <div className={`absolute w-5.5 h-5.5 rounded-full flex items-center justify-center transition-transform duration-300 ${
                theme === "dark"
                  ? "translate-x-6 bg-indigo-950"
                  : "translate-x-0 bg-yellow-500"
              }`}>
              {theme === "dark" ? (
                <FaMoon className="text-white" />
              ) : (
                <FaSun className="text-white" />
              )}
            </div>
          </div>

          <LuSquareMenu
            className="relative z-40 md:hidden"
            size={25}
            onClick={() => setMenuOpen((prev) => !prev)}
          ></LuSquareMenu>

          <div className="hidden md:flex items-center justify-end space-x-8 relative right-10 transition-colors">
            <a className="hover:text-gray-400" href="#home">
              {" "}
              Home{" "}
            </a>
            <a className="hover:text-gray-400" href="#about">
              {" "}
              About{" "}
            </a>
            <a className="hover:text-gray-400" href="#projects">
              {" "}
              Projects{" "}
            </a>
            <a className="hover:text-gray-400" href="#contact">
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
