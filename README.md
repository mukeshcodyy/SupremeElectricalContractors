# Supreme Electrical Contractors – website concept

A fast, mobile-first concept website for **Supreme Electrical Contractors** (Epping VIC 3076, Melbourne's north).
It is built to turn visitors into phone calls and quote requests: the call button and a "Get a Quote" link are
visible on every page, on every screen size.

Anything the business still needs to supply is shown as a highlighted **[PLACEHOLDER …]**. No licence numbers,
reviews, client names, suburbs or statistics have been made up.

## Pages

| Page | URL |
| --- | --- |
| Home | `/` |
| Services overview | `/services/` |
| Residential, Commercial, Industrial, Maintenance | `/services/residential/` etc. |
| Projects (filterable) | `/projects/` – supports `?type=residential` / `commercial` / `industrial` |
| About | `/about/` |
| Contact + quote form + map | `/contact/` – `?service=industrial` preselects the job type |
| Thank you (no-JavaScript form fallback) | `/thank-you/` |

## Getting started

Requires Node 22.12 or newer.

```sh
npm install
npm run dev           # local dev server at http://localhost:4321
npm run build         # production build into dist/
npm run preview       # serve the production build locally
npm run check         # type-check the project
npm run placeholders  # list every placeholder still to be filled in
```

Built with [Astro 7](https://astro.build): static HTML, no UI framework, under 5 KB of JavaScript per page and one
self-hosted variable font (Archivo, 35 KB). CSS is inlined so pages render without extra requests.

## Editing content

Almost everything lives in three data files:

| File | What's in it |
| --- | --- |
| `src/data/site.ts` | Name, phone, email, address, socials, licence/insurance/ABN placeholders, hours, service areas, and the `noindex` launch switch |
| `src/data/services.ts` | Each service page: headings, meta title/description, intro, "what's included", FAQs, hero photo |
| `src/data/projects.ts` | Project gallery cards (title, category, suburb, description, photo, alt text) |

Other content:

- **Reviews** – `src/components/home/Reviews.astro` (three slots; use real Google reviews only)
- **Alex's story** and values – `src/pages/about.astro`
- **Instagram tiles** – `src/components/home/InstagramFeed.astro`

The phone number is linked automatically wherever it appears in copy from the data files, so every number on the
site is click-to-call.

### Photos

The photos and logo come from the business's current website (supremeelectricalcontractors.com.au). Project
titles describe what each photo shows; the suburbs and job details are still placeholders.

To add or swap a photo, put it in `src/assets/photos/` and set the filename on the matching entry. Astro resizes them, serves
AVIF/WebP and lazy-loads them (the photo at the top of each page loads first). See
`src/assets/photos/README.md` for where each photo is set. Update the `alt` text to describe what each photo
actually shows.

## Quote form (Netlify Forms)

The form is handled by [Netlify Forms](https://docs.netlify.com/forms/setup/), so no backend code is needed.

- **With JavaScript:** fields are validated inline, the request is sent in the background and a success
  message replaces the form.
- **Without JavaScript:** the browser posts the form and Netlify redirects to `/thank-you/`.
- **Local development (`npm run dev`):** sending is simulated so the success message can be previewed. Real
  submissions only work on Netlify.
- Fields: name, phone, email, suburb, job type, message and an optional photo (images up to 8 MB, which is
  Netlify's limit). Spam protection uses Netlify's honeypot field.

## Deploying to Netlify

1. Push this repository to GitHub and import it in Netlify. Build settings come from `netlify.toml`
   (`npm run build`, publish `dist`, Node 24).
2. In **Site configuration → Forms**, turn on **form detection**, then trigger a new deploy so the `quote`
   form is registered.
3. In **Forms → Form notifications**, add an email notification to `alex@supreme-electrical.au` so new
   quote requests arrive by email.
4. Point the domain at Netlify. The production URL is set in `astro.config.mjs` (`site`). It currently assumes
   `https://supreme-electrical.au`, so change it if the website will live elsewhere.

## Before launch

The concept build sets `noindex` so search engines don't index pages full of placeholders.

- [ ] Fill in every placeholder (`npm run placeholders` lists them): REC number, electrical licence number,
      insurance, ABN, business hours, service area suburbs, three real Google reviews, Alex's story, project
      suburbs and descriptions
- [ ] Confirm the project titles and categories match the real jobs in each photo
- [ ] Have Alex review all copy, especially the FAQ answers, service descriptions and values
- [ ] Confirm the domain in `astro.config.mjs`
- [ ] Once suburbs are confirmed, consider adding `areaServed` to the structured data in `src/lib/schema.ts`
- [ ] Set `noindex: false` in `src/data/site.ts`
- [ ] Submit `https://<domain>/sitemap-index.xml` in Google Search Console

## SEO and accessibility

- Unique title and meta description on every page, one H1 per page, logical heading order
- `Electrician` (LocalBusiness) structured data on every page with name, address, phone, email and social
  profiles, plus `Service`, `FAQPage` and `BreadcrumbList` where relevant
- Canonical URLs, Open Graph/Twitter share image (`public/og-image.png`), sitemap and `robots.txt`
- WCAG AA colour contrast. Brand yellow (#FFD32D) is only 1.44:1 against white, so it is never used for text
  on light backgrounds. It appears behind dark text (13:1) or as text on charcoal (12:1).
- Keyboard and screen reader support: skip link, visible focus, labelled form fields with linked error
  messages, live announcements for the project filter, and a mobile menu that works without JavaScript
- Animations are subtle and switch off when the visitor's device asks for reduced motion

Lighthouse (mobile) on the concept build: Performance 100, Accessibility 100, Best Practices 100. SEO is 100 once
`noindex` is switched off.
