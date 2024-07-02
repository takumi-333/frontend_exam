import { fetchItem } from "@/actions/items.action";
import { QiitaItem } from "@/type";
import React from "react";

const Item = async ({id} : {id: string}) => {
    const itemData: QiitaItem = await fetchItem(id);
    return (
        <div className="flex flex-col">
            <div>id: {itemData.id}</div>
            <div>title: {itemData.title}</div>
        </div>
    )
}

export default Item