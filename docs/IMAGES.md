# Images: where each photo goes (version 3)

All files are in src/assets/images. Real Phoenix work only. Crop with object-fit and object-position, never stretch. Alt text below; keep it factual.

## Brand
- logo.png: colour logo on light backgrounds. Alt: "Phoenix Decorators (Pvt) Ltd"
- logo-white.png: white logo on night backgrounds and over photos. Alt: "Phoenix Decorators (Pvt) Ltd"
- Header logo: 44px tall on mobile (64px header) and 48px on desktop (72px header), lossless PNG at 1x, 2x and 3x so it stays sharp on every screen.
- app-icon.png and app-icon.svg: the logo's bird mark, for the favicon, apple-touch-icon and web manifest.

## Home
- hero.jpg: home hero, full screen. Subject sits at about 58% from the left. Alt: "Phoenix rope access technician applying sealant to a building facade". Also the default social sharing image.
- team.jpg: the wide image on About (not used on the home page). Alt: "The Phoenix Decorators rope access team in safety harnesses"
- director-christy.jpg and director-ranga.jpg: the two director cards (3:4 portraits, object-position top).

## Directors (768 x 1024 portraits, both already in the repository)
- director-christy.jpg. Alt: "Mr. Christy Marcelline, Founder and Managing Director of Phoenix Decorators"
- director-ranga.jpg. Alt: "Mr. Ranga Gamachchi, Director and General Manager of Phoenix Decorators"
- Used on: Home (Directors section), About (Leadership). Always show both directors together, same size, same crop.

## Services (card rail, mega menu thumbnails, service pages, services index)
- service-waterproofing.jpg. Alt: "Phoenix team spraying a waterproofing membrane on a Colombo rooftop"
- service-painting.jpg. Alt: "Rope access technician painting an exterior wall"
- service-sealant.jpg. Alt: "Rope access technician working on a curved glass facade"
- service-glass-cleaning.jpg. Alt: "Rope access technician cleaning high-rise glass"
- service-industrial.jpg. Alt: "Technician preparing an industrial floor"
- service-maintenance.jpg. Alt: "Two technicians cleaning windows from a gondola"
- Mega menu thumbnails: the same files at 96 x 72, rounded 12px, lazy loaded.

## Service galleries
- Waterproofing: gallery-waterproofing-rooftop.jpg (Alt: "Rooftop waterproofing in progress with the Colombo skyline behind"), gallery-waterproofing-parapet.jpg (Alt: "Technician applying waterproofing to a parapet wall"), gallery-waterproofing-spray.jpg (Alt: "Close-up of a sprayed waterproofing membrane")
- Painting: gallery-painting-interior.jpg (Alt: "Phoenix painter working on an interior wall"), gallery-painting-highrise.jpg (Alt: "High-rise residential tower during facade works")
- High-rise maintenance: gallery-maintenance-gondola.jpg (Alt: "High-rise facade with a gondola and scaffolding in place")

## Access methods (4:5 tiles: the home access carousel, and the Safety and quality page)
- access-rope.jpg. Alt: "Rope access technician descending from a building's roof edge"
- access-gondola.jpg. Alt: "Technician working from a gondola on a glass facade"
- access-boom-truck.jpg. Alt: "Boom truck reaching a building canopy at night"
- access-scaffolding.jpg. Alt: "Scaffolding set up on a commercial building facade"

## Projects (our team at work)
- project-aitken-spence.jpg: Aitken Spence Head Office card. Alt: "Rope access painting at the Aitken Spence Head Office"
- project-grand-bell.jpg: Grand Bell Hotel card. Alt: "Rope access glass washing at the Grand Bell Hotel"

