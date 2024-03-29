import Section from "@/components/shared/Section";
import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { BigCardContainer } from "@/components/shared/BigCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
type Props = {};

const HANDPICKED_ABSTRACT_WALLPAPERS = [
  "2024-01-13_14-55-11_7609.jpg",
  "2024-01-13_14-43-17_7690.jpg",
  "2024-01-13_14-34-44_2182.jpg",
  "2024-01-13_14-43-17_7690.jpg",
  "2024-01-13_14-14-04_6826.jpg",
  "2024-01-13_14-50-23_1609.jpg",
  "2024-01-13_14-39-09_9332.jpg",
  "2024-01-13_14-33-46_7092.jpg",
];

const Hobby = ({}: Props) => {
  return (
    <Section className="min-h-screen overflow-visible">
      <h2 className="w-full text-4xl font-semibold text-center">
        Just for fun
      </h2>
      <p className="w-full text-center text-muted-foreground">
        Some of the best AI generated images I could get using{" "}
        <a
          href="https://github.com/lllyasviel/Fooocus"
          className="underline"
          target="_blank"
        >
          Fooocus
        </a>
      </p>
      <Link
        href={"/hobby"}
        className="flex items-center gap-2 mx-auto mt-4 btn w-max group"
      >
        Take me to the hobby page!
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Link>
      <div className="absolute top-[-300px] w-screen -left-32 h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent  opacity-30 to-transparent -z-10"></div>
      <div className="flex flex-wrap justify-center max-w-6xl gap-4 mx-auto mt-28">
        {HANDPICKED_ABSTRACT_WALLPAPERS.map((fileName) => {
          const url = `/ai-images/abstract-wallpapers/${fileName}`;
          return (
            <BigCardContainer
              href={url}
              key={fileName}
              target="_blank"
              className={twMerge(
                "h-auto mx-0 max-w-[512px] w-full aspect-auto overflow-hidden hover:scale-95 transition-transform"
              )}
            >
              <Image
                loading="lazy"
                width={900}
                height={300}
                alt="abstract-wallpaper"
                src={url}
                className="w-full h-full rounded-lg"
              />
            </BigCardContainer>
          );
        })}
      </div>
    </Section>
  );
};

export default Hobby;
