# Phoenix Decorators website

This is the new website for Phoenix Decorators (Pvt) Ltd. It is a fast, static website built with Astro. There is no database and nothing to log in to.

## Changing text and details

Most things you might want to change live in four files in `src/data/`:

- `site.ts`: phone number, WhatsApp number, email, office addresses, opening hours, social links, the guarantee wording, the announcement pill on the home page, and analytics IDs.
- `services.ts`: the six services, their descriptions, scope lists and FAQs, plus the access methods and the "How we work" steps.
- `projects.ts`: the project list. Mark a project `featured: true` to show it on the home page.
- `clients.ts`: client reference lists, the "Trusted on landmark sites" names and the sectors list.

You can edit these files directly on GitHub (open the file, click the pencil icon, save with "Commit changes").

## Photos

All photos are in `src/assets/images/`. To swap a photo, upload a new file with exactly the same name. Only use real photos of Phoenix work. `docs/IMAGES.md` lists which photo goes where.

## Publishing

The site is hosted on Netlify. Every change saved to the main branch on GitHub is built and published automatically, usually within a couple of minutes. If a build fails, Netlify keeps the previous version online.

## For developers

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # type check and build into dist/
npm run preview  # serve the built site
```

Project rules are in `CLAUDE.md`. Content is in `docs/SITE_CONTENT.md`.
