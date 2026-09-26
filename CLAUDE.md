# Phoenix Decorators website: rules for every session

You are building the new website for Phoenix Decorators (Pvt) Ltd, a Sri Lankan building services contractor (waterproofing, painting, sealants, glass and facade cleaning, industrial coatings and high-rise maintenance). The owner of this repository is not a developer. Explain results in plain English.

## Sources of truth (read before any task)
- docs/SITE_CONTENT.md: every fact and every word of copy. Use it exactly. Never invent clients, numbers, certifications, awards, testimonials or claims.
- docs/IMAGES.md: which photo goes where, with alt text.
- src/assets/images/: all photos, logos and icons. Real Phoenix work only. Never add stock, AI or downloaded images.
  - One exception: the five client building photos (project-bia.jpg, project-shangri-la.jpg, project-one-galle-face.jpg, project-world-trade-center.jpg, project-hemas-hospitals.jpg). They show the client's building, not our team at work. Use each one only on that client's project card and on the matching sector section on /sectors. Never use them in a hero, as a service image or as a background.
  - Material brand logos (brand-dulux.png, brand-conmix.png, brand-delta-coatings.png, brand-ucc.png) appear only in the MaterialBrands row. They are material suppliers, never clients.
- Anything marked [CONFIRM] in SITE_CONTENT.md must come from src/data/site.ts so it can be changed in one place, or stay hidden if the note says so.
- Guarantee rule: waterproofing carries a 25+ year guarantee (site.warranty.waterproofingYears, label and short in site.ts; every use reads from there). No other service gets a number: they show "Written workmanship guarantee" and the period is stated in the quotation. Never show "15+" anywhere.

## Stack
- Astro (latest stable), TypeScript (strict), Tailwind CSS v4, static output. No CMS, no database, no server code.
- Hosting: Netlify. Keep a netlify.toml with the build command, publish directory "dist", the Node version, headers and redirects.
- Images: astro:assets (Image or Picture) from src/assets/images, AVIF and WebP, responsive widths, explicit width and height. Hero image loads eagerly with high priority; everything else lazy.
- Font: Inter Variable, self-hosted with @fontsource-variable/inter. Font stack: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter Variable", system-ui, sans-serif.
- Icons: Lucide at 1.5px stroke (an Astro-compatible package or inline SVG).
- Interactivity: Astro components with small vanilla TypeScript. The "motion" package is allowed for the hero and scroll effects. No other UI or animation libraries, no smooth-scroll libraries, no scroll-jacking.
- Map: d3-geo, topojson-client and world-atlas are allowed only to draw the Sri Lanka projects map as a static SVG at build time (Sri Lanka is ISO numeric 144 in world-atlas countries-10m). No map JavaScript is sent to the browser.
- Forms: Netlify Forms only, no backend. Two forms: "quote" and "contact". Each has a honeypot field ("bot-field"), a hidden "form-name" input, and a static HTML version Netlify can detect at build time. Submit with fetch (application/x-www-form-urlencoded) to "/" and show the success state without a page reload.

## Commands
- npm install, npm run dev, npm run build, npm run preview.
- npm run build must pass with no errors before you finish any task. Fix what you break.

