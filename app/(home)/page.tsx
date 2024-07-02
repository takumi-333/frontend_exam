"use client";

import ItemTable from "@/components/ItemTable";
import { QiitaItem, Query } from "@/type";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { fetchItems } from "@/actions/items.action";
import Modal from "@/components/Modal";
import { useApiKeyContext } from "@/components/providers/ApiKeyProvider";

export default function Home() {
  const initialQuery: Query = {
    numPage: 1,
  };
  const [itemDatas, setItemDatas] = useState<QiitaItem[]>([]);
  const [query, setQuery] = useState<Query>(initialQuery);
  const apiKeyValue = useApiKeyContext();

  useEffect(() => {
    fetchItems(query, apiKeyValue.state).then(setItemDatas);
  }, [query]);

  const handleSearch = (newQuery: Query) => {
    setQuery(newQuery);
  };

  const handleRegister = (newApiKey: string) => {
    apiKeyValue.setState(newApiKey);
  };

  return (
    <main>
        <div className="flex flex-col gap-2">
            <div className="flex flex-raw">
                <SearchBar onSearch={handleSearch} />
                <div className="flex justify-items-end">
                <Modal onRegister={handleRegister} />
                </div>
            </div>
            <Suspense>
                <ItemTable itemDatas={itemDatas} />
            </Suspense>
        </div>
    </main>
  );
}
