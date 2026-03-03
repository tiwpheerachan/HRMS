import { cn } from "@/lib/utils";

export function Table({ className, children }:{ className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl ring-1 ring-slate-200/70", className)}>
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

export function THead({ children }:{ children: React.ReactNode }) {
  return <thead className="bg-slate-50 text-slate-600">{children}</thead>;
}
export function TRow({ children, className }:{ children: React.ReactNode; className?: string }) {
  return <tr className={cn("border-b border-slate-200/70 last:border-b-0", className)}>{children}</tr>;
}
export function TH({ children, className }:{ children: React.ReactNode; className?: string }) {
  return <th className={cn("text-left font-medium px-3 py-2", className)}>{children}</th>;
}
export function TD({ children, className }:{ children: React.ReactNode; className?: string }) {
  return <td className={cn("px-3 py-2 text-slate-700", className)}>{children}</td>;
}
