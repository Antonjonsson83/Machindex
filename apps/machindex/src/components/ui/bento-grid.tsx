import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* =========================================================================
 * BentoGrid + BentoCard
 *
 * Per DESIGN_SYSTEM.md §5 (Bento Grid) and §2 (Card System).
 *
 * Locked styling — components do NOT expose visual override props.
 * Only layout (colSpan, rowSpan) and the three sanctioned variants.
 *
 *   Grid:  6 columns · 12px gap · 16px outer padding
 *   Card:  bg-surface-raised · token border · token radius · token padding
 * ========================================================================= */

/* -------------------------------------------------------------------------
 * BentoGrid
 * ------------------------------------------------------------------------- */

type BentoGridProps = {
  children: ReactNode;
  /** Optional layout-only className. Visual styling is locked. */
  className?: string;
};

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(48px,auto)] grid-cols-6 gap-3 p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * BentoCard
 * ------------------------------------------------------------------------- */

type BentoColSpan = 1 | 2 | 3 | 6;
type BentoRowSpan = 1 | 2 | 3 | 4;
type BentoVariant = "default" | "compact" | "feature";

type BentoCardProps = {
  colSpan: BentoColSpan;
  rowSpan: BentoRowSpan;
  variant?: BentoVariant;
  children: ReactNode;
  /** Optional layout-only className. Visual styling is locked. */
  className?: string;
};

const colSpanClass: Record<BentoColSpan, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  6: "col-span-6",
};

const rowSpanClass: Record<BentoRowSpan, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
};

const variantClass: Record<BentoVariant, string> = {
  default: "rounded-xl p-4",
  compact: "rounded-xl p-3",
  feature: "rounded-2xl p-5",
};

export function BentoCard({
  colSpan,
  rowSpan,
  variant = "default",
  children,
  className,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        // Locked styling — every BentoCard must look identical save for variant.
        "bg-surface-raised border border-border-subtle text-text-primary shadow-soft-raised",
        colSpanClass[colSpan],
        rowSpanClass[rowSpan],
        variantClass[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
