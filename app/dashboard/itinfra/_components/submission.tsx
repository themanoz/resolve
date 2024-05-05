"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import LaptopDetails from "./laptop-details";
import { MultiStepLoader as Loader } from "@/components/ui/multistep-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const loadingStates = [
  {
    text: "Laptop submission completed",
  },
  {
    text: "Adapter submission completed",
  },
  {
    text: "Laptop bag submission completed",
  },
  {
    text: "Submission Completed!",
  },
];

export default function Submission() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full px-28 py-20">
      <Card className="flex justify-between items-center py-4">
        <div className="pl-20">
          <Image src="/freelancer.png" alt="image" width="300" height="300"/>
        </div>
        <div className="pr-40">
          <CardHeader>
            <CardTitle>Laptop Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <LaptopDetails label="Model" data="HP 245 G6 Notebook PC" />
            <LaptopDetails label="Product ID" data="4AD35PA#ACJ" />
            <LaptopDetails label="Serial No" data="5CD8134M9D" />
            <LaptopDetails label="Adapter Serial No" data="NDI34053B3498" />
          </CardContent>
        </div>
      </Card>
      <div className="pt-14">
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
        <Button
          onClick={() => setLoading(true)}
          className="mx-auto text-sm md:text-base transition font-medium duration-200  flex items-center justify-center"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
          }}
        >
          Check Status
        </Button>

        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
    </div>
  );
}
