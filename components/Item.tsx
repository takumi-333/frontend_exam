import { fetchItem } from "@/actions/items.action";
import { QiitaItem } from "@/type";
import React from "react";

const Item = async ({id} : {id: string}) => {
    const itemData: QiitaItem = await fetchItem(id);
    return (
        <div className="flex flex-col">
            <div className="w-1/3">id: {itemData.id}</div>
            <div className="w-1/3">title: {itemData.title}</div>
        </div>
    )
}

export default Item