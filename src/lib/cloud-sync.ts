import type { SyncPayload } from "@/domain/account";
import {
  applyLocalPayload,
  collectLocalPayload,
  mergePayloads,
} from "@/lib/sync-payload";
import { evaluateBadges } from "@/lib/badges";

let syncing = false;
let pending = false;

function readDisplayName(fallback = "Learner"): string {
  try {
    const raw = localStorage.getItem("rounds-oet-profile-v1");
    if (!raw) return fallback;
    const p = JSON.parse(raw) as { displayName?: string };
    return p.displayName?.trim() || fallback;
  } catch {
    return fallback;
  }
}

/** Merge local ↔ cloud and persist both sides. Safe to call often (deduped). */
export async function runCloudSync(
  displayName?: string,
): Promise<{ ok: boolean; message: string }> {
  if (typeof window === "undefined") {
    return { ok: false, message: "Not in browser" };
  }
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return { ok: false, message: "Cloud not configured" };
  }

  if (syncing) {
    pending = true;
    return { ok: true, message: "Sync queued" };
  }

  syncing = true;
  try {
    const { createClient } = await import("@/lib/supabase/client");
    const supabase = createClient();
    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData.session?.user;
    if (!user) {
      return { ok: false, message: "Not signed in" };
    }

    const name = displayName?.trim() || readDisplayName();
    const local = collectLocalPayload(name);
    local.badgesUnlocked = evaluateBadges(local);

    const { data: row, error: readError } = await supabase
      .from("sync_blobs")
      .select("payload, updated_at")
      .eq("user_id", user.id)
      .maybeSingle();
    if (readError) throw readError;

    let merged: SyncPayload = local;
    if (row?.payload) {
      merged = mergePayloads(local, row.payload);
    }
    merged.displayName = name;
    merged.badgesUnlocked = evaluateBadges(merged);
    merged.updatedAt = new Date().toISOString();

    const { error } = await supabase.from("sync_blobs").upsert({
      user_id: user.id,
      payload: merged,
      updated_at: merged.updatedAt,
    });
    if (error) throw error;

    applyLocalPayload(merged);
    return { ok: true, message: "Synced automatically with the cloud." };
  } catch (e) {
    return {
      ok: false,
      message: e instanceof Error ? e.message : "Sync failed",
    };
  } finally {
    syncing = false;
    if (pending) {
      pending = false;
      void runCloudSync(displayName);
    }
  }
}

/** Fire-and-forget sync after local progress changes (no-op if logged out). */
export function scheduleCloudSync(): void {
  if (typeof window === "undefined") return;
  void runCloudSync();
}
