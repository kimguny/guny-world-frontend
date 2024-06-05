"use client";

import React from "react";
import styles from "./Sidebar.module.css";
import DarkToggle from "@/components/common/DarkToggle";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <DarkToggle />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/save/main" className={styles.navLink}>
            Main
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/save/chzzk" className={styles.navLink}>
            Chzzk
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/404" className={styles.navLink}>
            404
          </Link>
        </li>
      </ul>
    </div>
  );
}
