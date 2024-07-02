import { fetchItem } from "@/actions/items.action";
import { QiitaItem } from "@/type";
import React from "react";
import { Card } from "./ui/card";
import ItemTitle from "./ItemTitle";
import ItemBody from "./ItemBody";

const Item = async ({id} : {id: string}) => {
    const itemData: QiitaItem = await fetchItem(id);
    return (
        <Card>
            <ItemTitle title={itemData.title}/>
            <ItemBody body={itemData.rendered_body}/>
        </Card>
    )
}

export default Item