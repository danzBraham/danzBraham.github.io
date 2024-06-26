import { type ImageMetadata } from "astro";

import reglowProject from "@assets/images/reglow-project.png";
import busanaetnikProject from "@assets/images/busanaetnik-project.png";

import astro from "@assets/icons/astro.svg";
import react from "@assets/icons/react.svg";
import tailwind from "@assets/icons/tailwind.svg";
import nextjs from "@assets/icons/nextjs.svg";
import strapi from "@assets/icons/strapi.svg";

export interface NavLinks {
  key: string;
  href: string;
  label: string;
}

export const NAV_LINKS: NavLinks[] = [
  { key: "home", href: "/#", label: "Home" },
  { key: "expertise", href: "/#expertise", label: "Expertise" },
  { key: "projects", href: "/#projects", label: "Projects" },
  { key: "about", href: "/#about", label: "About" },
  { key: "contact-me", href: "/#contact-me", label: "Contact Me" },
];

export interface Expertise {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const EXPERTISE: Expertise[] = [
  {
    title: "Web Design",
    description:
      "From wireframes to launch, I craft user-centric interfaces that captivate, engage, and inspire",
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9357 20.4185C8.51488 20.4185 6.56071 22.3726 6.56071 24.7935C6.56071 26.7039 4.86904 27.7101 3.64404 27.7101C4.98571 29.4893 7.27529 30.6268 9.47738 30.6268C12.7003 30.6268 15.3107 28.0164 15.3107 24.7935C15.3107 22.3726 13.3565 20.4185 10.9357 20.4185ZM30.9295 6.7539L28.9753 4.79973C28.4065 4.23098 27.4878 4.23098 26.919 4.79973L13.8524 17.8664L17.8628 21.8768L30.9295 8.81015C31.4982 8.2414 31.4982 7.32265 30.9295 6.7539Z"
          fill="currentColor"
          className="text-accent transition-all duration-150 ease-in-out group-hover:text-secondary"
        />
      </svg>
    ),
  },
  {
    title: "Front-End",
    description:
      "Building responsive, user-friendly websites using modern front-end frameworks and Jamstack for optimal performance",
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6686 7.43567L15.3144 9.47734L13.2728 5.8315L15.3144 2.18567L11.6686 4.22734L8.02277 2.18567L10.0644 5.8315L8.02277 9.47734L11.6686 7.43567ZM29.1686 21.7273L25.5228 19.6857L27.5644 23.3315L25.5228 26.9773L29.1686 24.9357L32.8144 26.9773L30.7728 23.3315L32.8144 19.6857L29.1686 21.7273ZM32.8144 2.18567L29.1686 4.22734L25.5228 2.18567L27.5644 5.8315L25.5228 9.47734L29.1686 7.43567L32.8144 9.47734L30.7728 5.8315L32.8144 2.18567ZM21.6874 9.90025C21.1186 9.3315 20.1999 9.3315 19.6311 9.90025L2.61235 26.919C2.0436 27.4878 2.0436 28.4065 2.61235 28.9753L6.02485 32.3878C6.5936 32.9565 7.51235 32.9565 8.0811 32.3878L25.0853 15.3836C25.654 14.8148 25.654 13.8961 25.0853 13.3273L21.6874 9.90025ZM20.1853 17.9065L17.0936 14.8148L20.6519 11.2565L23.7436 14.3482L20.1853 17.9065Z"
          fill="currentColor"
          className="text-accent transition-all duration-150 ease-in-out group-hover:text-secondary"
        />
      </svg>
    ),
  },
  {
    title: "Back-End",
    description:
      "Building powerful backends that empower dynamic apps with seamless functionality and secure data management",
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.1931 19.192L20.0995 22.2856L28.844 31.0301L31.9375 27.9365L23.1931 19.192Z"
          fill="currentColor"
          className="text-accent transition-all duration-150 ease-in-out group-hover:text-secondary"
        />
        <path
          d="M25.5206 14.7433C28.3352 14.7433 30.6248 12.4537 30.6248 9.63912C30.6248 8.79329 30.3914 8.00579 30.0268 7.30579L26.0893 11.2433L23.9164 9.07037L27.8539 5.13287C27.1539 4.76829 26.3664 4.53495 25.5206 4.53495C22.706 4.53495 20.4164 6.82454 20.4164 9.63912C20.4164 10.237 20.5331 10.8058 20.7227 11.3308L18.0248 14.0287L15.4289 11.4329L16.4643 10.3975L14.4081 8.3412L17.4998 5.24954C15.7935 3.54329 13.0227 3.54329 11.3164 5.24954L6.15392 10.412L8.21017 12.4683H4.09767L3.06226 13.5037L8.22476 18.6662L9.26017 17.6308V13.5037L11.3164 15.56L12.3518 14.5245L14.9477 17.1204L4.14142 27.9266L7.23309 31.0183L23.8289 14.437C24.3539 14.6266 24.9227 14.7433 25.5206 14.7433Z"
          fill="currentColor"
          className="text-accent transition-all duration-150 ease-in-out group-hover:text-secondary"
        />
      </svg>
    ),
  },
];

