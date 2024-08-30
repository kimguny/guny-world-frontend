import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ChzzkResponse, FetchFollowersParams } from "@/types/chzzk";
import { useChzzk } from "@/api/client/useChzzk";

export default function useChzzkMutation(
  onSuccessCallback?: (data: ChzzkResponse) => void,
): UseMutationResult<ChzzkResponse, unknown, FetchFollowersParams, unknown> {
  return useMutation<ChzzkResponse, unknown, FetchFollowersParams>({
    mutationFn: useChzzk,
    onSuccess: (data) => {
      onSuccessCallback?.(data);
    },
    onError: (error) => {
      alert(error);
    },
  });
}
