# Machindex

React + Vite + TypeScript + Tailwind frontend that follows the **Machindex Design System v2.1** (light + dark).

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS with design-system tokens
- React Router v6

## Design system

See `src/index.css` for surface tokens (L0–L3), and `tailwind.config.ts` for radius / shadow / typography tokens.

**Forbidden** (per design system v2.1): gradients, glow, neon, blur, arbitrary radii, inline styles, colored cards/shadows.

## Bento grid

6-column CSS Grid, gap 12px, padding 16px, row unit 52px.

Available card sizes: `1x1, 2x1, 2x2, 2x3, 2x4, 3x1, 3x2, 3x3, 3x4, 3x5, 4x1, 4x2, 4x5, 6x1, 6x2, 6x3`.

Usage:

```tsx
<BentoGrid>
  <BentoCard size="6x1" />
  <BentoCard size="2x2" />
  <BentoCard size="3x4" variant="feature" />
</BentoGrid>
```

## Run

```bash
npm install
npm run dev
```

Three demo layouts at `/`, `/2`, `/3` mirror the Figma mobile grids.
