"use client";

import useUserInfoQuery from "@/hooks/query/useUserInfoQuery";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sidebarState } from "@/store/atom/sidebar";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const [nickname, setNickname] = useState("");
  const { data } = useUserInfoQuery();
  const isSidebarOpen = useRecoilValue(sidebarState);
  const setSidebarOpen = useSetRecoilState(sidebarState);

  useEffect(() => {
    if (data) {
      setNickname(data.nickname);
    }
  }, [data]);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const isActive = (path: any) => {
    return pathname === path
      ? "bg-gradient-yellow-active dark:bg-gradient-dark-active"
      : "";
  };

  return (
    <div
      id="sidebar"
      className={`fixed md:relative transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 p-6 w-60 bg-light-yellow text-black dark:bg-gray-800 dark:text-white flex-shrink-0 h-full z-50 transition-transform duration-500 ease-in-out`}
    >
      <div className="flex flex-col items-center mb-4">
        <span className="text-lg font-semibold mt-2">
          {nickname ? nickname : "Loading..."}
        </span>
      </div>

      <ul className="list-none p-0">
        <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/save/main",
          )} hover:bg-gradient-yellow-hover dark:hover:bg-gradient-dark-hover active:bg-gradient-yellow-active dark:active:bg-gradient-dark-active`}
        >
          <Link
            href="/save/main"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
            onClick={handleCloseSidebar}
          >
            Main
          </Link>
        </li>
        <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/save/chzzk",
          )} hover:bg-gradient-yellow-hover dark:hover:bg-gradient-dark-hover active:bg-gradient-yellow-active dark:active:bg-gradient-dark-active`}
        >
          <Link
            href="/save/chzzk"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
            onClick={handleCloseSidebar}
          >
            Chzzk
          </Link>
        </li>
        {/* <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/save/my-info",
          )} hover:bg-gradient-yellow-hover dark:hover:bg-gradient-dark-hover active:bg-gradient-yellow-active dark:active:bg-gradient-dark-active`}
        >
          <Link
            href="/save/my-info"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
            onClick={handleCloseSidebar}
          >
            MyInfo
          </Link>
        </li> */}
        <li
          className={`my-4 rounded-3xl relative overflow-hidden ${isActive(
            "/404",
          )} hover:bg-gradient-yellow-hover dark:hover:bg-gradient-dark-hover active:bg-gradient-yellow-active dark:active:bg-gradient-dark-active`}
        >
          <Link
            href="/404"
            className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
            onClick={handleCloseSidebar}
          >
            404
          </Link>
        </li>
      </ul>
    </div>
  );
}
