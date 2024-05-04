// import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <>
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className="text-6xl font-semibold w-10/12 px-60 pt-3">
        <h1 className="px-14">Resolve Rite: Elevate </h1>
        <h1 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text">
          Complaint Management
        </h1>
      </div>
      <div className="w-8/12 px-40 pt-3">
        <p className="text-slate-400 text-xl">
          <span className="px-4">
            Empower your university experience with streamlined complaint{" "}
          </span>
          <span>
            management, enhancing student satisfaction and campus harmony.
          </span>
        </p>
      </div>
    </>
  );
}
