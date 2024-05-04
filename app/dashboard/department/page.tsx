"use client";
import PageTitle from "@/components/PageTitle";
import DialogButton from "@/components/DialogButton";
import { SetStateAction, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ComplaintList } from "./_components/table";
import ComplaintBox from "./_components/complaint-box";

export const projects = [
  {
    title: "CodeChef Hackathon",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://www.codechef.com/",
  },
  {
    title: "Leetcode Hackathon",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://www.leetcode.com/",
  },
  {
    title: "GeeksForGeeks Job-a-thon",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

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
export function Curriculum() {
  return (
    <>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-1">
        Curriculu 
      </section>
    </>
  );
}

export function Events() {
  return (
    <>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-1">
       <HoverEffect items={projects}/>
      </section>
    </>
  );
}

export function Complaints() {
  return (
    <>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <ComplaintBox />
        <ComplaintList />
      </section>
    </>
  );
}