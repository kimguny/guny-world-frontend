import Sidebar from "./Sidebar";
import React from "react";
import "./index.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout bg-light-yellow">
      <Sidebar />
      <div className="content border border-slate-400 rounded-2xl bg-white dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
}
