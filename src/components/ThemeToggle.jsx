
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    // Or check if system prefers dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark)|| !savedTheme;

  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 animate-pulse-light"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-portfolio-purple" />
      )}
    </button>
  );
};

export default ThemeToggle;
