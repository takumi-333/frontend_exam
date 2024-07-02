"use client";

import ItemTable from "@/components/ItemTable";
import { QiitaItem, Query } from "@/type";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { fetchItems } from "@/actions/items.action";
import Modal from "@/components/Modal";

export default function Home() {
  const initialQuery: Query = {
    numPage: 1,
  };
  const [itemDatas, setItemDatas] = useState<QiitaItem[]>([]);
  const [query, setQuery] = useState<Query>(initialQuery);
  const [apiKey, setApiKey] = useState<string>("");

  useEffect(() => {
    fetchItems(query, apiKey).then(setItemDatas);
  }, [query]);

  const handleSearch = (newQuery: Query) => {
    setQuery(newQuery);
  };

  const handleRegister = (newApiKey: string) => {
    setApiKey(newApiKey);
  };

  return (
    <main>
      <SearchBar onSearch={handleSearch} />
      <Modal onRegister={handleRegister} />
      <Suspense>
        <ItemTable itemDatas={itemDatas} />
      </Suspense>
    </main>
  );
}
