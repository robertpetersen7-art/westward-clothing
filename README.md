# Westward Clothing

Marketing site for Westward Clothing — corporate apparel, workwear and branded clothing.
Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts):

- `site` — contact details. Fill in `email`, `phone`, `whatsapp`, `address` and `hours` and they
  appear in the footer, contact page and quote form automatically. When `email` is set, the quote
  form opens a pre-filled email; otherwise it copies the enquiry and opens Facebook Messenger.
- `categories` — the 15 garment collections.
- `ranges` — featured product ranges (flyer images live in `public/ranges/`).

Pushing to `main` redeploys the site on Vercel.

## Brand assets

Logo files live in [`public/brand/`](public/brand/) (all text outlined, so they work without the fonts):

- `westward-logo.svg` / `.png` — full logo for light backgrounds; `-dark` versions for dark backgrounds.
- `westward-mark.svg` / `.png` — the WW spool-and-needle badge on its own.

The site renders the badge inline from [`components/Logo.tsx`](components/Logo.tsx). Favicon, Apple touch
icon and the social-sharing image are `app/icon.png`, `app/apple-icon.png` and `app/opengraph-image.png`.
