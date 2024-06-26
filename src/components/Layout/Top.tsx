"use client";
import { sidebarState } from "@/store/atom/sidebar";
import useLogout from "@/hooks/useLogout";
import { useRecoilState } from "recoil";
import Image from "next/image";
import React from "react";

export default function Top() {
  const logout = useLogout();
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarState);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-light-yellow h-14 m-4 p-4 mb-0 border border-slate-400 rounded-2xl bg-white dark:bg-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/체리.ico"
            alt="icon"
            width={32}
            height={32}
            className="rounded-full cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 text-black dark:text-white"
            onClick={logout}
          >
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
}
