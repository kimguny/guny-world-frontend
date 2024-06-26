"use client";

import useUserInfoMutation from "@/hooks/mutation/useUserInfoMutation";
import DarkToggle from "@/components/common/DarkToggle";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useLogout from "@/hooks/useLogout";
import Link from "next/link";

export default function Sidebar() {
  const logout = useLogout();
  const pathname = usePathname();
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

  const isActive = (path: any) => {
    return pathname === path
      ? "bg-gradient-yellow-active dark:bg-gray-700"
      : "";
  };

  const isLogout = () => {
    logout();
  };

  return (
    <div
      id="sidebar"
      className="p-6 w-60 bg-light-yellow text-black dark:bg-gray-800 dark:text-white"
    >
      <div className="flex flex-col items-center mb-4">
        <span className="text-lg font-semibold mt-2">
          {nickname ? nickname : "Loading..."}
        </span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <DarkToggle />
        <button
          className="px-4 py-2 bg-gray-100 text-black rounded hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          onClick={isLogout}
        >
          로그아웃
        </button>
      </div>

      <ul className="list-none p-0">
        <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/save/main",
          )} hover:bg-gradient-yellow-hover active:bg-gradient-yellow-active`}
        >
          <Link
            href="/save/main"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
          >
            Main
          </Link>
        </li>
        <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/save/chzzk",
          )} hover:bg-gradient-yellow-hover active:bg-gradient-yellow-active`}
        >
          <Link
            href="/save/chzzk"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
          >
            Chzzk
          </Link>
        </li>
        <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/save/my-info",
          )} hover:bg-gradient-yellow-hover active:bg-gradient-yellow-active`}
        >
          <Link
            href="/save/my-info"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
          >
            MyInfo
          </Link>
        </li>
        <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/404",
          )} hover:bg-gradient-yellow-hover active:bg-gradient-yellow-active`}
        >
          <Link
            href="/404"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
          >
            404
          </Link>
        </li>
      </ul>
    </div>
  );
}
