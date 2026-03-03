import { PageHeader } from "@/components/shared/PageHeader";

export default function Page() {
  return (
    <div className="p-6">
      <PageHeader title="ตั้งค่าหลัก" subtitle="Scaffold page — logic will be implemented next (Supabase SQL/RLS + business rules)." />
      <div className="mt-4 rounded-2xl bg-brand-50/60 ring-1 ring-brand-200/50 p-4">
        <div className="text-sm text-slate-700">
          This is a placeholder UI to validate routing, role layouts, and component wiring.
        </div>
        <ul className='mt-3 space-y-1'><li className='text-sm text-slate-600'>- company/branches/departments/positions/holidays</li></ul>
      </div>
    </div>
  );
}
