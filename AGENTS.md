# Riccardo Rasoni – Personal website

This project is an Astro static academic website hosted by GitHub Pages.

## Commands
- `npm install` (once, then commit package-lock.json)
- `npm run dev` (localhost preview)
- `npm run build` (typecheck + static production build)

## Important files
- `src/styles/global.css`: visual design system.
- `src/layouts/BaseLayout.astro`: metadata, navigation wrapper, structured data.
- `src/content/papers/*.md`: authoritative public research content.
- `src/content.config.ts`: paper metadata schema.
- `.github/workflows/deploy.yml`: GitHub Pages automation.

## Publishing constraints
- This is a public GitHub repository. Never publish private data or unapproved research drafts.
- Keep clear semantic HTML, fast loading, mobile responsive design, accessible navigation, and SEO metadata.
- Do not invent academic credentials, results, coauthors, or papers.
- Content is public facing and written in English; collaboration instructions can be in Italian.
