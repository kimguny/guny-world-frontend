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

  const isActive = (path: string) => {
    return pathname === path
      ? "bg-gradient-yellow-active dark:bg-gradient-dark-active"
      : "";
  };

  const sidebarItems = [
    { href: "/save/main", label: "Main" },
    { href: "/save/chzzk", label: "Chzzk" },
    { href: "/404", label: "404" },
  ];

  return (
    <div
      id="sidebar"
      className={`fixed md:relative transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 p-4 w-60 bg-light-yellow text-black dark:bg-gray-800 dark:text-white flex-shrink-0 h-full z-50 transition-transform duration-500 ease-in-out`}
    >
      <div className="flex flex-col items-center bg-light-yellow h-14 border border-slate-400 rounded-2xl bg-white dark:bg-gray-800 justify-center">
        <span className="text-lg font-semibold">
          {nickname ? nickname : "Loading..."}
        </span>
      </div>

      <ul className="list-none p-0 pt-4">
        {sidebarItems.map((item) => (
          <li
            key={item.href}
            className={`rounded-3xl relative overflow-hidden ${isActive(
              item.href,
            )} hover:bg-gradient-yellow-hover dark:hover:bg-gradient-dark-hover active:bg-gradient-yellow-active dark:active:bg-gradient-dark-active`}
          >
            <Link
              href={item.href}
              className="block text-inherit no-underline rounded-3xl px-4 py-2 relative z-10 dark:text-white"
              onClick={handleCloseSidebar}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
