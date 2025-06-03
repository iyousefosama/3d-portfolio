import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToElementById(id: string, offsetPercent: number = 0.15) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = window.innerHeight * offsetPercent;

  const top =
    target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top, behavior: "smooth" });
}