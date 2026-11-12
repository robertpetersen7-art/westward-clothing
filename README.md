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
