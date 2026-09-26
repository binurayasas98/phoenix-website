import type { ImageMetadata } from 'astro';
import { serviceWhatsappMessage } from './site';

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
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  longName: string;
  /** Short label for filters and tags. */
  shortName: string;
  image: Photo;
  gallery: Photo[];
  oneLiner: string;
  tagline: string;
  intro: string;
  scope: string[];
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
    intro:
      "Leaks and seepage rarely stay small. They damage finishes, electrical systems and structure, and they disrupt the people who use your building. We trace the source, select the right system for each surface and apply it with tested products, following the manufacturer's specifications.",
    scope: [
      'Rooftop and concrete slab waterproofing',
      'Sprayed-on polyurea membranes',
      'Damp proofing',
      'Roof leak detection and repair',
      'Terraces, balconies and rooftop flower troughs',
      'Bathrooms and wet areas',
      'Car park ramps and podium decks',
      'External wall waterproofing',
      'Weak concrete rectification',
    ],
    proof: [
      'Cinnamon Garden Residence',
      'One Galle Face Residence',
      'Bandaranaike International Airport',
      'Dialog Head Office',
      'Survey Department',
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
    ],
  },
  {
    slug: 'painting',
    name: 'Painting',
    longName: 'Exterior and interior painting',
    shortName: 'Painting',
    image: { src: paintingImg, alt: 'Rope access technician painting an exterior wall' },
    gallery: [
      { src: paintInterior, alt: 'Phoenix painter working on an interior wall' },
      { src: paintHighrise, alt: 'High-rise residential tower during facade works' },
    ],
    oneLiner: 'Exterior and interior painting, with crack repair and high-rise work by rope access.',
    tagline: 'Durable finishes, inside and out.',
    intro:
      'A lasting finish depends on preparation. We repair cracks and prepare every surface before we paint, choose the right paint system for the exposure, and reach high-rise walls and ventilation shafts by rope access.',
    scope: [
      'Exterior painting with crack repair',
      'Interior painting',
      'Colour wash',
      'High-rise and ventilation shaft walls by rope access',
      'Basement and car park painting',
      'Podium and facade painting',
    ],
    proof: [
      'Aitken Spence Head Office',
      'HSBC Head Office',
      'NDB Bank',
      'One Galle Face Office Tower and Mall',
      'Access Towers',
      'Kandy City Center',
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
    image: { src: sealantImg, alt: 'Rope access technician working on a curved glass facade' },
    gallery: [],
    oneLiner: 'Facade, glazing and joint sealants that keep water out of modern buildings.',
    tagline: 'Sealed joints. Dry facades.',
    intro:
      'Failed sealant around glazing and joints is one of the most common causes of water ingress in modern buildings. We remove and replace facade and window sealants, seal movement joints and waterproof external walls, working at height where needed. We also carry out sealing work for industrial clients, protecting critical infrastructure and equipment.',
    scope: [
      'Facade and window sealant replacement',
      'Expansion and movement joints',
      'External wall waterproofing',
      'Industrial sealing',
    ],
    proof: [
      'World Trade Center',
      'Dialog Head Office',
      'Hemas Hospital Wattala',
      'Hemas Hospital Thalawathugoda',
      'Empire City Residence',
      'Monarch Residence',
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
    image: { src: glassImg, alt: 'Rope access technician cleaning high-rise glass' },
    gallery: [],
    oneLiner: 'Glass and facade cleaning at any height, one-off or on a regular contract.',
    tagline: 'Clear glass and clean facades, at any height.',
    intro:
      'Your facade is the first thing tenants, guests and clients see. We clean glass and facades by rope access, gondola or boom truck, as a one-off service or on a monthly, quarterly or annual contract. We also wash roofs, clean construction sites before handover and replace damaged glass.',
    scope: [
      'Glass and curtain wall cleaning',
      'Facade washing',
      'Roof washing',
      'Monthly, quarterly and annual contracts',
      'Construction-site cleaning before handover',
      'Glass replacement',
    ],
    proof: [
      'Shangri-La Hotel (monthly)',
      'World Trade Center (annual)',
      'Civil Aviation Authority Katunayake (every three months)',
      'Cinnamon Life',
      'Marriott Hotel Weligama',
      'Grand Bell Hotel',
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
    image: { src: industrialImg, alt: 'Technician preparing an industrial floor' },
    gallery: [],
    oneLiner: 'Resin industrial floors and protective pipeline coatings for demanding sites.',
    tagline: 'Protection for hard-working surfaces.',
    intro:
      'The wrong floor fails early, creates safety risks and disrupts operations. We install resin industrial floors that are durable, hygienic and available with anti-slip finishes, and apply protective coatings that control corrosion on pipelines, including in harsh environments. Success depends on the right material, proper substrate preparation and a clear understanding of site conditions, so that is where we start.',
    scope: [
      'Resin and epoxy industrial flooring',
      'Anti-slip finishes',
      'Substrate preparation',
      'Pipeline corrosion-protection coatings',
      'Coatings for harsh and coastal environments',
    ],
    proof: [],
    faqs: [
      {
        q: 'How do you choose the right floor?',
        a: "We assess the substrate, the loads, cleaning needs and safety requirements, then recommend a system. We don't choose floors on appearance or price alone.",
      },
    ],
  },
  {
    slug: 'high-rise-maintenance',
    name: 'High-rise building maintenance',
    longName: 'High-rise building maintenance',
    shortName: 'Maintenance',
    image: { src: maintenanceImg, alt: 'Two technicians cleaning windows from a gondola' },
    gallery: [
      { src: maintGondola, alt: 'High-rise facade with a gondola and scaffolding in place' },
    ],
    oneLiner: 'Planned maintenance for tall buildings, with the right access for every job.',
    tagline: 'Planned care for tall buildings.',
    intro:
      "Preventive maintenance keeps a building's surfaces and systems in good order and avoids the cost of emergency repairs. We maintain high-rise, commercial and industrial buildings and choose the safest, most efficient access for each job: rope access, gondola, boom truck or scaffolding.",
    scope: [
      'Planned facade maintenance',
      'Crack and plaster repairs',
      'Plumbing repairs and replacement',
      'Access by rope, gondola, boom truck or scaffolding',
    ],
    proof: [
      'Aitken Spence (crack repair)',
      'NTB Head Office',
      'One Galle Face Office Tower',
      'Marine City Residence',
      'VFS Global',
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

export interface ProcessStep {
  title: string;
  text: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Share your requirement',
    text: 'Send us the details and a few photos through the quote form or on WhatsApp.',
  },
  {
    title: 'Site assessment',
    text: 'A specialist inspects the area, identifies the cause and selects the right system.',
  },
  {
    title: 'Written quotation',
    text: 'Scope, materials, timeline and guarantee, agreed in writing before work starts.',
  },
  {
    title: 'Supervised execution',
    text: 'We follow manufacturer specifications and industry standards, check quality at every stage and hand over a clean site.',
  },
];
