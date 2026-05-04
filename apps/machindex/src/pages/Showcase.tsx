import { useState } from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Toggle } from "@/components/ui/toggle";

type Theme = "dark" | "light";

type ShowcaseProps = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

export function Showcase({ theme, setTheme }: ShowcaseProps) {
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(true);
  const [toggleC, setToggleC] = useState(true);

  return (
    <div className="min-h-screen bg-surface-base text-foreground">
      <Header theme={theme} setTheme={setTheme} />

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-8 space-y-12">
        <Section title="0. Surface System" subtitle="4 layers — no more, no less">
          <SurfaceLayers />
        </Section>

        <Section title="0.5 Typography" subtitle="Geist · JetBrains Mono · Barlow Semi Condensed">
          <Typography />
        </Section>

        <Section title="1. Radius Scale" subtitle="Locked tokens — no arbitrary values">
          <RadiusScale />
        </Section>

        <Section title="2. Card System (Bento Grid)" subtitle="6-col grid · gap 12px · variants: default / compact / feature">
          <BentoShowcase />
        </Section>

        <Section title="10. Toggle" subtitle="OFF · ON (primary subtle) · disabled">
          <ToggleShowcase
            a={toggleA} setA={setToggleA}
            b={toggleB} setB={setToggleB}
            c={toggleC} setC={setToggleC}
          />
        </Section>

        <Section title="Accent + Status Tokens" subtitle="Single accent rule — status colors for meaning only">
          <ColorTokens />
        </Section>
      </main>
    </div>
  );
}

/* ============================================================== */

function Header({ theme, setTheme }: { theme: Theme; setTheme: (t: Theme) => void }) {
  return (
    <header className="border-b border-border bg-surface-raised">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">MachIndex Design System</h1>
          <p className="text-sm text-muted-foreground">v2.1 — token-locked</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{theme === "dark" ? "Dark" : "Light"}</span>
          <Toggle
            checked={theme === "light"}
            onChange={(v) => setTheme(v ? "light" : "dark")}
            aria-label="Toggle theme"
          />
        </div>
      </div>
    </header>
  );
}

