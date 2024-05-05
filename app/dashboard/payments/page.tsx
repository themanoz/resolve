"use client";

import PageTitle from "@/components/PageTitle";
import { SetStateAction, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PUC from "./_components/puc";
import Engineering from "./_components/engineering";

export default function Dean() {
  const [selectedTab, setSelectedTab] = useState("puc");

  const handleTabChange = (tab: SetStateAction<string>) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col gap-5 w-full py-5 px-10 mr-4">
      <div className="flex justify-between px-1">
        <div className="flex gap-4 items-center">
          <PageTitle title="Payments" />
          <Tabs defaultValue="puc" className="w-[230px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="puc" onClick={() => handleTabChange("puc")}>PUC</TabsTrigger>
              <TabsTrigger value="engineering" onClick={() => handleTabChange("engineering")}>Engineering</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="flex justify-between px-1">
        <div className="w-full">
          {selectedTab === "puc" ? <PUC /> : <Engineering />}
        </div>
      </div>
    </div>
  );
}