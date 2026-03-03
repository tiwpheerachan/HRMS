"use client";

import { cn } from "@/lib/utils";

export function Toggle({
  checked,
  onChange,
  label
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <button
        type="button"
        className={cn(
          "relative h-6 w-10 rounded-full ring-1 ring-slate-200/70 transition",
          checked ? "bg-brand-600" : "bg-slate-200"
        )}
        onClick={() => onChange(!checked)}
        aria-pressed={checked}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-soft transition",
            checked ? "left-[18px]" : "left-0.5"
          )}
        />
      </button>
      {label ? <span className="text-sm text-slate-700">{label}</span> : null}
    </label>
  );
}
