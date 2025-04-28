import * as React from "react";
import { twMerge } from "tailwind-merge";

type TableProps = React.HTMLAttributes<HTMLTableElement>;
type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;
type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

const Root = ({ className, ...props }: TableProps) => (
  <div className="relative w-full overflow-auto rounded bg-white shadow-sm drop-shadow-sm">
    <table
      className={twMerge("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
);

const Header = ({ className, ...props }: TableHeaderProps) => (
  <thead
    className={twMerge("bg-primary/10 [&_tr]:border-b-0", className)}
    {...props}
  />
);

const Body = ({ className, ...props }: TableBodyProps) => (
  <tbody
    className={twMerge("[&_tr:last-child]:border-0", className)}
    {...props}
  />
);

const Footer = ({ className, ...props }: TableFooterProps) => (
  <tfoot
    className={twMerge(
      "border-t font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
);

const Row = ({ className, ...props }: TableRowProps) => (
  <tr className={twMerge("border-b border-gray-100", className)} {...props} />
);

const Head = ({ className, ...props }: TableHeadProps) => (
  <th
    className={twMerge(
      "text-primary h-12 px-4 text-left align-middle font-semibold",
      className,
    )}
    {...props}
  />
);

const Cell = ({ className, ...props }: TableCellProps) => (
  <td className={twMerge("p-4 align-middle", className)} {...props} />
);

export const Table = {
  Root,
  Header,
  Body,
  Footer,
  Head,
  Row,
  Cell,
};
