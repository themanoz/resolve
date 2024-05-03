"use client"
import Link from "next/link";
// import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NavBar() {
  const [isLoggedin,setLoggedin] = useState(true);
  return (
    <nav className="flex justify-between p-6">
      <Link href="/">
        <h1 className="text-2xl px-12 pt-1 font-semibold">Resolve</h1>
      </Link>
      {isLoggedin && (
        <div className="flex justify-center items-center gap-5 px-12">
        <ul className="flex gap-5 text-slate-400">
          <Link href="/">
            <li className="text-md ">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-md ">About</li>
          </Link>
          <Link href="/contact">
            <li className="text-md">Contact</li>
          </Link>
        </ul>
        <Button>
          <Link href="login" className="font-semibold">Get started</Link>
        </Button>
        {/* <ModeToggle /> */}
      </div>
      )}
    </nav>
  );
}
