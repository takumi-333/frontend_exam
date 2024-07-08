import { QiitaItem } from "@/type";
import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Button } from "./ui/button";

const ItemTableContent = ({ itemDatas }: { itemDatas: QiitaItem[] }) => {
  return (
    <TableBody>
      {itemDatas.map((itemData) => (
        <TableRow key={itemData.id}>
          <TableCell className="w-1/4 font-semibold sm:text-base text-sm p-2 py-4">
            {itemData.title}
          </TableCell>
          <TableCell className="w-1/12 text-sm p-1 text-center">
            {itemData.user.id ? (
                <Link href={`/user/${itemData.user.id}`}>
                    <p className="hover:underline">@{itemData.user.id}</p>
                </Link>
              
            ) : (
              <p className="text-muted-foreground">不明</p>
            )}
          </TableCell>
          <TableCell className="w-1/12 p-1 items-center text-center md:table-cell hidden">
            <a
              className="text-sm whitespace-nowrap text-blue-600 hover:text-blue-400 hover:underline"
              href={itemData.url}
            >
              投稿
            </a>
          </TableCell>
          <TableCell className="w-1/12 p-1 text-center">
            <Button asChild variant="outline" className="sm:px-4 sm:py-2 px-2 py-1 text-xs">
              <Link href={`/${itemData.id}`}>詳細</Link>
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ItemTableContent;
