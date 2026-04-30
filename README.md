# Astro Home Service Site Template

A fast, data-driven Astro template for building home service business websites.
Edit one config file → full site auto-generates. Deploys to Cloudflare Pages in minutes.

---

## Quick Start

```bash
npm install
cp .env.example .env    # fill in your R2 URL
npm run dev             # http://localhost:4321
```

---

## Project Structure

```
src/
├── config/
│   └── site.ts          ← EDIT THIS for each new client
├── lib/
│   └── r2.ts            ← R2 image URL builder
├── layouts/
│   └── BaseLayout.astro ← HTML shell, SEO, JSON-LD
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ServicesGrid.astro
│   ├── AboutSection.astro
│   ├── ReviewsSection.astro
│   ├── CTABanner.astro
│   ├── ContactSection.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro           ← Homepage
│   ├── thanks.astro          ← Form success page
│   └── services/[slug].astro ← Auto-generated per service
└── styles/
    └── global.css
```

---

## Launching a New Client Site

1. **Edit `src/config/site.ts`** — update name, phone, colors, services, reviews, etc.

2. **Set up `.env`**:
   ```
   R2_BASE_URL=https://pub-YOURKEY.r2.dev
   R2_SITE_FOLDER=client-folder-name
   SITE_URL=https://clientdomain.com
   ```

3. **Upload images to R2** in the folder matching `R2_SITE_FOLDER`:
   ```
   r2://your-bucket/client-folder-name/
   ├── hero.jpg
   ├── about-team.jpg
   └── services/
       ├── drain-cleaning.jpg
       ├── water-heater.jpg
       └── ...
   ```
   Recommended image sizes:
   - Hero: 1600×900px
   - Service cards: 800×520px
   - About: 1160×880px

4. **Build & deploy**:
   ```bash
   npm run build
   wrangler pages deploy ./dist --project-name=client-site-name
   ```

5. **Add custom domain** in Cloudflare Pages dashboard → Custom domains.

---

## Cloudflare R2 Setup

1. In your Cloudflare dashboard → R2 → your bucket → **Settings**
2. Enable **Public Access** (or use a custom domain)
3. Copy the public URL (e.g. `https://pub-abc123.r2.dev`)
4. Set it as `R2_BASE_URL` in your `.env`
5. Use the bucket folder name as `R2_SITE_FOLDER`

---

## Contact Form

The form in `ContactSection.astro` uses `data-netlify="true"` attributes.

**For Cloudflare Pages**, replace with [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/) or a third-party service:

- **Formspree**: Change `action="/thanks"` to your Formspree endpoint
- **Web3Forms**: Free, works great with static sites
- **EmailJS**: Client-side email sending

---

## Customization Tips

### Change colors
Edit `primaryColor` and `accentColor` in `site.ts`. CSS variables are injected automatically.

### Add a service
Add an object to the `services` array in `site.ts`. The page at `/services/your-slug` builds itself.

### Add reviews
Add objects to the `reviews` array. No limit.

### Change fonts
Edit the Google Fonts import in `src/styles/global.css` and update `font-family` references.

### Disable mobile sticky CTA
Remove the `.mobile-cta` block in `BaseLayout.astro`.

---

## Deploy Commands

```bash
npm run dev        # Local dev server
npm run build      # Production build → ./dist
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to Cloudflare Pages
```

---

## Per-Site Time Estimate (after first template setup)

| Task                        | Time     |
|-----------------------------|----------|
| Edit site.ts                | 5 min    |
| Upload images to R2         | 2 min    |
| Build + deploy to CF Pages  | 2 min    |
| Add custom domain           | 2 min    |
| **Total**                   | **~11 min** |
# home-astro
