import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { supabaseBrowserConfig } from "./config";

let browserClient: ReturnType<typeof createSupabaseClient> | null = null;

/** Singleton browser client — persists session in localStorage. */
export function createClient() {
  const { url, anonKey } = supabaseBrowserConfig();
  if (!url || !anonKey) {
    throw new Error("Supabase is not configured");
  }
  if (!browserClient) {
    browserClient = createSupabaseClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storage: typeof window !== "undefined" ? window.localStorage : undefined,
      },
    });
  }
  return browserClient;
}
