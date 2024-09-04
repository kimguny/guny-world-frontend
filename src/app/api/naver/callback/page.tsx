"use client";

import useNaverLoginMutation from "@/hooks/mutation/useNaverLoginMutation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NaverCallback() {
  const router = useRouter();
  const { mutate: postNaverLogin } = useNaverLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");

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

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return null;
}
