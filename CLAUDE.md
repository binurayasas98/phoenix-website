# Phoenix Decorators website: rules for every session

You are building the new website for Phoenix Decorators (Pvt) Ltd, a Sri Lankan building services contractor (waterproofing, painting, sealants, glass and facade cleaning, industrial coatings and high-rise maintenance). The owner of this repository is not a developer. Explain results in plain English.

## Sources of truth (read before any task)
- docs/SITE_CONTENT.md: every fact and every word of copy. Use it exactly. Never invent clients, numbers, certifications, awards, testimonials or claims.
- docs/IMAGES.md: which photo goes where, with alt text.
- src/assets/images/: all photos, logos and icons. Real Phoenix work only. Never add stock, AI or downloaded images.
- Anything marked [CONFIRM] in SITE_CONTENT.md must come from src/data/site.ts so it can be changed in one place, or stay hidden if the note says so.

## Stack
- Astro (latest stable), TypeScript (strict), Tailwind CSS v4, static output. No CMS, no database, no server code.
- Hosting: Netlify. Keep a netlify.toml with the build command, publish directory "dist", the Node version, headers and redirects.
- Images: astro:assets (Image or Picture) from src/assets/images, AVIF and WebP, responsive widths, explicit width and height. Hero image loads eagerly with high priority; everything else lazy.
- Font: Inter Variable, self-hosted with @fontsource-variable/inter. Font stack: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter Variable", system-ui, sans-serif.
- Icons: Lucide at 1.5px stroke (an Astro-compatible package or inline SVG).
- Interactivity: Astro components with small vanilla TypeScript. The "motion" package is allowed for the hero and scroll effects. No other UI or animation libraries, no smooth-scroll libraries, no scroll-jacking.
- Quote form: Netlify Forms (form name "quote"), no backend.

## Commands
- npm install, npm run dev, npm run build, npm run preview.
- npm run build must pass with no errors before you finish any task. Fix what you break.

