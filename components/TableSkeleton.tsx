import { TableRow, TableBody, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TableSkeleton = () => {
  return (
    <TableBody>
      {[...Array(5)].map((_, i) => (
        <TableRow key={i}>
          <TableCell className="w-1/4">
            <Skeleton className="h-4" />
          </TableCell>
          <TableCell className="w-1/12">
            <Skeleton className="h-4" />
          </TableCell>
          <TableCell className="md:table-cell hidden w-1/12">
            <Skeleton className="h-4" />
          </TableCell>
          <TableCell className="text-right w-1/12">
            <Skeleton className="h-4" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableSkeleton;
