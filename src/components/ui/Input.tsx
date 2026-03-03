"use client";

import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl px-3 py-2 text-sm ring-1 ring-slate-200/80 focus:outline-none focus:ring-2 focus:ring-brand-300",
        className
      )}
      {...props}
    />
  );
}
