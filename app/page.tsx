import ItemTable from "@/components/ItemTable";
import { Query } from "@/type";
import React from "react";
import { Suspense } from "react";

export default function Home() {
  const query: Query = {
    numPage: 1,
    title: "Python",
    body: "AI",
  };

  return (
    <main>
      <Suspense>
        <ItemTable query={query} />
      </Suspense>
    </main>
  );
}
