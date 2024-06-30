import { fetchItems } from "@/actions/items.action";
import { QiitaItem } from "@/type";
import React from "react";
import Item from "./Item";

const Items = async () => {
    const itemDatas : QiitaItem[] = await fetchItems(4);

    return(
        <div className = "flex flex-col gap-2">
            {itemDatas.map((itemData) => {
                return <Item key={itemData.id} item={itemData}/>;
            })} 
        </div>
    )
}

export default Items