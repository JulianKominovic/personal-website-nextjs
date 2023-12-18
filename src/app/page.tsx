import Image from "next/image";

const workingExperience = [
  {
    company: "Koin",
    role: "Software engineer I",
    period: "December 2023 - Present",
  },
  {
    company: "Koin",
    role: "Software developer III",
    period: "February 2023 - December 2023",
  },
  {
    company: "Koin",
    role: "Software developer II",
    period: "August 2022 - February 2023",
  },
  {
    company: "Koin",
    role: "Software developer I",
    period: "January 2022 - August 2022",
  },
];

const socialLinks: Array<{
  icon: React.ReactNode;
  friendlyName: string;
  link: string;
}> = [
  {
    icon: (
      <svg
        className="h-4 w-4"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    friendlyName: "Github",
    link: "https://github.com/JulianKominovic",
  },
  {
    icon: (
      <svg
        className="h-4 w-4"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/jkominovic/",
  },
  {
    icon: (
      <svg
        className="h-4 w-4"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
    friendlyName: "twitter",
    link: "https://twitter.com/juliankominovic",
  },
];

const projects: {
  name: string;
  description: string;
  link: string;
}[] = [
  {
    name: "TSXperiment",
    description: "similar to RunJS a javascript live playground.",
    link: "https://github.com/JulianKominovic/tsxperiment",
  },
  {
    name: "Sittly launcher",
    description: "a launcher like Raycast.",
    link: "https://github.com/JulianKominovic/sittly-launcher",
  },
  {
    name: "gnome-dbus-api",
    description:
      "grew as a need for Sittly Launcher. A rust library to interact with low-level gnome DBUS. API",
    link: "https://github.com/JulianKominovic/gnome-dbus-api",
  },
  {
    name: "rust-benchmarks",
    description: "a collection of benchmarks for rust experiments.",
    link: "https://github.com/JulianKominovic/rust-benchmarks",
  },
];

export default function Home() {
  return (
    <>
      <section className="mb-16">
        <h1 className="text-4xl">{"Hi! I'm Julian,"}</h1>
        <h2 className="text-xl">Frontend developer. Average rust enjoyer.</h2>
        <p className="mb-4 mt-6">
          Right now getting into local-first applications, take a look at{" "}
          <a
            href="https://github.com/JulianKominovic/sittly-launcher"
            target="_blank"
            className="underline underline-offset-4"
            rel="noopener noreferrer"
          >
            Sittly launcher
            <Image
              src="https://sittly.vercel.app/favicon.ico"
              width="20"
              height="20"
              className="inline-block rounded-full"
              alt="Sittly logo"
            />
          </a>
          {" and "}
          <a
            href="https://github.com/JulianKominovic/tsxperiment"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Tsxperiment
          </a>
          {
            ". I'm testing the limits of what can be done with Rust and Web technologies in my free time."
          }
        </p>
        <div className="flex flex-wrap items-end gap-x-4">
          <p>Find me on</p>
          <ul className="flex flex-1 items-center gap-x-2 sm:flex-initial">
            {socialLinks.map(({ link, icon, friendlyName }) => (
              <li className="flex" key={link}>
                <a
                  className="inline-block h-6 w-6 p-1 sm:hover:text-link"
                  href={link}
                  target="_blank"
                  rel={"noopener noreferrer"}
                >
                  {icon}
                  <span className="sr-only">{friendlyName}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="title mb-4 text-xl" id="experience">
          Working experience
        </h2>
        <ol className="space-y-4">
          {workingExperience.map(({ company, period, role }) => (
            <li key={period}>
              <div className="flex flex-col sm:flex-row">
                <div className="flex gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <Image
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAASFBMVEVMaXEaHB8bHRwbHRwWFyQbHRwbHRw6Oj8eHyoXGCf///9M8ExUWFUkNCXq7+o/uD9J40kweTFG1kalp6a94b1/gH928XZ91H2tDG+0AAAACnRSTlMAQLz/HuSOBAoSWQxgVQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAm5JREFUWMPVmIlu6jAQReN4mRlDoH0E+v9/WnlJcEi8R0/qFSCI1KO5vrZrzzD8R8HBtzqAkftc5B+CRdpfJXCoUR7FlBqllJJHJaUcR6VYqjzjTKgEZAdVIsoDIMUrpSJmAYTk1ZLiiAbAGlicS7Yvrq2upTb4YGEji3NJO5jizVK4oQEI3qFNCACoemCb0npGzI7aBoaMd4khnOXS+myB3f9Z3T9hCw0AcSxkfV+svqbt43GFDeWw6cvBvncJBJVRYZh3x7rzE2ARk2ZFBTbLYDGTIcxUdvCnD6upwCTnnJZpG4Fpq2uBSQcbamBxkw2VJUxWw1Ima2FJk8GYDSWwpMmgshJY2mSdzYzJOpsZkwaGpfPMm7xcT4AtJudHHpa16U2+9G3ivQEsJm9aP3sDWE1qrefeylaTH5tIy6QNTGqtH/EASirzJn/cz1gEZTZffrpOrrJYBPT+jxKHzeuafDjYnEkzUdntsq7Jq9aJCEpsvoI1OetEBAVpzuHG80xFkK8sMGlWaCqC/Ap4bTceH8GtKYD5Y3dNRbCZtAfHg63JIIKZHx4PkrCf3bHueXOa+AkHl9S9IpwanbBxY3M8C2Yq6z1th2OGp8HMabv3UhHa7ExAvrez/kELxt/CWK/L4LrTVZoKXdqZJjqu1Z8wJNZ64WcUuPSlUWsrwrC2l3RspFkW7loRSCTq2zfCsmA4orGxqrHEDlm224VEJIRpeY25lpc0LS8h6JhlYehwpSIiQoi1vDzOSNi3oPC1fl2EiPH+nsMhEVJOaEiY7hWC5xUIMNt1HOC4h4nV/ct3ebZ96j98m3VYAO7R39Ivxg9aSR5QBCMAAAAASUVORK5CYII="
                      alt="Koin logo"
                      width="32"
                      height="32"
                    />
                  </div>
                  <div className="flex flex-col sm:ml-4">
                    <a
                      href="https://koinlatam.com"
                      target="_blank"
                      className="mr-1 text-lg flex items-center gap-2"
                    >
                      {company} <span className="text-sm">•</span>{" "}
                      <span className="text-sm text-gray-500">{role}</span>
                    </a>
                    <time>{period}</time>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <h2 id="tech-stack" className="title mb-4 text-xl">
          Tech stack
        </h2>
        <p className="mb-4">
          In my daily basis I use some kind of
          <a href="https://wikitia.com/wiki/MERN_(solution_stack)">MERN</a> but
          without the <b>M</b>, {"so it's more like"} <b>ERN</b>. I {"don't"}{" "}
          believe in
          <a
            href="https://en.wikipedia.org/wiki/Solution_stack#Full-stack_developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            fullstack
          </a>
          term but {"it's"} the best way to describe my current position.
        </p>
        <p className="mb-4">
          {"I'm"} a big fan of
          <a
            href="https://www.rust-lang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rust
          </a>
          and {"I'm"} trying to use it as much as I can. {"I've"} found an
          interesting merge of both worlds: Rust and Web called
          <a
            href="https://tauri.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tauri
          </a>
          . Take a look at <a href="#projects">projects section</a> to see what
          {"I've"} done with it.
        </p>

        <ul className="my-4">
          <li>
            <b>Frontend</b>: Tauri, React, Typescript, Storybook, TailwindCSS,
            SASS, CSS, HTML, Jest, React Testing Library, Cypress plus a
            thousand libraries that {"I don't"} remember.
          </li>
          <li>
            <b>In-between</b>: Rust, Tauri, Astro.
          </li>
          <li>
            <b>Backend</b>: NodeJS, Express.
          </li>
          <li>
            <b>Bundlers/transpilers</b>: Webpack, Rollup, Vite, Esbuild.
          </li>
          <li>
            <b>Integrations</b>: Auth0.
          </li>
          <li>
            <b>Monitoring</b>: Datadog, Newrelic.
          </li>
          <li>
            <b>CI/CD</b>: Github Actions, Jenkins.
          </li>
          <li>
            <b>Testing</b>: Jest, React Testing Library, Cypress.
          </li>
          <li>
            <b>Other</b>: Git, Github, Docker, Linux, Bash, Zsh, Figma, Jira.
          </li>
        </ul>
      </section>
      <section className="mb-16">
        <h2 className="title mb-4 text-xl" id="projects">
          Projects
        </h2>
        <ol>
          {projects.map(({ description, link, name }) => (
            <li key={link}>
              <a href={link}>
                <b>{name}</b>
              </a>
              <span> - {description}</span>
            </li>
          ))}
          <li>
            See more at
            <a
              href="https://github.com/JulianKominovic"
              target="_blank"
              rel="noopener noreferrer"
            >
              my github
            </a>
          </li>
        </ol>
      </section>
    </>
  );
}
