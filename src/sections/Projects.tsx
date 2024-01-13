import BigCard from "@/components/shared/BigCard";
import Section from "@/components/shared/Section";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PROJECTS } from "@/const";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <Section>
      <h2 className="w-full text-4xl font-semibold ">Projects</h2>
      <p className="w-full text-muted-foreground">
        Most recent projects I worked on
      </p>
      <Link
        href={"/projects"}
        className="flex items-center gap-2 mt-4 btn w-max group"
      >
        Interesting... Tell me more!
        <ArrowRight className="inline-block w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Link>
      <ScrollArea className="w-full mt-8">
        <div className="flex flex-col gap-8 sm:flex-row">
          {PROJECTS.map((project) => (
            <BigCard
              className="w-full h-auto sm:w-96 sm:h-72 !mx-0 hover:scale-95 transition-transform"
              key={project.name}
              href={project.link}
              title={project.name}
              description={project.description}
              imageSrc={project.imageSrc}
              iconSrc={project.iconSrc}
            ></BigCard>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Section>
  );
}
