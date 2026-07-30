-- Rounds Phase 5 — run in Supabase SQL editor

create table if not exists public.sync_blobs (
  user_id uuid primary key references auth.users (id) on delete cascade,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.sync_blobs enable row level security;

create policy "Users manage own sync blob"
  on public.sync_blobs
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
