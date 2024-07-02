import { fetchItem } from "@/actions/items.action";
import { QiitaItem } from "@/type";
import React from "react";
import ItemTitle from "./ItemTitle";
import ItemBody from "./ItemBody";
import { Card } from "../ui/card";

const ItemContainer = async ({id} : {id: string}) => {
    const itemData: QiitaItem = await fetchItem(id);
    return (
        <Card>
            <ItemTitle title={itemData.title}/>
            <ItemBody body={itemData.body}/>
        </Card>
    )
}

export default ItemContainer