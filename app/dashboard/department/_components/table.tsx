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
import {
  ArrowRightLeftIcon,
  Building,
  Car,
  Check,
  Divide,
  FileImage,
  FileText,
  FileVideo,
  Image,
  Mail,
  MessageSquare,
  PlusCircle,
  Repeat2,
  ShoppingCartIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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

export type Complaints = {
  id: string;
  serialNo :number;
  complaint: string;
  postedDate: Date;
  label: string;
  status: string;
};

const data: Complaints[] = [
  {
    id: "m5gr84i9",
    serialNo: 1,
    complaint: "Hygiene Issue",
    postedDate: new Date("2023-09-05"),
    label: "Image",
    status: "Resolved"
  },
  {
    id: "m5gr84i9",
    serialNo: 2,
    complaint: "Mess Issue",
    postedDate: new Date("2023-12-05"),
    label: "Video",
    status: "Can't Resolve"
  },
  {
    id: "m5gr84i9",
    serialNo: 3,
    complaint: "Hostel Issue",
    postedDate: new Date("2023-02-05"),
    label: "Document",
    status: "Pending"
  },
  {
    id: "m5gr84i9",
    serialNo: 4,
    complaint: "Electrical Ports Issue",
    postedDate: new Date("2023-12-05"),
    label: "Image",
    status: "Resolved"
  },
  {
    id: "m5gr84i9",
    serialNo: 5,
    complaint: "Food Issue",
    postedDate: new Date("2024-01-06"),
    label: "Video",
    status: "Pending"
  },
];


const labelToIconMap = {
  Image: <FileImage />,
  Video: <FileVideo />,
  Document: <FileText />,
  Food: <ShoppingCartIcon />,
};

const getIconForLabel = (label: string) => {
  // @ts-ignore
  return labelToIconMap[label] || null; 
};

export const columns: ColumnDef<Complaints>[] = [
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
    header: "S.No",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("serialNo")}</div>
    ),
  },
  {
    accessorKey: "complaint",
    header: "Complaint",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("complaint")}</div>
    ),
  },
  {
    accessorKey: "postedDate",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row.getValue("postedDate")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "label",
    header: "Attachments",
    cell: ({ row }) => {
      const label = row.getValue("label") as string;
      let badgeVariant;
      const icon = getIconForLabel(label);
      let labelColor;

      switch (label) {
        case "Image":
          badgeVariant = "outline";
          labelColor = "text-purple-400";
          break;
        case "Video":
          badgeVariant = "outline";
          labelColor = "text-red-400";
          break;
        case "Document":
          badgeVariant = "outline";
          labelColor = "text-orange-300";
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
          className="text-center gap-2 p-1 px-3"
        >
          {icon && React.cloneElement(icon, { className: `h-4 w-4 ${labelColor}` })}
          <span className={labelColor}>{label}</span>
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const label = row.getValue("status") as string;
      let badgeVariant;
      const icon = getIconForLabel(label);
      let labelColor;

      switch (label) {
        case "Resolved":
          badgeVariant = "outline";
          labelColor = "text-green-400";
          break;
        case "Can't Resolve":
          badgeVariant = "outline";
          labelColor = "text-red-400";
          break;
        case "Pending":
          badgeVariant = "outline";
          labelColor = "text-orange-300";
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
          className="text-center gap-2 p-1 px-2"
        >
          {icon && React.cloneElement(icon, { className: `h-4 w-4 ${labelColor}` })}
          <span className={labelColor}>{label}</span>
        </Badge>
      );
    },
  },
];

export function ComplaintList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
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
        <CardTitle>Complaints List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-4">
          <Input
            placeholder="Search Transactions..."
            value={
              (table.getColumn("complaint")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("complaint")?.setFilterValue(event.target.value)
            }
            className="max-w-lg"
          />
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
                              header.getContext(),
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
                          cell.getContext(),
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