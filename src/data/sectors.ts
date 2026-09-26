import type { ServiceSlug } from './services';

export type SectorSlug =
  | 'hospitality'
  | 'healthcare'
  | 'corporate'
  | 'residential'
  | 'public'
  | 'retail-industrial';

export interface Sector {
  slug: SectorSlug;
  name: string;
  intro: string;
  /** The services this sector uses most, in order. */
  services: ServiceSlug[];
  clients: string[];
}

export const sectors: Sector[] = [
  {
    slug: 'hospitality',
    name: 'Hotels and resorts',
    intro:
      'Guests notice everything. We keep glass, facades and roofs in top condition and plan every job around occupancy, so guests are disturbed as little as possible.',
    services: ['glass-cleaning', 'painting', 'waterproofing', 'sealant-application'],
    clients: [
      'Shangri-La Hotel',
      'Cinnamon Life',
      'Marriott Hotel Weligama',
      'Grand Bell Hotel',
      'RIU Hotel Ahungalla',
      'Airport Garden Hotel Seeduwa',
      'Summer Season Hotel Mirissa',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Hospitals and healthcare',
    intro:
      "Hospitals can't close for maintenance. We work in planned sections, keep work areas tidy and stop the leaks that disrupt care.",
    services: ['waterproofing', 'painting', 'sealant-application', 'high-rise-maintenance'],
    clients: [
      'Hemas Hospital Wattala',
      'Hemas Hospital Thalawathugoda',
      'Sethma Hospital Gampaha',
      'Hemas Pharmaceuticals',
    ],
  },
  {
    slug: 'corporate',
    name: 'Corporate offices and banks',
    intro:
      'Your building represents your brand. We keep head offices and bank branches weathertight, freshly finished and clean, with work scheduled around business hours where needed.',
    services: ['painting', 'glass-cleaning', 'sealant-application', 'waterproofing'],
    clients: [
      'Aitken Spence Head Office',
      'HSBC Head Office',
      'NDB Bank',
      'Dialog Head Office',
      'NTB Head Office',
      'World Trade Center',
      'Ceylinco Life',
      'Sampath Bank',
      "People's Leasing",
      'Browns Capital',
      'Siyapatha Building',
      'Access Towers',
      'VFS Global',
    ],
  },
  {
    slug: 'residential',
    name: 'Residential towers and apartments',
    intro:
      'Management corporations and residents need work that is safe, quiet and well organised. We protect towers from the roof down and keep facades looking their best.',
    services: ['waterproofing', 'painting', 'glass-cleaning', 'high-rise-maintenance'],
    clients: [
      'One Galle Face Residence',
      'Cinnamon Garden Residence',
      'Cinnamon Suites and Residence',
      'Monarch Residence',
      'Empire Residencies',
      'Marine City Residence',
      'Altair Residencies',
      'Suncity Residencies',
      '77th on Fourth Residence',
      '7 Sense',
      'Havelock City',
    ],
  },
  {
    slug: 'public',
    name: 'Airports and public buildings',
    intro:
      "Public buildings run to strict standards and schedules. We have delivered for the country's main international airport, the aviation authority and government offices.",
    services: ['waterproofing', 'painting', 'glass-cleaning'],
    clients: [
      'Bandaranaike International Airport',
      'Civil Aviation Authority',
      'Survey Department',
      'District Secretariat Office Galle',
      'Western Province Building Battaramulla',
      'Hakmana Primary School',
    ],
  },
  {
    slug: 'retail-industrial',
    name: 'Retail, ports and industry',
    intro:
      'Malls, ports and industrial sites need tough finishes and minimal downtime. We plan work around operations and choose systems built for heavy use.',
    services: ['industrial-coatings', 'painting', 'waterproofing', 'glass-cleaning'],
    clients: [
      'Kandy City Center',
      'One Galle Face Mall',
      'Access West Port Terminal',
      'Colombo Sea Port (Rapiscan Building)',
      'Luminex (Pvt) Ltd',
    ],
  },
];

export const facilityManagementLine =
  'We also work with facility management companies that look after buildings in every sector.';

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
