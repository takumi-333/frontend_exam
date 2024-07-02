import React from "react";
import { CardContent } from "./ui/card";

const ItemBody = ({body}: {body:string}) => {
    return (
        <CardContent className="content">
            {body}
        </CardContent>
    )
};

export default ItemBody;