import Items from "@/components/Items";
import React from "react";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense>
        <Items />
      </Suspense>
    </main>
  );
}
