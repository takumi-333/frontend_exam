import React from "react";
import { CardContent } from "./ui/card";
import ReactMarkDown from "react-markdown";

const ItemBody = ({body}: {body:string}) => {
    return (
        <CardContent className="markdown">
            <ReactMarkDown>{body}</ReactMarkDown>
        </CardContent>
    )
};

export default ItemBody;