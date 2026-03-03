import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
  className
}: {
  children: React.ReactNode;
  tone?: "neutral" | "good" | "warn" | "bad" | "info";
  className?: string;
}) {
  const toneCls =
    tone === "good" ? "bg-emerald-50 text-emerald-700 ring-emerald-200/60" :
    tone === "warn" ? "bg-amber-50 text-amber-700 ring-amber-200/60" :
    tone === "bad" ? "bg-rose-50 text-rose-700 ring-rose-200/60" :
    tone === "info" ? "bg-brand-50 text-brand-700 ring-brand-200/60" :
    "bg-slate-50 text-slate-700 ring-slate-200/60";

  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1", toneCls, className)}>
      {children}
    </span>
  );
}
