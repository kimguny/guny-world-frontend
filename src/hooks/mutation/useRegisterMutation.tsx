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
      alert(error.message);
    },
  });

  return mutate;
}
