import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Loader2 } from "lucide-react";

type Sizes = "small" | "medium" | "large";
type Variants = "primary" | "secondary" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Variants;
  size?: Sizes;
  loading?: boolean;
};

const variants: Record<Variants, string> = {
  primary: "bg-primary hover:bg-primary/90",
  secondary: "bg-secondary hover:bg-secondary/80",
  outline:
    "border border-primary text-primary bg-white hover:bg-primary hover:text-white",
};

const sizes: Record<Sizes, string> = {
  small: "h-9 px-2",
  medium: "h-10 px-4",
  large: "h-11 px-8",
};

export const Button = ({
  className,
  variant,
  size = "medium",
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonVariants = twMerge(
    "flex items-center drop-shadow-sm text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-colors cursor-pointer disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  return (
    <button
      className={buttonVariants}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
