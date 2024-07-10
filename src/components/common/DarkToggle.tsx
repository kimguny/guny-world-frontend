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
      className={`text-black dark:text-white`}
      aria-label="Toggle Dark Mode"
    >
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </button>
  );
}
