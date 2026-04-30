// components/ui/bento-grid.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

type BentoSpan = 1 | 2 | 3 | 4 | 5 | 6;
type BentoVariant = "default" | "compact" | "feature";

type BentoGridProps = React.HTMLAttributes<HTMLDivElement>;

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-6 gap-3 p-4",
        "auto-rows-[52px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type BentoCardProps = React.HTMLAttributes<HTMLDivElement> & {
  colSpan?: BentoSpan;
  rowSpan?: BentoSpan;
  variant?: BentoVariant;
};

const colSpanClass: Record<BentoSpan, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

const rowSpanClass: Record<BentoSpan, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  5: "row-span-5",
  6: "row-span-6",
};

const variantClass: Record<BentoVariant, string> = {
  default: "p-4 rounded-xl",
  compact: "p-3 rounded-xl",
  feature: "p-5 rounded-2xl",
};

export function BentoCard({
  className,
  children,
  colSpan = 6,
  rowSpan = 2,
  variant = "default",
  ...props
}: BentoCardProps) {
  return (
    <section
      className={cn(
        "bg-surface-raised shadow-soft-raised",
        "border border-border",
        "overflow-hidden",
        "text-foreground",
        colSpanClass[colSpan],
        rowSpanClass[rowSpan],
        variantClass[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
