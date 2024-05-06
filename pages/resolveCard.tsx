import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Resolve() {
  return (
    <>
      <div className=" border w-[1200px] h-[300px] rounded-3xl bg-black text-white px-28 py-28 flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-6xl w-96 font-bold">
            Ready to use{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text">
              Resolve
            </span>
            ?
          </h1>
          <p>
            Experience a new standard in complaint resolution with our
            cutting-edge system.
          </p>
        </div>
        <div className="flex gap-2">
          <Button type="submit" className="px-12 text-md">
            Signin
          </Button>
          <Link href={"/auth/signup"}>
            <Button type="submit" className="px-12 text-md">
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
