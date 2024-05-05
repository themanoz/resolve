"use client";
import PageTitle from "@/components/PageTitle";
import { SetStateAction, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Curriculum } from "./_components/curriculum";




export default function Dean() {
  const [selectedTab, setSelectedTab] = useState("complaints");

  const handleTabChange = (tab: SetStateAction<string>) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col gap-5 w-full py-5 px-10 mr-4">
      <div className="flex justify-between px-1">
        <div className="flex gap-4 items-center">
          <PageTitle title="Department" />
          <Tabs defaultValue="complaints" className="w-[500px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="curriculum" onClick={() => handleTabChange("curriculum")}>Curriculum</TabsTrigger>
              <TabsTrigger value="events" onClick={() => handleTabChange("events")}>Events</TabsTrigger>
              <TabsTrigger value="complaints" onClick={() => handleTabChange("complaints")}>Complaint</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {/* {selectedTab === "events" && <DialogButton title={"Create Event"} id={"S170988"} />} */}
      </div>
      <div className="flex justify-between px-1">
        <div className="w-full">
        {selectedTab === "curriculum" ? <Curriculum /> : selectedTab === "events" ? <Events /> : <Complaints />}
        </div>
        </div>
      </div>
  );
}