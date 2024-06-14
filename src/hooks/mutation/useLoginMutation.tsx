import { getCookie, setCookie, removeCookie } from "@/utils/cookies";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "@/api/login";
import React from "react";

export default function useLoginMutation() {
  const mutate = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie("accessToken", data.accessToken, { path: "/" });
      localStorage.setItem("refreshToken", data.refreshToken);
    },
  });
  return mutate;
}
