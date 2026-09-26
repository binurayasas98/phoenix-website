# Phoenix Decorators: site content and facts

Sources: the company profile (March 2026), the old website phoenixdecorator.com, and the directors. Use this copy exactly. British English. No em dashes or en dashes.

## 0. Values to confirm (keep each one in src/data/site.ts)
- warranty: default "15+ year workmanship guarantee" (short form "15+ year guarantee", number 15). The March 2026 company profile says "over 15 years"; the old website said 25 years. [CONFIRM] Keep the number and labels only in site.ts.
- instagramUrl: empty (hidden) until confirmed. [CONFIRM]
- companyProfileUrl: empty (hidden). [CONFIRM]
- gtmId, ga4Id, metaPixelId: empty.

## 1. Company facts
- Legal name: Phoenix Decorators (Pvt) Ltd. Short name: Phoenix Decorators.
- In business since 2011, more than 14 years.
- More than 350 projects completed, in Colombo and across Sri Lanka.
- Registered with the Construction Industry Development Authority (CIDA, formerly ICTAD) at SP2 level for painting and waterproofing.
- Fully insured against third-party claims on every project.
- Continuous research and development of materials and methods. Product brands shown on the company's previous website: Dulux, Conmix, Delta Coatings.
- Founded by Mr. Christy Marcelline, who co-owns the company with Mr. Ranga Gamachchi. The directors run the company hands-on. A management team of the directors and a dedicated supervisor oversees every project.
- Access methods: rope access, gondola, boom truck and scaffolding.
- Strict safety protocols on every job, with no compromises on safety.
- Brand lines: "Quality that lasts. Service you can trust." and "From heights to foundations, we've got you covered."

