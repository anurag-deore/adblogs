import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["AtlasSans", ...defaultTheme.fontFamily.sans],
        serif: ["AtlasSans", ...defaultTheme.fontFamily.serif],
        chamos: ["Fungis REgular", ...defaultTheme.fontFamily.sans],
        mono: ["Martian Mono SemiExpanded Light", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
