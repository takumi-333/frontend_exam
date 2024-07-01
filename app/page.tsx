import ItemTable from "@/components/ItemTable";
import React from "react";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense>
        <ItemTable />
      </Suspense>
    </main>
  );
}
