"use client";

import React from "react";
import styles from "./Sidebar.module.css";
import DarkToggle from "@/components/common/DarkToggle";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <DarkToggle />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/save/main" className={styles.navLink}>
            Main
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
