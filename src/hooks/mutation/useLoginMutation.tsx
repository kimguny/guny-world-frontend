import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { login } from "@/api/login";
import React from "react";

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
