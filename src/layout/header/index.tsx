import Link from "next/link";
import React from "react";

const menuLinks = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/posts/",
  // },
  // {
  //   title: "Crafting",
  //   path: "/crafting/",
  // },
  {
    title: "Resources",
    path: "/resources/",
  },
];

function Header() {
  return (
    <header id="main-header" className="group relative mb-16">
      <a
        href="/"
        className="inline-flex items-center no-underline grayscale hover:filter-none sm:relative sm:inline-block"
      >
        <span className="font-montserrat text-lg font-bold sm:text-xl">
          Julian Kominovic
        </span>
      </a>
      <nav id="navigation-menu" className="flex gap-4" aria-label="Main menu">
        {menuLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="py-4 no-underline sm:py-0 sm:hover:underline text-red-700 font-medium"
            rel="prefetch"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
