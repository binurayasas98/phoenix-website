import type { ImageMetadata } from 'astro';
import { serviceWhatsappMessage, site } from './site';

import waterproofingImg from '../assets/images/service-waterproofing.jpg';
import paintingImg from '../assets/images/service-painting.jpg';
import sealantImg from '../assets/images/service-sealant.jpg';
import glassImg from '../assets/images/service-glass-cleaning.jpg';
import industrialImg from '../assets/images/service-industrial.jpg';
import maintenanceImg from '../assets/images/service-maintenance.jpg';

import wpRooftop from '../assets/images/gallery-waterproofing-rooftop.jpg';
import wpParapet from '../assets/images/gallery-waterproofing-parapet.jpg';
import wpSpray from '../assets/images/gallery-waterproofing-spray.jpg';
import paintInterior from '../assets/images/gallery-painting-interior.jpg';
import paintHighrise from '../assets/images/gallery-painting-highrise.jpg';
import maintGondola from '../assets/images/gallery-maintenance-gondola.jpg';

import accessRopeImg from '../assets/images/access-rope.jpg';
import accessGondolaImg from '../assets/images/access-gondola.jpg';
import accessBoomImg from '../assets/images/access-boom-truck.jpg';
import accessScaffoldImg from '../assets/images/access-scaffolding.jpg';

export type ServiceSlug =
  | 'waterproofing'
  | 'painting'
  | 'sealant-application'
  | 'glass-cleaning'
  | 'industrial-coatings'
  | 'high-rise-maintenance';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** CSS object-position when the photo is cropped (defaults to centre). */
  position?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Guide {
  heading: string;
  paragraphs: string[];
}

export interface MethodStep {
  title: string;
  text: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  longName: string;
  /** Short label for filters and tags. */
  shortName: string;
  /** The short name as it reads inside a sentence ('Signs you need ...', 'View all ... projects'). */
  phrase: string;
  image: Photo;
  gallery: Photo[];
  oneLiner: string;
  tagline: string;
  proofLine: string;
  accessLine: string;
  intro: string;
  /** Second intro paragraph. */
  introMore: string;
  /** Heading for the signs checklist. Defaults to 'Signs you need [short name]'. */
  signsHeading?: string;
  signs: string[];
  /** 'How we do it': numbered steps specific to the service. */
  method: MethodStep[];
  /** Optional block after the expert guide, shown as a checklist. */
  extra?: { heading: string; items: string[] };
  scope: string[];
  guide: Guide;
  /** 'Trusted by' names. Empty hides the block. */
  proof: string[];
  faqs: Faq[];
  whatsappMessage: string;
}

type ServiceInput = Omit<Service, 'whatsappMessage'>;

