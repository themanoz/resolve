"use client";
import PageTitle from "@/components/PageTitle";
import DialogButton from "@/components/DialogButton";
import { SetStateAction, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Certificates from "./_components/certificates";
import Notices from "./_components/notices";

export default function Dean() {
  const [selectedTab, setSelectedTab] = useState("notices");

  const handleTabChange = (tab: SetStateAction<string>) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col gap-5 w-full py-5 px-10 mr-4">
      <div className="flex justify-between px-1">
        <div className="flex gap-4 items-center">
          <PageTitle title="Dean" />
          <Tabs defaultValue="notices" className="w-[230px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="notices" onClick={() => handleTabChange("notices")}>Notices</TabsTrigger>
              <TabsTrigger value="certificates" onClick={() => handleTabChange("certificates")}>Certificates</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <DialogButton title={"Post Notice"} id={"S170988"} />
      </div>
      <div className="flex justify-between px-1">
        <div className="w-full">
          {selectedTab === "notices" ? <Notices /> : <Certificates />}
        </div>
      </div>
    </div>
  );
}



