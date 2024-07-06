"use client";

import { Query } from "@/type";
import React, { ChangeEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = ({ onSearch }: { onSearch: (query: Query) => void }) => {
  const [keyword, setKeyword] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const handleKeywordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleUserIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleSearch = () => {
    const query: Query = {
      numPage: 1,
      title: keyword ? keyword : undefined,
      body: keyword ? keyword : undefined,
      userId: userId ? userId : undefined,
    };
    onSearch(query);
  };

  return (
    <div className="w-full flex flex-raw items-center gap-2">
      <Input
        type="text"
        className="w-1/3"
        value={keyword}
        onChange={handleKeywordInputChange}
        placeholder="キーワードで検索"
      />
      <Input
        type="text"
        className="w-1/3"
        value={userId}
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
