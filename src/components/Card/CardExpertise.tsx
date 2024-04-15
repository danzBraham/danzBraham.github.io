import { type FC } from "react";

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
}

const CardExpertise: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="frame-green group h-[220px] w-full rounded-2xl bg-dark/90 p-5 transition-all duration-150 ease-in-out hover:bg-light hover:text-dark md:max-lg:max-w-[350px] lg:h-[240px] lg:flex-1 xl:p-7">
      <div className="flex items-center gap-[20px]">
        <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[10px] border border-accent bg-dark transition-all duration-150 ease-in-out group-hover:border-secondary group-hover:bg-light">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold capitalize">{title}</h3>
        </div>
      </div>
      <p className="mt-6 font-montserrat">{description}</p>
    </div>
  );
};

export default CardExpertise;
