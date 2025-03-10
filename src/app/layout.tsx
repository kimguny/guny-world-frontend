import ClientProviders from "@/provider/ClientProviders";
import React from "react";

import "ag-grid-community/styles/ag-grid.css";

import "ag-grid-community/styles/ag-theme-alpine.css";

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
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
