"use client";

import PageTitle from "@/components/PageTitle";
import { SetStateAction, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Repairs from "./_components/repairs";
import Submission from "./_components/submission";


export default function Dean() {
  const [selectedTab, setSelectedTab] = useState("submission");

  const handleTabChange = (tab: SetStateAction<string>) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col gap-5 w-full py-5 px-10 mr-4">
      <div className="flex justify-between px-1">
        <div className="flex gap-4 items-center">
          <PageTitle title="IT Infra" />
          <Tabs defaultValue="submission" className="min-w-min">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="submission" onClick={() => handleTabChange("submission")}>Submission</TabsTrigger>
              <TabsTrigger value="repairs" onClick={() => handleTabChange("repairs")}>Repairs/Damages</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="flex justify-between px-1">
        <div className="w-full">
          {selectedTab === "submission" ? <Submission /> : <Repairs />}
        </div>
      </div>
    </div>
  );
}