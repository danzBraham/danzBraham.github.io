import { type FC, useState, useEffect } from "react";
import { NAV_LINKS } from "@constants/index";

const Header: FC = () => {
  const [isActive, setisActive] = useState<boolean>(false);

  const handleClick = () => {
    if (window.innerWidth > 1280) return;
    setisActive((currentState) => !currentState);
  };

  useEffect(() => {
    window.document.documentElement.style.setProperty("scroll-padding", "25px");
  }, []);

  return (
    <header
      className={`fixed z-50 w-full ${isActive ? "min-h-full bg-light" : "rounded-b-2xl bg-dark/10 backdrop-blur-lg"}`}
    >
      <nav className="max-container flex items-center justify-between px-[26px] py-4 xl:px-[42px]">
        <a href="/#">
          <svg
            width="85"
            height="52"
            viewBox="0 0 85 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group h-fit w-[60px] lg:w-[70px]"
          >
            <g clipPath="url(#clip0_38_446)">
              <path
                d="M0 23.0035H33.4333C35.6241 23.0035 37.4 24.7795 37.4 26.9702V31.5035H0V23.0035Z"
                fill="currentColor"
                className={`${isActive ? "text-secondary" : "text-accent"} transition-all duration-300 ease-in-out group-hover:text-light`}
              />
              <path
                d="M29.6 27.5369H68.1333V36.0369H33.5666C31.3759 36.0369 29.6 34.2609 29.6 32.0702V27.5369Z"
                fill="currentColor"
                className={`${isActive ? "text-secondary" : "text-accent"} transition-all duration-300 ease-in-out group-hover:text-light`}
              />
              <path
                d="M0 11.4936V0.336914H37.4V11.211L15.7023 40.0338L37.4 39.7512V51.3369H0V40.3164L21.6977 11.4936H0Z"
                fill="currentColor"
                className={`${isActive ? "text-dark" : "text-light"} transition-all duration-300 ease-in-out group-hover:text-accent`}
              />
              <path
                d="M51.5365 0.336914L37 39.6554V51.3369H45.8359L48.9712 42.2196L58.6625 14.0129L68.3531 42.2196L71.4885 51.3369H84.6L66.0728 0.336914H51.5365Z"
                fill="currentColor"
                className={`${isActive ? "text-dark" : "text-light"} transition-all duration-300 ease-in-out group-hover:text-accent`}
              />
            </g>
            <defs>
              <clipPath id="clip0_38_446">
                <rect
                  width="85"
                  height="51"
                  fill="white"
                  transform="translate(0 0.336914)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <div
          className={`invisible fixed left-0 right-0 top-[82px] z-50 min-h-full w-full p-[42px] opacity-0 transition-all duration-300 ease-in-out ${isActive && "slide"} xl:visible xl:static xl:w-fit xl:p-4 xl:opacity-100`}
        >
          <ul
            className={`flex w-full flex-col justify-between gap-[68px] font-montserrat text-lg xl:flex-row xl:text-base ${isActive && "text-secondary"}`}
          >
            {NAV_LINKS.map(({ key, href, label }) => (
              <li key={key} onClick={handleClick}>
                <a href={href} className="links py-[6px] xl:py-1">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={handleClick}
          className="relative flex h-[30px] w-[45px] items-center justify-center xl:hidden"
        >
          <button
            aria-label="Toggle Menu"
            className={`absolute flex h-full w-full ${isActive && "hamburger"}`}
          >
            <span className="absolute top-1 block h-[3px] w-full origin-top-left rounded bg-accent transition-all duration-300 ease-in-out"></span>
            <span className="absolute bottom-1 right-0 block h-[3px] w-[70%] origin-bottom-left rounded bg-accent transition-all duration-300 ease-in-out"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
