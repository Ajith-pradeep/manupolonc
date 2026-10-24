# Manuel Zau Polo — Personal Brand Website

Premium Next.js site for **Manuel Zau Polo**: Angolan entrepreneur associated with technology, business development, and real estate. Brand pillars: vision, entrepreneurship, innovation, global ambition, and long-term value creation.

Biographical and venture claims are **source-attributed**. Independently reported facts are distinguished from company-reported and self-reported statements. The site does not invent credentials, ownership, achievements, financial figures, or property listings.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 · Framer Motion · Lucide React
- Zod · Server Actions · Vitest

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Routes

| Path | Section |
| --- | --- |
| `/` | Home |
| `/about` | About Manuel |
| `/technology` | Technology & innovation |
| `/real-estate` | Property showcase |
| `/real-estate/[slug]` | Property detail |
| `/contact` | Contact |

## Content & integrity

- Sourced editorial data: `src/data/content.ts`
- Brand/nav config: `src/lib/site-config.ts`
- Properties: `src/data/properties.ts` (empty until verified listings are supplied)
- Property data access: `src/lib/properties.ts`

Verification badges: **Independently reported** · **Company-reported** · **Self-reported** · **Awaiting verification**

## Real estate

`/real-estate` is part of this personal brand site (not a separate product). Search, category filters, URL-synced query params, inquiry forms, and detail routes are implemented. Inventory stays empty until verified listings are added — nothing fabricated is shown as live stock.

## Environment

See `.env.example` for `NEXT_PUBLIC_SITE_URL` and contact delivery (`CONTACT_PROVIDER`: `none` | `resend` | `webhook`).

## Scripts

`npm run dev` · `npm run build` · `npm start` · `npm run lint` · `npm run typecheck` · `npm test`
