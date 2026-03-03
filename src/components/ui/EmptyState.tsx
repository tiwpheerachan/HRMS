import { Sparkles } from "lucide-react";

export function EmptyState({
  title = "ยังไม่มีข้อมูล",
  desc = "ลองปรับตัวกรอง หรือเพิ่มข้อมูลก่อน",
  action
}: {
  title?: string;
  desc?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-brand-50/60 ring-1 ring-brand-200/50 p-6 text-center">
      <div className="mx-auto h-10 w-10 rounded-2xl bg-white ring-1 ring-brand-200/60 flex items-center justify-center shadow-soft">
        <Sparkles className="h-5 w-5 text-brand-700" />
      </div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  );
}
