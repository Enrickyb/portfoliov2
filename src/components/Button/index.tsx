type ButtonProps = {
  bgColor: string;
  textColor: string;
  border?: string;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

import share from "../../assets/icons/share.svg";

export const Button = ({
  bgColor,
  textColor,
  label,
  border,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`bg-${bgColor} text-${textColor} border-${border} border-[2px] rounded-4xl px-8 py-3 flex flex-row justify-center items-center gap-4`}
    >
      <p className="font-ubuntuRegular text-xl">{label}</p>
      <img src={share} alt="share" />
    </button>
  );
};
