"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Page() {
  const [cookies] = useCookies();
  const router = useRouter();

  useEffect(() => {
    if (cookies.token) {
      router.push("/save/main");
    } else {
      router.push("/login");
    }
  }, [cookies.token, router]);

  return <></>;
}
