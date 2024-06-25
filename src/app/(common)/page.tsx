"use client";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import React, { useEffect } from "react";

export default function Page() {
  const [cookies] = useCookies();
  const router = useRouter();

  useEffect(() => {
    if (cookies.accessToken) {
      router.push("/save/main");
    } else {
      router.push("/login");
    }
  }, [cookies.accessToken, router]);

  return <></>;
}
