---
name: astro-tailwind-quality
description: Guide implementation quality for Shawn's Astro and Tailwind portfolio rebuild; use for architecture, component structure, content modeling, static deployment, responsive behavior, and clean build output.
---

# Astro Tailwind Quality

Use this skill when implementing or reviewing the Astro + Tailwind portfolio.

## Architecture

- Keep the site static-first and compatible with GitHub Pages.
- Prefer Astro components and minimal client-side JavaScript.
- Avoid unnecessary dependencies.
- Use TypeScript data files for profile, experience, projects, education, awards, and links.
- Keep components small, readable, and easy to replace.
- Preserve clean build output.

## Content Structure

Prefer typed content/data files such as:

- `profile.ts`
- `experience.ts`
- `projects.ts`
- `education.ts`
- `skills.ts`
- `links.ts`

Keep copy and data separate from presentation when practical.

## Markup And Styling

- Use semantic HTML.
- Keep Tailwind usage clean and consistent.
- Avoid one-off messy utility soup when a reusable component or class would be clearer.
- Use shared layout primitives for repeated spacing, containers, section headers, and cards.
- Ensure responsive behavior across mobile, tablet, and desktop.
- Keep interactions accessible and usable without JavaScript where possible.

## Implementation Checks

- Build pages from data-driven components.
- Keep images and assets organized.
- Ensure links work under GitHub Pages base path rules.
- Test production build before launch.
- Keep generated output out of source unless the deployment approach requires it.