const list: ServiceInput[] = [
  {
    slug: 'waterproofing',
    name: 'Waterproofing',
    longName: 'Waterproofing, damp proofing and roof leak repairs',
    shortName: 'Waterproofing',
    phrase: 'waterproofing',
    image: {
      src: waterproofingImg,
      alt: 'Phoenix team spraying a waterproofing membrane on a Colombo rooftop',
    },
    gallery: [
      { src: wpRooftop, alt: 'Rooftop waterproofing in progress with the Colombo skyline behind' },
      { src: wpParapet, alt: 'Technician applying waterproofing to a parapet wall' },
      { src: wpSpray, alt: 'Close-up of a sprayed waterproofing membrane' },
    ],
    oneLiner: 'Long-term protection against roof leaks, seepage and dampness.',
    tagline: 'Stop leaks at the source, for the long term.',
    proofLine:
      'Trusted at Bandaranaike International Airport, One Galle Face Residence and Cinnamon Garden Residence.',
    accessLine: 'Rooftops, podiums and wet areas, with rope access for external walls.',
    intro:
      "Leaks and seepage rarely stay small. They damage finishes, electrical systems and structure, and they disrupt the people who use your building. We trace the true source, select the right system for each surface and apply it with tested products, following the manufacturer's specifications.",
    introMore:
      'Waterproofing is a protective barrier that stops water getting into a structure, or out of one, such as a swimming pool. We use proven systems, including sprayed-on polyurea membranes, and name the exact products in your quotation.',
    signs: [
      'Damp patches or stains on ceilings and walls after rain.',
      'Peeling paint, bubbling plaster or white salt deposits on walls.',
      'Mould or a musty smell in rooms, basements or car parks.',
      'Water pooling on roofs, terraces or podium decks.',
      'Leaks around drains, pipes, upstands or expansion joints.',
    ],
    method: [
      { title: 'Inspect', text: 'We trace the real entry point, not just the damp patch.' },
      { title: 'Specify', text: 'We choose a system that suits the surface, its movement and its exposure to sun and standing water.' },
      { title: 'Prepare', text: 'We clean and repair the surface, treat cracks and weak concrete, and prime where the system requires it.' },
      { title: 'Apply and detail', text: "We apply the system to the manufacturer's specification and seal every drain, upstand, junction and joint." },
      { title: 'Check and hand over', text: 'We inspect the finished work, hand over a clean site and confirm your guarantee in writing.' },
    ],
    scope: [
      'Rooftop and concrete slab waterproofing',
      'Sprayed-on polyurea membranes',
      'Damp proofing',
      'Roof leak detection and repair',
      'Terraces, balconies and rooftop flower troughs',
      'Bathrooms and wet areas',
      'Swimming pools',
      'Car park ramps and podium decks',
      'External wall waterproofing',
      'Weak concrete rectification',
    ],
    guide: {
      heading: 'Why leaks happen, and how we stop them',
      paragraphs: [
        'A leak needs three things: water, a gap and a force that drives the water through, such as gravity, wind or pressure. Patching the visible damp spot rarely works, because the water often enters somewhere else.',
        'We find the real entry point, choose a barrier system that suits the surface and its exposure, and detail every junction, drain and upstand so the whole area is sealed, not just the visible patch.',
        'The best time to waterproof is in dry weather, before the monsoon arrives.',
      ],
    },
    proof: [
      'Bandaranaike International Airport',
      'One Galle Face Residence',
      'Cinnamon Garden Residence',
      'Dialog Head Office',
      'Survey Department',
      'Monarch Residence',
      'Hemas Hospitals',
    ],
    faqs: [
      {
        q: 'How long does waterproofing last?',
        a: 'It depends on the system and how exposed the surface is. After the inspection we recommend the right system and state the guarantee period in your quotation.',
      },
      {
        q: 'Can you work while the building is in use?',
        a: 'Yes. We plan the work in sections and agree timings with you, so occupants and operations are disturbed as little as possible.',
      },
      {
        q: 'Do you inspect before quoting?',
        a: 'Yes. A specialist visits the site, identifies the cause of the problem and then prepares a written quotation.',
      },
      {
        q: 'What guarantee do you give on waterproofing?',
        a: `A written guarantee of ${site.warranty.waterproofingYears}+ years. The exact period for your system is stated in your quotation.`,
      },
      {
        q: 'When is the best time to waterproof?',
        a: 'In dry weather, before the monsoon. If you already have a leak, contact us straight away and we will advise on a temporary and a permanent solution.',
      },
    ],
  },
  {
    slug: 'painting',
    name: 'Painting',
    longName: 'Exterior and interior painting',
    shortName: 'Painting',
    phrase: 'painting',
    image: { src: paintingImg, alt: 'Rope access technician painting an exterior wall' },
    gallery: [
      { src: paintInterior, alt: 'Phoenix painter working on an interior wall' },
      { src: paintHighrise, alt: 'High-rise residential tower during facade works' },
    ],
    oneLiner: 'Exterior and interior painting, with crack repair and high-rise work by rope access.',
    tagline: 'Durable finishes, inside and out.',
    proofLine: 'Trusted at Aitken Spence, HSBC, NDB Bank and One Galle Face.',
    accessLine: 'High-rise facades and ventilation shafts by rope access, gondola or boom truck.',
    intro:
      'A lasting finish depends on preparation. We repair cracks and prepare every surface before we paint, choose the right paint system for the exposure, and reach high-rise walls and ventilation shafts by rope access.',
    introMore:
      'We paint offices, hotels, hospitals, apartment towers and homes, inside and out, and reach high-rise walls and ventilation shafts by rope access, gondola or boom truck.',
    signs: [
      'Faded, chalky or stained exterior walls.',
      'Cracks, peeling or flaking paint.',
      'Mould or algae on shaded or damp walls.',
      'Tired interiors before a handover, an inspection or a new tenant.',
    ],
    method: [
      { title: 'Survey', text: 'We check every surface, note cracks and damp, and plan safe access.' },
      { title: 'Repair and prepare', text: 'We clean the walls, repair cracks and treat damp before any paint goes on.' },
      { title: 'Specify', text: 'We choose the right interior or exterior system and list the products in your quotation.' },
      { title: 'Apply', text: 'We apply the specified coats, working in sections to keep disruption low.' },
      { title: 'Inspect and hand over', text: 'We check the finish with you and leave the site clean.' },
    ],
    scope: [
      'Exterior painting with crack repair',
      'Interior painting',
      'Colour wash',
      'High-rise and ventilation shaft walls by rope access',
      'Basement and car park painting',
      'Podium and facade painting',
    ],
    guide: {
      heading: 'The right paint for the right place',
      paragraphs: [
        'Interior paints use harder resins that resist stains and clean easily. Exterior paints use more flexible resins that move with heat, rain and sun without cracking.',
        "Exterior paint doesn't belong indoors, because it releases stronger fumes as it cures. Choosing the correct system, and preparing the surface properly, decides how long the finish lasts.",
      ],
    },
    proof: [
      'Aitken Spence Head Office',
      'HSBC Head Office',
      'NDB Bank',
      'One Galle Face Office Tower and Mall',
      'Access Towers',
      'Kandy City Center',
      'Marine City Residence',
    ],
    faqs: [
      {
        q: 'Do you repair cracks before painting?',
        a: 'Yes. Crack repair and surface preparation are part of every exterior painting job, because they decide how long the finish lasts.',
      },
      {
        q: 'How do you paint tall buildings?',
        a: 'By rope access, gondola, boom truck or scaffolding, whichever is safest and most efficient for the building.',
      },
      {
        q: 'Which paint do you use?',
        a: 'We recommend a paint system for the surface and its exposure, using trusted brands such as Dulux, and list the exact products in your quotation.',
      },
    ],
  },
  {
    slug: 'sealant-application',
    name: 'Sealant application',
    longName: 'Sealant application and external wall waterproofing',
    shortName: 'Sealants',
    phrase: 'sealant',
    image: { src: sealantImg, alt: 'Rope access technician working on a curved glass facade' },
    gallery: [],
    oneLiner: 'Facade, glazing and joint sealants that keep water out of modern buildings.',
    tagline: 'Sealed joints. Dry facades.',
    proofLine: 'Trusted at the World Trade Center, Dialog Head Office and Hemas Hospitals.',
    accessLine: 'Glazing and joints at any height, by rope access, gondola or boom truck.',
    intro:
      'Failed sealant around glazing and joints is one of the most common causes of water ingress in modern buildings. We remove and replace facade and window sealants, seal movement joints and waterproof external walls, working at height where needed.',
    introMore:
      'Sealants are the flexible joints that keep water out where two materials meet: around windows, along curtain walls and across movement joints. When they crack or come loose, water finds its way in.',
    signsHeading: 'Signs you need new sealant',
    signs: [
      'Cracked, shrunken or hardened sealant.',
      'Sealant pulling away from the glass or frame.',
      'Stains or streaks around windows.',
      'Damp patches inside after heavy rain.',
    ],
    method: [
      { title: 'Inspect', text: 'We check the joints and find the cause of the failure.' },
      { title: 'Remove', text: 'We cut out the old sealant completely and clean the joint.' },
      { title: 'Prepare', text: 'We prime the surfaces and fit a backing rod where the joint needs one.' },
      { title: 'Seal', text: 'We apply the specified sealant to the correct depth and tool it to a neat, smooth finish.' },
      { title: 'Check', text: 'We inspect every joint before we hand over.' },
    ],
    scope: [
      'Facade and window sealant replacement',
      'Expansion and movement joints',
      'External wall waterproofing',
      'Industrial sealing',
    ],
    guide: {
      heading: 'Sealing for industry',
      paragraphs: [
        'For industrial clients, we seal critical infrastructure and equipment with high-quality sealants that resist heat, moisture and chemicals, which protects the asset and extends its working life.',
      ],
    },
    proof: [
      'World Trade Center',
      'Dialog Head Office',
      'Hemas Hospital Wattala',
      'Hemas Hospital Thalawathugoda',
      'Empire City Residence',
      'Monarch Residence',
      'Browns Capital',
    ],
    faqs: [
      {
        q: 'How do I know my sealant has failed?',
        a: 'Common signs are cracked, shrunken or detached sealant, stains around windows and damp patches inside after rain. We inspect and advise before quoting.',
      },
      {
        q: 'Can you replace sealant on a high-rise facade?',
        a: 'Yes. We work at height by rope access, gondola or boom truck.',
      },
    ],
  },
  {
    slug: 'glass-cleaning',
    name: 'Glass and facade cleaning',
    longName: 'Glass and facade cleaning',
    shortName: 'Glass cleaning',
    phrase: 'glass cleaning',
    image: { src: glassImg, alt: 'Rope access technician cleaning high-rise glass' },
    gallery: [],
    oneLiner: 'Glass and facade cleaning at any height, one-off or on a regular contract.',
    tagline: 'Clear glass and clean facades, at any height.',
    proofLine:
      'Monthly at Shangri-La, quarterly at the Civil Aviation Authority, annually at the World Trade Center.',
    accessLine: 'Any height, by rope access, gondola or boom truck.',
    intro:
      'Your facade is the first thing tenants, guests and clients see. We clean glass and facades by rope access, gondola or boom truck, as a one-off service or on a monthly, quarterly or annual contract. We also wash roofs, clean construction sites before handover and replace damaged glass.',
    introMore:
      'In Colombo, sea salt, city dust and rain streaks build up quickly on glass. Regular cleaning keeps your building looking its best and lets in more natural light.',
    signsHeading: 'When to call us',
    signs: [
      'Streaks, water marks or salt build-up on glass.',
      'A dull facade that makes the building look older than it is.',
      'A new building before handover, or a refurbished one before opening.',
      'Guests, tenants or clients arriving at a high-profile entrance.',
    ],
    method: [
      { title: 'Plan', text: 'We choose the safest access (rope access, gondola or boom truck) and agree timings with you.' },
      { title: 'Protect', text: 'We secure the area below and protect signage, frames and fittings.' },
      { title: 'Clean', text: 'We apply the right solution evenly and clean with consistent, lint-free strokes, with extra attention to stubborn marks.' },
      { title: 'Finish', text: 'We polish the glass for a streak-free result and inspect each section before we move on.' },
    ],
    scope: [
      'Glass and curtain wall cleaning',
      'Facade washing',
      'Roof washing',
      'Monthly, quarterly and annual contracts',
      'Construction-site cleaning before handover',
      'Glass replacement',
    ],
    guide: {
      heading: 'What a proper clean involves',
      paragraphs: [
        'The right cleaning solution for the glass and frame, applied evenly. Consistent, lint-free strokes, extra attention to stubborn marks, then a polished finish.',
        'The result is more natural light inside and a better first impression outside. On a regular contract, your facade stays that way all year.',
      ],
    },
    proof: [
      'Shangri-La Hotel',
      'World Trade Center',
      'Civil Aviation Authority',
      'Cinnamon Life',
      'Cinnamon Suites and Residence',
      'Marriott Hotel Weligama',
      'Grand Bell Hotel',
      'ICONIC Building',
    ],
    faqs: [
      {
        q: 'Can you clean on a regular schedule?',
        a: 'Yes. Clients such as Shangri-La, the World Trade Center and the Civil Aviation Authority use us on monthly, quarterly and annual contracts.',
      },
      {
        q: 'Do you clean new buildings before handover?',
        a: 'Yes. We clean construction sites so the building is ready for its owner or tenants.',
      },
      {
        q: 'Is the work insured?',
        a: 'Yes. Every project is covered by third-party insurance.',
      },
    ],
  },
  {
    slug: 'industrial-coatings',
    name: 'Industrial flooring and coatings',
    longName: 'Pipeline coatings and industrial flooring',
    shortName: 'Industrial',
    phrase: 'industrial flooring and coatings',
    image: { src: industrialImg, alt: 'Technician preparing an industrial floor' },
    gallery: [],
    oneLiner: 'Resin industrial floors and protective pipeline coatings for demanding sites.',
    tagline: 'Protection for hard-working surfaces.',
    proofLine: 'For factories, warehouses, ports and industrial plants.',
    accessLine: 'Planned around your operations to keep downtime low.',
    intro:
      'The wrong floor fails early, creates safety risks and disrupts operations. We install resin industrial floors that are durable, hygienic and available with anti-slip finishes, and apply protective coatings that control corrosion on pipelines, including in harsh environments.',
    introMore:
      'A good industrial floor is durable under heavy traffic, hygienic and easy to clean, with anti-slip finishes where safety needs them. A good pipeline coating controls corrosion for years, even in harsh environments.',
    signs: [
      'Cracked, dusting or worn concrete floors.',
      'Slippery areas in production, loading or wash-down zones.',
      'Floors that are hard to clean or fail hygiene checks.',
      'Rust or coating breakdown on pipelines and steelwork.',
    ],
    method: [
      { title: 'Assess', text: 'We check the substrate, loads, traffic, cleaning routine, chemicals and safety needs.' },
      { title: 'Specify', text: 'We recommend the right resin floor or coating system.' },
      { title: 'Prepare', text: 'We prepare the surface properly, because good preparation decides how long the system lasts.' },
      { title: 'Apply', text: 'We install in planned phases around your operations.' },
      { title: 'Cure and hand over', text: 'We allow full curing before traffic and hand over a clean area.' },
    ],
    extra: {
      heading: 'Why coat a pipeline?',
      items: [
        'Controls corrosion, including in seawater and other harsh environments.',
        'A smoother surface can improve flow and lower energy costs.',
        'Faster, easier inspections.',
        'Less reliance on corrosion inhibitors.',
        'A cleaner product in the line.',
        'A cost-effective, low-maintenance way to control corrosion.',
      ],
    },
    scope: [
      'Resin and epoxy industrial flooring',
      'Anti-slip finishes',
      'Substrate preparation',
      'Pipeline corrosion-protection coatings',
      'Coatings for harsh and coastal environments',
    ],
    guide: {
      heading: 'Choosing a floor or coating that lasts',
      paragraphs: [
        'Floors fail early when they are chosen on appearance or price alone. Success depends on the right material, proper substrate preparation and a clear understanding of loads, cleaning and safety needs, so that is where we start.',
        'A good pipeline coating controls corrosion, even in seawater and other harsh environments. A smoother coated surface can also improve flow, make inspections faster and reduce long-term maintenance.',
      ],
    },
    proof: [],
    faqs: [
      {
        q: 'How do you choose the right floor?',
        a: "We assess the substrate, the loads, cleaning needs and safety requirements, then recommend a system. We don't choose floors on appearance or price alone.",
      },
      {
        q: 'Can you work around our operations?',
        a: 'Yes. We plan the work in phases with you so production and access continue where possible.',
      },
    ],
  },
  {
    slug: 'high-rise-maintenance',
    name: 'High-rise building maintenance',
    longName: 'High-rise building maintenance',
    shortName: 'Maintenance',
    phrase: 'maintenance',
    image: { src: maintenanceImg, alt: 'Two technicians cleaning windows from a gondola' },
    gallery: [
      { src: maintGondola, alt: 'High-rise facade with a gondola and scaffolding in place' },
    ],
    oneLiner: 'Planned maintenance for tall buildings, with the right access for every job.',
    tagline: 'Planned care for tall buildings.',
    proofLine: 'Trusted at One Galle Face, NTB Head Office and Marine City Residence.',
    accessLine: 'Rope access, gondola, boom truck or scaffolding, chosen for each job.',
    intro:
      "Preventive maintenance keeps a building's surfaces and systems in good order and avoids the cost of emergency repairs. We maintain high-rise, commercial and industrial buildings and choose the safest, most efficient access for each job.",
    introMore:
      'We look after high-rise, commercial and industrial buildings on planned schedules, and clean construction sites so new buildings are ready for handover.',
    signs: [
      'Cracks, loose plaster or stains appearing on the facade.',
      'Repeated small leaks or plumbing faults.',
      "No planned maintenance schedule for the building's exterior.",
      'A new building that needs a full clean before handover.',
    ],
    method: [
      { title: 'Survey', text: 'We inspect the building and list what needs attention now and what can be planned.' },
      { title: 'Plan', text: 'We propose a maintenance schedule and the right access for each task.' },
      { title: 'Carry out', text: 'One team handles repairs, painting, sealing and cleaning under one contract.' },
      { title: 'Review', text: 'We check the completed work with you and agree the next visit.' },
    ],
    scope: [
      'Planned facade maintenance',
      'Crack and plaster repairs',
      'Plumbing repairs and replacement',
      'Construction-site cleaning before handover',
      'Access by rope, gondola, boom truck or scaffolding',
    ],
    guide: {
      heading: 'Preventive, not reactive',
      paragraphs: [
        'Reactive maintenance waits for something to fail. Preventive maintenance finds small defects early, while they are still quick and inexpensive to fix.',
        'The right access depends on the building, the work and the time available. Rope access is fast to set up, a gondola suits long continuous facades, a boom truck reaches canopies and soffits, and scaffolding gives a stable platform for heavy or detailed work.',
      ],
    },
    proof: [
      'Aitken Spence (crack repair)',
      'NTB Head Office',
      'One Galle Face Office Tower',
      'Marine City Residence',
      'VFS Global',
      'Empire Residencies',
    ],
    faqs: [
      {
        q: 'Do you offer maintenance contracts?',
        a: 'Yes. Tell us about your building and we will propose a maintenance plan that suits its needs and schedule.',
      },
      {
        q: 'Can one team handle several trades?',
        a: 'Yes. Waterproofing, painting, sealants, cleaning and repairs can run under one contract, with one team accountable for the result.',
      },
      {
        q: 'Which areas do you cover?',
        a: 'We are based in Colombo and work across Sri Lanka, with most of our work in the Western Province.',
      },
    ],
  },
];

