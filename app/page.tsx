"use client";

import ItemTable from "@/components/ItemTable";
import { QiitaItem, Query } from "@/type";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { fetchItems } from "@/actions/items.action";

export default function Home() {
  const initialQuery: Query = {
    numPage: 1,
  };
  const [itemDatas, setItemDatas] = useState<QiitaItem[]>([]);
  const [query, setQuery] = useState<Query>(initialQuery);

  useEffect(() => {
    fetchItems(query).then(setItemDatas);
  }, [query]);

  const handleSearch = (newQuery: Query) => {
    setQuery(newQuery);
  };

  return (
    <main>
      <SearchBar onSearch={handleSearch} />
      <Suspense>
        <ItemTable itemDatas={itemDatas} />
      </Suspense>
    </main>
  );
}
