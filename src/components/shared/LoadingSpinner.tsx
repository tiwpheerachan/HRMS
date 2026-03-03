import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }:{ className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 text-sm text-slate-600", className)}>
      <span className="h-4 w-4 rounded-full border-2 border-slate-300 border-t-brand-500 animate-spin" />
      <span>Loading...</span>
    </div>
  );
}
