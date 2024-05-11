"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AppBar() {
  const [isLoggedin, setLoggedin] = useState(true);
  return (
    <nav className="flex justify-between py-4 border-b top-0 sticky z-10 backdrop-blur-lg">
      <Link href="/">
        <h1 className="text-2xl px-10 pt-1 font-semibold">Resolve</h1>
      </Link>
      {isLoggedin ? (
        <div className="flex justify-center items-center gap-5 px-8">
          <Button>
            <Link href="/signup" className="font-semibold">
              Get started
            </Link>
          </Button>
          <ModeToggle />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <h6>
            Welcome, <span className="text-lg font-semibold">S170XXX</span>
          </h6>
          <div className="pr-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      )}
    </nav>
  );
}
