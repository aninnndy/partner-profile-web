import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorWhite: "#ffffff",
        colorWhiteDark: "#ededed",
        colorWhiteBody: "#f0f6f7",
        colorPrimary: "#0097B2",
        colorPrimaryHover: "#058299",
        colorPrimaryDark: "#096575",
        colorSecondary: "#FFC162",
        colorSecondaryHover: "#ebab4b",
        colorSecondaryDark: "#de9e3c",
        colorGray: "#c9c9c9",
        colorGrayHover: "#b3afaf",
        colorBlackSolid: "#34364A",
        colorBlack: "#2f3030",
        colorRed: "#ed0527",
        colorGreen: "#14c408",
        colorPurple: "#2a14a6",
      },
    },
  },
  plugins: [],
} satisfies Config;
