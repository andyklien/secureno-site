import { ReactNode } from "react";

const maxWidths = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
} as const;

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof maxWidths;
}) {
  return (
    <div className={`mx-auto w-full ${maxWidths[size]} px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
