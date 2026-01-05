"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md"
    >
      {theme === "light" ? (
        <FiSun className="text-yellow-400 text-xl transition-all" />
      ) : (
        <FiMoon className="text-pink-400 text-xl transition-all" />
      )}
    </button>
  );
};

export default DarkMode;
