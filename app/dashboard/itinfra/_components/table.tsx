"use client";
import * as React from "react";
import { ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type Certificates = {
  id: string;
  serialNo: number;
  certificates: string;
  issuedDate: Date;
  returnedDate: Date;
  status: string;
};

const data: Certificates[] = [
  {
    id: "m5gr84i9",
    serialNo: 1,
    certificates: "OS Problem",
    issuedDate: new Date("2023-04-12"),
    returnedDate: new Date("2023-04-24"),
    status: "Resolved",
  },
  {
    id: "3u1reuv4",
    serialNo: 2,
    certificates: "Battery Backup Problem",
    issuedDate: new Date("2023-05-08"),
    returnedDate: new Date("2023-05-22"),
    status: "Pending",
  },
  {
    id: "derv1ws0",
    serialNo: 3,
    certificates: "Screen Broken",
    issuedDate: new Date("2023-06-15"),
    returnedDate: new Date("2023-07-03"),
    status: "Pending",
  },
  {
    id: "5kma53ae",
    serialNo: 4,
    certificates: "Motherboard Problem",
    issuedDate: new Date("2023-07-21"),
    returnedDate: new Date("2023-08-05"),
    status: "Can't Resolve",
  },
  {
    id: "bhqecj4p",
    serialNo: 5,
    certificates: "Black Screen",
    issuedDate: new Date("2023-08-30"),
    returnedDate: new Date("2023-09-15"),
    status: "Pending",
  },
  {
    id: "plm1okn2",
    serialNo: 6,
    certificates: "Keyboard Issue",
    issuedDate: new Date("2023-09-05"),
    returnedDate: new Date("2023-09-19"),
    status: "Resolved",
  },
];

export const columns: ColumnDef<Certificates>[] = [
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
    accessorKey: "serialNo",
    header: "Serial No",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("serialNo")}</div>
    ),
  },
  {
    accessorKey: "certificates",
    header: "Certificates",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("certificates")}</div>
    ),
  },
  {
    accessorKey: "issuedDate",
    header: "Issued Date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("borrowedDate")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "returnedDate",
    header: "Returned Date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("returnedDate")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const label = row.getValue("status") as string;
      let badgeVariant;
      let labelColor;

      switch (label) {
        case "Pending":
          badgeVariant = "outline";
          labelColor = "text-orange-400";
          break;
        case "Can't Resolve":
          badgeVariant = "outline";
          labelColor = "text-red-300";
          break;
        case "Resolved":
          badgeVariant = "outline";
          labelColor = "text-green-300";
          break;
        default:
          badgeVariant = "default";
          labelColor = "";
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
];

export function RepairsTable() {
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
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="w-4/12">
            <Input
              placeholder="Search Transactions..."
              value={
                (table.getColumn("certificates")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("certificates")
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-xl"
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
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
