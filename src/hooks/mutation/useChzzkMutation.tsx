import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ChzzkResponse, FetchFollowersParams } from "@/types/chzzk";
import { useChzzk } from "@/api/client/useChzzk";
import { AxiosError } from "axios";

export default function useChzzkMutation(
  onSuccessCallback?: (data: ChzzkResponse) => void,
): UseMutationResult<ChzzkResponse, AxiosError, FetchFollowersParams, unknown> {
  return useMutation<ChzzkResponse, AxiosError, FetchFollowersParams>({
    mutationFn: useChzzk,
    onSuccess: (data) => {
      onSuccessCallback?.(data);
    },
    onError: (error) => {
      const errorMessage =
        (error.response?.data as { error?: string })?.error ||
        "알 수 없는 에러가 발생했습니다.";
      alert(errorMessage);
    },
  });
}
