# Suga — personal site

A fast, static personal landing page + blog built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com)
(via `@tailwindcss/vite`, plus `@tailwindcss/typography` for blog posts; fonts self-hosted with Fontsource: Inter + JetBrains Mono).
No backend, no database — it builds to plain HTML/CSS in `dist/` and deploys free anywhere.

> **First-draft status:** everything in `[square brackets]` or marked **TODO / Placeholder / Draft**
> on the page is placeholder content. Replace it before sharing the link.

## Quick start

```bash
npm install
npm run dev       # live-reload dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # serve dist/ locally at http://localhost:4321
```

Requires Node.js 22.12+ (built here with Node 24).

## Project structure

```
src/
  site.config.ts           ← EDIT FIRST: name, headline, contact links, skills, projects
  pages/
    index.astro            ← Home: hero, About, Skills, Projects, Blog preview, Contact
    blog/index.astro       ← Blog list
    blog/[...slug].astro   ← Blog post template
  content/blog/*.md        ← Blog posts (Markdown)
  content.config.ts        ← Blog frontmatter schema
  layouts/Base.astro       ← <head>, SEO meta, theme bootstrapping
  components/Header.astro  ← Nav + dark/light toggle
  components/Footer.astro
  components/SectionHeading.astro ← shell-prompt line + section title
  styles/global.css        ← Tailwind entry: color tokens (light + dark), fonts, keyframes, small component classes
public/                    ← Static files copied as-is (favicon, résumé PDF, images)
.github/workflows/deploy.yml ← Optional GitHub Pages deploy
```

## Editing content

| What | Where |
|---|---|
| Name, headline, "Open to work" text | `src/site.config.ts` → `site` |
| Email / GitHub / LinkedIn / résumé | `src/site.config.ts` → `contact` |
| Skills (Backend / Cloud / Systems) | `src/site.config.ts` → `skills` (delete each `note` once filled in) |
| Projects | `src/site.config.ts` → `projects` (set `placeholder: false` when real) |
| Intro + About paragraphs | `src/pages/index.astro` (hero `.intro` and `#about`) |
| Colors / accent | `src/styles/global.css` (`--c-accent`, `--c-bg`… for light and dark) — used as Tailwind classes like `bg-accent`, `text-muted` |
| Layout / styling | Tailwind utility classes directly in the `.astro` files |
| Section shell prompts (`cat about.md`…) | `cmd` prop on each `<SectionHeading>` in `src/pages/index.astro` |
| Site URL (for SEO/canonical) | `astro.config.mjs` → `site` |

Placeholders are values wrapped in `[brackets]`. Contact links in brackets render as a "TODO" badge
instead of a link, so nothing broken ships. To hide the "Open to work" badge later set `openToWork: false`.

**Résumé:** drop `resume.pdf` into `public/` and set `contact.resume: '/resume.pdf'`.

## Adding a blog post

Create a Markdown file in `src/content/blog/`, e.g. `src/content/blog/nestjs-guards.md`:

```md
---
title: "Using guards in NestJS"
description: "One-sentence summary shown in the post list."
pubDate: 2026-11-05
tags: ["nestjs", "typescript"]
draft: false
---

Your post in Markdown. Code blocks get syntax highlighting.
```

The filename becomes the URL: `/blog/nestjs-guards/`. `draft: true` shows a "Draft" badge.
Delete or rewrite the starter post `src/content/blog/hello-world.md`.

## Deploying (all free)

Build command: `npm run build` · Output directory: `dist`

- **Netlify / Cloudflare Pages / Vercel:** push to GitHub, "Import project", pick the repo.
  Astro is auto-detected; otherwise set the build command and output dir above.
- **GitHub Pages:**
  1. Push to a repo; in *Settings → Pages* set *Source* to **GitHub Actions**.
  2. The included workflow `.github/workflows/deploy.yml` builds and deploys on push to `main`.
  3. In `astro.config.mjs` set `site: 'https://<username>.github.io'`. If the repo is **not**
     named `<username>.github.io`, also add `base: '/<repo-name>'` (all internal links respect `base`).

After deploying, set `site` in `astro.config.mjs` to the real URL.
