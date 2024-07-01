import ItemTable from "@/components/ItemTable";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  console.log(searchParams?.query);
  return (
    <main>
      <SearchBar />
      <Suspense>
        <ItemTable />
      </Suspense>
    </main>
  );
}
