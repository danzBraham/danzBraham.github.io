import { SOCIAL_MEDIA } from "@constants/index";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary pb-[25px] pt-[75px]">
      <div className="container flex w-full flex-col gap-[10px]">
        <div className="flex w-full items-center justify-between">
          <a href="/#" className="group">
            <svg
              width="85"
              height="52"
              viewBox="0 0 85 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-fit w-[50px] md:w-[60px] lg:w-[70px]"
            >
              <title>Zidan Abraham</title>
              <g clipPath="url(#clip0_38_446)">
                <path
                  d="M0 23.0035H33.4333C35.6241 23.0035 37.4 24.7795 37.4 26.9702V31.5035H0V23.0035Z"
                  fill="currentColor"
                  className="text-accent"
                ></path>
                <path
                  d="M29.6 27.5369H68.1333V36.0369H33.5666C31.3759 36.0369 29.6 34.2609 29.6 32.0702V27.5369Z"
                  fill="currentColor"
                  className="text-accent"
                ></path>
                <path
                  d="M0 11.4936V0.336914H37.4V11.211L15.7023 40.0338L37.4 39.7512V51.3369H0V40.3164L21.6977 11.4936H0Z"
                  fill="currentColor"
                  className="text-light transition-all duration-150 ease-in-out group-hover:text-dark"
                ></path>
                <path
                  d="M51.5365 0.336914L37 39.6554V51.3369H45.8359L48.9712 42.2196L58.6625 14.0129L68.3531 42.2196L71.4885 51.3369H84.6L66.0728 0.336914H51.5365Z"
                  fill="currentColor"
                  className="text-light transition-all duration-150 ease-in-out group-hover:text-dark"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_38_446">
                  <rect
                    width="85"
                    height="51"
                    fill="white"
                    transform="translate(0 0.336914)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <div className="flex items-center justify-end gap-[10px]">
            {SOCIAL_MEDIA.map(({ key, link, icon }) => (
              <a
                key={key}
                title={key}
                aria-label={key}
                href={link}
                target="_blank"
                className="group flex h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-accent transition-all duration-150 ease-in-out hover:bg-dark md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-[3px] w-full rounded-full bg-dark"></div>
        <div className="flex w-full items-center justify-between text-center font-montserrat text-xs font-light max-md:flex-col md:text-sm">
          <p>&copy; 2024 All rights reserved</p>
          <p>Designed with Figma & crafted using Astro by Zidan Abraham</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
