"use client";

import { cn } from "@/lib/utils";

export function Tabs({
  value,
  onChange,
  items
}: {
  value: string;
  onChange: (v: string) => void;
  items: { label: string; value: string }[];
}) {
  return (
    <div className="inline-flex rounded-2xl bg-slate-100 p-1 ring-1 ring-slate-200/70">
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            onClick={() => onChange(it.value)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-xl transition",
              active ? "bg-white shadow-soft ring-1 ring-slate-200/70 text-slate-900" : "text-slate-600 hover:text-slate-900"
            )}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
