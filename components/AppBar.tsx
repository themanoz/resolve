"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AppBar() {
  const [isLoggedin, setLoggedin] = useState(true);
  return (
    <nav className="flex justify-between py-4 border-b">
      <Link href="/">
        <h1 className="text-2xl px-10 pt-1 font-semibold">Resolve</h1>
      </Link>
      {isLoggedin ? (
        <div className="flex justify-center items-center gap-5 px-6">
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
            <Link href="/auth/signup" className="font-semibold">
              Get started
            </Link>
          </Button>
          <ModeToggle />
        </div>
      ) : (
        <div className="px-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        )}
    </nav>
  );
}
