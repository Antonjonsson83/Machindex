import { cn } from "@/lib/utils";

type ToggleProps = {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export function Toggle({
  checked,
  onChange,
  disabled,
  "aria-label": ariaLabel,
}: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full transition-all ease-standard duration-base",
        "border border-border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        checked ? "bg-primary/10" : "bg-surface-track",
      )}
    >
      <span
        className={cn(
          "inline-block h-6 w-6 transform rounded-full transition-all ease-standard duration-base",
          "bg-surface-raised shadow-soft-raised",
          checked ? "translate-x-7 bg-primary" : "translate-x-1",
        )}
      />
    </button>
  );
}
