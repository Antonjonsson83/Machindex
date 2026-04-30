import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely. Later classes override earlier conflicting ones.
 * Used by every component that accepts a `className` prop.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
