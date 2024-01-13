import {
  SiAstro,
  SiCypress,
  SiDatadog,
  SiExpress,
  SiJest,
  SiNewrelic,
  SiNodedotjs,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
} from "react-icons/si";
export const TECH_STACK: {
  icon: React.ReactNode;
  color: string;
  tooltip?: string;
}[] = [
  {
    icon: <SiReact style={{ color: "#47D3F5" }} />,
    color: "#47D3F5",
    tooltip:
      "React is a JavaScript library for building user interfaces. I use it on a daily basis to build web apps and websites.",
  },
  {
    icon: <SiNodedotjs style={{ color: "#8CC84B" }} />,
    color: "#8CC84B",
    tooltip:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. I use it mostly to build http servers, CLI tools and scripts.",
  },
  {
    icon: <SiTypescript style={{ color: "#007ACC" }} />,
    color: "#007ACC",
    tooltip:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. I use it on a daily basis along with the entire stack.",
  },
  {
    icon: <SiExpress style={{ color: "#ffffff" }} />,
    color: "#ffffff",
    tooltip:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. I use it to build backends for a frontend (BFF) and microservices.",
  },
  {
    icon: <SiTauri style={{ color: "#F7C300" }} />,
    color: "#F7C300",
    tooltip:
      "Tauri is a toolchain for building highly secure native apps that have tiny binaries and are very fast. Currently I'm using it to build some apps. Check out my projects.",
  },
  {
    icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
    color: "#06B6D4",
    tooltip:
      "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
  },
  {
    icon: <SiAstro style={{ color: "#FF0080" }} />,
    color: "#FF0080",
    tooltip:
      "Astro is a new kind of static site builder. Astro combines decades of proven performance best practices with the DX improvements of the component-oriented era.",
  },
  {
    icon: <SiJest style={{ color: "#C21325" }} />,
    color: "#C21325",
    tooltip:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
  },
  {
    icon: <SiCypress style={{ color: "#39424E" }} />,
    color: "#39424E",
    tooltip:
      "Fast, easy and reliable testing for anything that runs in a browser.",
  },
  {
    icon: <SiRadixui style={{ color: "#F56565" }} />,
    color: "#F56565",
    tooltip:
      "Radix UI is a collection of open source UI components for building high-quality, accessible design systems and web apps.",
  },
  {
    icon: <SiDatadog style={{ color: "#632CA6" }} />,
    color: "#632CA6",
    tooltip:
      "Datadog is the monitoring and security platform for cloud applications. I use it to monitor my apps and servers.",
  },
  {
    icon: <SiNewrelic style={{ color: "#00992f" }} />,
    color: "#00992f",
    tooltip:
      "New Relic is a software analytics company based in San Francisco, California. I use it to monitor my apps and servers.",
  },
];
export const WORKING_EXPERIENCE = [
  {
    company: "Koin",
    role: "Software engineer I",
    period: "December 2023 - Present",
    logo: "https://blog.koin.com.br/wp-content/uploads/2021/06/cropped-koin_Logo20RGB20bola20cinza20-20k20colorido__d8dac0432724463ca8bc096651c391b4.png",
    info: "Working with the frontend cross-service team on Koin checkout and multiple backoffice applications and making some tools to improve the developer experience.",
  },
  {
    company: "Koin",
    role: "Software developer III",
    period: "February 2023 - December 2023",
    logo: "https://blog.koin.com.br/wp-content/uploads/2021/06/cropped-koin_Logo20RGB20bola20cinza20-20k20colorido__d8dac0432724463ca8bc096651c391b4.png",
    info: "Building and mantaining the UI components library. Also working on the frontend architecture and the frontend infrastructure.",
  },
  {
    company: "Koin",
    role: "Software developer II",
    period: "August 2022 - February 2023",
    logo: "https://blog.koin.com.br/wp-content/uploads/2021/06/cropped-koin_Logo20RGB20bola20cinza20-20k20colorido__d8dac0432724463ca8bc096651c391b4.png",
    info: "Crossing the bridge between the frontend and the backend. Moved to the frontend team to work on payments and risk analysis applications.",
  },
  {
    company: "Koin",
    role: "Software developer I",
    period: "January 2022 - August 2022",
    logo: "https://blog.koin.com.br/wp-content/uploads/2021/06/cropped-koin_Logo20RGB20bola20cinza20-20k20colorido__d8dac0432724463ca8bc096651c391b4.png",
    info: "My first job as a software developer. I created the first version of the UI components library and worked on the very first version of the payments backoffice.",
  },
];

export const SOCIAL_LINKS: Array<{
  icon: React.ReactNode;
  friendlyName: string;
  link: string;
  label: string;
}> = [
  {
    icon: (
      <svg
        className=""
        width="1em"
        height="1em"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "@JulianKominovic",
    friendlyName: "Github",
    link: "https://github.com/JulianKominovic",
  },
  {
    icon: (
      <svg
        className=""
        width="1em"
        height="1em"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    friendlyName: "LinkedIn",
    label: "@jkominovic",
    link: "https://www.linkedin.com/in/jkominovic/",
  },
  {
    icon: (
      <svg
        className=""
        width="1em"
        height="1em"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
    friendlyName: "Twitter",
    label: "@jkominovic",
    link: "https://twitter.com/juliankominovic",
  },
];

export const PROJECTS: {
  name: string;
  description: string;
  link: string;
  imageSrc: string;
  iconSrc: string;
}[] = [
  {
    name: "Clippis",
    description:
      "Another offline, cool looking, comfortable, clipboard manager.",
    link: "https://github.com/JulianKominovic/clipboard-manager",
    imageSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
    iconSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  },
  {
    name: "Sittly launcher",
    description: "a launcher like Raycast.",
    link: "https://github.com/JulianKominovic/sittly-launcher",
    imageSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
    iconSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  },
  {
    name: "TSXperiment",
    description: "similar to RunJS a javascript live playground.",
    link: "https://github.com/JulianKominovic/tsxperiment",
    imageSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
    iconSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  },
  {
    name: "gnome-dbus-api",
    description:
      "grew as a need for Sittly Launcher. A rust library to interact with low-level gnome DBUS. API",
    link: "https://github.com/JulianKominovic/gnome-dbus-api",
    imageSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
    iconSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  },
  {
    name: "rust-benchmarks",
    description: "a collection of benchmarks for rust experiments.",
    link: "https://github.com/JulianKominovic/rust-benchmarks",
    imageSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
    iconSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  },
];
