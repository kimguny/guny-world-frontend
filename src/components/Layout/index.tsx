import Sidebar from "./Sidebar";
import React from "react";
import Top from "./Top";
import "./index.css";

export default function Layout({ children }: { children: React.ReactNode }) {
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
