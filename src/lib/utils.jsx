import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi tanpa anotasi tipe
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}