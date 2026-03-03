import { cn } from "@/lib/utils";

export function ProgressBar({ value, className }:{ value: number; className?: string }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-2 w-full rounded-full bg-slate-100 ring-1 ring-slate-200/70 overflow-hidden", className)}>
      <div className="h-full bg-brand-500" style={{ width: `${v}%` }} />
    </div>
  );
}
