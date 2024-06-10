import { useMutation } from "@tanstack/react-query";
import { userInfo } from "@/api/client/userInfo";
import { useRouter } from "next/navigation";

export default function useUserInfoMutation() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: userInfo,
    onSuccess: (data) => {},
    onError: (error) => {},
  });

  return mutation;
}
