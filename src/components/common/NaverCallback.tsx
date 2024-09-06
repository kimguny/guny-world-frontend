"use client";

import useNaverLoginMutation from "@/hooks/mutation/useNaverLoginMutation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NaverCallback() {
  const router = useRouter();
  const { mutate: postNaverLogin } = useNaverLoginMutation();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get("code");
    const state = query.get("state");

    if (code && state) {
      postNaverLogin({ code, state });
    } else {
      alert("잘못된 접근입니다.");
      router.push("/login");
    }
  }, [postNaverLogin, router]);

  return null;
}
