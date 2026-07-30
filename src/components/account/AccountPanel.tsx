"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { SyncPayload } from "@/domain/account";
import {
  applyLocalPayload,
  collectLocalPayload,
  downloadBackup,
  mergePayloads,
} from "@/lib/sync-payload";
import { evaluateBadges, loadBadges, saveBadges } from "@/lib/badges";
import { runCloudSync } from "@/lib/cloud-sync";
import { PageHero, Panel } from "@/components/ui";
import { BadgesBoard } from "@/components/account/BadgesBoard";

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

  /** Keep latest name for sync without rebinding auth on every keystroke. */
  const displayNameRef = useRef(displayName);
  displayNameRef.current = displayName;

  const refreshBadges = useCallback(() => {
    const payload = collectLocalPayload(displayNameRef.current);
    const unlocked = evaluateBadges(payload);
    saveBadges(unlocked);
    setBadges(unlocked);
  }, []);

  const autoSync = useCallback(
    async (label = "Synced automatically with the cloud.") => {
      setBusy(true);
      setStatus("Syncing…");
      const result = await runCloudSync(displayNameRef.current);
      setStatus(result.ok ? label : result.message);
      if (result.ok) refreshBadges();
      setBusy(false);
      return result.ok;
    },
    [refreshBadges],
  );

  // Mount once: load profile + auth. Must NOT depend on displayName.
  useEffect(() => {
    try {
      const profileRaw = localStorage.getItem("rounds-oet-profile-v1");
      if (profileRaw) {
        const p = JSON.parse(profileRaw) as { displayName?: string };
        if (p.displayName) {
          setDisplayName(p.displayName);
          displayNameRef.current = p.displayName;
        }
      }
    } catch {
      /* ignore */
    }
    refreshBadges();

    if (!ready) return;

    let unsubscribe: (() => void) | undefined;
    let cancelled = false;

    void (async () => {
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data } = await supabase.auth.getSession();
        if (cancelled) return;
        const emailNow = data.session?.user?.email ?? null;
        setUserEmail(emailNow);
        if (emailNow) {
          void autoSync("Welcome back — progress synced automatically.");
        }
        const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
          setUserEmail(session?.user?.email ?? null);
          if (event === "SIGNED_IN" && session) {
            void autoSync("Signed in — progress synced automatically.");
          }
        });
        unsubscribe = () => sub.subscription.unsubscribe();
      } catch {
        /* not configured */
      }
    })();

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional mount-once
  }, [ready]);

  const saveProfile = () => {
    localStorage.setItem(
      "rounds-oet-profile-v1",
      JSON.stringify({ displayName, updatedAt: new Date().toISOString() }),
    );
    setStatus("Profile saved on this device.");
    refreshBadges();
    if (userEmail) void autoSync("Profile saved and synced.");
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
      await autoSync("Account created — progress synced automatically.");
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
      if (!data.session) {
        throw new Error("No session after sign in — check email confirmation settings.");
      }
      setUserEmail(data.session.user.email ?? email);
      await autoSync("Signed in — progress synced automatically.");
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

  const onImport = async (file: File) => {
    const text = await file.text();
    const payload = JSON.parse(text) as SyncPayload;
    const local = collectLocalPayload(displayNameRef.current);
    const merged = mergePayloads(local, payload);
    merged.badgesUnlocked = evaluateBadges(merged);
    applyLocalPayload(merged);
    setBadges(merged.badgesUnlocked);
    setStatus("Backup imported and merged.");
    if (userEmail) void autoSync("Backup imported and synced to the cloud.");
  };

  return (
    <div>
      <PageHero
        eyebrow="Phase 5 · Account & sync"
        title="Your Rounds account"
        description="Progress syncs automatically when you sign in. Studying while logged in also pushes updates to the cloud in the background."
      />

      <div className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6">
        <Panel>
          <h2 className="font-display text-2xl text-ink">Profile</h2>
          <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.16em] text-ward">
            Display name
          </label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            autoComplete="nickname"
            spellCheck={false}
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none ring-ward focus:ring-2"
            placeholder="Your name"
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
              <Link href="/planner" className="inline-block font-semibold text-ward">
                Open study planner →
              </Link>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {userEmail ? (
                <>
                  <p className="text-sm text-ink/70">
                    Signed in as <span className="font-semibold text-ink">{userEmail}</span>
                  </p>
                  <p className="text-xs text-ink/50">
                    Auto-sync is on — no need to click sync after studying.
                  </p>
                </>
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
                      onClick={() => void autoSync("Manual sync complete.")}
                      className="rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold disabled:opacity-50"
                    >
                      Sync again
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
            Optional JSON export/import as an extra safety copy.
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

        <BadgesBoard
          unlockedIds={[...new Set([...badges, ...loadBadges()])]}
          onRefresh={refreshBadges}
        />
      </div>
    </div>
  );
}
