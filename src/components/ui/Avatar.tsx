import { cn } from "@/lib/utils";

export function Avatar({ name, src, className }:{ name: string; src?: string | null; className?: string }) {
  const initials = (name || "?")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  return (
    <div className={cn("h-9 w-9 rounded-full bg-brand-100 text-brand-800 ring-1 ring-brand-200/60 flex items-center justify-center overflow-hidden", className)}>
      {src ? (
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        <span className="text-xs font-semibold">{initials}</span>
      )}
    </div>
  );
}
