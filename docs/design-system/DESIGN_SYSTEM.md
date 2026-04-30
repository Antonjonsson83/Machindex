# MachIndex Design System — v2

> **Core Principle**
>
> Grid may be flexible. Card styling is not.
>
> The system allows softness, but not creativity.
> Softness is controlled via tokens.
> Creativity outside tokens is not allowed.

---

## 1. Radius System

MachIndex uses a controlled radius scale. **No arbitrary values allowed.**

| Token | Value | Usage |
|------|------|------|
| `radius-sm` | 8px | Icon chips, small controls |
| `radius-md` | 12px | Inputs, small containers |
| `radius-lg` | 16px | Buttons, medium containers |
| `radius-xl` | 20px | Default cards |
| `radius-2xl` | 24px | Large feature cards |

### Rules

- Default card radius = `radius-xl` (20px)
- Feature cards may use `radius-2xl` (24px)
- Icon chips ALWAYS use `radius-sm` (8px)
- Inputs ALWAYS use `radius-md` (12px)

### Not allowed

- 10px, 13px, 15px, 17px, etc.
- Mixing multiple radii in same component
- Custom per-component radius

---

## 2. Card System

Cards may vary in size, but **NEVER in styling**.

### Base Card (Default)

- `bg-surface-raised`
- `rounded-xl` (20px)
- `shadow-soft-raised`
- token border
- padding: `p-4`

### Card Variants

| Variant | Usage | Rules |
|--------|------|------|
| `default` | standard cards | base rules |
| `compact` | small KPI / utility | `p-3` |
| `feature` | large hero cards | `rounded-2xl`, `p-5` |

### Soft Raised Cards

Used for:
- KPI cards
- Analytics
- AI input container

**Light mode** — allowed:
- Ultra subtle elevation (max 2 layers)
- Very low opacity (<0.06)

Examples:
- `0 1px 2px rgba(0,0,0,0.04)`
- `0 4px 12px rgba(0,0,0,0.04)`

**Dark mode:**
- NO glow
- NO neon
- Depth comes from surface contrast only

### Forbidden on cards

- Gradients
- Glow
- Blur
- Neumorphism
- Floating glass cards

---

## 3. Charts

Charts are **data-first, not design elements**.

### Default

- Grayscale / neutral palette
- Thin strokes
- Minimal fill

### Accent

- Only ONE accent allowed
- Must map to meaning (primary or status)

### Forbidden

- Multi-color decorative charts
- Gradients
- Bright accent fills

---

## 4. AI Input Component

This is a primary system component.

### Structure

Single container only:

```
[ input row ]
[ controls row ]
```

### Rules

- Uses `bg-surface-raised`
- `rounded-xl`
- `shadow-soft-raised`
- No nested cards
- No glow
- No inner shadows

### Behavior

- Subtle focus state only
- No animated glow
- No neon effects

---

## 5. Bento Grid

MachIndex supports flexible mobile grid layouts.

### Grid

- `grid-template-columns: repeat(6, 1fr)`
- `gap: 12px`
- Outer padding: 16px

### Card sizing

Allowed unit sizes only:

- 1×1
- 2×1
- 2×2
- 3×2
- 3×3
- 6×2
- 6×3

### Rules

- Cards snap to grid units
- No random sizes
- No horizontal scroll
- Layout can vary, styling cannot

---

## 6. Shadow Policy

### Light mode

**Allowed:**
- Border-based elevation
- Minimal soft shadow (optional, controlled)

**Not allowed:**
- Large shadows
- Blur shadows
- Glow
- Atmospheric depth

### Dark mode

**Allowed:**
- Subtle depth via contrast

**Not allowed:**
- Neon glow
- Colored shadows

---

## 7. Ban List (consolidated)

Do **NOT** use:

- Decorative gradients in cards
- Glow effects
- Blur-based elevation
- Multiple accent colors in same component
- Arbitrary radius values
- Nested card containers
- Glassmorphism / `backdrop-blur` on surfaces
- Neumorphism
- Floating glass cards
- Multi-color decorative charts
- Bright accent fills in charts
- Animated glow on inputs
- Inner shadows on inputs

---

## Enforcement

This document is the **source of truth**. Everything that conflicts with these rules in the legacy Lovable codebase (`reference/`) must NOT be carried over to `apps/machindex/`.

Specifically rejected from prior Lovable work:
- Glassmorphism (`.glass-card`, `backdrop-blur`, `rgba(10,16,32,0.55)` panels)
- V3 multi-accent palette (cyan `#3FD6FF` + electric blue `#4E8DFF` + violet `#8E6BFF` + magenta `#FF5FD2`)
- Ambient glow orbs, neon shadows, edge-glow lines
- Card aura pseudo-elements
- Radial gradients on cards/charts
- `rounded-[22px]`, `rounded-[14px]`, or any `rounded-[Npx]` outside the token scale

A token-lint script (`scripts/lint-tokens.mjs`) will be added to the new project to catch violations in CI.