function Section({
  title, subtitle, children,
}: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

/* ============================================================== */

function SurfaceLayers() {
  const layers = [
    { token: "--surface-base",   label: "L0 — base (page)" },
    { token: "--surface-raised", label: "L1 — raised (cards)" },
    { token: "--surface-track",  label: "L2 — track (off-state)" },
    { token: "--surface-inner",  label: "L3 — inner (inset)" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {layers.map((l) => (
        <div
          key={l.token}
          className="rounded-xl border border-border p-4 h-32 flex flex-col justify-between"
          style={{ backgroundColor: `var(${l.token})` }}
        >
          <span className="font-mono text-xs text-muted-foreground">{l.token}</span>
          <span className="text-sm">{l.label}</span>
        </div>
      ))}
    </div>
  );
}

function Typography() {
  return (
    <div className="rounded-xl border border-border bg-surface-raised p-6 space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">font-sans (Geist)</p>
        <p className="font-sans text-3xl font-semibold tracking-tight">MachIndex builds the index of machines.</p>
        <p className="font-sans text-base text-muted-foreground mt-1">Body text — secondary information.</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">font-mono (JetBrains Mono)</p>
        <p className="font-mono text-base">const machineId = "MX-2026-04-128";</p>
        <p className="font-mono text-sm" data-numeric>1,247 units · 99.4% uptime · 03:42:17</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">font-condensed (Barlow Semi Condensed)</p>
        <p className="font-condensed text-3xl font-semibold uppercase tracking-wide">Custody · Service · Insurance</p>
      </div>
    </div>
  );
}

function RadiusScale() {
  const radii = [
    { token: "rounded-sm",  label: "8px",  hint: "icon chips" },
    { token: "rounded-md",  label: "12px", hint: "inputs" },
    { token: "rounded-lg",  label: "16px", hint: "buttons" },
    { token: "rounded-xl",  label: "20px", hint: "cards" },
    { token: "rounded-2xl", label: "24px", hint: "feature cards" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {radii.map((r) => (
        <div
          key={r.token}
          className={`${r.token} bg-surface-raised border border-border p-4 h-28 flex flex-col justify-between`}
        >
          <span className="font-mono text-xs text-muted-foreground">{r.token}</span>
          <div>
            <p className="text-sm font-medium">{r.label}</p>
            <p className="text-xs text-muted-foreground">{r.hint}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BentoShowcase() {
  return (
    <BentoGrid>
      <BentoCard colSpan={3} rowSpan={2} variant="feature">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Feature</p>
        <p className="text-2xl font-semibold mt-1">3×2 — feature card</p>
        <p className="text-sm text-muted-foreground mt-1">rounded-2xl · p-5</p>
      </BentoCard>

      <BentoCard colSpan={3} rowSpan={1} variant="default">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Default</p>
        <p className="text-base font-medium mt-1">3×1 — default</p>
      </BentoCard>

      <BentoCard colSpan={3} rowSpan={1} variant="compact">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Compact</p>
        <p className="text-base font-medium mt-1">3×1 — compact (p-3)</p>
      </BentoCard>

      <BentoCard colSpan={2} rowSpan={2} variant="default">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">KPI</p>
        <p className="font-mono text-3xl font-semibold mt-1" data-numeric>1,247</p>
        <p className="text-xs text-muted-foreground">active machines</p>
      </BentoCard>

      <BentoCard colSpan={2} rowSpan={2} variant="default">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">KPI</p>
        <p className="font-mono text-3xl font-semibold mt-1" data-numeric>99.4%</p>
        <p className="text-xs text-muted-foreground">uptime · 30d</p>
      </BentoCard>

      <BentoCard colSpan={2} rowSpan={2} variant="default">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">KPI</p>
        <p className="font-mono text-3xl font-semibold mt-1" data-numeric>03:42</p>
        <p className="text-xs text-muted-foreground">avg service time</p>
      </BentoCard>

      <BentoCard colSpan={6} rowSpan={3} variant="feature">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Hero</p>
        <p className="text-2xl font-semibold mt-1">6×3 — full-width feature</p>
        <p className="text-sm text-muted-foreground mt-1">
          Cards may vary in size, but never in styling.
        </p>
      </BentoCard>
    </BentoGrid>
  );
}

function ToggleShowcase({
  a, setA, b, setB, c, setC,
}: {
  a: boolean; setA: (v: boolean) => void;
  b: boolean; setB: (v: boolean) => void;
  c: boolean; setC: (v: boolean) => void;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-raised p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">OFF state</p>
          <p className="text-xs text-muted-foreground">bg-surface-track</p>
        </div>
        <Toggle checked={a} onChange={setA} aria-label="Demo toggle A" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">ON state</p>
          <p className="text-xs text-muted-foreground">bg-primary/10 · thumb primary</p>
        </div>
        <Toggle checked={b} onChange={setB} aria-label="Demo toggle B" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Disabled</p>
          <p className="text-xs text-muted-foreground">opacity-50 · cursor-not-allowed</p>
        </div>
        <Toggle checked={c} onChange={setC} disabled aria-label="Demo toggle C" />
      </div>
    </div>
  );
}

function ColorTokens() {
  const swatches = [
    { name: "primary",  className: "bg-primary text-primary-foreground" },
    { name: "primary/30", className: "bg-primary/30 text-foreground" },
    { name: "accent",  className: "bg-accent text-text-on-accent" },
    { name: "success", className: "bg-success text-white" },
    { name: "warning", className: "bg-warning text-black" },
    { name: "critical", className: "bg-critical text-white" },
    { name: "info",    className: "bg-info text-white" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {swatches.map((s) => (
        <div
          key={s.name}
          className={`${s.className} rounded-lg p-4 h-20 flex items-end font-mono text-xs`}
        >
          {s.name}
        </div>
      ))}
    </div>
  );
}
