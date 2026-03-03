import { cn } from "@/lib/utils";

export function Card({ className, children }:{ className?:string; children:React.ReactNode }) {
  return (
    <div className={cn("rounded-xl2 bg-white ring-1 ring-slate-200/70 shadow-soft", className)}>
      {children}
    </div>
  );
}
