# Phoenix Decorators: site content and facts (version 2)

Sources: the company profile (March 2026), the previous website phoenixdecorator.com, and the directors. This file replaces version 1. Use this copy exactly. British English. No em dashes or en dashes.

Structure goal: an international-standard B2B contractor website. Every page answers four questions for a facility manager, engineer or building owner: what do you do, can I trust you, have you done it for someone like me, and how do I start.

## 0. Values to confirm (keep each one in src/data/site.ts)
- warranty: "15+ year workmanship guarantee", short form "15+ year guarantee", number 15. The March 2026 company profile says "over 15 years"; the previous website said 25 years. [CONFIRM] Keep the number and labels only in site.ts.
- Director titles and the spelling "Gamachchi". [CONFIRM]
- Director statements in section 4 are their own words, lightly edited for grammar. [CONFIRM] with each director before launch.
- instagramUrl: empty (hidden) until confirmed. [CONFIRM]
- companyProfileUrl: empty. While empty, show "Request our company profile" (WhatsApp and email links from section 3) instead of a download button.
- gtmId, ga4Id, metaPixelId: empty.

## 1. Company facts
- Legal name: Phoenix Decorators (Pvt) Ltd. Short name: Phoenix Decorators.
- Founded in 2011. More than 350 projects completed, in Colombo and across Sri Lanka.
- Registered with the Construction Industry Development Authority (CIDA, formerly ICTAD) at SP2 level for painting and waterproofing.
- Fully insured against third-party claims on every project.
- Continuous research and development of the materials and methods we use. Product brands we work with: Dulux, Conmix, Delta Coatings.
- Founded by Mr. Christy Marcelline, who co-owns the company with Mr. Ranga Gamachchi. The directors are hands-on in the daily running of the company. A technically qualified management team of the directors and a dedicated supervisor oversees every project.
- Access methods: rope access, gondola, boom truck and scaffolding.
- No compromises on safety: strict safety protocols on every job, for our people and the places we work.
- Commitment: every project on time, on budget and to the highest standards.
- Two offices: a head office in Kochchikade and a commercial office in Colombo 10.
- Brand lines: "Quality that lasts. Service you can trust." / "From heights to foundations, we've got you covered." / "Mastery in every measure." / "Fully insured. Fully committed. Fully professional." / "We don't just provide services. We build long-term relationships based on trust, quality and performance."

