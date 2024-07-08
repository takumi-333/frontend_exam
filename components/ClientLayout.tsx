"use client";

import React from "react";
import Header from "@/components/Header";
import { RecoilRoot } from "recoil";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <RecoilRoot>
        <div className="container mt-14 py-10 lg:px-32 px-10">{children}</div>
      </RecoilRoot>
    </>
  );
}
