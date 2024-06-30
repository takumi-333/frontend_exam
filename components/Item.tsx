import { QiitaItem } from "@/type";
import React from "react";

const Item = ({item} : {item: QiitaItem}) => {
    if (!item) return null;

    return (
        <div className="flex">
            <div className="w-1/3">{item.id}</div>
            <div className="w-1/3">{item.title}</div>
        </div>
    )
}

export default Item