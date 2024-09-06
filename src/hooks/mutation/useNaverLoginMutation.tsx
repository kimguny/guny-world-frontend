import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { naverLogin } from "@/api/login";
import { AxiosError } from "axios";

export default function useNaverLoginMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutate = useMutation({
    mutationFn: naverLogin,
    onSuccess: (data) => {
      setCookie("accessToken", data.accessToken, { path: "/" });
      localStorage.setItem("refreshToken", data.refreshToken);

      setCookie("loginType", "naver", { path: "/" });

      queryClient.invalidateQueries({ queryKey: ["user"] });

      router.push("/save/main");
    },
    onError: (error: AxiosError) => {
      alert(error.message);
    },
  });

  return mutate;
}
