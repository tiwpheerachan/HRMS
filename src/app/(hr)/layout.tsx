import { Sidebar } from "@/components/shared/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-25">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4">
          <Sidebar role="hr" />
          <div className="rounded-xl2 bg-white shadow-soft ring-1 ring-slate-200/70 min-h-[80vh] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
