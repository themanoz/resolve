"use client";

import { useState } from "react";
import { Nav } from "./ui/Nav";

type Props = {};

import {
  // LayoutDashboard,
  User,
  Settings,
  // ChevronRight,
  Library,
  Building2,
  Wrench,
  HandCoins,
  // ChevronLeft
} from "lucide-react";
// import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function ({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  // function toggleSidebar() {
  //   setIsCollapsed(!isCollapsed);
  // }

  return (
    <div className="relative min-w-[80px] border-r px-8 pb-10 pt-1 flex justify-center">
      {/* {!mobileWidth && (
        <div className="absolute right-[-16px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            {isCollapsed ? (
              <ChevronRight className="h-28"/>
            ) : <ChevronLeft />}
            
          </Button>
        </div>
      )} */}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Library",
            href: "/library",
            icon: Library,
            variant: "default"
          },
          {
            title: "Dean",
            href: "/dean",
            icon: User,
            variant: "ghost"
          },
          {
            title: "Department",
            href: "/department",
            icon: Building2,
            variant: "ghost"
          },
          {
            title: "Payments",
            href: "/payments",
            icon: HandCoins,
            variant: "ghost"
          },
          {
            title: "IT Infra",
            href: "/itinfra",
            icon: Wrench,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
