"use client";

import { useState } from "react";
import { Nav } from "./ui/Nav";

type Props = {};

import {
  User,
  Settings,
  Library,
  Building2,
  Wrench,
  HandCoins,
} from "lucide-react";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <div className="min-w-[80px] min-h-fit border-r px-8 pb-10 py-3 flex justify-center overflow-y-auto sticky top-10 z-0">
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Library",
            href: "/dashboard/library",
            icon: Library,
            variant: "default"
          },
          {
            title: "Dean",
            href: "/dashboard/dean",
            icon: User,
            variant: "ghost"
          },
          {
            title: "Department",
            href: "/dashboard/department",
            icon: Building2,
            variant: "ghost"
          },
          {
            title: "Payments",
            href: "/dashboard/payments",
            icon: HandCoins,
            variant: "ghost"
          },
          {
            title: "IT Infra",
            href: "/dashboard/itinfra",
            icon: Wrench,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
