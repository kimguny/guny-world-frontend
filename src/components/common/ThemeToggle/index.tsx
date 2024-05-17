"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className={`${styles.button} ${darkMode ? styles.buttonDark : styles.buttonLight}`}>
      Toggle Dark Mode
    </button>
  );
};

export default ThemeToggle;
