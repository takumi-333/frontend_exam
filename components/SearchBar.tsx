'use client';

import { Query } from "@/type";
import React, { ChangeEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "./ui/input";

const SearchBar = ( { onSearch } : { onSearch : ( query : Query) => void}) => {
    const [keyword, setKeyword] = useState<string>("");
    const [userId, setUserId] = useState<string>("");

    const handleKeywordInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    const handleUserIdInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    }

    const handleSearch = () => {
        const query: Query = {
            numPage: 1,
            title: keyword?keyword:undefined,
            body: keyword?keyword:undefined,
            userId:userId?userId:undefined,
        }
        onSearch(query)
    }

    return (
        <div className="w-full flex flex-raw items-center gap-2">
            <Input
                type="text" 
                value={keyword}
                onChange={handleKeywordInputChange} 
                placeholder="キーワードで検索"
            />
            <Input
                type="text"
                value={userId}
                onChange={handleUserIdInputChange}
                placeholder="ユーザIDで検索"
            />
            <button onClick={handleSearch} className="bg-gray-200 hover:bg-gray-300 rounded-sm lg:text-2xl text-xl"><IoIosSearch/></button>
        </div>
    );
}

export default SearchBar;