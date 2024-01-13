import ArrayOfCardIcons from "@/components/shared/ArrayOfCardIcons";
import Section from "@/components/shared/Section";
import { TECH_STACK } from "@/const";

export default function TechStack() {
  return (
    <Section className="relative overflow-visible">
      <h2 className="w-full text-4xl font-semibold text-right">Tech stack</h2>
      <p className="ml-auto text-right text-muted-foreground w-[40ch]">
        Here some of the most relevant technologies and tools I use (almost)
        everyday
      </p>
      <div className="absolute left-[50%] right-0 w-screen -rotate-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600  opacity-10 to-transparent h-96 -top-20"></div>
      <ArrayOfCardIcons
        className="flex flex-wrap gap-8 w-full max-w-4xl -rotate-[32deg]"
        cards={TECH_STACK.map((tech) => ({
          color: tech.color,
          icon: tech.icon,
        }))}
      />
    </Section>
  );
}
