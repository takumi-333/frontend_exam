"use client";

import { Query } from "@/type";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRecoilState } from "recoil";
import { queryState } from "@/app/state/queryState";

const SearchBar = () => {
  const [query, setQuery] = useRecoilState(queryState);
  const [keyword, setKeyword] = useState<string>(query.body ? query.body : "");
  const [userId, setUserId] = useState<string>(
    query.userId ? query.userId : "",
  );
  const handleKeywordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleUserIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleSearch = () => {
    const newQuery: Query = {
      numPage: 1,
      title: keyword ? keyword : undefined,
      body: keyword ? keyword : undefined,
      userId: userId ? userId : undefined,
    };
    setQuery(newQuery);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full flex flex-raw items-center gap-2">
      <Input
        type="text"
        className="w-1/3"
        value={keyword}
        onKeyDown={handleKeyDown}
        onChange={handleKeywordInputChange}
        placeholder="キーワードで検索"
      />
      <Input
        type="text"
        className="w-1/3"
        value={userId}
        onKeyDown={handleKeyDown}
        onChange={handleUserIdInputChange}
        placeholder="ユーザIDで検索"
      />
      <Button onClick={handleSearch} variant="outline" size="icon">
        <IoIosSearch className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SearchBar;
