import type { Config } from "tailwindcss";

/**
 * Tailwind only exposes design tokens. It does NOT define new design values.
 * If a token is missing from tokens.css, it cannot be used here.
 *
 * Locked categories (cannot be extended ad hoc):
 *   - colors           → only token-backed values
 *   - borderRadius     → only the radius scale
 *   - boxShadow        → only soft-raised, overlay, none
 *   - fontFamily       → only sans, mono
 *
 * Open categories (Tailwind defaults are fine):
 *   - spacing, sizes, breakpoints, grid, flex, etc.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        // Surfaces
        "surface-base":    "var(--surface-base)",
        "surface-inner":   "var(--surface-inner)",
        "surface-raised":  "var(--surface-raised)",
        "surface-overlay": "var(--surface-overlay)",
        "surface-hover":   "var(--surface-hover)",
        "surface-track":   "var(--surface-track)",

        // Shorthand aliases (matches border-border, text-foreground conventions)
        "foreground":      "var(--foreground)",
        "border":          "var(--border)",

        // Text
        "text-primary":    "var(--text-primary)",
        "text-secondary":  "var(--text-secondary)",
        "text-tertiary":   "var(--text-tertiary)",
        "text-disabled":   "var(--text-disabled)",
        "text-on-accent":  "var(--text-on-accent)",
        // shadcn-style alias used in product code
        "muted-foreground": "var(--text-secondary)",

        // Borders (use as bg-* or border-*)
        "border-subtle":   "var(--border-subtle)",
        "border-default":  "var(--border-default)",
        "border-strong":   "var(--border-strong)",

        // Single accent (system rule: one accent per component)
        "accent":          "var(--accent)",
        "accent-hover":    "var(--accent-hover)",
        "accent-pressed":  "var(--accent-pressed)",
        "accent-subtle":   "var(--accent-subtle)",

        // Primary — RGB-channel form so Tailwind's /<alpha> modifier works
        // (e.g. bg-primary, bg-primary/10, ring-primary/30)
        "primary":             "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground":  "rgb(var(--primary-foreground) / <alpha-value>)",

        // Status (semantic only)
        "success":   "var(--status-success)",
        "warning":   "var(--status-warning)",
        "critical":  "var(--status-critical)",
        "info":      "var(--status-info)",
      },

      borderRadius: {
        sm:    "var(--radius-sm)",
        md:    "var(--radius-md)",
        lg:    "var(--radius-lg)",
        xl:    "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full:  "var(--radius-full)",
      },

      boxShadow: {
        none:           "var(--shadow-none)",
        "soft-raised":  "var(--shadow-soft-raised)",
        overlay:        "var(--shadow-overlay)",
      },

      fontFamily: {
        sans:       "var(--font-sans)",
        mono:       "var(--font-mono)",
        condensed:  "var(--font-condensed)",
      },

      fontSize: {
        xs:    ["var(--font-size-xs)",   { lineHeight: "var(--line-height-snug)" }],
        sm:    ["var(--font-size-sm)",   { lineHeight: "var(--line-height-normal)" }],
        base:  ["var(--font-size-base)", { lineHeight: "var(--line-height-normal)" }],
        md:    ["var(--font-size-md)",   { lineHeight: "var(--line-height-normal)" }],
        lg:    ["var(--font-size-lg)",   { lineHeight: "var(--line-height-snug)" }],
        xl:    ["var(--font-size-xl)",   { lineHeight: "var(--line-height-snug)" }],
        "2xl": ["var(--font-size-2xl)",  { lineHeight: "var(--line-height-snug)" }],
        "3xl": ["var(--font-size-3xl)",  { lineHeight: "var(--line-height-tight)" }],
        "4xl": ["var(--font-size-4xl)",  { lineHeight: "var(--line-height-tight)" }],
        "5xl": ["var(--font-size-5xl)",  { lineHeight: "var(--line-height-tight)" }],
      },

      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
      },

      transitionTimingFunction: {
        // Tailwind prefixes with `ease-`, so these produce ease-standard / ease-mx etc.
        // ease-standard is the MachIndex default (cubic-bezier(0.22, 1, 0.36, 1))
        "standard": "var(--ease-standard)",
        "mx":       "var(--ease-standard)",
        "soft-out": "var(--ease-out)",
        "soft-in":  "var(--ease-in)",
      },

      zIndex: {
        base:     "var(--z-base)",
        raised:   "var(--z-raised)",
        dropdown: "var(--z-dropdown)",
        sticky:   "var(--z-sticky)",
        overlay:  "var(--z-overlay)",
        modal:    "var(--z-modal)",
        popover:  "var(--z-popover)",
        toast:    "var(--z-toast)",
        tooltip:  "var(--z-tooltip)",
      },
    },
  },
  plugins: [],
} satisfies Config;
