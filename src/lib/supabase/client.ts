import { createBrowserClient } from "@supabase/ssr";
import { supabaseBrowserConfig } from "./config";

export function createClient() {
  const { url, anonKey } = supabaseBrowserConfig();
  if (!url || !anonKey) {
    throw new Error("Supabase is not configured");
  }
  return createBrowserClient(url, anonKey);
}
