"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "@/context/DarkModeContext";
import styles from "./index.module.css";

const DarkToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className={`${styles.button} ${darkMode ? styles.buttonDark : styles.buttonLight}`} aria-label="Toggle Dark Mode">
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </button>
  );
};

export default DarkToggle;
