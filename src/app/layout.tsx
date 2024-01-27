import type { Metadata } from "next";
import { Montserrat, Lora, Mulish } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/layout/header";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

import { Inter as FontSans } from "next/font/google";
import Navbar from "@/layout/header/Navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jkominovic.dev"),
  title: "Julian Kominovic - Frontend Developer",
  description:
    "Frontend developer. Average rust enjoyer. Right now getting into local-first applications. See my projects, blog posts and resources.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    title: "Julian Kominovic - Frontend Developer",
    description:
      "Frontend developer. Average rust enjoyer. Right now getting into local-first applications. See my projects, blog posts and resources.",
    url: "https://jkominovic.dev",
    siteName: "Julian Kominovic - Frontend Developer",
    locale: "en_US",
    images: [
      {
        url: "/jk-og.png",
        width: 1200,
        height: 630,
        alt: "Julian Kominovic - Frontend Developer",
      },
    ],
  },
  twitter: {
    site: "@jkominovic",
    card: "summary_large_image",
    title: "Julian Kominovic - Frontend Developer",
    creator: "@jkominovic",
    creatorId: "@jkominovic",
    description:
      "Frontend developer. Average rust enjoyer. Right now getting into local-first applications. See my projects, blog posts and resources.",
    images: [
      {
        url: "/jk-og.png",
        width: 1200,
        height: 630,
        alt: "Julian Kominovic - Frontend Developer",
      },
    ],
  },
  robots: {
    index: true,
  },
  other: {
    "twitter:widgets:autoload": "off",
    "twitter:dnt": "on",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body
        className={clsx(
          "min-h-screen bg-background font-normal leading-relaxed text-foreground antialiased dark overflow-x-hidden"
        )}
      >
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <div className="relative w-full h-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
        <Navbar />
        <main id="main" className="overflow-x-hidden">
          {children}
        </main>

        <Script id="twitt-script">
          {`
          window.twttr = (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
          
            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };
          
            return t;
          }(document, "script", "twitter-wjs"));
          `}
        </Script>
      </body>
    </html>
  );
}
