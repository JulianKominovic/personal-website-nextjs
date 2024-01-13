import Hobby from "@/sections/Hobby";
import Presentation from "@/sections/Presentation";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import WorkExperience from "@/sections/WorkExperience";

export default function Home() {
  return (
    <>
      <Presentation />
      <Projects />
      <TechStack />
      <WorkExperience />
      <Hobby />
    </>
  );
}
