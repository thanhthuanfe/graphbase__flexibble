import React from "react";
import { MouseEventHandler } from "react";
import Image from "next/image";
type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  submitting?: boolean | false;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};
const Button = ({
  title,
  type,
  leftIcon,
  rightIcon,
  handleClick,
  submitting,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={submitting || false}
      onClick={handleClick}
      className={`flexCenter gap-3 px-4 py-3 ${
        textColor ? textColor : "text-white"
      } ${
        submitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary-purple"
      } rounded-xl text-sm font-medium max-md:w-full`}
    >
      {leftIcon && (
        <Image src={leftIcon} width={14} height={14} alt="left Icon" />
      )}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt="right icon" />
      )}
    </button>
  );
};

export default Button;
