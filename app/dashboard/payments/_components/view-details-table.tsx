"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ViewDetails } from "./view-details";

export type Payments = {
  id: string;
  tutionFee: number;
  MTF: number;
  RTF: number;
  MTF_RTF: number;
  paidAmount: number;
  dateOfPayment: Date;
  due: number
  label: string;
};

const data: Payments[] = [
  {
    id: "m5gr84i9",
    tutionFee: 36000,
    MTF: 0,
    RTF: 25000,
    MTF_RTF: 25000,
    paidAmount: 11000,
    dateOfPayment: new Date("2017-04-24"),
    due: 0,
    label: "Paid",
  },
];

export const columns: ColumnDef<Payments>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "tutionFee",
    header:  "Tution Fee",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("tutionFee")}</div>
    ),
  },
  {
    accessorKey: "MTF",
    header:  "MTF released to college A/c",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("MTF")}</div>
    ),
  },
  {
    accessorKey: "RTF",
    header:  "RTF released to college A/c",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("RTF")}</div>
    ),
  },
  {
    accessorKey: "MTF_RTF",
    header:  "MTF+RTF released to college A/c",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("MTF_RTF")}</div>
    ),
  },
  {
    accessorKey: "paidAmount",
    header:  "Paid Amount",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("paidAmount")}</div>
    ),
  },

  {
    accessorKey: "dateOfPayment",
    header: "Payment Date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("dateOfPayment")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "due",
    header: "Due Amount",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("due")}</div>
    ),
  },
];

export function ViewDetailsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Card className="border-none">
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="[&:has([role=checkbox])]:pl-3"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="[&:has([role=checkbox])]:pl-3"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
