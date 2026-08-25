-- ============================================================
--  Kallisto Engineering — Supabase schema, RLS and storage
--  Idempotent: safe to run more than once.
--  Run in the Supabase dashboard → SQL Editor → New query.
-- ============================================================

-- ------------------------------------------------------------
--  1. Tables  (mirrors src/types/database.ts)
-- ------------------------------------------------------------

create extension if not exists "pgcrypto";

create table if not exists public.services (
  id          uuid primary key default gen_random_uuid(),
  number      text        not null default '',
  title       text        not null,
  description text        not null default '',
  href        text        not null default '#',
  sort_order  integer     not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.projects (
  id          uuid primary key default gen_random_uuid(),
  title       text        not null,
  location    text        not null default '',
  excerpt     text        not null default '',
  image       text        not null default '/images/projects/placeholder.jpg',
  href        text        not null default '/projects',
  category    text        not null default '',
  status      text        not null default 'Completed'
                check (status in ('Completed', 'Ongoing')),
  sort_order  integer     not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.contact_details (
  id         uuid primary key default gen_random_uuid(),
  phone      text        not null default '',
  email      text        not null default '',
  address    text        not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.faqs (
  id         uuid primary key default gen_random_uuid(),
  question   text        not null,
  answer     text        not null default '',
  sort_order integer     not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.team_members (
  id            uuid primary key default gen_random_uuid(),
  name          text        not null,
  position      text        not null default '',
  qualification text        not null default '',
  experience    text        not null default '',
  sort_order    integer     not null default 0,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table if not exists public.testimonials (
  id         uuid primary key default gen_random_uuid(),
  name       text        not null,
  role       text        not null default '',
  quote      text        not null default '',
  rating     integer     not null default 5 check (rating between 1 and 5),
  sort_order integer     not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id         uuid primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  phone      text        not null default '',
  message    text        not null,
  is_read    boolean     not null default false,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
--  2. Row Level Security
--
--  The site ships the anon key to the browser, so RLS is the only
--  thing standing between a visitor and the content tables: anyone
--  may read, only a signed-in admin may write.
-- ------------------------------------------------------------

alter table public.services        enable row level security;
alter table public.projects        enable row level security;
alter table public.contact_details enable row level security;
alter table public.faqs            enable row level security;
alter table public.team_members    enable row level security;
alter table public.testimonials    enable row level security;
alter table public.contact_messages enable row level security;

-- Public read
drop policy if exists "services are publicly readable" on public.services;
create policy "services are publicly readable"
  on public.services for select
  using (true);

drop policy if exists "projects are publicly readable" on public.projects;
create policy "projects are publicly readable"
  on public.projects for select
  using (true);

drop policy if exists "contact details are publicly readable" on public.contact_details;
create policy "contact details are publicly readable"
  on public.contact_details for select
  using (true);

drop policy if exists "faqs are publicly readable" on public.faqs;
create policy "faqs are publicly readable"
  on public.faqs for select
  using (true);

drop policy if exists "team members are publicly readable" on public.team_members;
create policy "team members are publicly readable"
  on public.team_members for select
  using (true);

drop policy if exists "testimonials are publicly readable" on public.testimonials;
create policy "testimonials are publicly readable"
  on public.testimonials for select
  using (true);

-- Contact form submissions are the one exception to the read/write split
-- above: anyone may SEND a message, but only an admin may read, flag or
-- delete them. There is deliberately no public select policy here — that
-- would expose every visitor's name, email and enquiry to the world.
drop policy if exists "anyone can send a contact message" on public.contact_messages;
create policy "anyone can send a contact message"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

-- Authenticated write (insert / update / delete)
drop policy if exists "admins manage services" on public.services;
create policy "admins manage services"
  on public.services for all
  to authenticated
  using (true) with check (true);

drop policy if exists "admins manage projects" on public.projects;
create policy "admins manage projects"
  on public.projects for all
  to authenticated
  using (true) with check (true);

drop policy if exists "admins manage contact details" on public.contact_details;
create policy "admins manage contact details"
  on public.contact_details for all
  to authenticated
  using (true) with check (true);

drop policy if exists "admins manage faqs" on public.faqs;
create policy "admins manage faqs"
  on public.faqs for all
  to authenticated
  using (true) with check (true);

drop policy if exists "admins manage team members" on public.team_members;
create policy "admins manage team members"
  on public.team_members for all
  to authenticated
  using (true) with check (true);

drop policy if exists "admins manage testimonials" on public.testimonials;
create policy "admins manage testimonials"
  on public.testimonials for all
  to authenticated
  using (true) with check (true);

drop policy if exists "admins manage contact messages" on public.contact_messages;
create policy "admins manage contact messages"
  on public.contact_messages for all
  to authenticated
  using (true) with check (true);

-- ------------------------------------------------------------
--  3. Storage bucket for admin-uploaded project photos
--
--  Public read so next/image can fetch them; uploads and deletes
--  restricted to signed-in admins. Keep the 5 MB limit and the MIME
--  list in sync with src/lib/supabase/storage.ts.
--
--  NOTE: the SQL Editor runs this whole file in ONE transaction, and
--  creating policies on storage.objects needs ownership of that table,
--  which the editor role does not always have. Each policy below is
--  therefore wrapped in its own exception-handling block, so a
--  permission error prints a notice instead of rolling back the bucket
--  created just above it. If you see those notices, add the same four
--  policies in Dashboard -> Storage -> project-images -> Policies.
-- ------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'project-images',
  'project-images',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update
  set public             = excluded.public,
      file_size_limit    = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

do $$
begin
  begin
    drop policy if exists "project images are publicly readable" on storage.objects;
    create policy "project images are publicly readable"
      on storage.objects for select
      using (bucket_id = 'project-images');
  exception when insufficient_privilege or duplicate_object then
    raise notice 'Skipped SELECT policy on storage.objects: %', sqlerrm;
  end;

  begin
    drop policy if exists "admins upload project images" on storage.objects;
    create policy "admins upload project images"
      on storage.objects for insert
      to authenticated
      with check (bucket_id = 'project-images');
  exception when insufficient_privilege or duplicate_object then
    raise notice 'Skipped INSERT policy on storage.objects: %', sqlerrm;
  end;

  begin
    drop policy if exists "admins replace project images" on storage.objects;
    create policy "admins replace project images"
      on storage.objects for update
      to authenticated
      using (bucket_id = 'project-images')
      with check (bucket_id = 'project-images');
  exception when insufficient_privilege or duplicate_object then
    raise notice 'Skipped UPDATE policy on storage.objects: %', sqlerrm;
  end;

  begin
    drop policy if exists "admins delete project images" on storage.objects;
    create policy "admins delete project images"
      on storage.objects for delete
      to authenticated
      using (bucket_id = 'project-images');
  exception when insufficient_privilege or duplicate_object then
    raise notice 'Skipped DELETE policy on storage.objects: %', sqlerrm;
  end;
end $$;

-- Confirm the bucket landed. Expect exactly one row.
select id, public, file_size_limit
from storage.buckets
where id = 'project-images';