## Client buildings (NEW, the one exception to "our work only")
These show the client's building, not our team at work. Use each one only on that client's project card (home, /projects, service pages) and on the matching sector section on /sectors. Never in a hero, as a service image or as a background.
- project-bia.jpg (1200 x 600). Alt: "Bandaranaike International Airport terminal building, Katunayake". Home: one of the six equal project cards (the last one). Sectors: Airports and public buildings.
- project-shangri-la.jpg (1200 x 857). Alt: "Shangri-La Hotel tower overlooking Galle Face, Colombo". Crop position 82% centre. Sectors: Hotels and resorts.
- project-one-galle-face.jpg (1000 x 765). Alt: "One Galle Face mall and towers, Colombo". Crop position 90% centre on cards. Sectors: Residential towers and apartments.
- project-world-trade-center.jpg (1440 x 851). Alt: "World Trade Center twin towers, Colombo". Crop position 58% centre. Sectors: Corporate offices and banks.
- project-hemas-hospitals.jpg (800 x 600). Alt: "Hemas Hospitals building entrance". Sectors: Hospitals and healthcare.
- Projects without a photo use the typographic card. Never add any other photo of a client's building.
- The Sri Lanka map is drawn in code at build time (no image file).

## Sectors page (/sectors, one 4:3 photo per sector with a caption)
- Hotels and resorts: project-shangri-la.jpg, caption "Shangri-La Hotel, Colombo"
- Hospitals and healthcare: project-hemas-hospitals.jpg, caption "Hemas Hospitals"
- Corporate offices and banks: project-world-trade-center.jpg, caption "World Trade Center, Colombo"
- Residential towers and apartments: project-one-galle-face.jpg, caption "One Galle Face, Colombo"
- Airports and public buildings: project-bia.jpg, caption "Bandaranaike International Airport"
- Retail, ports and industry: service-industrial.jpg, caption "Industrial floor preparation by our team"

## Material brand logos (the MaterialBrands row)
- brand-dulux.png (alt "Dulux"), brand-conmix.png (alt "Conmix"), brand-delta-coatings.png (alt "Delta Coatings International"), brand-ucc.png (alt "UCC", NEW in update 3, 202 x 80).
- Used at the end of the home "Why" section, in the About materials block and in the Safety and quality materials block, under the line "We work with materials from trusted brands, including Dulux, Conmix, Delta Coatings and UCC."
- Four logos in one row on desktop, a 2 x 2 grid on mobile. All optically the same size: base height 36px on mobile and 44px on desktop, scaled per logo to match visual weight (Dulux 100%, Conmix 92%, Delta Coatings 72% because it is about 4:1, UCC 74% because the mark is solid black). Greyscale at 70% opacity, full colour on hover on desktop. They are material suppliers: never call them clients.

## About
- team.jpg: wide image under the hero.
- director-christy.jpg, director-ranga.jpg: Leadership.
- brand-lotus-tower.jpg: "No compromises on safety" band. Alt: "Phoenix technician in a branded shirt with the Lotus Tower behind"

## Community (About, "Giving back"), NEW files in this upgrade
- community-temple-before.jpg (1200 x 900). Label "Before". Alt: "Mahawalawa Temple, Dadalla, before renovation"
- community-temple-work.jpg (1200 x 900). Label "During". Alt: "Phoenix team painting the temple ceiling during the renovation"
- community-temple-after.jpg (1200 x 900). Label "After". Alt: "Mahawalawa Temple, Dadalla, after renovation by Phoenix Decorators"
- community-kandy-cleanup.jpg (1200 x 2132, tall). Show as a 4:5 crop, object-position center 40%. Alt: "Phoenix team members collecting waste at the Exhibition of the Sacred Tooth Relic in Kandy"
- community-water-donation.jpg (1280 x 960). Alt: "Phoenix team members with drinking water donated to the Sri Dalada Maligawa"
- These photos come from the company profile and were enhanced for the web. Use them at a maximum display width of about 600px so they stay sharp.

## Safety and quality page
- access-*.jpg for the four access tiles, brand-lotus-tower.jpg optional as a wide image. The material brand logos in the materials block.

## Notes for the owner
- team.jpg was restored from the faded background of the company profile. Replace it with the original file when you get it.
- Better originals of the community photos can replace these at any time with the same file names.
- To swap any photo, upload a new file with the same name to src/assets/images.
- project-hemas-hospitals.jpg (800 x 600) and project-bia.jpg (1200 x 600) are small for large screens. Larger originals with the same file names will look sharper on the project cards and on /sectors.
