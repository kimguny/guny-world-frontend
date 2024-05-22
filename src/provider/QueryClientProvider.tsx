"use client";
import { PropsWithChildren, useState } from "react";
import { QueryCache, QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function QueryClientProvider({ children }: PropsWithChildren) {
  const queryErrorHandler = (error: unknown): void => {
    let errorMessage = "Data loading failed";

    // console.log(errorMessage);
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
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false,
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
