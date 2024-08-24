"use client";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "@/context/DarkModeContext";
import React from "react";

export default function DarkToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 m-2 text-black dark:text-white bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors duration-300 ripple-effect`}
      aria-label="Toggle Dark Mode"
    >
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </button>
  );
}
