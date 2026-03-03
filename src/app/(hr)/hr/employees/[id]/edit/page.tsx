import { PageHeader } from "@/components/shared/PageHeader";

export default function Page() {
  return (
    <div className="p-6">
      <PageHeader title="แก้ไขข้อมูลพนักงาน" subtitle="Scaffold page — logic will be implemented next (Supabase SQL/RLS + business rules)." />
      <div className="mt-4 rounded-2xl bg-brand-50/60 ring-1 ring-brand-200/50 p-4">
        <div className="text-sm text-slate-700">
          This is a placeholder UI to validate routing, role layouts, and component wiring.
        </div>
        <ul className='mt-3 space-y-1'><li className='text-sm text-slate-600'>- แก้ข้อมูล</li>
<li className='text-sm text-slate-600'>- ย้ายทีม/หัวหน้า</li>
<li className='text-sm text-slate-600'>- กำหนด location</li></ul>
      </div>
    </div>
  );
}
