import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    fontSize: {
      "2xs": ["4px", { lineHeight: "auto" }],
      xs: ["8px", { lineHeight: "auto" }],
      sm: ["12px", { lineHeight: "140%" }],
      base: ["16px", { lineHeight: "140%" }],
      lg: ["20px", { lineHeight: "120%" }],
      xl: ["24px", { lineHeight: "120%" }],
      "2xl": ["28px", { lineHeight: "120%" }],
      "3xl": ["32px", { lineHeight: "110%" }],
      "4xl": ["36px", { lineHeight: "110%" }],
      "5xl": ["40px", { lineHeight: "110%" }],
      "6xl": ["44px", { lineHeight: "110%" }],
      "7xl": ["48px", { lineHeight: "110%" }],
      "8xl": ["52px", { lineHeight: "110%" }],
      "9xl": ["56px", { lineHeight: "110%" }],
      "10xl": ["64px", { lineHeight: "110%" }],
      "11xl": ["72px", { lineHeight: "110%" }],
      "12xl": ["80px", { lineHeight: "110%" }],
      "13xl": ["88px", { lineHeight: "110%" }],
      "14xl": ["96px", { lineHeight: "110%" }],
      "15xl": ["112px", { lineHeight: "110%" }],
      "16xl": ["128px", { lineHeight: "110%" }],
    },
    extend: {
      screens: {
        wide: "1440px",
      },
      colors: {
        dark: "#0F0920",
        light: "#F9F9F9",
        primary: "#3D2A83",
        secondary: "#7746DE",
        accent: "#00C7A2",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
