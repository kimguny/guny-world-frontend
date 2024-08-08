import { getCookie, setCookie, removeCookie } from "@/utils/cookies";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "@/api/login";
import { AxiosError } from "axios";

export default function useLoginMutation() {
  const mutate = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie("accessToken", data.accessToken, { path: "/" });
      localStorage.setItem("refreshToken", data.refreshToken);
    },
    onError: (error: AxiosError) => {
      const errorMessage = (error.response?.data as { error: string }).error;
      alert(errorMessage || error.message);
    },
  });
  return mutate;
}
