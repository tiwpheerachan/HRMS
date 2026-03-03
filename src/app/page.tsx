"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { getRoleFromSession } from "@/lib/auth";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      if (!data.session) return router.replace("/auth/login");

      const role = await getRoleFromSession(data.session);
      if (role === "hr") return router.replace("/hr/dashboard");
      if (role === "teamlead") return router.replace("/teamlead/dashboard");
      return router.replace("/dashboard");
    })();
    return () => { mounted = false; };
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50 to-white">
      <div className="text-slate-700">Loading...</div>
    </main>
  );
}
