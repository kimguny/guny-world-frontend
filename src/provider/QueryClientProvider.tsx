"use client";
import { PropsWithChildren, useState } from "react";
import { QueryCache, QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function QueryClientProvider({ children }: PropsWithChildren) {
  const queryErrorHandler = (error: unknown): void => {
    let errorMessage = "Data loading failed";
  };

  const mutationErrorHandler = (error: any): void => {
    if (error.response?.data?.message) {
      alert(error.response?.data?.message as string);
    }
  };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false, // 재연결 시 다시 가져오지 않음
            refetchOnWindowFocus: false, // 윈도우 포커스 시 다시 가져오지 않음
            retry: false, // 실패 시 다시 시도하지 않음
          },
          mutations: {
            onError: mutationErrorHandler,
          },
        },
        queryCache: new QueryCache({
          onError: queryErrorHandler,
        }),
      })
  );

  return <Provider client={queryClient}>{children}</Provider>;
}
