import { type FC } from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
}

const CardExpertise: FC<Props> = ({ icon, title, subtitle, description }) => {
  return (
    <div className="frame-green group h-[240px] w-full rounded-[26px] bg-dark/90 p-[26px] transition-all duration-150 ease-in-out hover:bg-light hover:text-dark md:max-lg:max-w-[350px] lg:flex-1">
      <div className="flex items-center gap-[20px]">
        <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[10px] border border-accent bg-dark transition-all duration-150 ease-in-out group-hover:border-secondary group-hover:bg-light">
          {icon}
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
