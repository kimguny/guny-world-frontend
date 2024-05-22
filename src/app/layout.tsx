import React from "react";
import QueryClientProvider from "@/provider/QueryClientProvider";
import { DarkModeProvider } from "@/context/DarkModeContext";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <QueryClientProvider>
        <DarkModeProvider>
          <body>{children}</body>
        </DarkModeProvider>
      </QueryClientProvider>
    </html>
  );
}