## 2. Contact (src/data/site.ts)
- phone: +94 77 036 2222 (tel:+94770362222)
- whatsapp: 94770362222 (links: https://wa.me/94770362222?text=...)
- email: info@phoenixdecorator.com
- headOffice: No. 328, Midland Estate, Welihena South, Kochchikade, Sri Lanka
- commercialOffice: 141, D R Wijewardena Mawatha, Colombo 10, Sri Lanka
- hours: Monday to Saturday, 8.00 am to 5.00 pm
- hoursNote: Closed on major public holidays.
- urgentLine: Urgent leak? Call or WhatsApp +94 77 036 2222.
- facebookUrl: https://www.facebook.com/people/Phoenix-Decorators-pvt-ltd/61570341385061/
- linkedinUrl: https://lk.linkedin.com/company/phoenix-decorators-pvt-ltd
- announcement: { enabled: true, text: "Book a pre-monsoon waterproofing inspection", link: "/quote?service=waterproofing", expires: "2026-11-30" }. Show it only while enabled and not expired.

## 3. WhatsApp and email messages (prefilled)
- General: "Hi Phoenix Decorators, I'd like a quote for work on my building."
- Per service: "Hi Phoenix Decorators, I'd like a quote for [service name]."
- Access methods: "Hi Phoenix Decorators, I'd like advice on access for work at height on my building."
- Contact page: "Hi Phoenix Decorators, I have a question about my building."
- Not sure: "Hi Phoenix Decorators, I'm not sure which service I need. Can you help?"
- Urgent: "Hi Phoenix Decorators, I have an urgent leak and need help."
- Company profile (WhatsApp): "Hi Phoenix Decorators, please send me your company profile."
- Company profile (email): mailto:info@phoenixdecorator.com with subject "Company profile request" and body "Hello, please send me your company profile and registration details. Thank you."

## 4. Leadership (src/data/directors.ts)
Show both directors wherever leadership appears. Always use their photos.

### Mr. Christy Marcelline
- Title: Founder and Managing Director. Photo: director-christy.jpg.
- Pull quote: "Quality isn't just a promise. It's our identity."
- Full statement: "At Phoenix Decorators, we are committed to delivering reliable, high-quality solutions that protect buildings and extend their life. With a strong focus on technical excellence, quality materials and professional workmanship, we meet the specific needs of every project. Our goal is to build lasting relationships with our clients through trust, performance and consistent results."

### Mr. Ranga Gamachchi
- Title: Director and General Manager. Photo: director-ranga.jpg.
- Pull quote: "Our mission is simple: deliver work we can be proud of, and service our clients can trust."
- Full statement: "We specialise in technically sound, durable solutions tailored to the demands of modern construction. Our work is guided by detailed site assessments, correct system selection and strict compliance with manufacturer specifications and industry standards. By combining skilled workmanship, proven materials and quality control at every stage, we ensure long-term performance and reliability in every project."
- Fact: Ranga personally supervised the waterproofing and painting of Terminal 1 at Bandaranaike International Airport.

## 5. Services (src/data/services.ts)
Waterproofing, painting and glass cleaning are the growth lines. Order and visual weight follow this list. Each service page has: hero, proof line, intro, at-a-glance facts, scope of work, expert guide, selected projects, gallery (if any), guarantee strip, process, FAQs, other services.

At-a-glance facts for every service page (four items): "[warranty short label]" / "Fully insured" / "Directors and a dedicated supervisor on every project" / the service's access line (below).

### 5.1 Waterproofing (slug: waterproofing)
- Name: Waterproofing. Long name: Waterproofing, damp proofing and roof leak repairs.
- Image: service-waterproofing.jpg. Gallery: gallery-waterproofing-rooftop.jpg, gallery-waterproofing-parapet.jpg, gallery-waterproofing-spray.jpg.
- One-liner: Long-term protection against roof leaks, seepage and dampness.
- Tagline: Stop leaks at the source, for the long term.
- Proof line: Trusted at Bandaranaike International Airport, One Galle Face Residence and Cinnamon Garden Residence.
- Access line: Rooftops, podiums and wet areas, with rope access for external walls.
- Intro: Leaks and seepage rarely stay small. They damage finishes, electrical systems and structure, and they disrupt the people who use your building. We trace the true source, select the right system for each surface and apply it with tested products, following the manufacturer's specifications.
- Scope: Rooftop and concrete slab waterproofing. Sprayed-on polyurea membranes. Damp proofing. Roof leak detection and repair. Terraces, balconies and rooftop flower troughs. Bathrooms and wet areas. Swimming pools. Car park ramps and podium decks. External wall waterproofing. Weak concrete rectification.
- Expert guide, heading "Why leaks happen, and how we stop them":
  - "A leak needs three things: water, a gap and a force that drives the water through, such as gravity, wind or pressure. Patching the visible damp spot rarely works, because the water often enters somewhere else."
  - "We find the real entry point, choose a barrier system that suits the surface and its exposure, and detail every junction, drain and upstand so the whole area is sealed, not just the visible patch."
  - "The best time to waterproof is in dry weather, before the monsoon arrives."
- Proof clients: Bandaranaike International Airport, One Galle Face Residence, Cinnamon Garden Residence, Dialog Head Office, Survey Department, Monarch Residence, Hemas Hospitals.
- FAQs:
  - How long does waterproofing last? / It depends on the system and how exposed the surface is. After the inspection we recommend the right system and state the guarantee period in your quotation.
  - Can you work while the building is in use? / Yes. We plan the work in sections and agree timings with you, so occupants and operations are disturbed as little as possible.
  - Do you inspect before quoting? / Yes. A specialist visits the site, identifies the cause of the problem and then prepares a written quotation.
  - When is the best time to waterproof? / In dry weather, before the monsoon. If you already have a leak, contact us straight away and we will advise on a temporary and a permanent solution.

### 5.2 Painting (slug: painting)
- Name: Painting. Long name: Exterior and interior painting.
- Image: service-painting.jpg. Gallery: gallery-painting-interior.jpg, gallery-painting-highrise.jpg.
- One-liner: Exterior and interior painting, with crack repair and high-rise work by rope access.
- Tagline: Durable finishes, inside and out.
- Proof line: Trusted at Aitken Spence, HSBC, NDB Bank and One Galle Face.
- Access line: High-rise facades and ventilation shafts by rope access, gondola or boom truck.
- Intro: A lasting finish depends on preparation. We repair cracks and prepare every surface before we paint, choose the right paint system for the exposure, and reach high-rise walls and ventilation shafts by rope access.
- Scope: Exterior painting with crack repair. Interior painting. Colour wash. High-rise and ventilation shaft walls by rope access. Basement and car park painting. Podium and facade painting.
- Expert guide, heading "The right paint for the right place":
  - "Interior paints use harder resins that resist stains and clean easily. Exterior paints use more flexible resins that move with heat, rain and sun without cracking."
  - "Exterior paint doesn't belong indoors, because it releases stronger fumes as it cures. Choosing the correct system, and preparing the surface properly, decides how long the finish lasts."
- Proof clients: Aitken Spence Head Office, HSBC Head Office, NDB Bank, One Galle Face Office Tower and Mall, Access Towers, Kandy City Center, Marine City Residence.
- FAQs:
  - Do you repair cracks before painting? / Yes. Crack repair and surface preparation are part of every exterior painting job, because they decide how long the finish lasts.
  - How do you paint tall buildings? / By rope access, gondola, boom truck or scaffolding, whichever is safest and most efficient for the building.
  - Which paint do you use? / We recommend a paint system for the surface and its exposure, using trusted brands such as Dulux, and list the exact products in your quotation.

### 5.3 Sealant application (slug: sealant-application)
- Name: Sealant application. Long name: Sealant application and external wall waterproofing.
- Image: service-sealant.jpg.
- One-liner: Facade, glazing and joint sealants that keep water out of modern buildings.
- Tagline: Sealed joints. Dry facades.
- Proof line: Trusted at the World Trade Center, Dialog Head Office and Hemas Hospitals.
- Access line: Glazing and joints at any height, by rope access, gondola or boom truck.
- Intro: Failed sealant around glazing and joints is one of the most common causes of water ingress in modern buildings. We remove and replace facade and window sealants, seal movement joints and waterproof external walls, working at height where needed.
- Scope: Facade and window sealant replacement. Expansion and movement joints. External wall waterproofing. Industrial sealing.
- Expert guide, heading "Signs your sealant has failed":
  - "Cracked, shrunken or detached sealant, stains around windows and damp patches inside after rain are the usual signs."
  - "For industrial clients, we seal critical infrastructure and equipment with high-quality sealants that resist heat, moisture and chemicals, which protects the asset and extends its working life."
- Proof clients: World Trade Center, Dialog Head Office, Hemas Hospital Wattala, Hemas Hospital Thalawathugoda, Empire City Residence, Monarch Residence, Browns Capital.
- FAQs:
  - How do I know my sealant has failed? / Common signs are cracked, shrunken or detached sealant, stains around windows and damp patches inside after rain. We inspect and advise before quoting.
  - Can you replace sealant on a high-rise facade? / Yes. We work at height by rope access, gondola or boom truck.

### 5.4 Glass and facade cleaning (slug: glass-cleaning)
- Name: Glass and facade cleaning.
- Image: service-glass-cleaning.jpg.
- One-liner: Glass and facade cleaning at any height, one-off or on a regular contract.
- Tagline: Clear glass and clean facades, at any height.
- Proof line: Monthly at Shangri-La, quarterly at the Civil Aviation Authority, annually at the World Trade Center.
- Access line: Any height, by rope access, gondola or boom truck.
- Intro: Your facade is the first thing tenants, guests and clients see. We clean glass and facades by rope access, gondola or boom truck, as a one-off service or on a monthly, quarterly or annual contract. We also wash roofs, clean construction sites before handover and replace damaged glass.
- Scope: Glass and curtain wall cleaning. Facade washing. Roof washing. Monthly, quarterly and annual contracts. Construction-site cleaning before handover. Glass replacement.
- Expert guide, heading "What a proper clean involves":
  - "The right cleaning solution for the glass and frame, applied evenly. Consistent, lint-free strokes, extra attention to stubborn marks, then a polished finish."
  - "The result is more natural light inside and a better first impression outside. On a regular contract, your facade stays that way all year."
- Proof clients: Shangri-La Hotel, World Trade Center, Civil Aviation Authority, Cinnamon Life, Cinnamon Suites and Residence, Marriott Hotel Weligama, Grand Bell Hotel, ICONIC Building.
- FAQs:
  - Can you clean on a regular schedule? / Yes. Clients such as Shangri-La, the World Trade Center and the Civil Aviation Authority use us on monthly, quarterly and annual contracts.
  - Do you clean new buildings before handover? / Yes. We clean construction sites so the building is ready for its owner or tenants.
  - Is the work insured? / Yes. Every project is covered by third-party insurance.

### 5.5 Industrial flooring and coatings (slug: industrial-coatings)
- Name: Industrial flooring and coatings. Long name: Pipeline coatings and industrial flooring.
- Image: service-industrial.jpg.
- One-liner: Resin industrial floors and protective pipeline coatings for demanding sites.
- Tagline: Protection for hard-working surfaces.
- Proof line: For factories, warehouses, ports and industrial plants.
- Access line: Planned around your operations to keep downtime low.
- Intro: The wrong floor fails early, creates safety risks and disrupts operations. We install resin industrial floors that are durable, hygienic and available with anti-slip finishes, and apply protective coatings that control corrosion on pipelines, including in harsh environments.
- Scope: Resin and epoxy industrial flooring. Anti-slip finishes. Substrate preparation. Pipeline corrosion-protection coatings. Coatings for harsh and coastal environments.
- Expert guide, heading "Choosing a floor or coating that lasts":
  - "Floors fail early when they are chosen on appearance or price alone. Success depends on the right material, proper substrate preparation and a clear understanding of loads, cleaning and safety needs, so that is where we start."
  - "A good pipeline coating controls corrosion, even in seawater and other harsh environments. A smoother coated surface can also improve flow, make inspections faster and reduce long-term maintenance."
- Proof clients: none listed. Hide the proof block for this service.
- FAQs:
  - How do you choose the right floor? / We assess the substrate, the loads, cleaning needs and safety requirements, then recommend a system. We don't choose floors on appearance or price alone.
  - Can you work around our operations? / Yes. We plan the work in phases with you so production and access continue where possible.

### 5.6 High-rise maintenance (slug: high-rise-maintenance)
- Name: High-rise building maintenance.
- Image: service-maintenance.jpg. Gallery: gallery-maintenance-gondola.jpg.
- One-liner: Planned maintenance for tall buildings, with the right access for every job.
- Tagline: Planned care for tall buildings.
- Proof line: Trusted at One Galle Face, NTB Head Office and Marine City Residence.
- Access line: Rope access, gondola, boom truck or scaffolding, chosen for each job.
- Intro: Preventive maintenance keeps a building's surfaces and systems in good order and avoids the cost of emergency repairs. We maintain high-rise, commercial and industrial buildings and choose the safest, most efficient access for each job.
- Scope: Planned facade maintenance. Crack and plaster repairs. Plumbing repairs and replacement. Construction-site cleaning before handover. Access by rope, gondola, boom truck or scaffolding.
- Expert guide, heading "Preventive, not reactive":
  - "Reactive maintenance waits for something to fail. Preventive maintenance finds small defects early, while they are still quick and inexpensive to fix."
  - "The right access depends on the building, the work and the time available. Rope access is fast to set up, a gondola suits long continuous facades, a boom truck reaches canopies and soffits, and scaffolding gives a stable platform for heavy or detailed work."
- Proof clients: Aitken Spence (crack repair), NTB Head Office, One Galle Face Office Tower, Marine City Residence, VFS Global, Empire Residencies.
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
Fields: slug, client, location, sector (one of the section 8 slugs), services (slugs), scope, contract (optional), image (optional), featured (optional). Projects without an image use the typographic card. Keep every existing project and add the new ones marked NEW.
- bia: Bandaranaike International Airport, Katunayake. Sector: public. Services: waterproofing, painting. Scope: Terminal 1 waterproofing and painting, supervised by director Ranga Gamachchi. Featured.
- aitken-spence: Aitken Spence Head Office, Vauxhall Street, Colombo 2. Sector: corporate. Services: painting, waterproofing, high-rise-maintenance. Scope: Exterior painting by rope access, waterproofing and crack repair. Image: project-aitken-spence.jpg. Featured.
- shangri-la: Shangri-La Hotel, Colombo. Sector: hospitality. Services: glass-cleaning. Scope: Glass washing. Contract: monthly. Featured.
- grand-bell: Grand Bell Hotel, Colombo 3. Sector: hospitality. Services: glass-cleaning. Scope: Glass washing by rope access. Image: project-grand-bell.jpg. Featured.
- cinnamon-garden: Cinnamon Garden Residence, Ward Place, Colombo 7. Sector: residential. Services: waterproofing. Scope: Rooftop waterproofing with a sprayed-on polyurea system. Featured.
- one-galle-face: One Galle Face, Colombo 2. Sector: residential. Services: waterproofing, painting, glass-cleaning, high-rise-maintenance. Scope: Car park ramp waterproofing and annual glass washing at the residence, painting and crack repair at the office tower and mall. Featured.
- world-trade-center: World Trade Center, Colombo. Sector: corporate. Services: glass-cleaning, sealant-application. Scope: Glass washing and sealant application. Contract: annual.
- civil-aviation: Civil Aviation Authority, Katunayake. Sector: public. Services: glass-cleaning. Scope: Glass washing. Contract: every three months.
- monarch: Monarch Residence, Colombo 3. Sector: residential. Services: waterproofing, painting, sealant-application, glass-cleaning. Scope: Rooftop concrete slab waterproofing and painting, sealant application and glass washing.
- kandy-city-center: Kandy City Center, Kandy. Sector: retail-industrial. Services: painting, glass-cleaning. Scope: Basement car park painting, fifth floor internal painting and roof washing.
- marine-city: Marine City Residence, Dehiwala. Sector: residential. Services: painting, waterproofing, high-rise-maintenance. Scope: Podium external wall painting, rooftop flower trough waterproofing and external crack repair.
- empire: Empire Residencies, Colombo 2. Sector: residential. Services: painting, waterproofing, sealant-application, high-rise-maintenance. Scope: External wall crack repair and painting, waterproofing and sealant application.
- survey-department: Survey Department, Narahenpita. Sector: public. Services: waterproofing. Scope: Weak concrete rectification and waterproofing.
- hemas-hospitals: Hemas Hospitals, Wattala and Thalawathugoda. Sector: healthcare. Services: waterproofing, painting, sealant-application, high-rise-maintenance. Scope: Waterproofing, painting, sealant application and crack repair.
- marriott-weligama: Marriott Hotel, Weligama. Sector: hospitality. Services: glass-cleaning. Scope: Glass washing.
- cinnamon-life: Cinnamon Life, Colombo 2. Sector: hospitality. Services: glass-cleaning. Scope: Glass washing.
- NEW cinnamon-suites: Cinnamon Suites and Residence, Colombo. Sector: residential. Services: glass-cleaning. Scope: External facade cleaning.
- NEW dialog: Dialog Head Office, Union Place, Colombo 2. Sector: corporate. Services: waterproofing, painting, sealant-application. Scope: Waterproofing including the new building rooftop, painting and sealant application.
- NEW hsbc: HSBC Head Office, Colombo 1. Sector: corporate. Services: painting, glass-cleaning. Scope: Painting and glass washing.
- NEW west-port-terminal: Access West Port Terminal, Colombo Port. Sector: retail-industrial. Services: painting. Scope: Painting of the terminal buildings.

## 8. Sectors (src/data/sectors.ts, page /sectors with one section per sector, anchor = slug)
Each sector: name, intro, the services most used (slugs), and client names (from sections 7 and 9).
- hospitality: "Hotels and resorts". Intro: "Guests notice everything. We keep glass, facades and roofs in top condition and plan every job around occupancy, so guests are disturbed as little as possible." Services: glass-cleaning, painting, waterproofing, sealant-application. Clients: Shangri-La Hotel, Cinnamon Life, Marriott Hotel Weligama, Grand Bell Hotel, RIU Hotel Ahungalla, Airport Garden Hotel Seeduwa, Summer Season Hotel Mirissa.
- healthcare: "Hospitals and healthcare". Intro: "Hospitals can't close for maintenance. We work in planned sections, keep work areas tidy and stop the leaks that disrupt care." Services: waterproofing, painting, sealant-application, high-rise-maintenance. Clients: Hemas Hospital Wattala, Hemas Hospital Thalawathugoda, Sethma Hospital Gampaha, Hemas Pharmaceuticals.
- corporate: "Corporate offices and banks". Intro: "Your building represents your brand. We keep head offices and bank branches weathertight, freshly finished and clean, with work scheduled around business hours where needed." Services: painting, glass-cleaning, sealant-application, waterproofing. Clients: Aitken Spence Head Office, HSBC Head Office, NDB Bank, Dialog Head Office, NTB Head Office, World Trade Center, Ceylinco Life, Sampath Bank, People's Leasing, Browns Capital, Siyapatha Building, Access Towers, VFS Global.
- residential: "Residential towers and apartments". Intro: "Management corporations and residents need work that is safe, quiet and well organised. We protect towers from the roof down and keep facades looking their best." Services: waterproofing, painting, glass-cleaning, high-rise-maintenance. Clients: One Galle Face Residence, Cinnamon Garden Residence, Cinnamon Suites and Residence, Monarch Residence, Empire Residencies, Marine City Residence, Altair Residencies, Suncity Residencies, 77th on Fourth Residence, 7 Sense, Havelock City.
- public: "Airports and public buildings". Intro: "Public buildings run to strict standards and schedules. We have delivered for the country's main international airport, the aviation authority and government offices." Services: waterproofing, painting, glass-cleaning. Clients: Bandaranaike International Airport, Civil Aviation Authority, Survey Department, District Secretariat Office Galle, Western Province Building Battaramulla, Hakmana Primary School.
- retail-industrial: "Retail, ports and industry". Intro: "Malls, ports and industrial sites need tough finishes and minimal downtime. We plan work around operations and choose systems built for heavy use." Services: industrial-coatings, painting, waterproofing, glass-cleaning. Clients: Kandy City Center, One Galle Face Mall, Access West Port Terminal, Colombo Sea Port (Rapiscan Building), Luminex (Pvt) Ltd.
- Facility management companies are a key audience across every sector. Line under the sector list: "We also work with facility management companies that look after buildings in every sector."

## 9. Client references by service (src/data/clients.ts)
Show as clean lists with hairlines, grouped by service. Names only, no logos. On mobile, show the first eight of each group with a "Show all" button.
- Waterproofing: Monarch Residencies, Colombo 3. DHPL Building, Nawam Mawatha. Empire Residencies, Colombo 2. Dialog Head Office, Union Place. Hemas Hospital, Wattala. Hemas Hospital, Thalawathugoda. Aitken Spence Head Office, Colombo 2. Browns Capital Building, Colombo 8. Suncity Residencies, Malabe. Colombo Sea Port, Rapiscan Building. Luminex (Pvt) Ltd. One Galle Face Residence, Colombo 2. Cinnamon Garden Residence, Colombo 7. Survey Department, Narahenpita. Marine City Residence, Dehiwala.
- Painting: Aitken Spence Head Office, Colombo 2. NDB Bank, Dharmapala Mawatha. Browns Capital Building, Colombo 8. Suncity Residencies, Malabe. Altair Residencies, Colombo 2. Kandy City Center. Sethma Hospital, Gampaha. Dialog Head Office. Hakmana Primary School (with MAGA Engineering). People's Leasing Building, Colombo 5. Hemas Hospital, Wattala. VFS Global, Dematagoda. HSBC Head Office, Colombo 1. One Galle Face Office Tower and Mall. Monarch Residence, Colombo 3. Access West Port Terminal, Colombo. Access Towers, Colombo 2. Marine City Residence, Dehiwala. Airport Garden Hotel, Seeduwa. District Secretariat Office, Galle. Summer Season Hotel, Mirissa. Empire Residence, Colombo 2.
- Glass and facade cleaning: World Trade Center (annual). 7 Sense, Colombo 7 (annual). Civil Aviation Authority, Katunayake (every three months). Western Province Building, Battaramulla (annual). Shangri-La Hotel (monthly). One Galle Face Residence (annual). Cinnamon Suites and Residence (facade cleaning). Siyapatha Building, D S Senanayake Mawatha. ICONIC Building, Rajagiriya. Kandy City Center (roof washing). RIU Hotel, Ahungalla. Ceylinco Life, Colombo 3. HSBC, Colombo 1. Browns Capital, D S Senanayake Mawatha. Marriott Hotel, Weligama. Grand Bell Hotel, Colombo 3. BMS Building, Colombo 6. Monarch Residence, Colombo 3. Access Tower 1, Colombo 2. Cinnamon Life, Colombo 2. DHPL Building, Nawam Mawatha. M2M, Colombo 2.
- Glass replacement: Siyapatha Building, D S Senanayake Mawatha. Sampath Bank, Nawam Mawatha.
- Sealant application: Monarch Residence, Galle Road. Empire City Residence, Braybrooke Place, Colombo 2. Hemas Hospital, Wattala. Hemas Hospital, Thalawathugoda. Browns Capital, D S Senanayake Mawatha. Hemas Pharmaceuticals, Colombo 3. World Trade Center. Dialog Head Office, Union Place.
- Crack repair: Empire Residencies, Colombo 2. Aitken Spence, Vauxhall Street. 77th on Fourth Residence, Old Nawala Road. VFS Global, Dematagoda. Hemas Hospital, Thalawathugoda. NTB Head Office, Nawam Mawatha. Marine City Residence, Dehiwala. One Galle Face Office Tower, Colombo 2.
- Other clients: Havelock City, Colombo. City of Dreams, Colombo.
- Home "trusted by" client wall (name / descriptor, in this order): Bandaranaike International Airport / Airport. Shangri-La / Hotel. World Trade Center / Offices. One Galle Face / Residences and mall. Cinnamon Life / Hotel. HSBC / Bank. Dialog / Head office. NDB Bank / Bank. Hemas Hospitals / Hospitals. Aitken Spence / Head office. Marriott Weligama / Hotel. Civil Aviation Authority / Aviation authority.

## 10. Where we have worked (src/data/locations.ts, map on /projects)
Approximate coordinates for a country-scale map. Each pin lists the project names.
- Colombo (6.9271, 79.8612): Aitken Spence Head Office, Shangri-La Hotel, World Trade Center, One Galle Face, Cinnamon Life, HSBC Head Office, Dialog Head Office, Grand Bell Hotel, Monarch Residence, Empire Residencies, Cinnamon Garden Residence, Survey Department, Access Towers, Browns Capital, Altair Residencies, NDB Bank, Ceylinco Life, NTB Head Office, VFS Global, Havelock City, Access West Port Terminal.
- Katunayake (7.1808, 79.8841): Bandaranaike International Airport, Civil Aviation Authority.
- Seeduwa (7.1281, 79.8800): Airport Garden Hotel.
- Wattala (6.9897, 79.8918): Hemas Hospital.
- Gampaha (7.0917, 79.9997): Sethma Hospital.
- Rajagiriya (6.9094, 79.8960): ICONIC Building.
- Battaramulla (6.8990, 79.9180): Western Province Building.
- Kotte (6.8868, 79.9187): 77th on Fourth Residence.
- Thalawathugoda (6.8723, 79.9310): Hemas Hospital.
- Malabe (6.9046, 79.9585): Suncity Residencies.
- Dehiwala (6.8511, 79.8656): Marine City Residence.
- Kandy (7.2906, 80.6337): Kandy City Center.
- Ahungalla (6.3160, 80.0342): RIU Hotel.
- Galle (6.0535, 80.2210): District Secretariat Office.
- Weligama (5.9749, 80.4297): Marriott Hotel.
- Mirissa (5.9483, 80.4716): Summer Season Hotel.
- Hakmana (6.0823, 80.6600): Hakmana Primary School.

## 11. Testimonials (src/data/testimonials.ts)
Start as an empty array. The testimonials section renders only when it has items. Each item: quote, name, role, company, and permission confirmed. Never invent testimonials.

## 12. Page copy

### Navigation
- Desktop: Services (opens a mega menu), Sectors, Projects, About, Contact. Button: Get a free quote.
- Services mega menu: the six services, each with a small image, name and one-liner, plus "All services ›" and a small panel on the right: "Not sure what you need?" / "Send us a few photos on WhatsApp." with the not-sure WhatsApp link.
- Mobile menu sheet: Home, Services (expands to the six services), Sectors, Projects, About, Safety and quality, Contact. Then Get a free quote, Chat on WhatsApp, Call us.

### Footer
- Brand line: "Quality that lasts. Service you can trust."
- Description: "Waterproofing, painting, sealants, glass cleaning and building maintenance specialists since 2011. CIDA SP2 registered and fully insured."
- Columns: Services (all six). Company (About, Sectors, Projects, Safety and quality, Contact, Privacy). Contact (phone, WhatsApp, email, both offices with labels, hours, hours note, "Request our company profile ›").
- Fine print: "© [current year] Phoenix Decorators (Pvt) Ltd. All rights reserved." and "CIDA SP2 registered for painting and waterproofing."

### CtaBand (night, all pages except /contact and /quote)
- Headline: Have a project in mind?
- Subline: Book a free consultation and receive a clear, written quotation, with no obligation.
- Buttons: Get a free quote. Chat on WhatsApp.
- Small line: "Urgent leak? Call +94 77 036 2222." (tel link)

### Home
Rhythm: section padding 80px on mobile and 112px on desktop. One idea per section, no sentence repeated across sections, every heading balanced with no orphan words.

1. Hero (full-screen photo: hero.jpg)
   - Announcement pill (when active), always on one line.
   - h1: Waterproofing and facade specialists. (Desktop lines: "Waterproofing and" / "facade specialists.")
   - Subline (max 36ch on desktop): "Waterproofing, painting, sealants and glass cleaning at any height. Trusted at Bandaranaike International Airport, Shangri-La and One Galle Face."
   - Buttons: Get a free quote. Chat on WhatsApp.
   - Fact strip: "350+ projects since 2011". "CIDA SP2 registered". "Fully insured". "[warranty short label]". Inside the hero on desktop; on mobile a white 2 x 2 strip directly under the hero (15px, hairline dividers).
   - Desktop: a soft left scrim over the bottom gradient. Text never covers the technician's face or hands: the headline scales with the screen so it always starts below his hands.
   - Mobile: content anchored to the bottom under a strong night gradient, buttons full width, technician in the top half, rope line hidden.
2. Trusted by: heading "Trusted on landmark sites across Sri Lanka." (17px semibold), then a typographic client wall (4 columns desktop, 2 mobile): hairline top, name, descriptor underneath. Names only, no logos.
3. Intro statement (scroll highlight; words stay in ink with reduced motion): "Since 2011, facility managers, engineers and building owners have trusted us with more than 350 projects. One specialist team takes responsibility for every job, from the first inspection to the final handover."
4. Services: heading "Six specialist services." second tone "One accountable team." Card rail, then "Explore all services ›" to /services.
5. Why Phoenix: heading "Quality that lasts." second tone "Service you can trust."
   - Big numbers (one row of three on every screen): "350+" / "Projects completed since 2011". "SP2" / "CIDA grade for painting and waterproofing". "[warranty number]+" / "Year workmanship guarantee".
   - Two columns: brand-lotus-tower.jpg (4:5, no taller than 640px) with the caption "Our team at work in Colombo.", and four reasons with icons:
     - "Directors on every project" / "Our directors and a dedicated supervisor oversee each job personally."
     - "The right system, specified" / "We assess the site first, then follow manufacturer specifications and industry standards."
     - "Fully insured" / "Every project is covered against third-party claims."
     - "Safe at any height" / "Rope access, gondola, boom truck or scaffolding, with strict safety protocols."
   - team.jpg is not used on the home page (it stays on About).
6. Access (night): heading "Any height." second tone "The right access." Body: "We choose the safest, most efficient way to reach every surface, with strict safety protocols on every job." Four tiles. Link: "Ask about access for your building ›".
7. Projects: heading "Proven on demanding sites." second tone "Selected work for hotels, banks, hospitals and landmark towers."
   - The two photo projects (Aitken Spence Head Office, Grand Bell Hotel) as large photo cards.
   - An editorial list of six projects, each a link to /projects#slug: Bandaranaike International Airport, Shangri-La Hotel, Cinnamon Garden Residence, One Galle Face, World Trade Center, Hemas Hospitals. Client name, location, a contract pill when there is one (for example "Monthly contract"), scope (two lines at most) and "›".
   - Ongoing contracts strip: "Trusted for ongoing contracts." / "Monthly at Shangri-La. Every three months at the Civil Aviation Authority. Annually at the World Trade Center." Link: View all projects ›
8. Directors: heading "Led by its directors." second tone "Hands-on, on every project." Line: "Christy Marcelline founded Phoenix Decorators in 2011 and runs it today with his co-owner, Ranga Gamachchi. With a dedicated supervisor, they oversee every project personally." Link: "Meet our leadership ›" to /about#leadership. Then both directors as compact rows (small portrait, pull quote, name, title).
9. Sectors: heading "Sectors we serve." second tone "The same standard in every building." Six rows with hairlines, no numbers, each linking to /sectors#[slug] with a "›", showing the first three client names of the sector. Line under: the facility management line from section 8.
10. Testimonials (hidden while empty).
11. Common questions (accordion, FAQPage schema, on mist). Under the heading: "Still have a question? Chat on WhatsApp ›" (general message).
    - Is the quotation free? / Yes. Consultations and quotations are free, with no obligation.
    - Which areas do you cover? / We are based in Colombo and work across Sri Lanka, with most projects in the Western Province. Recent work includes Kandy, Galle, Weligama and Mirissa.
    - Are you registered and insured? / Yes. We are registered with CIDA at SP2 level for painting and waterproofing, and every project is covered by third-party insurance.
    - Can you work while the building is in use? / Yes. We plan the work in sections and agree timings with you, so occupants and operations are disturbed as little as possible.
    - Do you offer maintenance contracts? / Yes. Clients use us on monthly, quarterly and annual contracts, and we can propose a plan for your building.
    - What guarantee do you give? / A written workmanship guarantee of [warranty label], depending on the system installed. The exact period is stated in your quotation.
12. CtaBand.

The "How we work" process is not on the home page; every service page shows it.

### Services index (/services)
- h1: Our services.
- Subline: Six specialist services for commercial, industrial and residential buildings. One team and one contract for every trade.
- One chapter per service: 16:9 image card with name and tagline, three scope items, "Learn more ›", "Get a quote for this service ›".
- Band (night): "Not sure what your building needs?" / "Send us a few photos on WhatsApp and a specialist will recommend the right solution." Button: Chat on WhatsApp (not-sure message).

### Service page template (/services/[slug])
Order: photo hero (name as h1, tagline, quote and WhatsApp buttons) / proof line under the hero / intro as a lead paragraph / at-a-glance facts (four items with icons) / "Scope of work" / expert guide (heading from section 5, on mist) / "Selected projects" (projects whose services include this slug) / gallery if any / "Trusted by" (proof clients) / guarantee strip: "[warranty label]" with "Stated in your quotation, based on the system installed." and "Fully insured" with "Every project is covered by third-party insurance." / "How we work" / "Frequently asked questions" / "Explore other services" / CtaBand.

### Sectors (/sectors)
- h1: Sectors we serve.
- Subline: Specialist building care for hotels, hospitals, offices, residences, public buildings and industry.
- One section per sector (anchor = slug): name as h2, intro, "Services" as small linked pills, "Clients include" as a hairline list. Alternate paper and mist backgrounds.
- The facility management line, then CtaBand.

### Projects (/projects)
- h1: Our projects.
- Subline: More than 350 projects since 2011, for hotels, hospitals, banks, offices, residences and public buildings across Sri Lanka.
- Filter (segmented control, synced to ?service=): All, Waterproofing, Painting, Sealants, Glass cleaning, Industrial, Maintenance.
- Project cards (client, location, sector, scope, contract, service tags). Each card has an id equal to its slug so /projects#slug links work.
- Ongoing contracts callout: "Trusted for ongoing contracts." / "Monthly glass washing at Shangri-La, every three months at the Civil Aviation Authority and annually at the World Trade Center."
- "Where we have worked": map of Sri Lanka with pins from section 10, and beside it "More than 350 projects across Sri Lanka."
- "Client references": the section 9 lists grouped by service, then "Other clients".

### About (/about)
- h1: Built on quality since 2011.
- Subline: Phoenix Decorators (Pvt) Ltd is a Colombo-based specialist in waterproofing, painting, sealants, glass cleaning and building maintenance for commercial, industrial and residential clients.
- Wide image: team.jpg, caption "Our rope access team."
- Story (two paragraphs):
  - "Phoenix Decorators was founded by Christy Marcelline, who now runs the company with his co-owner, Ranga Gamachchi. The directors stay hands-on in the daily running of the business, and together with a dedicated supervisor they make sure every project gets the attention it needs."
  - "Since 2011 we have completed more than 350 projects, from private homes to landmark hotels, banks, hospitals and Bandaranaike International Airport. Continuous research into the materials and methods we use lets us stand behind our work with a written workmanship guarantee. Every project is fully insured, and we commit to delivering it on time, on budget and to the highest standards."
- Numbers row: "2011" / "Founded". "350+" / "Projects completed". "2" / "Offices, Kochchikade and Colombo 10". "SP2" / "CIDA grade".
- Statement band (mist): "Mastery in every measure." with the line "Fully insured. Fully committed. Fully professional."
- Leadership (id "leadership"): heading "Leadership." For each director: 3:4 portrait, name, title, pull quote, full statement. Under Ranga, the BIA fact from section 4.
- Vision and mission:
  - "Our vision" / "To be the preferred service provider in the commercial sector, consistently delivering high-quality products and services that exceed client expectations while remaining competitively priced."
  - "Our mission" / "Strong leadership and exceptional customer service, continuous innovation, and support structures that help us grow well. We uphold high standards and keep researching the best materials and methods, so we stay competitive and responsive."
- Values (five, hairline tops): "Right first time": Efficient procedures, so clients get the highest quality in the shortest possible time. "Respect": We listen, meet expectations and build long-term relationships. "Integrity": Honest, ethical business in everything we do. "Innovation": We keep improving our methods and materials. "Our people": Skills development and knowledge transfer for every team member.
- Relationship line (large, centred): "We don't just provide services. We build long-term relationships based on trust, quality and performance."
- Safety and quality teaser (night): heading "No compromises on safety." Body: "CIDA SP2 registered, fully insured and supervised by our directors on every project." Link: "Safety and quality ›". Image: brand-lotus-tower.jpg.
- Materials we trust: "We work with trusted brands including Dulux, Conmix and Delta Coatings."
- Community: heading "Giving back." Body: "We support young people from disadvantaged backgrounds through skills and employment, and we take part in community work."
  - Temple renovation, three photos in a row (a swipe row on mobile) labelled "Before", "During" and "After": community-temple-before.jpg, community-temple-work.jpg, community-temple-after.jpg. Caption: "Renovation of Mahawalawa Temple, Dadalla." (The before and after photos are taken from different angles, so do not use a drag slider.)
  - Two tiles: community-kandy-cleanup.jpg "Solid waste management at the Exhibition of the Sacred Tooth Relic, Kandy." / community-water-donation.jpg "Drinking water donated to the Sri Dalada Maligawa."
- CtaBand.

### Safety and quality (/safety-quality)
- h1: Safety and quality.
- Subline: No compromises on safety. Registered, insured and supervised on every project.
- Six items with icons and short text:
  - "CIDA SP2 registered" / "Registered with the Construction Industry Development Authority (formerly ICTAD) at SP2 level for painting and waterproofing."
  - "Fully insured" / "Every project is covered against third-party claims."
  - "Supervised by our directors" / "Our directors and a dedicated supervisor oversee every project, from assessment to handover."
  - "Specified, not guessed" / "Detailed site assessments, correct system selection and strict compliance with manufacturer specifications and industry standards."
  - "Quality control at every stage" / "We check the work at each stage and hand over a clean site."
  - "Written guarantee" / "[warranty label], stated in your quotation."
- Safe at any height (night): the four access methods with images, and "Strict safety protocols on every job, for our people and the places we work."
- Materials: "Tested, researched products from brands including Dulux, Conmix and Delta Coatings."
- Vendor registration band: heading "Registering us as a vendor?" Body: "Request our company profile and registration details for your vendor file." Buttons: "Request by WhatsApp" and "Request by email" (messages from section 3).
- CtaBand.

### Contact (/contact)
- h1: How can we help?
- Subline: For the fastest response, message us on WhatsApp. For pricing, get a free quote. It takes about a minute.
- Tiles: WhatsApp (caption "Fastest response"), Call (caption "Speak to our team"), Email (caption "For documents and tenders").
- Urgent line under the tiles: "Urgent leak? Call or WhatsApp +94 77 036 2222."
- Send us a message (Netlify form "contact"): heading "Send us a message." Fields: name, phone, email (optional), message. Button: Send message. Success: "Thank you. We'll reply within working hours." Error: "We couldn't send your message. Please try again, or contact us on WhatsApp."
- Offices: "Head office" and "Commercial office" with addresses, hours, hours note and "Get directions ›" for each. A click-to-load map for the commercial office.
- Company profile: "Need our company profile?" with the WhatsApp and email request links.
- Band: "Need a price for your project?" Button: Get a free quote.

### Quote (/quote)
- h1: Request a free quote. Top line: "Takes about a minute." Link: "Prefer to chat? Open WhatsApp ›"
- Beside the form on desktop (below on mobile), "What happens next": 1 "We contact you" / "Usually by WhatsApp or phone, within working hours." 2 "Site assessment" / "A specialist inspects and identifies the cause." 3 "Written quotation" / "Scope, materials, timeline and guarantee, in writing."
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

## 13. SEO
- Home title: Waterproofing, Painting and Glass Cleaning in Colombo | Phoenix Decorators
- Home description: Waterproofing, painting, sealants and glass cleaning for commercial and residential buildings. CIDA SP2 registered, fully insured, 350+ projects since 2011.
- Service titles: [Service name] in Colombo and across Sri Lanka | Phoenix Decorators
- Sectors title: Sectors we serve | Phoenix Decorators. Safety title: Safety and quality | Phoenix Decorators.
- Other pages: [Page] | Phoenix Decorators. Descriptions under 155 characters, written for people.
- Canonical URLs: the home page canonical is https://www.phoenixdecorator.com/ (never /index).

## 14. Redirects from the old website (301)
/index.php to /. /About and /about/ to /about. /Services to /services. /Projects to /projects. /project/* to /projects. /Contact and /contact/* to /contact.

## 15. Deliberately not used from the previous website
- Testimonials under famous footballers' names (not genuine).
- "Countries: 47", "Projects: 215" and "Offices: 0" counters (unverified or out of date; the profile says 350+ projects and there are 2 offices).
- "Royal Clients" label on product brand logos (Dulux, Conmix and Delta Coatings are material brands, not clients).
- "Decades of experience" and "better service than anyone else" (not supportable).
