"use client";

import useUserInfoMutation from "@/hooks/mutation/useUserInfoMutation";
import DarkToggle from "@/components/common/DarkToggle";
import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  const [nickname, setNickname] = useState("");
  const { mutate, data, error } = useUserInfoMutation();

  useEffect(() => {
    mutate();
  }, [mutate]);

  useEffect(() => {
    if (data) {
      setNickname(data.nickname);
    }
  }, [data]);

  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className="flex flex-col items-center mb-4">
        <span className="text-lg font-semibold mt-2">
          {nickname ? nickname : "Loading..."}
        </span>
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
          <Link href="/save/my-info" className={styles.navLink}>
            MyInfo
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
