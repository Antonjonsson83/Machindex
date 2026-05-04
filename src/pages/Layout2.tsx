import { BentoGrid } from "../components/bento/BentoGrid";
import { BentoCard } from "../components/bento/BentoCard";

export function Layout2() {
  return (
    <BentoGrid>
      <BentoCard size="4x5" />
      <BentoCard size="2x3" />
      <BentoCard size="2x2" />
      <BentoCard size="2x3" />
      <BentoCard size="2x3" />
      <BentoCard size="2x3" />
      <BentoCard size="6x3" />
      <BentoCard size="3x1" />
      <BentoCard size="3x1" />
    </BentoGrid>
  );
}
