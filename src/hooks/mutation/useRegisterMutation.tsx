import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { register } from "@/api/register";
import { AxiosError } from "axios";

export default function useRegisterMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutate = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      alert(data.message);

      queryClient.invalidateQueries({ queryKey: ["user"] });

      router.push("/login");
    },
    onError: (error: AxiosError) => {
      const errorMessage =
        (error.response?.data as { error?: string })?.error ||
        "알 수 없는 에러가 발생했습니다.";
      alert(errorMessage);
    },
  });

  return mutate;
}
