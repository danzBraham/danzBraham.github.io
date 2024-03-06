import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    fontSize: {
      "2xs": [
        "10px",
        {
          lineHeight: "auto",
        },
      ],
      xs: [
        "12px",
        {
          lineHeight: "auto",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "140%",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "140%",
        },
      ],
      lg: [
        "26px",
        {
          lineHeight: "120%",
        },
      ],
      xl: [
        "42px",
        {
          lineHeight: "110%",
        },
      ],
      "2xl": [
        "68px",
        {
          lineHeight: "110%",
        },
      ],
      "3xl": [
        "110px",
        {
          lineHeight: "110%",
        },
      ],
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
