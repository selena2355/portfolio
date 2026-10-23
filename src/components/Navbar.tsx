"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: "material-symbols:home",
    outlineIcon: "material-symbols:home-outline",
  },
  {
    label: "About",
    href: "/about",
    icon: "material-symbols:person",
    outlineIcon: "material-symbols:person-outline",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "material-symbols:folder",
    outlineIcon: "material-symbols:folder-outline",
  },
  {
    label: "Career",
    href: "/career",
    icon: "material-symbols:business-center",
    outlineIcon: "material-symbols:business-center-outline",
  },
  {
    label: "Skills",
    href: "/skills",
    icon: "material-symbols:build",
    outlineIcon: "material-symbols:build-outline",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "material-symbols:mail",
    outlineIcon: "material-symbols:mail-outline",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed left-0 z-20 mt-15 flex h-screen w-[78px] flex-col items-center bg-black py-10"
    >
      <div className="flex w-full flex-col items-center gap-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="group flex w-full flex-col items-center gap-1 text-center text-[13px] leading-none text-[#ff7d83]"
            >
              <span
                className={[
                  "grid size-[48px] place-items-center rounded-[16px] transition-colors",
                  isActive
                    ? "bg-[#ff7d83]/20"
                    : "group-hover:bg-[#ff7d83]/20",
                ].join(" ")}
              >
                <Icon
                  icon={isActive ? item.icon : item.outlineIcon}
                  width={24}
                  height={24}
                />
              </span>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
