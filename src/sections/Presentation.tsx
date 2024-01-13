import Section from "@/components/shared/Section";

export default function Presentation() {
  return (
    <Section className="max-w-4xl mx-auto mb-52 mt-36">
      <h1 className="text-5xl font-semibold text-center">Julian Kominovic</h1>
      <h2 className="mb-10 text-2xl text-center text-foreground/80">
        Frontend engineer
      </h2>
      <p className="mb-4 text-xl text-center text-muted-foreground">
        Focused on web development. Exploring the delicious mix between web
        technologies and native apps.
      </p>
      <p className="text-xl text-center text-muted-foreground">
        I invest my free time in creating icons for future apps or abstract
        wallpapers using{" "}
        <a
          href="https://github.com/lllyasviel/Fooocus"
          className="underline"
          target="_blank"
        >
          local AI image generation software
        </a>
        .
      </p>
    </Section>
  );
}
