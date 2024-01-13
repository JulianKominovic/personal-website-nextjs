"use client";
import MagneticButton from "@/components/MagneticButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useEffect, useRef } from "react";
const menuLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/posts/",
  },
  {
    title: "AI",
    path: "/ai/",
  },
  {
    title: "Resources",
    path: "/resources/",
  },
];

export default function Navbar() {
  return <nav></nav>;
}
