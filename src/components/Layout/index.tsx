import Sidebar from "./Sidebar";
import React from "react";
import "./index.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content dark:bg-gray-800">{children}</div>
    </div>
  );
}
