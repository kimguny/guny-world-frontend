import dynamic from "next/dynamic";
import React from "react";

const CheckFollow = dynamic(() => import("@/components/chzzk/CheckFollow"));
const ObsAlert = dynamic(() => import("@/components/chzzk/ObsAlert"));

export default function Chzzk() {
  return (
    <>
      <CheckFollow />
      {/* <ObsAlert /> */}
    </>
  );
}
