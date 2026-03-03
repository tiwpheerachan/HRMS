"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Modal({ open, title, children, onClose, className }:{
  open: boolean; title?: string; children: React.ReactNode; onClose: () => void; className?: string;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative w-full max-w-lg rounded-2xl bg-white shadow-soft2 ring-1 ring-slate-200/70", className)}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/70">
          <div className="font-semibold">{title || "Modal"}</div>
          <button className="rounded-xl p-2 hover:bg-slate-100" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
