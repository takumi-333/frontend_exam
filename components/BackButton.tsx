"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import React from "react";
import { Button } from "./ui/button";

const BackButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <Button
           variant="outline"
           size="icon" 
           onClick={handleClick}>
            <IoMdArrowRoundBack className="h-4 w-4"/>
        </Button>
    )
};

export default BackButton;