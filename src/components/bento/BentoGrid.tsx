import { ReactNode } from "react";

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-6 gap-3 p-4 auto-rows-bento bg-background">
      {children}
    </div>
  );
}
