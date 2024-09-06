import { getCookie, setCookie, removeCookie } from "@/utils/cookies";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "@/api/login";
import { AxiosError } from "axios";

export default function useLoginMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutate = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie("accessToken", data.accessToken, { path: "/" });
      localStorage.setItem("refreshToken", data.refreshToken);

      setCookie("loginType", "normal", { path: "/" });

      queryClient.invalidateQueries({ queryKey: ["user"] });

      router.push("/save/main");
    },
    onError: (error: AxiosError) => {
      alert(error.message);
    },
  });
  return mutate;
}
