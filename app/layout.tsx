import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "My Qiita",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Header />
        <div className="container mt-14 pt-5 pb-5">{children}</div>
      </body>
    </html>
  );
}
