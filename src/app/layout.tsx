import type { Metadata } from "next";
import { Montserrat, Lora, Mulish } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/layout/header";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

const montserrat = Montserrat({
  style: "normal",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
  variable: "--font-montserrat",
});
const lora = Lora({
  style: "italic",
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-lora",
});

const text = Mulish({
  style: "normal",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-text",
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
    <html
      lang="en"
      className={clsx(montserrat.variable, lora.variable, text.variable)}
    >
      <body
        className={clsx(
          "mx-auto flex min-h-screen max-w-3xl flex-col bg-neutral-100 px-8 pt-16  font-normal leading-relaxed text-neutral-800 antialiased"
        )}
      >
        <Header />
        <main id="main">{children}</main>

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
