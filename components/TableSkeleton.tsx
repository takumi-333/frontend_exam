import {  TableRow, TableBody, TableCell } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TableSkeleton = () => {
  return (
        <TableBody>
          {[...Array(5)].map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="h-4 w-[80px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[80px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[80px]" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-4 w-[80px]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
  )
}

export default TableSkeleton;