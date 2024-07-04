import React from "react";
import { MdNavigateBefore } from "react-icons/md";
import { Button } from "./ui/button";

const PrevButton = ({onPrev} : {onPrev: (n:number)=>void}) => {
    const handlePrev = () => {
        onPrev(-1);
    }

    return (
        <Button variant="outline" size="icon" onClick={handlePrev}>
            <MdNavigateBefore className="h-4 w-4"/>
        </Button>
    );
};

export default PrevButton;