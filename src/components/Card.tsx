import { twMerge } from "tailwind-merge";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Root = ({ className, children }: CardProps) => (
  <div
    className={twMerge(
      "rounded-lg bg-white shadow-sm drop-shadow-sm",
      className,
    )}
  >
    {children}
  </div>
);

type CardHeaderProps = {
  className?: string;
  children: React.ReactNode;
};

const Header = ({ className, children }: CardHeaderProps) => (
  <div className={twMerge("flex flex-col p-6", className)}>{children}</div>
);

type CardTitleProps = {
  className?: string;
  children: React.ReactNode;
};

const Title = ({ className, ...props }: CardTitleProps) => (
  <h3 className={twMerge("text-2xl font-semibold", className)} {...props}>
    {props.children}
  </h3>
);

type CardDescriptionProps = {
  className?: string;
  children: React.ReactNode;
};

const Description = ({ className, children }: CardDescriptionProps) => (
  <p className={twMerge("text-sm", className)}>{children}</p>
);

type CardContentProps = {
  className?: string;
  children: React.ReactNode;
};

const Content = ({ className, children }: CardContentProps) => (
  <div className={twMerge("p-6 pt-0", className)}>{children}</div>
);

export const Card = { Root, Header, Title, Description, Content };
