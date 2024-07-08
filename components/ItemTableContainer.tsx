import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const ItemtableContainer = ({
  TableContent,
}: {
  TableContent: React.ReactNode;
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">タイトル</TableHead>
          <TableHead className="text-center">ユーザID</TableHead>
          <TableHead className="md:table-cell hidden text-center">URL</TableHead>
        </TableRow>
      </TableHeader>
      {TableContent}
    </Table>
  );
};

export default ItemtableContainer;
