import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js";
import { supabaseBrowserConfig } from "./config";
import type { SyncPayload } from "@/domain/account";

export type Database = {
  public: {
    Tables: {
      sync_blobs: {
        Row: {
          user_id: string;
          payload: SyncPayload;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          payload: SyncPayload;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          payload?: SyncPayload;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let browserClient: SupabaseClient<Database> | null = null;

/** Singleton browser client — persists session in localStorage. */
export function createClient() {
  const { url, anonKey } = supabaseBrowserConfig();
  if (!url || !anonKey) {
    throw new Error("Supabase is not configured");
  }
  if (!browserClient) {
    browserClient = createSupabaseClient<Database>(url, anonKey, {
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
