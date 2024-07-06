import { Table, TableHead, TableHeader, TableRow } from "./ui/table"
import React from "react";

const ItemtableContainer = ({TableContent} : {TableContent: React.ReactNode}) => {
    return (
        <Table>
        <TableHeader>
            <TableRow>
                <TableHead>タイトル</TableHead>
                <TableHead>ユーザID</TableHead>
                <TableHead>URL</TableHead>
            </TableRow>
        </TableHeader>
        {TableContent}
      </Table>
    )
};

export default ItemtableContainer;