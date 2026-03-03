"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import type { UserProfile } from "@/types";

export function useUser() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      if (!data.user) { setProfile(null); setLoading(false); return; }

      setProfile({
        user_id: data.user.id,
        email: data.user.email || "",
        role: (data.user.user_metadata?.role as any) || "employee",
        company_id: (data.user.user_metadata?.company_id as any) || ""
      });
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, []);

  return { loading, profile };
}
