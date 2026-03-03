import { PageHeader } from "@/components/shared/PageHeader";

export default function Page() {
  return (
    <div className="p-6">
      <PageHeader title="EmployeeForm" subtitle="Create/Edit employee form." />
      <div className="mt-4 rounded-2xl bg-brand-50/60 ring-1 ring-brand-200/50 p-4">
        <div className="text-sm text-slate-700">
          This is a placeholder UI to validate routing, role layouts, and component wiring.
        </div>
        
      </div>
    </div>
  );
}
