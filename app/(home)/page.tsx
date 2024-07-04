"use client";

import ItemTable from "@/components/ItemTable";
import { QiitaItem, Query } from "@/type";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { fetchItems } from "@/actions/items.action";
import Modal from "@/components/Modal";
import { useApiKeyContext } from "@/components/providers/ApiKeyProvider";
import TableSkeleton from "@/components/TableSkeleton";
import PrevButton from "@/components/PrevButton";
import NextButton from "@/components/NextButton";

export default function Home() {
  const initialQuery: Query = {
    numPage: 1,
  };
  const [itemDatas, setItemDatas] = useState<QiitaItem[]>([]);
  const [query, setQuery] = useState<Query>(initialQuery);
  const [loading, setLoading] = useState<boolean>(false);
  const apiKeyValue = useApiKeyContext();

  useEffect(() => {
    setLoading(true);
    fetchItems(query, apiKeyValue.state).then((itemDatas) => {
      setItemDatas(itemDatas);
      setLoading(false);
    });
  }, [query]);

  const handleSearch = (newQuery: Query) => {
    setQuery(newQuery);
  };

  const handlePage = (n: number) => {
    const newQuery = structuredClone(query);
    newQuery.numPage += n;
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
          {loading ? <TableSkeleton /> : <ItemTable itemDatas={itemDatas} />}
        </Suspense>
        {loading ? (
          <></>
        ) : (
          <div className="flex justify-between">
            {query.numPage > 1 ? (
              <div className="flex-1">
                <PrevButton onPrev={handlePage} />
              </div>
            ) : (
              <div className="flex-1"></div>
            )}
            {query.numPage < 100 && itemDatas.length != 0 ? (
              <div className="flex-1 text-right">
                <NextButton onNext={handlePage} />
              </div>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
