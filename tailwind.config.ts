import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Add any custom fonts here
        montserrat: "var(--font-montserrat)",
        lora: "var(--font-lora)",
        text: "var(--font-text)",
        sans: "var(--font-text)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
