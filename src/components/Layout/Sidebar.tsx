"use client";

import React from "react";
import styles from "./Sidebar.module.css";
import ThemeToggle from "@/components/common/ThemeToggle";

const Sidebar: React.FC = () => {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <ThemeToggle />
      <h2>Navigation</h2>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/main">Main</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
