import BigCard from "@/components/shared/BigCard";
import Section from "@/components/shared/Section";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PROJECTS } from "@/const";

export default function Projects() {
  return (
    <Section>
      <h2 className="w-full text-4xl font-semibold ">Projects</h2>
      <p className="w-full text-muted-foreground">
        Most recent projects I worked on
      </p>
      <ScrollArea className="w-full mt-8">
        <div className="flex gap-12">
          {PROJECTS.map((project) => (
            <BigCard
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
