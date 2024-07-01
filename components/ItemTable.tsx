import { fetchItems } from "@/actions/items.action";
import { QiitaItem } from "@/type";
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const ItemTable = async () =>  {
    const itemDatas : QiitaItem[] = await fetchItems(4);

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>タイトル</TableHead>
            <TableHead>ユーザー名</TableHead>
            <TableHead>URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemDatas.map((itemData) => (
            <TableRow key={itemData.id}>
              <TableCell>{itemData.title}</TableCell>
              <TableCell>{itemData.user.name}</TableCell>
              <TableCell>{itemData.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

export default ItemTable