export const services: Service[] = list.map((s) => ({
  ...s,
  whatsappMessage: serviceWhatsappMessage(s.name),
}));

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceName(slug: ServiceSlug): string {
  return getService(slug)?.name ?? slug;
}

export interface AccessMethod {
  name: string;
  text: string;
  image: Photo;
}

export const accessMethods: AccessMethod[] = [
  {
    name: 'Rope access',
    text: 'Technicians abseil down the facade from the roof. Fast to set up, minimal disruption, reaches ventilation shafts and tight spaces.',
    image: {
      src: accessRopeImg,
      alt: "Rope access technician descending from a building's roof edge",
    },
  },
  {
    name: 'Gondola',
    text: 'A suspended platform for large, continuous facades and longer jobs.',
    image: { src: accessGondolaImg, alt: 'Technician working from a gondola on a glass facade' },
  },
  {
    name: 'Boom truck',
    text: 'Quick access to canopies, soffits and low to mid-rise areas, including at night.',
    image: { src: accessBoomImg, alt: 'Boom truck reaching a building canopy at night' },
  },
  {
    name: 'Scaffolding',
    text: 'A stable working platform for heavy or detailed work.',
    image: { src: accessScaffoldImg, alt: 'Scaffolding set up on a commercial building facade' },
  },
];
