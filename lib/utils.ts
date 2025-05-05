import { clsx, type ClassValue } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugifyString = (str: string) => {
  return slugify(str, {
    lower: true,
    replacement: "-",
    trim: false,
    strict: true,
  });
};
