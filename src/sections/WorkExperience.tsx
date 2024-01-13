import ArrayOfCardIcons from "@/components/shared/ArrayOfCardIcons";
import Section from "@/components/shared/Section";
import { TECH_STACK, WORKING_EXPERIENCE } from "@/const";
import Image from "next/image";

export default function WorkExperience() {
  return (
    <Section className="relative overflow-visible mt-80">
      <h2 className="w-full text-4xl font-semibold">Work experience</h2>
      <p className="text-muted-foreground w-[40ch]">
        Most recent work experience
      </p>
      <div className="absolute w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/30 via-transparent opacity-60 to-transparent h-[700px]"></div>
      <ul className="flex justify-between mt-28">
        {WORKING_EXPERIENCE.slice(0, 3).map(
          ({ role, company, period, logo, info }, i) => (
            <li
              style={{ marginTop: i * 56 }}
              key={role}
              className="max-w-[36ch] flex flex-col items-center text-center"
            >
              <Image
                className="mb-2"
                width={96}
                height={96}
                src={logo}
                alt={company}
              />
              <h3 className="text-2xl font-semibold">
                {role} -{" "}
                <span className="text-muted-foreground">{company}</span>
              </h3>
              <time className="text-muted-foreground">{period}</time>
              <p className="mt-6">{info}</p>
            </li>
          )
        )}
      </ul>
    </Section>
  );
}
