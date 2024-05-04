"use client"
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
import { History, SendToBack } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

export type Books = {
  id: string;
  bookID: number;
  bookName: string;
  borrowedDate: Date;
  returnedDate: Date;
  dueDate: Date;
  label: string;
};

const data: Books[] = [
  {
    id: "m5gr84i9",
    bookID: 12324,
    bookName: "Physics",
    borrowedDate: new Date("2023-04-12"),
    returnedDate: new Date("2023-04-24"),
    dueDate: new Date("2023-04-28"),
    label: "Returned",
  },
  {
    id: "3u1reuv4",
    bookID: 54321,
    bookName: "Chemistry",
    borrowedDate: new Date("2023-05-08"),
    returnedDate: new Date("2023-05-22"),
    dueDate: new Date("2023-06-05"),
    label: "Not Returned",
  },
  {
    id: "derv1ws0",
    bookID: 98765,
    bookName: "Biology",
    borrowedDate: new Date("2023-06-15"),
    returnedDate: new Date("2023-07-03"),
    dueDate: new Date("2023-07-10"),
    label: "Returned",
  },
  {
    id: "5kma53ae",
    bookID: 24680,
    bookName: "Mathematics",
    borrowedDate: new Date("2023-07-21"),
    returnedDate: new Date("2023-08-05"),
    dueDate: new Date("2023-08-12"),
    label: "Returned",
  },
  {
    id: "bhqecj4p",
    bookID: 13579,
    bookName: "History",
    borrowedDate: new Date("2023-08-30"),
    returnedDate: new Date("2023-09-15"),
    dueDate: new Date("2023-09-25"),
    label: "Not Returned",
  },
  {
    id: "plm1okn2",
    bookID: 80246,
    bookName: "Geography",
    borrowedDate: new Date("2023-09-05"),
    returnedDate: new Date("2023-09-19"),
    dueDate: new Date("2023-09-26"),
    label: "Returned",
  },
  // {
  //   id: "qrt5yhu3",
  //   bookID: 97531,
  //   bookName: "English Literature",
  //   borrowedDate: new Date("2023-10-12"),
  //   returnedDate: new Date("2023-10-26"),
  //   dueDate: new Date("2023-11-02"),
  //   label: "Returned",
  // },
  // {
  //   id: "vbn6jkl4",
  //   bookID: 68204,
  //   bookName: "Computer Science",
  //   borrowedDate: new Date("2023-11-18"),
  //   returnedDate: new Date("2023-12-02"),
  //   dueDate: new Date("2023-12-09"),
  //   label: "Not Returned",
  // },
  // {
  //   id: "zxc7qwe5",
  //   bookID: 31927,
  //   bookName: "Economics",
  //   borrowedDate: new Date("2023-12-25"),
  //   returnedDate: new Date("2024-01-10"),
  //   dueDate: new Date("2024-01-20"),
  //   label: "Returned",
  // },
  // {
  //   id: "rty8fgh6",
  //   bookID: 46093,
  //   bookName: "Art",
  //   borrowedDate: new Date("2024-01-08"),
  //   returnedDate: new Date("2024-01-22"),
  //   dueDate: new Date("2024-02-05"),
  //   label: "Returned",
  // },
];

export const columns: ColumnDef<Books>[] = [
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
    accessorKey: "bookID",
    header: "Book ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bookID")}</div>
    ),
  },
  {
    accessorKey: "bookName",
    header: "Book Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bookName")}</div>
    ),
  },
  {
    accessorKey: "borrowedDate",
    header: "Borrowed Date",
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
    accessorKey: "dueDate",
    header: "Due date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("dueDate")).toLocaleDateString()}
      </div>
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
        case "Returned":
          badgeVariant = "outline";
          labelColor = "text-green-400";
          break;
        case "Not Returned":
          badgeVariant = "destructive";
          labelColor = "text-slate-300";
          break;
        default:
          badgeVariant = "default";
          labelColor = "";
      }

      return (
        <Badge variant={badgeVariant as "default" | "outline" | "destructive" | "secondary"} className="text-center">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-center">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <SendToBack className="mr-2 h-4 w-4 " />
              <span> Return</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History className="mr-2 h-4 w-4" />
              <span>Renew</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];


export function TransactionsReviewTable() {
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
          <CardTitle className="pl-px">Books List</CardTitle>
          <div className="flex gap-3">
            <div>
              <Input
                placeholder="Search Transactions..."
                value={
                  (table.getColumn("status")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("status")?.setFilterValue(event.target.value)
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
