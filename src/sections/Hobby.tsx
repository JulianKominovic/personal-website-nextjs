import Section from "@/components/shared/Section";
import React from "react";

type Props = {};

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
      <div className="absolute top-[-300px] w-screen -left-32 h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent  opacity-30 to-transparent -z-10"></div>
    </Section>
  );
};

export default Hobby;
