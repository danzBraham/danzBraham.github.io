import type { FC } from "react";

interface ButtonProps {
  href: string;
  label: string;
}

const Button: FC<ButtonProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      aria-label={`${label} Button`}
      className="grow rounded-[10px] bg-secondary px-[26px] py-4 text-center"
    >
      {label}
    </a>
  );
};

export default Button;
