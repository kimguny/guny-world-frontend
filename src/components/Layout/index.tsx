"use client";
import Sidebar from "./Sidebar";
import React from "react";
import Top from "./Top";
import "./index.css";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { sidebarState } from "@/store/atom/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isSidebarOpen = useRecoilValue(sidebarState);
  const setSidebarOpen = useSetRecoilState(sidebarState);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="relative layout bg-light-yellow dark:bg-gray-800">
      <Sidebar />
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
          isSidebarOpen ? "opacity-50 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseSidebar}
      ></div>
      <div className="flex flex-col w-full">
        <Top />
        <div className="content p-4 m-4 border border-slate-400 rounded-2xl bg-white dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
}
