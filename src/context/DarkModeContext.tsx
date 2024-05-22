"use client";
import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from "react";
import { setCookie, getCookie } from "@/utils/cookies";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export const DarkModeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = getCookie("darkMode");
    if (savedMode === true) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    const newMode = !darkMode;
    if (newMode) {
      document.documentElement.classList.add("dark");
      setCookie("darkMode", "true", { path: "/", maxAge: 3600 * 24 * 365 });
    } else {
      document.documentElement.classList.remove("dark");
      setCookie("darkMode", "false", { path: "/", maxAge: 3600 * 24 * 365 });
    }
  };

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
