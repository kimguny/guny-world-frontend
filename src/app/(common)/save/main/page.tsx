import dynamic from "next/dynamic";
import React from "react";

const Main = dynamic(() => import("@/components/main/Main"));

export default function MainPage() {
  return (
    <>
      <Main />
    </>
  );
}
