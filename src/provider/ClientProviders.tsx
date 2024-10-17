"use client";

import QueryClientProvider from "@/provider/QueryClientProvider";
import RecoilRootProvider from "@/provider/RecoilRootProvider";
import { DarkModeProvider } from "@/context/DarkModeContext";
import React from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRootProvider>
      <QueryClientProvider>
        <DarkModeProvider>{children}</DarkModeProvider>
      </QueryClientProvider>
    </RecoilRootProvider>
  );
}
