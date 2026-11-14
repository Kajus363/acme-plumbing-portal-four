-- Job history imported from the old booking spreadsheet, shown on the
-- customer's "Past work" tab.

create table public.customer_jobs (
  id             uuid primary key default gen_random_uuid(),
  customer_name  text not null,
  phone          text,
  address        text not null,
  job_type       text not null
                 check (job_type in ('leak_repair', 'boiler_service', 'drain_unblock', 'bathroom_fit', 'other')),
  price_cents    integer not null check (price_cents >= 0),
  technician     text,
  completed_on   date,
  notes          text,
  created_at     timestamptz not null default now()
);

create index customer_jobs_completed_on_idx on public.customer_jobs (completed_on);
