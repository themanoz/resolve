import React from "react";
// import { cn } from "@/app/utils/cn";
// import { Spotlight } from "@/components/ui/Spotlight";

export function About() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About us
        </h1>
        <p className="mt-4 font-normal text-xl text-slate-400 min-w-full text-center px-44">
          At Resolve, we're dedicated to revolutionizing your university experience through our cutting-edge complaint management system. Our
          platform empowers institutions to streamline the handling of
          complaints, ensuring swift resolutions that enhance student
          satisfaction and foster campus harmony. Join us in shaping
          a brighter future for education with Resolve.
        </p>
      </div>
    </div>
  );
}
