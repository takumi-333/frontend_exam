'use client';

import { usePathname, useSearchParams, useRouter} from "next/navigation";
import React, { ChangeEvent, useState } from "react";

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
        <div className="w-full">
            <input 
                className="placeholder:text-gray-500 outline-2 text-sm rounded-sm "
                type="text" 
                value={query}
                onChange={handleInputChange} 
                placeholder="タイトル・キーワード・ユーザ名を入力"
            />
            <button onClick={handleSearch}>検索</button>
        </div>
    );
}

export default SearchBar;