import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PaymentsPUC } from "./puc-table";
import { PaymentsEngieering } from "./payments";
import { ViewDetailsTable } from "./view-details-table";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function ViewDetails({ appilcationID }: { appilcationID: number }) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-slate-400">
          View Details
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-fit">
          {appilcationID == 201800000000 ? (
            <div className="min-w-min">
              <div className="flex justify-between items-center px-12">
                {appilcationID}
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </div>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <ViewDetailsTable />
                </div>
              </div>
            </div>
          ) : (
            <div className="min-w-min">
              <div className="flex justify-end">
                <DrawerClose asChild>
                  <Button variant="outline">X</Button>
                </DrawerClose>
              </div>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <PaymentsEngieering />
                </div>
              </div>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
