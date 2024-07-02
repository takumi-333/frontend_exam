import React from "react";
import ReactMarkDown from "react-markdown";
import { CardContent } from "../ui/card";

const ItemBody = ({body}: {body:string}) => {
    return (
        <CardContent className="markdown">
            <ReactMarkDown>{body}</ReactMarkDown>
        </CardContent>
    )
};

export default ItemBody;