## 2. Contact (src/data/site.ts)
- phone: +94 77 036 2222 (tel:+94770362222)
- whatsapp: 94770362222 (links: https://wa.me/94770362222?text=...)
- email: info@phoenixdecorator.com
- headOffice: No. 328, Midland Estate, Welihena South, Kochchikade, Sri Lanka
- commercialOffice: 141, D R Wijewardena Mawatha, Colombo 10, Sri Lanka
- hours: Monday to Saturday, 8.00 am to 5.00 pm
- facebookUrl: https://www.facebook.com/people/Phoenix-Decorators-pvt-ltd/61570341385061/
- linkedinUrl: https://lk.linkedin.com/company/phoenix-decorators-pvt-ltd
- announcement: { enabled: true, text: "Before the monsoon rains, book a waterproofing inspection", link: "/quote?service=waterproofing", expires: "2026-11-30" }. Show it only while enabled and not expired.

## 3. WhatsApp messages (prefilled)
- General: "Hi Phoenix Decorators, I'd like a quote for work on my building."
- Per service: "Hi Phoenix Decorators, I'd like a quote for [service name]."
- Access methods: "Hi Phoenix Decorators, I'd like advice on access for work at height on my building."
- Contact page: "Hi Phoenix Decorators, I have a question about my building."
- Not sure: "Hi Phoenix Decorators, I'm not sure which service I need. Can you help?"

## 4. Leadership
- Mr. Christy Marcelline, Founder and Managing Director. Photo: director-christy.jpg.
  Statement: "Quality isn't just a promise, it's our identity. Every project deserves craftsmanship that lasts. Our work is built on precision, responsibility and a deep commitment to results that add real value to every home and business we serve."
- Mr. Ranga Gamachchi, Director and General Manager. Photo: director-ranga.jpg.
  Statement: "Our mission is simple: deliver work we can be proud of, and service our clients can trust. Every wall we touch should reflect excellence, professionalism and long-term reliability, with consistent quality, transparent communication and genuine respect for our clients' spaces."

## 5. Services (src/data/services.ts)
Waterproofing, painting and glass cleaning are the growth lines. Order and weight follow this list.

### 5.1 Waterproofing (slug: waterproofing)
- Name: Waterproofing. Long name: Waterproofing, damp proofing and roof leak repairs.
- Image: service-waterproofing.jpg. Gallery: gallery-waterproofing-rooftop.jpg, gallery-waterproofing-parapet.jpg, gallery-waterproofing-spray.jpg.
- One-liner: Long-term protection against roof leaks, seepage and dampness.
- Tagline: Stop leaks at the source, for the long term.
- Intro: Leaks and seepage rarely stay small. They damage finishes, electrical systems and structure, and they disrupt the people who use your building. We trace the source, select the right system for each surface and apply it with tested products, following the manufacturer's specifications.
- Scope: Rooftop and concrete slab waterproofing. Sprayed-on polyurea membranes. Damp proofing. Roof leak detection and repair. Terraces, balconies and rooftop flower troughs. Bathrooms and wet areas. Car park ramps and podium decks. External wall waterproofing. Weak concrete rectification.
- Proof: Cinnamon Garden Residence, One Galle Face Residence, Bandaranaike International Airport, Dialog Head Office, Survey Department.
- FAQs:
  - How long does waterproofing last? / It depends on the system and how exposed the surface is. After the inspection we recommend the right system and state the guarantee period in your quotation.
  - Can you work while the building is in use? / Yes. We plan the work in sections and agree timings with you, so occupants and operations are disturbed as little as possible.
  - Do you inspect before quoting? / Yes. A specialist visits the site, identifies the cause of the problem and then prepares a written quotation.

### 5.2 Painting (slug: painting)
- Name: Painting. Long name: Exterior and interior painting.
- Image: service-painting.jpg. Gallery: gallery-painting-interior.jpg, gallery-painting-highrise.jpg.
- One-liner: Exterior and interior painting, with crack repair and high-rise work by rope access.
- Tagline: Durable finishes, inside and out.
- Intro: A lasting finish depends on preparation. We repair cracks and prepare every surface before we paint, choose the right paint system for the exposure, and reach high-rise walls and ventilation shafts by rope access.
- Scope: Exterior painting with crack repair. Interior painting. Colour wash. High-rise and ventilation shaft walls by rope access. Basement and car park painting. Podium and facade painting.
- Proof: Aitken Spence Head Office, HSBC Head Office, NDB Bank, One Galle Face Office Tower and Mall, Access Towers, Kandy City Center.
- FAQs:
  - Do you repair cracks before painting? / Yes. Crack repair and surface preparation are part of every exterior painting job, because they decide how long the finish lasts.
  - How do you paint tall buildings? / By rope access, gondola, boom truck or scaffolding, whichever is safest and most efficient for the building.
  - Which paint do you use? / We recommend a paint system for the surface and its exposure, using trusted brands such as Dulux, and list the exact products in your quotation.

### 5.3 Sealant application (slug: sealant-application)
- Name: Sealant application. Long name: Sealant application and external wall waterproofing.
- Image: service-sealant.jpg.
- One-liner: Facade, glazing and joint sealants that keep water out of modern buildings.
- Tagline: Sealed joints. Dry facades.
- Intro: Failed sealant around glazing and joints is one of the most common causes of water ingress in modern buildings. We remove and replace facade and window sealants, seal movement joints and waterproof external walls, working at height where needed. We also carry out sealing work for industrial clients, protecting critical infrastructure and equipment.
- Scope: Facade and window sealant replacement. Expansion and movement joints. External wall waterproofing. Industrial sealing.
- Proof: World Trade Center, Dialog Head Office, Hemas Hospital Wattala, Hemas Hospital Thalawathugoda, Empire City Residence, Monarch Residence.
- FAQs:
  - How do I know my sealant has failed? / Common signs are cracked, shrunken or detached sealant, stains around windows and damp patches inside after rain. We inspect and advise before quoting.
  - Can you replace sealant on a high-rise facade? / Yes. We work at height by rope access, gondola or boom truck.

### 5.4 Glass and facade cleaning (slug: glass-cleaning)
- Name: Glass and facade cleaning.
- Image: service-glass-cleaning.jpg.
- One-liner: Glass and facade cleaning at any height, one-off or on a regular contract.
- Tagline: Clear glass and clean facades, at any height.
- Intro: Your facade is the first thing tenants, guests and clients see. We clean glass and facades by rope access, gondola or boom truck, as a one-off service or on a monthly, quarterly or annual contract. We also wash roofs, clean construction sites before handover and replace damaged glass.
- Scope: Glass and curtain wall cleaning. Facade washing. Roof washing. Monthly, quarterly and annual contracts. Construction-site cleaning before handover. Glass replacement.
- Proof: Shangri-La Hotel (monthly), World Trade Center (annual), Civil Aviation Authority Katunayake (every three months), Cinnamon Life, Marriott Hotel Weligama, Grand Bell Hotel.
- FAQs:
  - Can you clean on a regular schedule? / Yes. Clients such as Shangri-La, the World Trade Center and the Civil Aviation Authority use us on monthly, quarterly and annual contracts.
  - Do you clean new buildings before handover? / Yes. We clean construction sites so the building is ready for its owner or tenants.
  - Is the work insured? / Yes. Every project is covered by third-party insurance.

### 5.5 Industrial flooring and coatings (slug: industrial-coatings)
- Name: Industrial flooring and coatings. Long name: Pipeline coatings and industrial flooring.
- Image: service-industrial.jpg.
- One-liner: Resin industrial floors and protective pipeline coatings for demanding sites.
- Tagline: Protection for hard-working surfaces.
- Intro: The wrong floor fails early, creates safety risks and disrupts operations. We install resin industrial floors that are durable, hygienic and available with anti-slip finishes, and apply protective coatings that control corrosion on pipelines, including in harsh environments. Success depends on the right material, proper substrate preparation and a clear understanding of site conditions, so that is where we start.
- Scope: Resin and epoxy industrial flooring. Anti-slip finishes. Substrate preparation. Pipeline corrosion-protection coatings. Coatings for harsh and coastal environments.
- FAQs:
  - How do you choose the right floor? / We assess the substrate, the loads, cleaning needs and safety requirements, then recommend a system. We don't choose floors on appearance or price alone.

### 5.6 High-rise maintenance (slug: high-rise-maintenance)
- Name: High-rise building maintenance.
- Image: service-maintenance.jpg. Gallery: gallery-maintenance-gondola.jpg.
- One-liner: Planned maintenance for tall buildings, with the right access for every job.
- Tagline: Planned care for tall buildings.
- Intro: Preventive maintenance keeps a building's surfaces and systems in good order and avoids the cost of emergency repairs. We maintain high-rise, commercial and industrial buildings and choose the safest, most efficient access for each job: rope access, gondola, boom truck or scaffolding.
- Scope: Planned facade maintenance. Crack and plaster repairs. Plumbing repairs and replacement. Access by rope, gondola, boom truck or scaffolding.
- Proof: Aitken Spence (crack repair), NTB Head Office, One Galle Face Office Tower, Marine City Residence, VFS Global.
- FAQs:
  - Do you offer maintenance contracts? / Yes. Tell us about your building and we will propose a maintenance plan that suits its needs and schedule.
  - Can one team handle several trades? / Yes. Waterproofing, painting, sealants, cleaning and repairs can run under one contract, with one team accountable for the result.
  - Which areas do you cover? / We are based in Colombo and work across Sri Lanka, with most of our work in the Western Province.

## 6. Access methods
- Rope access (image: access-rope.jpg): Technicians abseil down the facade from the roof. Fast to set up, minimal disruption, reaches ventilation shafts and tight spaces.
- Gondola (image: access-gondola.jpg): A suspended platform for large, continuous facades and longer jobs.
- Boom truck (image: access-boom-truck.jpg): Quick access to canopies, soffits and low to mid-rise areas, including at night.
- Scaffolding (image: access-scaffolding.jpg): A stable working platform for heavy or detailed work.

## 7. Projects (src/data/projects.ts)
Fields: slug, client, location, sector, services (slugs), scope, contract (optional), image (optional), featured (optional). Projects without an image use the typographic card.
- bia: Bandaranaike International Airport, Katunayake. Sector: Aviation. Services: waterproofing, painting. Scope: Terminal 1 waterproofing and painting, carried out under the supervision of director Ranga Gamachchi. Featured.
- aitken-spence: Aitken Spence Head Office, Vauxhall Street, Colombo 2. Sector: Corporate. Services: painting, waterproofing, high-rise-maintenance. Scope: Exterior painting by rope access, waterproofing and crack repair. Image: project-aitken-spence.jpg. Featured.
- shangri-la: Shangri-La Hotel, Colombo. Sector: Hospitality. Services: glass-cleaning. Scope: Glass washing. Contract: monthly. Featured.
- grand-bell: Grand Bell Hotel, Colombo 3. Sector: Hospitality. Services: glass-cleaning. Scope: Glass washing by rope access. Image: project-grand-bell.jpg. Featured.
- cinnamon-garden: Cinnamon Garden Residence, Ward Place, Colombo 7. Sector: Residential. Services: waterproofing. Scope: Rooftop waterproofing with a sprayed-on polyurea system. Featured.
- one-galle-face: One Galle Face, Colombo 2. Sector: Mixed use. Services: waterproofing, painting, glass-cleaning, high-rise-maintenance. Scope: Car park ramp waterproofing and annual glass washing at the residence, painting and crack repair at the office tower and mall. Featured.
- world-trade-center: World Trade Center, Colombo. Sector: Corporate. Services: glass-cleaning, sealant-application. Scope: Glass washing and sealant application. Contract: annual.
- civil-aviation: Civil Aviation Authority, Katunayake. Sector: Aviation. Services: glass-cleaning. Scope: Glass washing. Contract: every three months.
- monarch: Monarch Residence, Colombo 3. Sector: Residential. Services: waterproofing, painting, sealant-application, glass-cleaning. Scope: Rooftop concrete slab waterproofing and painting, sealant application and glass washing.
- kandy-city-center: Kandy City Center, Kandy. Sector: Retail. Services: painting, glass-cleaning. Scope: Basement car park painting, fifth floor internal painting and roof washing.
- marine-city: Marine City Residence, Dehiwala. Sector: Residential. Services: painting, waterproofing, high-rise-maintenance. Scope: Podium external wall painting, rooftop flower trough waterproofing and external crack repair.
- empire: Empire Residencies, Colombo 2. Sector: Residential. Services: painting, waterproofing, sealant-application, high-rise-maintenance. Scope: External wall crack repair and painting, waterproofing and sealant application.
- survey-department: Survey Department, Narahenpita. Sector: Government. Services: waterproofing. Scope: Weak concrete rectification and waterproofing.
- hemas-hospitals: Hemas Hospitals, Wattala and Thalawathugoda. Sector: Healthcare. Services: waterproofing, painting, sealant-application, high-rise-maintenance. Scope: Waterproofing, painting, sealant application and crack repair.
- marriott-weligama: Marriott Hotel, Weligama. Sector: Hospitality. Services: glass-cleaning. Scope: Glass washing.
- cinnamon-life: Cinnamon Life, Colombo 2. Sector: Mixed use. Services: glass-cleaning. Scope: Glass washing.

## 8. Client references by service (src/data/clients.ts)
Show as clean lists with hairlines, grouped by service. Names only, no logos.
- Waterproofing: Monarch Residencies, Colombo 3. DHPL Building, Nawam Mawatha. Empire Residencies, Colombo 2. Dialog Head Office, Union Place. Hemas Hospital, Wattala. Hemas Hospital, Thalawathugoda. Aitken Spence Head Office, Colombo 2. Browns Capital Building, Colombo 8. Suncity Residencies, Malabe. Colombo Sea Port, Rapiscan Building. Luminex (Pvt) Ltd. One Galle Face Residence, Colombo 2. Cinnamon Garden Residence, Colombo 7. Survey Department, Narahenpita. Marine City Residence, Dehiwala.
- Painting: Aitken Spence Head Office, Colombo 2. NDB Bank, Dharmapala Mawatha. Browns Capital Building, Colombo 8. Suncity Residencies, Malabe. Altair Residencies, Colombo 2. Kandy City Center. Sethma Hospital, Gampaha. Dialog Head Office. Hakmana Primary School (with MAGA Engineering). People's Leasing Building, Colombo 5. Hemas Hospital, Wattala. VFS Global, Dematagoda. HSBC Head Office, Colombo 1. One Galle Face Office Tower and Mall. Monarch Residence, Colombo 3. Access West Port Terminal, Colombo. Access Towers, Colombo 2. Marine City Residence, Dehiwala. Airport Garden Hotel, Seeduwa. District Secretariat Office, Galle. Summer Season Hotel, Mirissa. Empire Residence, Colombo 2.
- Glass and facade cleaning: World Trade Center (annual). 7 Sense, Colombo 7 (annual). Civil Aviation Authority, Katunayake (every three months). Western Province Building, Battaramulla (annual). Shangri-La Hotel (monthly). One Galle Face Residence (annual). Siyapatha Building, D S Senanayake Mawatha. ICONIC Building, Rajagiriya. Kandy City Center (roof washing). RIU Hotel, Ahungalla. Ceylinco Life, Colombo 3. HSBC, Colombo 1. Browns Capital, D S Senanayake Mawatha. Marriott Hotel, Weligama. Grand Bell Hotel, Colombo 3. BMS Building, Colombo 6. Monarch Residence, Colombo 3. Access Tower 1, Colombo 2. Cinnamon Life, Colombo 2. DHPL Building, Nawam Mawatha. M2M, Colombo 2.
- Glass replacement: Siyapatha Building, D S Senanayake Mawatha. Sampath Bank, Nawam Mawatha.
- Sealant application: Monarch Residence, Galle Road. Empire City Residence, Braybrooke Place, Colombo 2. Hemas Hospital, Wattala. Hemas Hospital, Thalawathugoda. Browns Capital, D S Senanayake Mawatha. Hemas Pharmaceuticals, Colombo 3. World Trade Center. Dialog Head Office, Union Place.
- Crack repair: Empire Residencies, Colombo 2. Aitken Spence, Vauxhall Street. 77th on Fourth Residence, Old Nawala Road. VFS Global, Dematagoda. Hemas Hospital, Thalawathugoda. NTB Head Office, Nawam Mawatha. Marine City Residence, Dehiwala. One Galle Face Office Tower, Colombo 2.
- Also named on the previous website: Havelock City, Colombo.
- Home "trusted by" names: Bandaranaike International Airport, Shangri-La, World Trade Center, One Galle Face, Cinnamon Life, HSBC, Dialog, NDB Bank, Hemas Hospitals, Aitken Spence, Marriott Weligama, Civil Aviation Authority.

## 9. Page copy

### Header and footer
- Nav: Services, Projects, About, Contact. Button: Get a free quote.
- Footer description: "Quality that lasts. Service you can trust. Waterproofing, painting, sealants, glass cleaning and building maintenance specialists since 2011."
- Footer columns: Services (all six), Company (About, Projects, Contact, Privacy), Contact (phone, WhatsApp, email, both offices, hours).
- Footer fine print: "© [current year] Phoenix Decorators (Pvt) Ltd. All rights reserved." and "CIDA SP2 registered for painting and waterproofing."

### CtaBand (night, all pages except /contact and /quote)
- Headline: Talk to a specialist today.
- Subline: Book a free consultation and receive a clear, written quotation, with no obligation.
- Buttons: Get a free quote. Chat on WhatsApp. Link: Or call +94 77 036 2222.

### Home
1. Hero (full-screen photo: hero.jpg)
   - Announcement pill (when active).
   - h1: Waterproofing and facade specialists. (Desktop lines: "Waterproofing and" / "facade specialists.")
   - Subline: Waterproofing, painting, sealants and glass cleaning for commercial and residential buildings, at any height. Since 2011.
   - Buttons: Get a free quote. Chat on WhatsApp.
   - Fact strip: CIDA SP2 registered. 350+ projects. Fully insured. [warranty short label from site.ts].
2. Trusted by: heading "Trusted on landmark sites." then the home "trusted by" names as a calm typographic row that wraps.
3. Intro statement (scroll highlight): "Since 2011, Phoenix Decorators has completed more than 350 projects for hotels, hospitals, banks, offices, residences and the country's main international airport. One specialist team takes responsibility from the first inspection to the final handover."
4. Services: heading "Six specialist services." second tone "One accountable team." Card rail of the six services (image, name, one-liner, round "+" linking to the service page).
5. Access (night): heading "Any height." second tone "The right access." Body: "We choose the safest, most efficient way to reach every surface, with strict safety protocols on every job." Four tiles from section 6. Link: "Ask about access for your building ›" (WhatsApp, access message).
6. Projects: heading "Proven on demanding sites." second tone "Including Bandaranaike International Airport, Shangri-La and One Galle Face." Show the six featured projects (photo cards where there is an image, typographic cards otherwise). Link: View all projects ›
7. Commitments: heading "Quality that lasts." second tone "Service you can trust."
   - Big numbers: "350+" with "Projects completed since 2011". "SP2" with "CIDA grade for painting and waterproofing". [warranty number]+ with "Year workmanship guarantee" (from site.ts).
   - Row: "Fully insured against third-party claims". "Tested products from brands including Dulux, Conmix and Delta Coatings". "Directors and a dedicated supervisor oversee every project".
   - Then team.jpg as a wide tile with the caption "Our rope access team."
8. Director quote: Christy's statement (shortened to its first two sentences) with his name and title, small portrait.
9. Sectors: heading "Sectors we serve." subline "From hotels and hospitals to airports, factories and homes." Items: Hotels and resorts. Hospitals and healthcare. Banks and corporate offices. Residential towers and apartments. Government and public buildings. Airports and ports. Factories and industrial sites. Facility management companies.
10. Process: heading "How we work." second tone "A clear process, documented at every step."
    1 Share your requirement: Send us the details and a few photos through the quote form or on WhatsApp.
    2 Site assessment: A specialist inspects the area, identifies the cause and selects the right system.
    3 Written quotation: Scope, materials, timeline and guarantee, agreed in writing before work starts.
    4 Supervised execution: We follow manufacturer specifications and industry standards, check quality at every stage and hand over a clean site.
11. CtaBand.

### Services index (/services)
- h1: Our services.
- Subline: Six specialist services for commercial, industrial and residential buildings. One team and one contract for every trade.
- One chapter per service: image, name, tagline, three scope items, "Learn more ›", "Get a quote for this service ›".
- Band (night): "Not sure what your building needs?" / "Send us a few photos on WhatsApp and a specialist will recommend the right solution." Button: Chat on WhatsApp (not-sure message).

### Service page template (/services/[slug])
- Photo hero with the service image, service name as h1, tagline, buttons (quote with ?service=[slug], WhatsApp with the service message).
- Intro as a lead paragraph. "Scope of work" list. "Trusted by" with the service's proof clients. Gallery if the service has one.
- Guarantee strip: "[warranty label from site.ts]" with "Stated in your quotation, based on the system installed." and "Fully insured" with "Every project is covered by third-party insurance."
- "How we work" (process). "Frequently asked questions". "Explore other services".

### Projects (/projects)
- h1: Our projects.
- Subline: More than 350 projects since 2011, for hotels, hospitals, banks, offices, residences and public buildings across Sri Lanka.
- Filter (segmented control, synced to ?service=): All, Waterproofing, Painting, Sealants, Glass cleaning, Industrial, Maintenance.
- All projects from section 7 as cards (client, location, sector, scope, contract, service tags).
- Callout: "Trusted for ongoing contracts." / "Monthly glass washing at Shangri-La, quarterly at the Civil Aviation Authority and annual at the World Trade Center."
- "Client references": the section 8 lists grouped by service, in columns with hairlines.

### About (/about)
- h1: Built on quality since 2011.
- Subline: Phoenix Decorators (Pvt) Ltd is a Colombo-based specialist in waterproofing, painting, sealants, glass cleaning and building maintenance for commercial, industrial and residential clients.
- Story: "Phoenix Decorators was founded by Christy Marcelline, who now runs the company with his co-owner, Ranga Gamachchi. The directors stay hands-on in the daily running of the business, and together with a dedicated supervisor they make sure every project gets the attention it needs." / "Since 2011 we have completed more than 350 projects, from private homes to landmark hotels, banks, hospitals and Bandaranaike International Airport. Continuous research into the materials and methods we use lets us stand behind our work with a written workmanship guarantee, and every project is covered by third-party insurance."
- Leadership: both directors with photos, titles and statements (section 4).
- Vision and mission: "Our vision" / "To be the preferred service provider in the commercial sector, delivering work that exceeds expectations while remaining competitively priced." "Our mission" / "Strong leadership, exceptional customer service and continuous improvement, backed by ongoing research into the best materials and methods."
- Values: "Right first time": Efficient procedures, so clients get the highest quality in the shortest possible time. "Respect": We listen, meet expectations and build long-term relationships. "Integrity": Honest, ethical business in everything we do. "Innovation": We keep improving our methods and materials. "Our people": Skills development and knowledge transfer for every team member.
- Quality and safety (night): "CIDA SP2 registered for painting and waterproofing." "Fully insured against third-party claims." "No compromises on safety: strict protocols on every job, for our people and the places we work." Image: brand-lotus-tower.jpg.
- Community: "Giving back." / "We support young people from disadvantaged backgrounds through skills and employment, and we take part in community work, including solid waste management at the Exhibition of the Sacred Tooth Relic in Kandy, the renovation of Mahawalawa Temple in Dadalla and a donation of drinking water to the Sri Dalada Maligawa."
- CtaBand.

### Contact (/contact)
- h1: How can we help?
- Subline: For the fastest response, message us on WhatsApp. For pricing, get a free quote. It takes about a minute.
- Tiles: WhatsApp (caption "Fastest response"), Call (caption "Speak to our team"), Email (caption "For documents and tenders").
- Offices: "Head office" with the head office address. "Commercial office" with the commercial office address. Hours under both: Monday to Saturday, 8.00 am to 5.00 pm. "Get directions ›" for each. A click-to-load map for the commercial office.
- Band: "Need a price for your project?" Button: Get a free quote.

### Quote (/quote)
- h1: Request a free quote. Top line: "Takes about a minute." Link: "Prefer to chat? Open WhatsApp ›"
- Step 1 "What do you need?": services (multi-select, preselect from ?service=): Waterproofing, Painting, Sealant application, Glass and facade cleaning, Industrial flooring and coatings, High-rise maintenance, Not sure yet. Property type: Office or commercial, Hotel, Hospital, Bank, Factory or industrial, Apartment or residential tower, House, Government or public, Other.
- Step 2 "About your building": location (placeholder "For example, Colombo 03"), floors (1 to 3, 4 to 10, 11 to 20, More than 20), timeline (As soon as possible, Within a month, 1 to 3 months, Just planning), details (optional, placeholder "Describe the problem or the work. You can send photos on WhatsApp after this.").
- Step 3 "Your details": name, phone, email (optional), company (optional), role (Facility manager, Engineer, Architect, Owner, Other), preferred contact (WhatsApp, Call me back, Email), privacy note linking to /privacy.
- Phone validation error: "Enter a phone number like 077 123 4567." Accept Sri Lankan numbers with or without spaces or +94, and international numbers starting with +.
- Button: Send request. Sending: "Sending...". Error: "We couldn't send your request. Check your connection and try again, or send it on WhatsApp."
- Success: h1 "Thank you. Your request has been received." Body: "Your reference is [reference]. A specialist will contact you shortly." Buttons: Continue on WhatsApp (prefilled summary with the reference), Back to home.
- Reference format: "PD-" plus 6 characters from A to Z and 2 to 9, without 0, O, 1 or I.

### Privacy (/privacy)
Plain-language notice in six short sections: what we collect (details sent through our forms or WhatsApp), why (to reply and prepare quotations), who sees it (Phoenix Decorators staff only, never sold), how long we keep it (only as long as needed for your enquiry and our records), your choices (ask us to update or delete your details), contact (info@phoenixdecorator.com). "Last updated" with the build date.

### 404
- h1: We couldn't find that page. Body: It may have moved. Try one of these instead. Links: Home, Services, Projects, Get a free quote.

## 10. SEO
- Home title: Waterproofing, Painting and Glass Cleaning in Colombo | Phoenix Decorators
- Home description: Waterproofing, painting, sealants and glass cleaning for commercial and residential buildings. CIDA SP2 registered, fully insured, 350+ projects since 2011.
- Service titles: [Service name] in Colombo and across Sri Lanka | Phoenix Decorators
- Other pages: [Page] | Phoenix Decorators. Descriptions under 155 characters, written for people.

## 11. Redirects from the old website (301)
/index.php to /. /About and /about/ to /about. /Services to /services. /Projects to /projects. /project/* to /projects. /Contact and /contact/* to /contact.
