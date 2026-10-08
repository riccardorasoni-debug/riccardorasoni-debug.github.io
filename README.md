# Riccardo Rasoni · Academic Website

A modern, lightweight academic site made with **Astro**, native CSS, Markdown content collections, and free GitHub Pages hosting.

**Public URL (after deployment):** https://riccardorasoni-debug.github.io

## 1. Open the project in Cursor (Windows)

1. Extract this ZIP to a folder, for example `C:\Users\ricca\Documents\riccardorasoni-debug.github.io`.
2. Open **Cursor → File → Open Folder** and choose the extracted `riccardorasoni-website` folder.
3. Install Node.js **22.12+ or 24 LTS** if needed: https://nodejs.org/
4. Open **Terminal → New Terminal** inside Cursor. Run:

   ```powershell
   node --version
   npm install
   npm run dev
   ```

5. Open the localhost URL printed by Astro (normally http://localhost:4321/).
6. When ready, check the static build:

   ```powershell
   npm run build
   ```

**Important:** this starter does **not** include a lockfile. Running `npm install` generates `package-lock.json`. Commit that file to GitHub together with your source.

## 2. Create the GitHub repository

Use the signed-in GitHub account **riccardorasoni-debug**.

1. At https://github.com/new create a **public** repository named **exactly** `riccardorasoni-debug.github.io`.
2. Keep it empty (do NOT initialize a README or license from GitHub), because this project already contains a README.
3. In Cursor's terminal at the project root run:

   ```powershell
   git init
   git branch -M main
   git add .
   git commit -m "feat: launch academic website starter"
   git remote add origin https://github.com/riccardorasoni-debug/riccardorasoni-debug.github.io.git
   git push -u origin main
   ```

4. Open your repository's **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
5. Open **Actions** and wait for **Deploy Astro site to GitHub Pages** to finish. Your site will become accessible at:
   https://riccardorasoni-debug.github.io

If deployment starts before you change Settings → Pages, configure the setting then re-run the workflow from the Actions tab. The GitHub Actions workflow uses the official Astro action.

## 3. Edit your research without touching code

Every paper is in `src/content/papers/*.md`. Duplicate one file, rename it, and update the YAML header and markdown body. The `src/content.config.ts` schema validates required fields automatically.

To link a publicly shareable manuscript, set `pdf: '/papers/your-paper.pdf'` in the paper's frontmatter and place the PDF in `public/papers/`. You **must not** link a confidential or not-yet-approved research draft.

Research cards and dedicated article pages are generated from the same metadata. `featured: true` controls whether the paper appears on the homepage, and `order: 1` controls the ordering.

## 4. Add the CV and profile photo

The CV page currently provides an email-based request link: there is no fake download. To add your CV:

1. Copy your current PDF to `public/cv.pdf`.
2. Ask Cursor: "Update the CV page with a prominent download button to /cv.pdf, preserving the existing academic timeline."
3. Confirm there is no private data you do not want published.

The About page uses a deliberate typographic placeholder with your initials; ask Cursor to replace it with your own portrait once you upload one to `public/`.

## 5. Edit the visual design

Everything is centralized in `src/styles/global.css`. The design tokens at the very top set backgrounds, text, borders and blue accents. There is a working light/dark theme toggle and responsive styling without client-side frameworks.

**Design goals:** editorial typography, clear reading hierarchy, warm off-white canvas, navy-blue graphics, blue editorial details, restrained motion. No dependency-heavy animation libraries.

## 6. Cursor AI workflow

- **Always-on rules:** `.cursor/rules/architecture.mdc`.
- **Research rules:** `.cursor/rules/research-content.mdc`.
- **Project context:** `AGENTS.md`.
- **Prompt collection:** `CURSOR_PROMPTS.md`.

Recommended branch workflow (once the repository exists):

```powershell
git checkout -b design/refresh-hero
# Work in Cursor; preview with npm run dev.
npm run build
git add .
git commit -m "design: refine homepage hero"
git push -u origin design/refresh-hero
```

Open a GitHub Pull Request, review the diff and preview locally, then merge into main to publish. For tiny content edits, you may work on `main` if you prefer, but avoid merging unverified big redesigns.

## 7. Indexing checklist

After the website is publicly live:

- Check the homepage, `/research/`, `/about/`, `/cv/`, and `/contact/` return real pages.
- Check https://riccardorasoni-debug.github.io/robots.txt and https://riccardorasoni-debug.github.io/sitemap-index.xml.
- Verify ownership of the **URL-prefix property** `https://riccardorasoni-debug.github.io/` in Google Search Console and submit `/sitemap-index.xml`.
- In Search Console, request indexing for the homepage and the key research pages. Be patient: indexing is not guaranteed or immediate.
- Update the existing Google Sites homepage with a visible link to the new website, plus university profile and scholarly profiles when possible.
- Do not delete the old Google Sites page immediately; links from it can help visitors find the new site. Google Sites does not offer the same redirect control as a personal web server.

## 8. Project map

```text
.github/workflows/deploy.yml     GitHub Pages publishing
.cursor/rules/*.mdc             Cursor rules
AGENTS.md                       AI-maintainer project context
src/pages/index.astro           Homepage
src/pages/research/index.astro  Research archive
src/pages/research/[...slug].astro Individual paper pages
src/pages/about.astro           About
src/pages/cv.astro              CV landing page
src/pages/contact.astro         Contact
src/content/papers/*.md        Public paper records
src/content.config.ts           Metadata schema
src/layouts/BaseLayout.astro    Site shell and SEO metadata
src/components/               Reusable components
src/styles/global.css          Full visual design
src/lib/site.ts                Public identity and links
src/pages/robots.txt.ts        Crawler rules
public/favicon.svg             Favicon
```

## 9. Status and limits of this starter

- This is a **local code starter**, **not yet published to GitHub**.
- A real `npm run build` must be executed after downloading/installing dependencies. The environment that created this starter could not reach npm registry.
- It uses publicly known academic facts and explicitly provisional descriptions for projects. Verify paper title, coauthors, descriptions, affiliations, dates, and approval to publicize before launch.
- `public/cv.pdf` and a real photo are **not included**; no invented links or assets are shipped.