## Structure
- src/data/site.ts: company name, phone, WhatsApp number, email, both offices, hours, social links, warranty (waterproofing guarantee), announcement (currently switched off), analytics IDs (empty by default). The single source for these values.
- src/data/services.ts, src/data/projects.ts, src/data/clients.ts: content from SITE_CONTENT.md. Each service carries introMore, signs, method ("How we do it" steps), an optional extra block and phrase (its short name inside a sentence).
- src/data/directors.ts (both directors), src/data/sectors.ts, src/data/locations.ts (map pins), src/data/faqs.ts (the "Common questions" on /contact#faq), src/data/testimonials.ts (empty array; the section renders only when it has items).
- src/layouts/Base.astro, src/components/*, src/pages/*.
- Pages: /, /services, /services/[slug], /sectors, /projects, /about, /safety-quality, /contact, /quote, /privacy, 404.
- Shared components: Header (with the Services mega menu on desktop), Footer, PhotoHero, PageHero, TwoToneHeading, OverlayCard, ProjectCard, CtaBand, ActionBar, WhatsAppLink, RopeLine, SectionIntro, DirectorCard, Faq (accordion using details and summary, plus FAQPage JSON-LD), FactStrip, Process ("How we do it" steps with the rope line), Checklist (hairline checklist with brand-blue checks), ProjectsMap, ClientList (collapsible on mobile), SegmentedControl, Rail (the card carousel, see below), MaterialBrands (the material brand logo row).

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

Layout: max width 1280px, side padding 24px mobile and 48px desktop, text column 720px, 8px spacing scale, section padding 64px mobile and 160px desktop (112px on the home page). Heroes and image bands may go full-bleed.

Mobile spacing (under 768px): sections 64px top and bottom; heading to content 32px; where two blocks share a background, at most 40px between them (never double padding); at most 64px between a "View all" or "Explore" link and the next section; no gap over 80px between content blocks on one background (measure at 390px).

Shape: cards and tiles 28px radius on desktop and 20px on mobile, small tiles 18px, inputs 12px, buttons full pill. No shadows at rest except the segmented control and floating buttons.

Buttons: 52px tall in heroes, 48px elsewhere. Under 768px, hero and CtaBand buttons are full width, 46px tall, 16px text, 10px apart. On light: primary ink pill with white text, secondary white pill with a hairline border. On night or photos: primary white pill with ink text, secondary frosted pill (white 12%, 1px white 20% border, blur 16px) with white text.

Links: "Label ›". The underline grows from the left on hover.

Cards: the image fills the card, a night gradient rises from the bottom (80% to transparent at 55%), white title and one-liner sit on it. Never a white text box under an image. Projects without a photo use a typographic card: mist background, large client name, location and scope tags, no fake imagery. Project photo cards (client buildings are bright) add a soft night scrim behind the text block only, rising about 80px above the first line, and show the contract pill ("Contract: monthly") on the photo.

Rail (src/components/Rail.astro, script in src/scripts/rail.ts): the one card carousel, used for the home services rail, the home access section and the home projects on mobile. Native horizontal scrolling with scroll snap (x mandatory, snap-align start, scroll-padding equal to the page gutter), overscroll-behavior-x contain, touch-action pan-x pan-y, hidden scrollbar. Cards are 4:5 with a clear peek of the next one: services 82vw (max 360px) / 44vw / 400px, access 78vw / 44vw / 360px, projects 82vw (max 360px) on mobile and a 2 then 3 column grid from 768px (home projects and "Selected projects" on service pages). Under the rail: a 2px progress bar (ink thumb on light, white on night) and round 48px previous and next buttons (hidden under 768px). Previous and next move one page of fully visible cards with motion's animate() over 650ms and the standard easing, with snap off during the animation. Desktop mouse drag with a short glide that settles on a card; a drag over 6px never opens a link. Left and Right arrow keys move one card. No autoplay, no looping; reduced motion jumps instantly.

Header: frosted white (rgba(255,255,255,0.72), saturate 180%, blur 20px), 72px desktop, 64px mobile (the --header-h variable; sticky offsets, scroll padding, hero spacing and the mega menu all follow it), logo 48px tall desktop and 44px mobile, served as lossless PNG at 1x, 2x and 3x. Under 768px the header shows only the logo and the menu button (at least 44px). On the home page only, it starts transparent over the hero with the white logo and white links, and turns frosted white after 24px of scroll.

Mobile menu sheet: links at 26px in 52px rows; at the bottom "Get a free quote" full width (48px, 16px text), then WhatsApp and Call us side by side in two equal columns (44px, 15px text, with icons). Everything fits on a 375 x 667 screen without scrolling.

Footer on mobile: logo 40px tall; Services and Company are collapsible groups (details and summary, closed by default, hairline rows, chevron); Contact stays open. Desktop footer unchanged.

Mega menu (desktop, 1024px and up): "Services" opens a full-width frosted white panel under the header on hover (150ms intent delay) and on click or Enter. Three columns of service links (thumbnail, name, one-liner), plus a narrow right column with the "Not sure what you need?" WhatsApp prompt. It closes on Escape, on outside click and when the pointer leaves. aria-expanded on the trigger, focus moves into the panel from the keyboard. The header turns frosted white while the panel is open, even over the home hero. Mobile keeps the full-screen sheet, with Services as an expandable group.

Director cards: two variants, and both directors are always identical in size, crop and style.
- Compact (home page): desktop (1024px and up) a 176px-wide 3:4 portrait (18px radius, object-position top) beside the pull quote (clamp(22px, 2vw, 28px), weight 600, ink, balanced, with a hanging opening quote mark), then name (17px semibold) and title (15px graphite). Tablet (768 to 1023px) the same with 144px portraits. Mobile: a byline row (88px-wide 3:4 portrait, 14px radius, name and title beside it), then the quote at 21px. Images at widths 176, 264 and 352 only.
- Default (About): portrait column at most 400px wide on desktop with a wider text column, rows mirrored; on mobile the portrait is 4:5 and at most 300px wide, above the text.

FAQ accordion: hairline rows, question 19px semibold, a plus icon that rotates 45 degrees when open, answer in graphite. Built on details and summary so it works without JavaScript.

Logos: logo.png on light, logo-white.png on night and photos. Material brand logos (Dulux, Conmix, Delta Coatings, UCC) only in the MaterialBrands row: base height 36px on mobile and 44px on desktop, each scaled to the same visual weight, one row on desktop and 2 x 2 on mobile, greyscale at 70% opacity, full colour on hover on desktop. Favicon, apple-touch-icon and manifest icons from app-icon.png (app-icon.svg for the SVG favicon).

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
- Button labels, identical everywhere: "Get a free quote", "Chat on WhatsApp", "Call us". One exception: in the mobile menu sheet the half-width WhatsApp button reads "WhatsApp", because "Chat on WhatsApp" does not fit at half width.
- WhatsApp links always carry a prefilled message with context (see SITE_CONTENT.md).
- Client and project names exactly as written in SITE_CONTENT.md. Names only, never logos.

## Conversion rules
- "Get a free quote" in the header on every page from 768px. Under 768px it sits in the hero and the bottom action bar instead.
- Mobile (under 768px): after the hero scrolls away, a bottom action bar: round call button, WhatsApp button, wide "Get a free quote" button. Blurred white background, iOS safe area respected. Hidden on /quote.
- Desktop: round floating WhatsApp button bottom right with a "Chat on WhatsApp" tooltip. Hidden on /quote.
- Every page except /contact and /quote ends with the CtaBand.
- One track(event, params) helper for quote_start, quote_submit, whatsapp_click, call_click, email_click. It pushes to window.dataLayer and calls fbq when present. Analytics scripts load only when their ID is set in site.ts.

## Quality floor
- Mobile-first. Check 375, 390, 768, 1024 and 1440px. No horizontal scrolling.
- Mobile layout rules: hero buttons stack full width under 768px; fact strips become a 2 x 2 grid; long headings wrap cleanly with text-wrap: balance and never overflow (test the longest service name at 375px); long client lists show 8 items with a "Show all" button; the mobile action bar never covers footer content or form buttons (add bottom padding equal to its height).
- Canonical URLs: the home page canonical is exactly https://www.phoenixdecorator.com/ and no page canonical may end in /index.
- Tap targets at least 44px, WCAG AA contrast, visible focus rings, semantic HTML, one h1 per page, alt text on every image, skip link.
- Lighthouse mobile 90+ in every category. No layout shift from images or fonts.
