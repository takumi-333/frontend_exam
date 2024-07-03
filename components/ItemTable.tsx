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
                <Link href={`/${itemData.id}`}>
                <button className="whitespace-nowrap relative h-12 overflow-hidden rounded-md border border-neutral-300 bg-transparent px-6 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:-translate-x-full before:bg-neutral-100 before:transition-transform hover:before:translate-x-0"><span className=" text-xs whitespace-nowarp relative">詳細</span></button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

export default ItemTable