## Structure
- src/data/site.ts: company name, phone, WhatsApp number, email, both offices, hours, social links, warranty, announcement, analytics IDs (empty by default). The single source for these values.
- src/data/services.ts, src/data/projects.ts, src/data/clients.ts: content from SITE_CONTENT.md.
- src/layouts/Base.astro, src/components/*, src/pages/*.
- Shared components: Header, Footer, PhotoHero, PageHero, TwoToneHeading, OverlayCard, ProjectCard, CtaBand, ActionBar, WhatsAppLink, RopeLine, SectionIntro.

## How to work
- Do only what the current task asks. Never restyle, rename or rewrite other parts.
- Commit in small, clearly named steps. Never commit secrets or keys.
- When you finish: run the build, then give a short plain-English summary for the owner: what changed, what to check on the preview, and anything that still needs a real photo or a confirmation.

## Design system (premium, Apple-inspired, light base with night-blue moments)
Direction: an apple.com product page for a building contractor. Full-bleed real photography, big confident type, lots of air, hairlines instead of boxes, deep night-blue sections for drama. Calm, precise, premium.

Colour tokens (CSS variables and Tailwind theme):
- paper #FFFFFF (page), mist #F5F5F7 (alternate sections), ink #1D1D1F (text, primary buttons on light), graphite #6E6E73 (secondary text, second tone of two-tone headings), hairline #D2D2D7 on light and rgba(255,255,255,0.12) on night.
- night #06172B (dark sections, closing CTA band, footer), night-2 #0C2440 (raised surfaces on night).
- brand #0078B0 (logo blue: icons, active states, the rope line, links on white), brand-ink #003674 (logo navy: links on mist, pressed states), brand-light #5CB8EC (accents and links on night and over photos).
- whatsapp #25D366 (WhatsApp icon and floating button only).
- Text on night: white headings, white 70% body, links at least white 60%, fine print at least white 55%.

Type:
- display clamp(56px, 8.5vw, 128px), weight 600, letter-spacing -0.035em, line-height 0.95.
- h1 clamp(44px, 6vw, 88px); h2 clamp(36px, 5vw, 72px); weight 600, letter-spacing -0.03em, line-height 1.02.
- h3 clamp(22px, 2vw, 28px) weight 600. lead clamp(19px, 1.6vw, 24px), line-height 1.4. body 17px, line-height 1.55. small 14px. Tabular figures for numbers.
- Two-tone headings: the heading in ink, then its second line in graphite at the same size and weight (on night: white, then white 55%).

Layout: max width 1280px, side padding 24px mobile and 48px desktop, text column 720px, 8px spacing scale, section padding 96px mobile and 160px desktop. Heroes and image bands may go full-bleed.

Shape: cards and tiles 28px radius on desktop and 20px on mobile, small tiles 18px, inputs 12px, buttons full pill. No shadows at rest except the segmented control and floating buttons.

Buttons: 52px tall in heroes, 48px elsewhere. On light: primary ink pill with white text, secondary white pill with a hairline border. On night or photos: primary white pill with ink text, secondary frosted pill (white 12%, 1px white 20% border, blur 16px) with white text.

Links: "Label ›". The underline grows from the left on hover.

Cards: the image fills the card, a night gradient rises from the bottom (80% to transparent at 55%), white title and one-liner sit on it. Never a white text box under an image. Projects without a photo use a typographic card: mist background, large client name, location and scope tags, no fake imagery.

Header: frosted white (rgba(255,255,255,0.72), saturate 180%, blur 20px), 64px desktop, 56px mobile, logo 40px tall desktop and 32px mobile. On the home page only, it starts transparent over the hero with the white logo and white links, and turns frosted white after 24px of scroll.

Logos: logo.png on light, logo-white.png on night and photos. Favicon, apple-touch-icon and manifest icons from app-icon.png (app-icon.svg for the SVG favicon).

Signature element, the "rope line": a 1px vertical line (brand on light, white or brand-light on night and photos) ending in an 8px circle, like a rope dropped down a facade. Use it only where a task asks for it.

Dark rhythm: at most three night sections per page, never two in a row, except the closing CTA band flowing into the footer.

Avoid: gradient backgrounds (overlays on photos are fine), glass cards (a frosted pill on a photo is fine), grids of identical boxed cards, ALL CAPS labels, small labels above every heading, emoji, stock photos, meta text joined with dots, carousels that auto-advance.

## Motion
- One orchestrated entrance, in the home hero only.
- Scroll-linked effects only where a task asks: hero parallax, the intro text highlight, rope lines filling, numbers counting up once.
- Easing cubic-bezier(0.22, 1, 0.36, 1). 150ms press, 300ms UI, 700 to 900ms media, up to 1.8s for the hero image.
- Media tiles scale from 1.04 to 1 the first time they enter view. No fade-up on every text block.
- Buttons scale to 0.97 on press. Card images zoom to 1.04 over 700ms on hover, desktop only.
- Menus open as full-screen sheets with a spring. Form steps slide 24px with a fade.
- prefers-reduced-motion: no movement, opacity changes only.

## Copy rules
- British English. Sentence case. Short sentences. Active voice. Plain, confident, professional. No puns, no jokes, no hype words (world-class, cutting-edge, unparalleled, premier, best in Sri Lanka).
- Never use em dashes or en dashes anywhere, including code comments that render. Use commas, colons or full stops. Write ranges with "to".
- Button labels, identical everywhere: "Get a free quote", "Chat on WhatsApp", "Call us".
- WhatsApp links always carry a prefilled message with context (see SITE_CONTENT.md).
- Client and project names exactly as written in SITE_CONTENT.md. Names only, never logos.

## Conversion rules
- "Get a free quote" in the header on every page.
- Mobile (under 768px): after the hero scrolls away, a bottom action bar: round call button, WhatsApp button, wide "Get a free quote" button. Blurred white background, iOS safe area respected. Hidden on /quote.
- Desktop: round floating WhatsApp button bottom right with a "Chat on WhatsApp" tooltip. Hidden on /quote.
- Every page except /contact and /quote ends with the CtaBand.
- One track(event, params) helper for quote_start, quote_submit, whatsapp_click, call_click, email_click. It pushes to window.dataLayer and calls fbq when present. Analytics scripts load only when their ID is set in site.ts.

## Quality floor
- Mobile-first. Check 375, 390, 768, 1024 and 1440px. No horizontal scrolling.
- Tap targets at least 44px, WCAG AA contrast, visible focus rings, semantic HTML, one h1 per page, alt text on every image, skip link.
- Lighthouse mobile 90+ in every category. No layout shift from images or fonts.
