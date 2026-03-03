"use client";

import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  if (!parts.length) return null;

  const shown = parts.slice(0, 3);
  return (
    <div className="text-xs text-slate-500">
      {shown.map((p, idx) => (
        <span key={idx}>
          {idx ? <span className="mx-1">/</span> : null}
          <span className="capitalize">{p.replace(/\[.*?\]/g, "id")}</span>
        </span>
      ))}
      {parts.length > shown.length ? <span className="mx-1">/ ...</span> : null}
    </div>
  );
}
