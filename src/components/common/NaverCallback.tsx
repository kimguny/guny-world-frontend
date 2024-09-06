"use client";

import { useRouter } from "next/navigation";
import { setCookie } from "@/utils/cookies";
import { useEffect } from "react";

export default function NaverCallback() {
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const accessToken = query.get("accessToken");
    const refreshToken = query.get("refreshToken");

    if (accessToken && refreshToken) {
      setCookie("accessToken", accessToken, { path: "/" });
      localStorage.setItem("refreshToken", refreshToken);

      router.push("/save/main");
    } else {
      alert("잘못된 접근입니다.");
      router.push("/login");
    }
  }, [router]);

  return null;
}
