import ItemTable from "@/components/ItemTable";
import { Query } from "@/type";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const query: Query = {
    numPage: 1,
    title: "Python",
    body: "AI",
  };
  console.log(searchParams?.query);
  return (
    <main>
      <SearchBar />
      <Suspense>
        <ItemTable query={query} />
      </Suspense>
    </main>
  );
}
