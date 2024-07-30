import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const spinnerVariants = cva("flex-col items-center justify-center", {
  variants: {
    show: {
      true: "flex",
      false: "hidden",
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva("animate-spin", {
  variants: {
    size: {
      small: "size-6",
      medium: "size-8",
      large: "size-12",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      orange: "bg-orange-500",
      red: "text-red-500",
      blue: "text-blue-500",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Spinner({
  size,
  color,
  show,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2
        color="#ed461d"
        className={cn(loaderVariants({ size }), className)}
      />
      {children}
    </span>
  );
}
