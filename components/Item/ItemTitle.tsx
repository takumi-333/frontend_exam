import React from "react";
import { CardHeader, CardTitle } from "../ui/card";

const ItemTitle = ({title}: {title:string}) => {
    return (
        <CardHeader>
            <CardTitle className="font-bold lg:text-3xl md:text-2xl sm:text-xl border-b">
                {title}
            </CardTitle>
        </CardHeader>
    )
}

export default ItemTitle;