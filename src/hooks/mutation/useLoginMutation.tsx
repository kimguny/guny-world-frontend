import React from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/login";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export default function useLoginMutation() {
  const [, setCookies] = useCookies();

  const mutate = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookies("accessToken", data.accessToken, {
        path: "/",
      });
    },
  });
  return mutate;
}
