import { QiitaItem } from "@/type";
import React from "react";
import ItemTitle from "./ItemTitle";
import ItemBody from "./ItemBody";
import { Card } from "../ui/card";

const ItemContainer = ({itemData}: {itemData?: QiitaItem}) => {
    return (
        <Card>
            {itemData && (
                <>
                    <ItemTitle title={itemData.title}/>
                    <ItemBody body={itemData.body}/>
                </>
            )}
        </Card>
    )
}

export default ItemContainer