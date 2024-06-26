"use client";

import { sidebarState } from "@/store/atom/sidebar";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Sidebar from "./Sidebar";
import Top from "./Top";
import "./index.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarState);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <div className="layout bg-light-yellow dark:bg-gray-800">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Top />
        <div className="content p-4 m-4 border border-slate-400 rounded-2xl bg-white dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
}
