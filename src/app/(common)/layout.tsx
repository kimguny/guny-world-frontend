import Layout from "@/components/Layout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  // 사이드바가 있는 레이아웃
  return <Layout>{children}</Layout>;
}
