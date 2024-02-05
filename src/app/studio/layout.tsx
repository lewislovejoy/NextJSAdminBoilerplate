'use client'

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.StrictMode>
      <body className={inter.className}>{children}</body>
    </React.StrictMode>
  );
}
