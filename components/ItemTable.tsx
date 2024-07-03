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
import Link from "next/link";
import { Button } from "./ui/button";

const ItemTable = async ({ itemDatas } : { itemDatas: QiitaItem[]}) =>  {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>タイトル</TableHead>
            <TableHead>ユーザID</TableHead>
            <TableHead>URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemDatas.map((itemData) => (
            <TableRow key={itemData.id}>
              <TableCell className="font-semibold text-base">{itemData.title}</TableCell>
              <TableCell>
                {itemData.user.id ? (
                    <p className="text-sm">{itemData.user.id}</p>
                ): (
                    <p className="text-sm text-muted-foreground">不明</p>
                )}
              </TableCell>
              <TableCell>
                <a className="text-sm whitespace-nowrap text-blue-600 hover:text-blue-400 hover:underline" href={itemData.url}>投稿ページ</a>
              </TableCell>
              <TableCell>
                <Button asChild variant="outline">
                    <Link href={`${itemData.id}`}>詳細</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

export default ItemTable