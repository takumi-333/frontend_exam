"use client";

import ItemTableContent from "@/components/ItemTableContent";
import { QiitaItem, Query } from "@/type";
import SearchBar from "./_components/SearchBar";
import React, { useEffect, useState } from "react";
import ApiKeyModal from "@/components/ApiKeyModal";
import TableSkeleton from "@/components/TableSkeleton";
import PrevButton from "./_components/PrevButton";
import NextButton from "./_components/NextButton";
import ItemtableContainer from "@/components/ItemTableContainer";
import { fetchItems } from "@/actions/items.action";
import { useRecoilValue } from "recoil";
import { apiKeyState } from "../state/apiKeyState";

export default function Home() {
  const initialQuery: Query = {
    numPage: 1,
  };
  const [itemDatas, setItemDatas] = useState<QiitaItem[]>([]);
  const [query, setQuery] = useState<Query>(initialQuery);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const apiKey = useRecoilValue(apiKeyState);

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetchItems(query, apiKey)
      .then((itemDatas) => {
        setItemDatas(itemDatas);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
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

  return (
    <main>
      <div className="flex flex-col gap-2">
        <div className="flex flex-raw">
          <SearchBar onSearch={handleSearch} />
          <div className="flex justify-items-end">
            <ApiKeyModal />
          </div>
        </div>
        {error ? (
          <div className="text-red-500 text-base flex my-2">
            Error: cannnot get datas
          </div>
        ) : (
          !loading &&
          itemDatas.length == 0 && (
            <div className="text-red-500 text-base flex my-2">No datas...</div>
          )
        )}
        <ItemtableContainer
          TableContent={
            error ? (
              <></>
            ) : loading ? (
              <TableSkeleton />
            ) : (
              <ItemTableContent itemDatas={itemDatas} />
            )
          }
        />
        {loading || error ? (
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
