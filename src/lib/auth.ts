import type { Session } from "@supabase/supabase-js";
import type { Role } from "@/types";
import { getCookie } from "@/lib/cookies";

export async function getRoleFromSession(session: Session): Promise<Role> {
  const meta = session.user.user_metadata as any;
  const metaRole = meta?.role as Role | undefined;
  if (metaRole) return metaRole;

  const c = getCookie("hrms_role") as Role | undefined;
  return c || "employee";
}
