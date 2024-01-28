import Section from "@/components/shared/Section";
import React from "react";
import fs from "fs";
import Image from "next/image";
type Props = {};

function getAIWallpaperUrls() {
  return fs
    .readdirSync("./public/ai-images/abstract-wallpapers")
    .map((fileName) => {
      const url = `/ai-images/abstract-wallpapers/${fileName}`;
      return url;
    })
    .filter((url) => url.endsWith(".jpg"));
}

const Page = (props: Props) => {
  return (
    <>
      <Section className="max-w-[80ch] mx-auto mb-52 mt-36">
        <h1 className="text-5xl font-semibold text-center">Hobby</h1>
        <h2 className="mb-10 text-2xl text-center text-foreground/80">
          I like to create abstract wallpapers using AI. I use{" "}
          <a
            href="https://github.com/lllyasviel/Fooocus"
            className="underline"
            target="_blank"
          >
            Fooocus
          </a>
          .
        </h2>
      </Section>
      <Section className="flex flex-wrap justify-center max-w-6xl gap-4 mx-auto mb-52 mt-36">
        {getAIWallpaperUrls().map((url) => (
          <a href={url} key={url} className="duration-200 hover:scale-95">
            <Image
              loading="lazy"
              width={600}
              height={600}
              alt=""
              src={url}
              className="rounded-sm"
            />
          </a>
        ))}
      </Section>
    </>
  );
};

export default Page;
