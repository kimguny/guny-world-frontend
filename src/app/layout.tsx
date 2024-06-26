import QueryClientProvider from "@/provider/QueryClientProvider";
import RecoilRootProvider from "@/provider/RecoilRootProvider";
import { DarkModeProvider } from "@/context/DarkModeContext";
import React from "react";

import "./globals.css";

export const metadata = {
  title: "Guny World",
  description: "Why",
  icons: {
    icon: "/체리.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRootProvider>
        <QueryClientProvider>
          <DarkModeProvider>
            <body>{children}</body>
          </DarkModeProvider>
        </QueryClientProvider>
      </RecoilRootProvider>
    </html>
  );
}
