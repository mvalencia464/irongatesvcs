# IronGate Services LLC — Website

Official marketing site for **IronGate Services LLC** (handyman, drone, and real estate support in the Tampa metro). This repository is the source for the live site and its ongoing updates.

---

## Why this site feels faster than typical home service websites

Many contractor and home-service sites run on generic WordPress themes, drag-and-drop builders, or stacks of plugins. That often means large JavaScript bundles, slow first loads on phones, and fragile performance when something updates.

**This site is different by design.**

| Typical home service site | This site |
|---------------------------|-----------|
| Heavy scripts on every page | **Mostly HTML and CSS** — minimal work for the phone to do before content appears |
| One central server, far from some visitors | **Cloudflare global edge** — static files served from locations close to the visitor |
| Layout and ads fighting for speed scores | **Tuned for Core Web Vitals** — metrics Google uses when evaluating page experience and local rankings |

Under the hood it is built with **[Astro](https://astro.build/)** (v6 in this project). Astro ships **zero JavaScript to the browser by default**: you get pre-rendered pages, so visitors see your message quickly without downloading a large app framework just to read your phone number or services list.

**What that means in plain language**

- **Faster loads**, especially on mobile and slower connections — less code to download and execute before the page is usable.  
- **More predictable behavior** — fewer third-party scripts means fewer surprises and less drain on battery and data.  
- **Hosting on Cloudflare’s edge network** — pages are distributed worldwide so responses are short-hop for most visitors, which supports snappy mobile experience and strong technical signals for search.

JavaScript is still available where it truly helps (for example interactive pieces); it is not loaded “because the platform always loads it.”

---

## Quick start (for developers or agencies)

```bash
npm install
cp .env.example .env    # set R2 / site URL as needed
npm run dev             # http://localhost:4321
```

---

## Project structure

```
src/
├── config/
│   └── site.ts          ← Business copy, colors, services, SEO, media paths
├── lib/
│   └── r2.ts            ← Image URL helper (R2 / CDN)
├── layouts/
│   └── BaseLayout.astro ← HTML shell, SEO, JSON-LD
├── components/          ← Header, Hero, services, reviews, contact, footer, etc.
├── pages/
│   ├── index.astro
│   ├── thanks.astro
│   └── services/[slug].astro
└── styles/
    └── global.css
```

Most business-facing content lives in **`src/config/site.ts`**. Service detail routes are generated from the `services` array there.

---

## Deploying & hosting

Production builds are static output, ideal for **Cloudflare Pages** (or any static host). Example:

```bash
npm run build
wrangler pages deploy ./dist --project-name=your-pages-project
```

Use the Cloudflare Pages dashboard to attach **custom domains** and manage DNS alongside the edge CDN.

### Media (R2 / CDN)

Images resolve through `src/lib/r2.ts` using `R2_BASE_URL`, `R2_SITE_FOLDER`, and paths from `site.ts`. Point `.env` at your public bucket or CDN base URL so builds and previews resolve assets correctly.

---

## Contact form

The contact area may use static-friendly form attributes. For **Cloudflare Pages**, wire submissions through [Pages Functions](https://developers.cloudflare.com/pages/functions/) or a provider such as Formspree, Web3Forms, or EmailJS—see the implementation in `ContactSection.astro` and adjust the `action` / handler as needed.

---

## Customization (maintainers)

- **Branding & colors** — `SITE.palette` in `src/config/site.ts` (CSS variables are injected in `BaseLayout.astro`).  
- **New service page** — add an entry to `services` in `site.ts`; `/services/<slug>` is generated automatically.  
- **Reviews** — add objects to the `reviews` array.  
- **Fonts** — Google Fonts link in `BaseLayout.astro` and families in `global.css`.

---

## Commands

```bash
npm run dev        # Local development
npm run build      # Production build → ./dist
npm run preview    # Preview the production build locally
npm run deploy     # Build + deploy via Wrangler (see package.json)
```

---

*Stack: Astro, static output, Cloudflare Pages–friendly. Built for speed, clarity, and long-term maintainability.*
