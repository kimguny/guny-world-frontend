import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">페이지가 존재하지 않습니다.</h2>
      <h3 className="text-xl">
        <Link href={"/save/main"} className="text-blue-500 hover:underline">
          돌아가기 →
        </Link>
      </h3>
    </div>
  );
}