const TECHNOLOGIES = {
  astro: { name: "astro", icon: astro, website: "https://astro.build/" },
  react: { name: "react", icon: react, website: "https://react.dev/" },
  tailwindcss: {
    name: "tailwindcss",
    icon: tailwind,
    website: "https://tailwindcss.com/",
  },
  nextjs: { name: "nextjs", icon: nextjs, website: "https://nextjs.org/" },
  strapi: { name: "strapi", icon: strapi, website: "https://strapi.io/" },
};

export interface Project {
  img: ImageMetadata;
  name: string;
  description: string;
  tech: { name: string; icon: ImageMetadata; website: string }[];
  link: string;
}

export const PROJECTS: Project[] = [
  {
    img: reglowProject,
    name: "Reglow Store Bali",
    description: `Reglow Store Bali is a landing page designed for Reglow skincare agents
        based in Bali. It features a sleek and modern design aimed at showcasing
        the brand's products and benefits effectively.`,
    tech: [TECHNOLOGIES.astro, TECHNOLOGIES.react, TECHNOLOGIES.tailwindcss],
    link: "https://www.reglowstorebali.com/",
  },
  {
    img: busanaetnikProject,
    name: "Busana Etnik Nusantara",
    description: `Semi e-commerce platform that showcases the beauty of Balinese culture through stunning, high-quality traditional clothing. It allows users to explore the rich traditions of Bali while offering a convenient way to purchase these unique pieces.`,
    tech: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.react,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.strapi,
    ],
    link: "https://busanaetniknusantara.com/",
  },
];

