import { type FC } from "react";

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

const icons: any = {
  brush: (
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
  wand: (
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
  construction: (
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
};

const CardExpertise: FC<Props> = ({ icon, title, subtitle, description }) => {
  return (
    <div className="frame-green group h-[240px] w-full rounded-[26px] bg-dark/90 p-[26px] transition-all duration-150 ease-in-out hover:bg-light hover:text-dark md:max-lg:max-w-[350px] lg:flex-1">
      <div className="flex items-center gap-[20px]">
        <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[10px] border border-accent bg-dark transition-all duration-150 ease-in-out group-hover:border-secondary group-hover:bg-light">
          {icons[icon]}
        </div>
        <div>
          <h3 className="text-lg font-semibold capitalize">{title}</h3>
          <p className="mt-[2px] font-montserrat text-xs font-medium normal-case md:mt-1 md:text-sm">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-4 h-[3px] w-full rounded-full bg-accent transition-all duration-150 ease-in-out group-hover:bg-secondary"></div>
      <p className="mt-[26px] font-montserrat">{description}</p>
    </div>
  );
};

export default CardExpertise;
