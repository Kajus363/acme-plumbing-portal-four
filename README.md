Four-finding demo target for Flagd (one leaked secret, one vulnerable dependency, one XSS, one table without RLS). Fictional app. Do not deploy.

# Acme Plumbing — Client Portal

Customer portal for Acme Plumbing & Heating. Customers sign in, book repair
visits, follow job notes from the technician and pay invoices online.

## Stack

- Next.js 15 (App Router) + TypeScript
- Supabase (auth + Postgres, Row Level Security on every table)
- Payments via our processor's REST API

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your own keys
npm run dev
```

Open http://localhost:3000.

## Environment

Secrets live only in `.env.local` (git-ignored). `SUPABASE_SERVICE_ROLE_KEY`,
`PAYMENT_API_KEY`, `SESSION_SECRET` and `DATABASE_URL` are server-only: never
prefix them with `NEXT_PUBLIC_`.

## Structure

- `src/app/dashboard` — signed-in customer dashboard
- `src/app/api/*` — route handlers for bookings, invoices, customers and search
- `src/lib/supabase` — browser, server and admin (server-only) Supabase clients
- `src/components` — UI components
