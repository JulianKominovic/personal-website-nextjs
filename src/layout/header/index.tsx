import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <aside
      id="main-header"
      className="group sticky top-2 left-0 mb-16 bg-black bg-opacity-20 backdrop-blur-md"
    >
      <Navbar />
      {/* <a
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
      </nav> */}
    </aside>
  );
}

export default Header;
