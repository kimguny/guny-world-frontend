import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/register";
import { useRouter } from "next/navigation";

export default function useRegisterMutation() {
  const router = useRouter();

  const mutate = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      alert("회원가입 완료되었습니다.");
      router.push("/login");
    },
  });

  return mutate;
}
