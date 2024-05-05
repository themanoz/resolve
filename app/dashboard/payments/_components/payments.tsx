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
  applicationID: number;
  fromDate: Date;
  toDate: Date;
  total: number;
  dueAmount: number;
  label: string;
};

const data: Payments[] = [
  {
    id: "m5gr84i9",
    applicationID: 12324,
    fromDate: new Date("2017-04-24"),
    toDate: new Date("2018-04-24"),
    total: 36000,
    dueAmount: 0,
    label: "Paid",
  },
  {
    id: "m5gr84i9",
    applicationID: 12324,
    fromDate: new Date("2018-04-24"),
    toDate: new Date("2019-04-24"),
    total: 36000,
    dueAmount: 0,
    label: "Unpaid",
  },
  {
    id: "m5gr84i9",
    applicationID: 12324,
    fromDate: new Date("2018-04-24"),
    toDate: new Date("2019-04-24"),
    total: 36000,
    dueAmount: 0,
    label: "Unpaid",
  },
  {
    id: "m5gr84i9",
    applicationID: 12324,
    fromDate: new Date("2018-04-24"),
    toDate: new Date("2019-04-24"),
    total: 36000,
    dueAmount: 0,
    label: "Unpaid",
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
    accessorKey: "applicationID",
    header: "Applicant ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("applicationID")}</div>
    ),
  },
  {
    accessorKey: "fromDate",
    header: "From Date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("fromDate")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "toDate",
    header: "To Date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("toDate")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("total")}</div>
    ),
  },
  {
    accessorKey: "dueAmount",
    header: "Due Amount",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("dueAmount")}</div>
    ),
  },
  {
    accessorKey: "label",
    header: "Status",
    cell: ({ row }) => {
      const label = row.getValue("label") as string;
      let badgeVariant;
      let labelColor;

      switch (label) {
        case "Paid":
          badgeVariant = "outline";
          labelColor = "text-green-400";
          break;
        case "Unpaid":
          badgeVariant = "outline";
          labelColor = "text-red-400";
          break;
      }

      return (
        <Badge
          variant={
            badgeVariant as "default" | "outline" | "destructive" | "secondary"
          }
          className="text-center"
        >
          <span className={labelColor}>{label}</span>
        </Badge>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
          <>
            <ViewDetails  appilcationID={20190000000}/>
          </>
      );
    },
  },
];

export function PaymentsEngieering() {
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
        <div className="flex items-center justify-end space-x-2 pt-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
