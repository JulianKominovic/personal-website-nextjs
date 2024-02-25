import { AppWindow, Archive, Brush, FlaskConical, Home } from "lucide-react";
import {
  BsArchiveFill,
  BsBrushFill,
  BsFire,
  BsGridFill,
  BsHouseFill,
  BsMenuAppFill,
} from "react-icons/bs";
import {
  SiAstro,
  SiCypress,
  SiDatadog,
  SiExpress,
  SiGithub,
  SiJest,
  SiLinkedin,
  SiNewrelic,
  SiNodedotjs,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTauri,
  SiTwitter,
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
    icon: <SiGithub />,
    label: "@JulianKominovic",
    friendlyName: "Github",
    link: "https://github.com/JulianKominovic",
  },
  {
    icon: <SiLinkedin />,
    friendlyName: "LinkedIn",
    label: "@jkominovic",
    link: "https://www.linkedin.com/in/jkominovic/",
  },
  {
    icon: <SiTwitter />,
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
    imageSrc: "/projects/clippis.png",
    iconSrc:
      "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  },
  {
    name: "Sittly launcher",
    description: "A launcher like Raycast or Alfred for Linux(gnome).",
    link: "https://github.com/JulianKominovic/sittly-launcher",
    imageSrc: "/projects/sittly.png",
    iconSrc: "/projects/sittly-icon.png",
  },
  // {
  //   name: "TSXperiment",
  //   description: "similar to RunJS a javascript live playground.",
  //   link: "https://github.com/JulianKominovic/tsxperiment",
  //   imageSrc:
  //     "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
  //   iconSrc:
  //     "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  // },
  // {
  //   name: "gnome-dbus-api",
  //   description:
  //     "grew as a need for Sittly Launcher. A rust library to interact with low-level gnome DBUS. API",
  //   link: "https://github.com/JulianKominovic/gnome-dbus-api",
  //   imageSrc:
  //     "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
  //   iconSrc:
  //     "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  // },
  // {
  //   name: "rust-benchmarks",
  //   description: "a collection of benchmarks for rust experiments.",
  //   link: "https://github.com/JulianKominovic/rust-benchmarks",
  //   imageSrc:
  //     "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/demo-maximized.png",
  //   iconSrc:
  //     "https://raw.githubusercontent.com/JulianKominovic/clipboard-manager/master/Icon.png",
  // },
];

export const PAGE_INDEX = {
  home: {
    path: "/",
    title: "Home",
    icon: <BsHouseFill />,
  },
  hobby: {
    path: "/hobby",
    title: "Hobby",
    icon: <BsBrushFill />,
  },
  // projects: {
  //   path: "/projects",
  //   title: "Projects",
  //   icon: <BsGridFill />,
  // },
  // resources: {
  //   path: "/resources",
  //   title: "Resources",
  //   icon: <BsArchiveFill />,
  // },
  // experiments: {
  //   path: "/experiments",
  //   title: "Experiments",
  //   icon: <BsFire />,
  // },
};
