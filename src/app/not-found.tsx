import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <h2>아직 개발중이거나 찾을 수 없는 페이지입니다.</h2>
      <h3>
        <Link href={"/save/main"}>돌아가기 →</Link>
      </h3>
    </>
  );
}
