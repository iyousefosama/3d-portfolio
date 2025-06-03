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

// Add debounce utility function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

