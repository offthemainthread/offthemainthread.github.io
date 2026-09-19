# Zeeshan Mahmood — Personal Website

Personal website & portfolio, built with [Astro](https://astro.build).
Clean, minimal, fully responsive, with light/dark themes.

## Editing content

All text lives in one place: **`src/data/site.ts`** — profile, about,
experience, skills, and projects. Edit that file and everything updates.
No component changes needed for content edits.

## Theming

Colors and fonts are CSS custom properties in **`src/styles/global.css`**.
Change the `--accent*` tokens at the top to re-theme the whole site
(light + dark). Dark-theme overrides live under `[data-theme="dark"]`.

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server at localhost:4321    |
| `npm run build`   | Build the production site to `./dist/`    |
| `npm run preview` | Preview the built site locally            |

## Deploying

The build output is a static folder (`./dist/`) — deploy it to any static
host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Set the `site`
value in `astro.config.mjs` to your final domain first.

## Notes / TODO

- Confirm the **LinkedIn** and **GitHub** URLs in `src/data/site.ts`
  (placeholders were used).
- Add real links to projects as they get open-sourced or written up.
