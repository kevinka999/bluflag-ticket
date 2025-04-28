import * as React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={twMerge(
        "focus:ring-primary focus:border-primary text-font w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm placeholder-gray-400 transition-colors focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        className,
      )}
    />
  );
};
