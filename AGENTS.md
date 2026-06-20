# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro + Tailwind portfolio. Source lives in `src/`: reusable UI components are in `src/components/`, typed content is in `src/data/`, page routes are in `src/pages/`, shared layout is in `src/layouts/`, and global styles are in `src/styles/global.css`. Static assets live in `public/`, including `public/images/`, `public/resume.pdf`, `public/favicon.svg`, and `public/og-image.svg`. GitHub Pages deployment is configured in `.github/workflows/deploy.yml`. Legacy material is preserved under `backup/` and should not be used by the live site.

## Build, Test, and Development Commands

On the local development system, Node and npm are typically provided through `nvm`. Verify they are available with `node -v` and `npm -v`. If either command is missing, load `nvm` and select the installed default Node version before running project commands:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use default
```

- `npm install`: install dependencies.
- `npm run dev`: start the Astro development server.
- `npm run check`: run Astro/TypeScript diagnostics.
- `npm run build`: run diagnostics, then generate the static site in `dist/`.
- `npm run preview`: preview the production build locally.

Run `npm run build` before opening a pull request or changing deployment-sensitive files.

## Coding Style & Naming Conventions

Use TypeScript and Astro components with two-space indentation. Keep content in `src/data/*.ts` when practical instead of hardcoding copy in components. Name components in PascalCase, such as `ProjectFeature.astro`, and data modules in lowercase domain names, such as `projects.ts`. Prefer semantic HTML, small components, and Tailwind utilities that match existing patterns. Keep the site static-first and avoid client JavaScript unless it directly improves the user experience.

## Testing Guidelines

There is no separate unit test suite today. Treat `npm run check` and `npm run build` as required verification. For visual changes, review desktop and mobile breakpoints locally with `npm run dev` or `npm run preview`. Check that assets resolve from `public/` and that links, resume downloads, image dialogs, and keyboard focus states still work.

## Commit & Pull Request Guidelines

Use short, imperative commit messages, matching the existing history: `Set up Astro portfolio project`, `Build data-driven portfolio experience`, `Fix favicon and remove card hover effects`. Keep commits logically scoped by concern. Pull requests should include a concise summary, verification steps, screenshots for visual changes, and notes for any content, resume, SEO, or deployment changes.

## Security & Configuration Tips

Do not commit `.env`, local build output, `node_modules/`, or macOS metadata files. Avoid adding confidential employer details, internal URLs, or non-public project information. Keep public-facing assets optimized and stored under `public/`.
