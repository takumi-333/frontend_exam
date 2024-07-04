import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Button } from "./ui/button";

const NextButton = ({onNext} : {onNext: (n:number)=>void}) => {
    const handleNext = () => {
        onNext(1);
    }

    return (
        <Button variant="outline" size="icon" onClick={handleNext}>
            <MdNavigateNext className="h-4 w-4"/>
        </Button>
    );
};

export default NextButton;