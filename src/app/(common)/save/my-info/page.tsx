import dynamic from "next/dynamic";
import React from "react";

const MyInfoForm = dynamic(() => import("@/components/my-info/MyInfoForm"));

export default function MyInfo() {
  return (
    <>
      <div>
        <MyInfoForm />
      </div>
    </>
  );
}
