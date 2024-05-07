"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/curriculum";

export default function Curriculum() {
  const tabs = [
    {
      title: "PUC-1",
      value: "puc-1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black border">
          <p>PUC-1 Curriculum</p>
          <DummyContent label={"PUC-1"}/>
        </div>
      ),
    },
    {
      title: "PUC-2",
      value: "puc-2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black border">
          <p>PUC-2 Curriculum</p>
          <DummyContent label={"PUC-2"}/>
        </div>
      ),
    },
    {
      title: "E-1",
      value: "e-1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black border">
          <p>E-1 Curriculum</p>
          <DummyContent  label={"E-1"}/>
        </div>
      ),
    },
    {
      title: "E-2",
      value: "e-2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black border">
          <p>E-2 Curriculum</p>
          <DummyContent label={"E-2"}/>
        </div>
      ),
    },
    {
      title: "E-3",
      value: "e-3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black border">
          <p>E-3 Curriculum</p>
          <DummyContent label={"E-3"}/>
        </div>
      ),
    },
    {
      title: "E-4",
      value: "e-4",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black border">
          <p>E-4 Curriculum</p>
          <DummyContent label={"E-4"}/>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start py-8">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({label} : {label: string}) => {
  return (
    // <Image
    //   src="/linear.webp"
    //   alt="dummy image"
    //   width="1000"
    //   height="1000"
    //   className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    // />
    <div className="text-center">
      <h1>{label}</h1>
    </div>
  );
};
