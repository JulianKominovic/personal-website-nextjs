"use client";
import { usePathname } from "next/navigation";

import { PAGE_INDEX, SOCIAL_LINKS } from "@/const";
import Link from "next/link";
import { Dot } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed z-50 max-w-full p-px mx-auto overflow-hidden overflow-x-scroll -translate-x-1/2 rounded-full w-fit sm:mx-0 bottom-1 bg-gradient-to-t from-transparent to-foreground/40 left-1/2 sm:left-4 sm:top-4 sm:w-14">
      <ul className="flex items-center justify-center h-full px-2 pt-1 pb-3 overflow-hidden rounded-full w-fit sm:px-0 sm:flex-col bg-background bg-gradient-to-t from-background to-foreground/10">
        {Object.values(PAGE_INDEX).map(({ icon, path, title }) => (
          <li
            key={path}
            className="flex justify-center w-10 h-10 p-1 aspect-square"
          >
            <Link
              href={path}
              aria-selected={pathname === path}
              className={clsx(
                "flex flex-col items-center justify-center w-10 h-10 p-1 rounded-full aspect-square hover:bg-foreground/10 aria-selected:text-foreground text-muted-foreground relative"
              )}
            >
              {icon}
              {pathname === path && (
                <Dot className="absolute -translate-x-1/2 -bottom-2 left-1/2" />
              )}
            </Link>
          </li>
        ))}
        <li className="flex justify-center w-px h-full p-1 px-2 mt-1 sm:w-full sm:h-px aspect-square">
          <hr className="border" />
        </li>
        {SOCIAL_LINKS.map(({ link, friendlyName, icon, label }) => (
          <li
            key={link}
            className="flex justify-center w-10 h-10 p-1 aspect-square"
          >
            <a
              href={link}
              className={clsx(
                "flex flex-col items-center justify-center w-10 h-10 p-1 rounded-full aspect-square hover:bg-foreground/10 aria-selected:text-foreground text-muted-foreground relative"
              )}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
