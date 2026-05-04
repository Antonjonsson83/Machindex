import { BentoGrid } from "../components/bento/BentoGrid";
import { BentoCard } from "../components/bento/BentoCard";

export function Layout3() {
  return (
    <BentoGrid>
      <BentoCard size="3x5" />
      <BentoCard size="3x3" />
      <BentoCard size="3x2" />
      <BentoCard size="4x2" />
      <BentoCard size="2x4" />
      <BentoCard size="4x2" />
      <BentoCard size="6x2" />
      <BentoCard size="1x1" />
      <BentoCard size="1x1" />
      <BentoCard size="4x1" />
    </BentoGrid>
  );
}
