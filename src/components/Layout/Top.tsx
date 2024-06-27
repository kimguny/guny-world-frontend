"use client";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import DarkToggle from "@/components/common/DarkToggle";
import { sidebarState } from "@/store/atom/sidebar";
import useLogout from "@/hooks/useLogout";
import { useRecoilState } from "recoil";
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
          {isSidebarOpen ? (
            <FaArrowCircleLeft
              size={32}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <FaArrowCircleRight
              size={32}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>
        <div className="flex items-center gap-4">
          <DarkToggle />
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
