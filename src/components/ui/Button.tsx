"use client";

import { cn } from "@/lib/utils";

type Variant = "primary" | "soft" | "ghost" | "danger";

export function Button({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-brand-600 text-white hover:bg-brand-700"
      : variant === "soft"
        ? "bg-brand-50 text-brand-800 hover:bg-brand-100 ring-1 ring-brand-200/60"
        : variant === "danger"
          ? "bg-rose-600 text-white hover:bg-rose-700"
          : "bg-transparent text-slate-700 hover:bg-slate-100";

  return (
    <button className={cn(base, styles, className)} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
