import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client (service role). Use ONLY in server routes/cron.
 */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, service, { auth: { persistSession: false } });
}
