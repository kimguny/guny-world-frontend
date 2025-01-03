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
      className={`p-4 text-black dark:text-white group`}
      aria-label="Toggle Dark Mode"
    >
      <FontAwesomeIcon
        icon={darkMode ? faMoon : faSun}
        className="transition-transform duration-300 ease-in-out group-hover:scale-125"
      />
    </button>
  );
}
