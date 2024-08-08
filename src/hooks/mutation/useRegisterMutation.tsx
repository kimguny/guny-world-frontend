import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { register } from "@/api/register";
import { AxiosError } from "axios";

export default function useRegisterMutation() {
  const router = useRouter();

  const mutate = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      alert(data.message);
      router.push("/login");
    },
    onError: (error: AxiosError) => {
      const errorMessage = (error.response?.data as { error: string }).error;
      alert(errorMessage);
    },
  });

  return mutate;
}
