import { ReactNode } from "react";

export type BentoSize =
  | "1x1"
  | "2x1"
  | "2x2"
  | "2x3"
  | "2x4"
  | "3x1"
  | "3x2"
  | "3x3"
  | "3x4"
  | "3x5"
  | "4x1"
  | "4x2"
  | "4x5"
  | "6x1"
  | "6x2"
  | "6x3";

const colSpan: Record<string, string> = {
  "1": "col-span-1",
  "2": "col-span-2",
  "3": "col-span-3",
  "4": "col-span-4",
  "6": "col-span-6",
};

const rowSpan: Record<string, string> = {
  "1": "row-span-1",
  "2": "row-span-2",
  "3": "row-span-3",
  "4": "row-span-4",
  "5": "row-span-5",
};

type Variant = "base" | "compact" | "feature";

const variantClass: Record<Variant, string> = {
  base: "p-4 rounded-xl",
  compact: "p-3 rounded-xl",
  feature: "p-5 rounded-2xl",
};

export function BentoCard({
  size,
  variant = "base",
  children,
}: {
  size: BentoSize;
  variant?: Variant;
  children?: ReactNode;
}) {
  const [c, r] = size.split("x");
  return (
    <div
      className={`bg-surface-raised border border-border shadow-soft-raised dark:shadow-none ${variantClass[variant]} ${colSpan[c]} ${rowSpan[r]}`}
    >
      {children}
    </div>
  );
}