export interface SocialMedia {
  key: string;
  link: string;
  icon: JSX.Element;
}

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    key: "instagram",
    link: "https://www.instagram.com/brahamz_/",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[22px] lg:h-[26px]"
      >
        <g clipPath="url(#clip0_83_77)">
          <path
            d="M7.71521 0.424458C6.3575 0.487208 5.43033 0.699458 4.61979 1.01146C3.78092 1.33171 3.06991 1.76146 2.36247 2.45696C1.65503 3.15246 1.21939 3.84946 0.894765 4.67246C0.580603 5.46821 0.367759 6.37721 0.307785 7.70796C0.247811 9.03871 0.234541 9.46646 0.241176 12.861C0.247811 16.2555 0.263124 16.681 0.328968 18.0145C0.393791 19.3442 0.609697 20.2522 0.928197 21.0465C1.25563 21.8682 1.69382 22.5645 2.40407 23.2577C3.11431 23.951 3.82532 24.3767 4.66751 24.6952C5.47907 25.0025 6.40727 25.212 7.76548 25.2702C9.1237 25.3285 9.56087 25.342 13.0251 25.3355C16.4893 25.329 16.9254 25.314 18.2864 25.2507C19.6475 25.1875 20.5695 24.9745 21.3806 24.664C22.2195 24.3425 22.9307 23.914 23.6379 23.218C24.3451 22.522 24.7805 21.8245 25.1048 21.001C25.4193 20.206 25.6329 19.2967 25.6918 17.9672C25.7513 16.633 25.7653 16.207 25.7587 12.813C25.7521 9.41896 25.7365 8.99346 25.6719 7.66046C25.6074 6.32746 25.3912 5.42221 25.0729 4.62746C24.745 3.80571 24.3073 3.10996 23.5973 2.41621C22.8873 1.72246 22.1748 1.29621 21.3344 0.979208C20.5223 0.671458 19.5946 0.461708 18.2364 0.404208C16.8782 0.346708 16.441 0.331958 12.9756 0.338458C9.51009 0.344958 9.07623 0.359458 7.71521 0.424458ZM7.86425 23.0215C6.62011 22.9685 5.94457 22.766 5.49438 22.5965C4.89822 22.3715 4.47355 22.0995 4.0249 21.6642C3.57624 21.229 3.30061 20.8115 3.06786 20.2287C2.89305 19.7877 2.6825 19.1267 2.62431 17.908C2.56102 16.5907 2.54775 16.1952 2.54035 12.858C2.53295 9.52071 2.54596 9.12571 2.60492 7.80796C2.658 6.59021 2.86599 5.92771 3.03877 5.48696C3.26846 4.90221 3.5451 4.48696 3.99044 4.04771C4.43578 3.60846 4.8607 3.33796 5.4561 3.10996C5.90578 2.93796 6.58055 2.73346 7.82418 2.67546C9.1699 2.61296 9.57312 2.60046 12.9794 2.59321C16.3857 2.58596 16.7899 2.59846 18.1361 2.65646C19.3792 2.70946 20.0558 2.91121 20.5052 3.08146C21.1017 3.30646 21.5261 3.57671 21.9745 4.01371C22.4229 4.45071 22.6993 4.86546 22.932 5.44996C23.1078 5.88921 23.3166 6.54996 23.3753 7.76896C23.4394 9.08721 23.4539 9.48246 23.46 12.819C23.4662 16.1555 23.4542 16.5517 23.3952 17.869C23.3408 19.0877 23.1346 19.7497 22.9614 20.1912C22.7317 20.775 22.4548 21.1912 22.0092 21.6302C21.5636 22.0692 21.1392 22.3397 20.5435 22.5677C20.0943 22.7395 19.4188 22.9445 18.1762 23.0025C16.8305 23.0645 16.4273 23.0775 13.0197 23.0847C9.61217 23.092 9.21022 23.0785 7.8645 23.0215M18.2668 6.15621C18.2673 6.4529 18.3576 6.74278 18.5263 6.98919C18.695 7.2356 18.9345 7.42747 19.2145 7.54053C19.4946 7.65359 19.8025 7.68276 20.0995 7.62436C20.3964 7.56595 20.669 7.4226 20.8828 7.21242C21.0966 7.00224 21.2419 6.73468 21.3004 6.44358C21.359 6.15248 21.3281 5.85092 21.2116 5.57703C21.0952 5.30314 20.8984 5.06922 20.6463 4.90487C20.3941 4.74052 20.0979 4.65312 19.795 4.65371C19.389 4.6545 18.9999 4.81323 18.7133 5.09499C18.4267 5.37675 18.2661 5.75847 18.2668 6.15621ZM6.4481 12.8495C6.45524 16.3945 9.39422 19.2617 13.0123 19.255C16.6304 19.2482 19.5594 16.3695 19.5525 12.8245C19.5456 9.27946 16.6059 6.41146 12.9873 6.41846C9.3687 6.42546 6.44121 9.30496 6.4481 12.8495ZM8.7465 12.845C8.74484 12.0209 8.99268 11.2148 9.45868 10.5287C9.92468 9.84253 10.5879 9.30718 11.3645 8.9903C12.1411 8.67343 12.9962 8.58925 13.8216 8.74843C14.6471 8.9076 15.4058 9.30298 16.0018 9.88455C16.5979 10.4661 17.0045 11.2078 17.1702 12.0157C17.336 12.8237 17.2534 13.6616 16.933 14.4236C16.6126 15.1856 16.0688 15.8374 15.3702 16.2966C14.6716 16.7559 13.8498 17.0018 13.0085 17.0035C12.4499 17.0046 11.8965 16.8979 11.38 16.6896C10.8635 16.4812 10.3939 16.1752 9.99815 15.789C9.60237 15.4029 9.28813 14.9441 9.07337 14.439C8.85861 13.9338 8.74754 13.3922 8.7465 12.845Z"
            fill="currentColor"
            className="text-dark transition-all duration-150 ease-in-out group-hover:text-accent"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_83_77">
            <rect
              width="25.5208"
              height="25"
              fill="white"
              transform="translate(0.239624 0.336914)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    key: "twitter",
    link: "https://twitter.com/danzBraham",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-lg:h-[23px] max-md:h-[20px]"
      >
        <g clipPath="url(#clip0_83_79)">
          <path
            d="M15.4279 10.9173L24.9286 0.336914H22.6772L14.4277 9.52369L7.83893 0.336914H0.239502L10.2031 14.2289L0.239502 25.3241H2.49099L11.2026 15.6225L18.1609 25.3241H25.7603L15.4273 10.9173H15.4279ZM12.3441 14.3513L11.3346 12.968L3.30224 1.96068H6.76039L13.2426 10.8439L14.2521 12.2273L22.6783 23.7742H19.2201L12.3441 14.3519V14.3513Z"
            fill="currentColor"
            className="text-dark transition-all duration-150 ease-in-out group-hover:text-accent"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_83_79">
            <rect
              width="25.5208"
              height="25"
              fill="white"
              transform="translate(0.239502 0.336914)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    key: "github",
    link: "https://github.com/danzBraham",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-lg:h-[23px] max-md:h-[20px]"
      >
        <g clipPath="url(#clip0_83_81)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9619 0.336914C5.92674 0.336914 0.239502 6.06608 0.239502 13.1538C0.239502 18.8195 3.88351 23.6153 8.93872 25.3127C9.57075 25.4403 9.80226 25.0369 9.80226 24.6976C9.80226 24.4005 9.78143 23.382 9.78143 22.3208C6.24237 23.0848 5.50539 20.7929 5.50539 20.7929C4.93664 19.3075 4.09393 18.9257 4.09393 18.9257C2.9356 18.1406 4.1783 18.1406 4.1783 18.1406C5.4632 18.2255 6.13742 19.4562 6.13742 19.4562C7.27466 21.4083 9.10721 20.8567 9.84445 20.5171C9.94966 19.6895 10.2869 19.1166 10.645 18.7984C7.82231 18.5012 4.85252 17.3979 4.85252 12.4747C4.85252 11.0742 5.35773 9.92832 6.15825 9.03717C6.03195 8.71895 5.5895 7.40306 6.28481 5.64186C6.28481 5.64186 7.35903 5.30228 9.78117 6.95749C10.8182 6.67693 11.8876 6.53421 12.9619 6.53301C14.0361 6.53301 15.1312 6.68171 16.1424 6.95749C18.5648 5.30228 19.639 5.64186 19.639 5.64186C20.3343 7.40306 19.8916 8.71895 19.7653 9.03717C20.5869 9.92832 21.0713 11.0742 21.0713 12.4747C21.0713 17.3979 18.1015 18.4799 15.2577 18.7984C15.7213 19.2015 16.1213 19.9653 16.1213 21.1749C16.1213 22.8937 16.1004 24.2731 16.1004 24.6973C16.1004 25.0369 16.3322 25.4403 16.964 25.313C22.0192 23.615 25.6632 18.8195 25.6632 13.1538C25.684 6.06608 19.976 0.336914 12.9619 0.336914Z"
            fill="currentColor"
            className="text-dark transition-all duration-150 ease-in-out group-hover:text-accent"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_83_81">
            <rect
              width="25.5208"
              height="25"
              fill="white"
              transform="translate(0.239502 0.336914)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
