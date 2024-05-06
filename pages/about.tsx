import React from "react";
// import { cn } from "@/app/utils/cn";
// import { Spotlight } from "@/components/ui/Spotlight";

export default function About() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center  bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text">
          About us
        </h1>
        <p className="mt-4 font-normal text-xl text-slate-400 min-w-full text-center px-[248px]">
          Our platform empowers institutions to streamline the handling of
          complaints, ensuring{" "}
          <span className="text-2xl font-semibold text-violet-400">
            swift resolutions
          </span>{" "}
          that enhance satisfaction and foster campus harmony. <br /> Join us in
          shaping a brighter future for education with Resolve.
        </p>
      </div>
    </div>
  );
}
