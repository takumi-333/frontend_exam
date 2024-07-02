"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import React from "react";

const BackButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <button 
        className="bg-gray-200 hover:bg-gray-300 rounded-sm lg:text-2xl text-xl w-fit"
        type="button"
        onClick={handleClick}>
            <IoMdArrowRoundBack/>
        </button>
    )
};

export default BackButton;