"use client";

import QueryClientProvider from "@/provider/QueryClientProvider";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { RecoilRoot } from "recoil";
import React from "react";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <QueryClientProvider>
          <DarkModeProvider>
            <body>{children}</body>
          </DarkModeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </html>
  );
}
