import { BentoGrid } from "../components/bento/BentoGrid";
import { BentoCard } from "../components/bento/BentoCard";

export function Layout1() {
  return (
    <BentoGrid>
      <BentoCard size="6x1" />
      <BentoCard size="2x2" />
      <BentoCard size="2x2" />
      <BentoCard size="2x2" />
      <BentoCard size="3x4" />
      <BentoCard size="3x4" />
      <BentoCard size="3x2" />
      <BentoCard size="3x2" />
      <BentoCard size="2x1" />
      <BentoCard size="2x1" />
      <BentoCard size="2x1" />
      <BentoCard size="4x2" />
      <BentoCard size="2x2" />
    </BentoGrid>
  );
}
