import { getCookie, setCookie, removeCookie } from "@/utils/cookies";
import { useMutation } from "@tanstack/react-query";
import { useChzzk } from "@/api/client/useChzzk";
import { useRouter } from "next/navigation";

export default function useChzzkMutation() {
  const mutate = useMutation({
    mutationFn: useChzzk,
    onSuccess: (data) => {},
  });
  return mutate;
}
