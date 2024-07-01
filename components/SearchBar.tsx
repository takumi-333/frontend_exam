'use client';

import { usePathname, useSearchParams, useRouter} from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    const [query, setQuery] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);
        if (query) params.set('query', query);
        else params.delete('query');
        router.replace(`${pathName}?${params.toString()}`);
    }

    return (
        <div className="w-full flex flex-raw items-center gap-2">
            <input 
                className="placeholder:text-gray-500 border border-gray-200 outline-2 text-sm rounded-sm w-1/2"
                type="text" 
                value={query}
                onChange={handleInputChange} 
                placeholder="タイトル・キーワード・ユーザ名を入力"
            />
            <button onClick={handleSearch} className="bg-gray-200 hover:bg-gray-300 rounded-sm lg:text-2xl text-xl"><IoIosSearch/></button>
        </div>
    );
}

export default SearchBar;