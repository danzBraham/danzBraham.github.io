import reglowProject from "@assets/images/reglow-project.png";
import astro from "@assets/icons/astro.svg";
import react from "@assets/icons/react.svg";

export const NAV_LINKS = [
  { key: "home", href: "/#", label: "Home" },
  { key: "expertise", href: "/#expertise", label: "Expertise" },
  { key: "projects", href: "/#projects", label: "Projects" },
  { key: "about", href: "/#about", label: "About" },
  { key: "contact-me", href: "/#contact-me", label: "Contact Me" },
];

export const EXPERTISE = [
  {
    icon: "brush",
    title: "Web Design",
    subtitle: "Crafting visually stunning",
    description:
      "From wireframes to user interfaces, I specialize in creating captivating designs that engage and inspire",
  },
  {
    icon: "wand",
    title: "Front-End",
    subtitle: "Bringing designs to life",
    description:
      "Empowering designs with Next.js, Astro, and React for seamless user experiences across all devices",
  },
  {
    icon: "construction",
    title: "Back-End",
    subtitle: "Building robust foundations",
    description:
      "Architecting scalable server-side systems to power your web apps efficiently",
  },
];

export const PROJECTS = [
  {
    img: reglowProject,
    name: "Reglow Store Bali",
    description: `Reglow Store Bali is a landing page designed for Reglow skincare agents
        based in Bali. It features a sleek and modern design aimed at showcasing
        the brand's products and benefits effectively.`,
    tech: [
      { name: "astro", icon: astro },
      { name: "react", icon: react },
    ],
    link: "https://www.reglowstorebali.com/",
    label: "reglowstorebali.com",
  },
];
