"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase/client";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { setCookie } from "@/lib/cookies";
import type { Role } from "@/types";

const ROLE_OPTIONS: { label: string; value: Role }[] = [
  { label: "Employee", value: "employee" },
  { label: "Team Lead", value: "teamlead" },
  { label: "HR", value: "hr" }
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<Role>("employee");

  const canSubmit = useMemo(() => email.trim() && password.trim(), [email, password]);

  async function signInWithGoogle() {
    setLoading(true);
    setCookie("hrms_role", role, 7);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    });
    setLoading(false);
    if (error) toast.error(error.message);
  }

  async function signInWithPassword() {
    if (!canSubmit) return toast.error("กรุณากรอกอีเมลและรหัสผ่าน");
    setLoading(true);
    setCookie("hrms_role", role, 7);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message);
    setCookie("hrms_session", "1", 1);
    window.location.href = "/";
  }

  async function signUp() {
    if (!canSubmit) return toast.error("กรุณากรอกอีเมลและรหัสผ่าน");
    setLoading(true);
    setCookie("hrms_role", role, 7);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("สมัครสำเร็จ — กรุณายืนยันอีเมลแล้วเข้าสู่ระบบ");
  }

  async function resetPassword() {
    if (!email) return toast.error("กรุณากรอกอีเมล");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/login`
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("ส่งลิงก์รีเซ็ตรหัสผ่านแล้ว");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-brand-50 to-white">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="text-2xl font-semibold">HRMS</div>
          <div className="text-slate-600 mt-1">เข้าสู่ระบบเพื่อใช้งาน</div>
        </div>

        <Card className="p-6">
          <div className="space-y-3">
            <label className="text-xs text-slate-600">Role (Scaffold)</label>
            <select
              className="w-full rounded-xl px-3 py-2 text-sm ring-1 ring-slate-200/80 focus:outline-none focus:ring-2 focus:ring-brand-300"
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
            >
              {ROLE_OPTIONS.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>

            <Button onClick={signInWithGoogle} disabled={loading} className="w-full">
              Continue with Google
            </Button>

            <div className="text-center text-xs text-slate-500">หรือ</div>

            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />

            <Button onClick={signInWithPassword} disabled={loading || !canSubmit} className="w-full">
              Sign in
            </Button>

            <div className="flex gap-2">
              <Button variant="soft" onClick={signUp} disabled={loading || !canSubmit} className="w-1/2">
                สมัครครั้งแรก
              </Button>
              <Button variant="soft" onClick={resetPassword} disabled={loading} className="w-1/2">
                ลืมรหัสผ่าน
              </Button>
            </div>

            <div className="text-xs text-slate-500">
              * Scaffold: role/permission is mocked via cookie. Real RLS will enforce role later.
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
