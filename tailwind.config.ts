import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg-background)",
        "surface-raised": "var(--bg-surface-raised)",
        "surface-track": "var(--bg-surface-track)",
        "surface-inner": "var(--bg-surface-inner)",
        border: "var(--border)",
        foreground: "var(--foreground)",
        "muted-foreground": "var(--muted-foreground)",
        primary: "var(--primary)",
      },
      borderRadius: {
        chip: "8px",
        input: "12px",
        button: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        "soft-raised":
          "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
      },
      gridAutoRows: {
        bento: "52px",
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
