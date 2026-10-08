# Cursor prompts — copy and paste into Agent chat

## Prompt 01 — Audit before changing anything

Read `AGENTS.md`, `.cursor/rules/architecture.mdc`, `src/content.config.ts`, and the pages/components/styles. Explain how this Astro static site is structured and which files govern design, paper metadata, and SEO. Do not edit files yet. Then identify the three highest-impact improvements, being conservative about public research content.

## Prompt 02 — Improve the homepage without breaking it

Improve the homepage visual design as a premium personal website for an economics PhD researcher. Preserve the editorial look: ivory background, navy, precise blue accents, tasteful display serif, clean sans-serif body, responsive grid, restrained transitions. Keep Lighthouse performance and accessibility in mind. Do not introduce React or unrelated dependencies. Edit only necessary Astro/CSS files, run `npm run build`, and summarize changes and their visual impact.

## Prompt 03 — Add a new research project

Read the existing Markdown paper records and Zod schema. I will provide the factual content of a new research project. Create a new Markdown file matching the schema, decide whether it should be featured based on my instructions, and preserve routes automatically. Do not invent coauthors, results, data, DOI, journal status, or PDF URLs. Run the build.

## Prompt 04 — Production preflight / SEO audit

Conduct a thorough pre-deployment audit: routes, Markdown schema, SEO title/description/canonical tags, XML sitemap generation, robots.txt, theme toggle behavior, responsive layout, keyboard accessibility, reduced-motion support, broken local links, accidental publication of confidential content, and GitHub Actions permissions. Run `npm run build`. Give a clear pass/fail table and fix confirmed issues. Never claim indexation is guaranteed.

## Prompt 05 — Add portrait and updated CV

I have provided my real portrait (place it in `public/`) and latest approved CV PDF (place it at `public/cv.pdf`). Replace the abstract initials on About with a well-optimized responsive portrait, with meaningful alt text. Make `/cv/` link to the PDF, including a clearly labeled download button. Do not fabricate metadata. Make sure all pages remain responsive and run the build.

## Prompt 06 — Publish with a PR

Inspect the current Git status and GitHub Pages configuration. Work on a descriptive feature branch. Ensure `npm run build` passes, review the changes, create a conventional commit, and push to the feature branch. Open a pull request to `main`. Do not merge until I explicitly approve.
