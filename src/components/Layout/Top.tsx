"use client";
import DarkToggle from "@/components/common/DarkToggle";
import { sidebarState } from "@/store/atom/sidebar";
import { CiMenuBurger } from "react-icons/ci";
import useLogout from "@/hooks/useLogout";
import { FiLogOut } from "react-icons/fi";
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
      <div className="bg-light-yellow h-14 m-4 mb-0 border border-slate-400 rounded-2xl bg-white dark:bg-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <CiMenuBurger
            size={32}
            className="cursor-pointer md:hidden dark:text-white"
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex items-center">
          <DarkToggle />
          <button
            className="p-2 m-2 text-black dark:text-white bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors duration-300 ripple-effect"
            onClick={logout}
          >
            <FiLogOut size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
