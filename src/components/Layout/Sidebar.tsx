"use client";

import React from "react";
import styles from "./Sidebar.module.css";
import DarkToggle from "@/components/common/DarkToggle";
import Link from "next/link";

export default function Sidebar() {
  const user = {
    nickname: "사용자닉네임",
  };

  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className="flex flex-col items-center mb-4">
        <span className="text-lg font-semibold mt-2">{user.nickname}</span>
      </div>
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
