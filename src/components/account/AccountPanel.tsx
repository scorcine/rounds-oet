"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { SyncPayload } from "@/domain/account";
import { BADGE_DEFS } from "@/domain/account";
import {
  applyLocalPayload,
  collectLocalPayload,
  downloadBackup,
  mergePayloads,
} from "@/lib/sync-payload";
import { evaluateBadges, loadBadges, saveBadges } from "@/lib/badges";
import { PageHero, Panel } from "@/components/ui";

function cloudReady() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export function AccountPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("Learner");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [badges, setBadges] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const ready = cloudReady();

  const refreshLocal = () => {
    const profileRaw = localStorage.getItem("rounds-oet-profile-v1");
    if (profileRaw) {
      try {
        const p = JSON.parse(profileRaw) as { displayName?: string };
        if (p.displayName) setDisplayName(p.displayName);
      } catch {
        /* ignore */
      }
    }
    const payload = collectLocalPayload(displayName);
    const unlocked = evaluateBadges(payload);
    saveBadges(unlocked);
    setBadges(unlocked);
  };

  useEffect(() => {
    refreshLocal();
    if (!ready) return;

    let unsubscribe: (() => void) | undefined;
    void (async () => {
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data } = await supabase.auth.getSession();
        setUserEmail(data.session?.user?.email ?? null);
        const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
          setUserEmail(session?.user?.email ?? null);
        });
        unsubscribe = () => sub.subscription.unsubscribe();
      } catch {
        /* not configured at runtime */
      }
    })();

    return () => unsubscribe?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const saveProfile = () => {
    localStorage.setItem(
      "rounds-oet-profile-v1",
      JSON.stringify({ displayName, updatedAt: new Date().toISOString() }),
    );
    setStatus("Profile saved on this device.");
    refreshLocal();
  };

  const register = async () => {
    if (!ready) return;
    setBusy(true);
    setStatus("");
    try {
      const { createClient } = await import("@/lib/supabase/client");
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      if (!data.session) {
        setUserEmail(null);
        setStatus(
          "Account created, but email confirmation is ON. In Supabase → Authentication → Providers → Email, turn OFF “Confirm email”, then Sign in here.",
        );
        return;
      }
      setUserEmail(data.session.user.email ?? email);
      setStatus("Account created and signed in. Click Sync now.");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Sign up failed");
    } finally {
      setBusy(false);
    }
  };

  const login = async () => {
    if (!ready) return;
    setBusy(true);
    setStatus("");
    try {
      const { createClient } = await import("@/lib/supabase/client");
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      if (!data.session) throw new Error("No session after sign in — check email confirmation settings.");
      setUserEmail(data.session.user.email ?? email);
      setStatus("Signed in. Click Sync now to merge cloud ↔ this device.");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Sign in failed");
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    if (!ready) return;
    const { createClient } = await import("@/lib/supabase/client");
    const supabase = createClient();
    await supabase.auth.signOut();
    setUserEmail(null);
    setStatus("Signed out.");
  };

  const syncNow = async () => {
    if (!ready) return;
    setBusy(true);
    setStatus("Syncing…");
    try {
      const { createClient } = await import("@/lib/supabase/client");
      const supabase = createClient();
      const { data: sessionData } = await supabase.auth.getSession();
      const user = sessionData.session?.user;
      if (!user) {
        throw new Error(
          "No active session. Sign out, then Sign in again (and disable Confirm email in Supabase if needed).",
        );
      }

      const local = collectLocalPayload(displayName);
      local.badgesUnlocked = evaluateBadges(local);

      const { data: row, error: readError } = await supabase
        .from("sync_blobs")
        .select("payload, updated_at")
        .eq("user_id", user.id)
        .maybeSingle();
      if (readError) throw readError;

      let merged: SyncPayload = local;
      if (row?.payload) {
        merged = mergePayloads(local, row.payload as SyncPayload);
      }
      merged.displayName = displayName;
      merged.badgesUnlocked = evaluateBadges(merged);
      merged.updatedAt = new Date().toISOString();

      const { error } = await supabase.from("sync_blobs").upsert({
        user_id: user.id,
        payload: merged,
        updated_at: merged.updatedAt,
      });
      if (error) throw error;

      applyLocalPayload(merged);
      setBadges(merged.badgesUnlocked);
      setStatus("Sync complete — progress merged and saved to the cloud.");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Sync failed");
    } finally {
      setBusy(false);
    }
  };

  const onImport = async (file: File) => {
    const text = await file.text();
    const payload = JSON.parse(text) as SyncPayload;
    const local = collectLocalPayload(displayName);
    const merged = mergePayloads(local, payload);
    merged.badgesUnlocked = evaluateBadges(merged);
    applyLocalPayload(merged);
    setBadges(merged.badgesUnlocked);
    setStatus("Backup imported and merged.");
  };

  return (
    <div>
      <PageHero
        eyebrow="Phase 5 · Account & sync"
        title="Your Rounds account"
        description="Keep diagnostic, SRS, exams and badges with you across devices. Cloud sync uses Supabase when configured; backup export always works."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
        <Panel>
          <h2 className="font-display text-2xl text-ink">Profile</h2>
          <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.16em] text-ward">
            Display name
          </label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={saveProfile}
            className="mt-4 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
          >
            Save profile
          </button>
        </Panel>

        <Panel>
          <h2 className="font-display text-2xl text-ink">Cloud sync</h2>
          {!ready ? (
            <div className="mt-3 space-y-2 text-sm text-ink/70">
              <p>Supabase is not configured yet. Local study still works.</p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>Create a free project at supabase.com</li>
                <li>Run SQL from <code className="text-xs">supabase/schema.sql</code></li>
                <li>
                  Add <code className="text-xs">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
                  <code className="text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to{" "}
                  <code className="text-xs">.env.local</code> and Vercel
                </li>
                <li>Redeploy, then return here to register</li>
              </ol>
              <Link href="/planner" className="inline-block font-semibold text-ward">
                Open study planner →
              </Link>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {userEmail ? (
                <p className="text-sm text-ink/70">
                  Signed in as <span className="font-semibold text-ink">{userEmail}</span>
                </p>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
                  />
                  <input
                    type="password"
                    placeholder="Password (min 6)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-ink/15 px-3 py-2 text-sm"
                  />
                </>
              )}
              <div className="flex flex-wrap gap-2">
                {!userEmail ? (
                  <>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={login}
                      className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper disabled:opacity-50"
                    >
                      Sign in
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={register}
                      className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold disabled:opacity-50"
                    >
                      Create account
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={syncNow}
                      className="rounded-md bg-pulse px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                    >
                      Sync now
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={logout}
                      className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold"
                    >
                      Sign out
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
          {status && <p className="mt-3 text-sm text-ward">{status}</p>}
        </Panel>

        <Panel>
          <h2 className="font-display text-2xl text-ink">Backup</h2>
          <p className="mt-2 text-sm text-ink/65">
            Export/import a JSON backup to move progress between browsers before cloud is ready.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => downloadBackup(collectLocalPayload(displayName))}
              className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
            >
              Export backup
            </button>
            <label className="cursor-pointer rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold">
              Import backup
              <input
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void onImport(f);
                }}
              />
            </label>
          </div>
        </Panel>

        <Panel>
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-2xl text-ink">Badges</h2>
            <button type="button" onClick={refreshLocal} className="text-sm font-semibold text-ward">
              Refresh
            </button>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {BADGE_DEFS.map((b) => {
              const on = badges.includes(b.id) || loadBadges().includes(b.id);
              return (
                <div
                  key={b.id}
                  className={`rounded-xl border px-3 py-3 ${
                    on ? "border-ward/40 bg-scrub/50" : "border-ink/10 opacity-50"
                  }`}
                >
                  <p className="font-mono text-xs text-ward">{b.icon}</p>
                  <p className="font-semibold text-ink">{b.title}</p>
                  <p className="text-xs text-ink/60">{b.description}</p>
                </div>
              );
            })}
          </div>
        </Panel>
      </div>
    </div>
  );
}
