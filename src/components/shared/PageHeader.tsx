import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-xl font-semibold mt-2">{title}</h1>
      {subtitle ? <div className="mt-1 text-sm text-slate-600">{subtitle}</div> : null}
    </div>
  );
}
