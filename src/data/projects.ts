import type { Photo, ServiceSlug } from './services';
import type { SectorSlug } from './sectors';

import aitkenSpenceImg from '../assets/images/project-aitken-spence.jpg';
import grandBellImg from '../assets/images/project-grand-bell.jpg';
// These five show the client's building, not our team at work. Use them only on that client's
// project card and the matching sector section, never in a hero, as a service image or as a background.
import biaImg from '../assets/images/project-bia.jpg';
import shangriLaImg from '../assets/images/project-shangri-la.jpg';
import oneGalleFaceImg from '../assets/images/project-one-galle-face.jpg';
import worldTradeCenterImg from '../assets/images/project-world-trade-center.jpg';
import hemasHospitalsImg from '../assets/images/project-hemas-hospitals.jpg';

export interface Project {
  slug: string;
  client: string;
  location: string;
  sector: SectorSlug;
  services: ServiceSlug[];
  scope: string;
  contract?: string;
  image?: Photo;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'bia',
    client: 'Bandaranaike International Airport',
    location: 'Katunayake',
    sector: 'public',
    services: ['waterproofing', 'painting'],
    scope: 'Terminal 1 waterproofing and painting, supervised by our director Ranga Gamachchi.',
    image: { src: biaImg, alt: 'Bandaranaike International Airport terminal building, Katunayake' },
    featured: true,
  },
  {
    slug: 'aitken-spence',
    client: 'Aitken Spence Head Office',
    location: 'Vauxhall Street, Colombo 2',
    sector: 'corporate',
    services: ['painting', 'waterproofing', 'high-rise-maintenance'],
    scope: 'Exterior painting by rope access, waterproofing and crack repair.',
    image: { src: aitkenSpenceImg, alt: 'Rope access painting at the Aitken Spence Head Office' },
    featured: true,
  },
  {
    slug: 'shangri-la',
    client: 'Shangri-La Hotel',
    location: 'Colombo',
    sector: 'hospitality',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
    contract: 'Monthly',
    image: { src: shangriLaImg, alt: 'Shangri-La Hotel tower overlooking Galle Face, Colombo', position: '82% center' },
    featured: true,
  },
  {
    slug: 'grand-bell',
    client: 'Grand Bell Hotel',
    location: 'Colombo 3',
    sector: 'hospitality',
    services: ['glass-cleaning'],
    scope: 'Glass washing by rope access.',
    image: { src: grandBellImg, alt: 'Rope access glass washing at the Grand Bell Hotel' },
    featured: true,
  },
  {
    slug: 'cinnamon-garden',
    client: 'Cinnamon Garden Residence',
    location: 'Ward Place, Colombo 7',
    sector: 'residential',
    services: ['waterproofing'],
    scope: 'Rooftop waterproofing with a sprayed-on polyurea system.',
    featured: true,
  },
  {
    slug: 'one-galle-face',
    client: 'One Galle Face',
    location: 'Colombo 2',
    sector: 'residential',
    services: ['waterproofing', 'painting', 'glass-cleaning', 'high-rise-maintenance'],
    scope:
      'Car park ramp waterproofing and annual glass washing at the residence, painting and crack repair at the office tower and mall.',
    image: { src: oneGalleFaceImg, alt: 'One Galle Face mall and towers, Colombo', position: '90% center' },
    featured: true,
  },
  {
    slug: 'world-trade-center',
    client: 'World Trade Center',
    location: 'Colombo',
    sector: 'corporate',
    services: ['glass-cleaning', 'sealant-application'],
    scope: 'Glass washing and sealant application.',
    contract: 'Annual',
    image: { src: worldTradeCenterImg, alt: 'World Trade Center twin towers, Colombo', position: '58% center' },
  },
  {
    slug: 'civil-aviation',
    client: 'Civil Aviation Authority',
    location: 'Katunayake',
    sector: 'public',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
    contract: 'Every three months',
  },
  {
    slug: 'monarch',
    client: 'Monarch Residence',
    location: 'Colombo 3',
    sector: 'residential',
    services: ['waterproofing', 'painting', 'sealant-application', 'glass-cleaning'],
    scope: 'Rooftop concrete slab waterproofing and painting, sealant application and glass washing.',
  },
  {
    slug: 'kandy-city-center',
    client: 'Kandy City Center',
    location: 'Kandy',
    sector: 'retail-industrial',
    services: ['painting', 'glass-cleaning'],
    scope: 'Basement car park painting, fifth floor internal painting and roof washing.',
  },
  {
    slug: 'marine-city',
    client: 'Marine City Residence',
    location: 'Dehiwala',
    sector: 'residential',
    services: ['painting', 'waterproofing', 'high-rise-maintenance'],
    scope: 'Podium external wall painting, rooftop flower trough waterproofing and external crack repair.',
  },
  {
    slug: 'empire',
    client: 'Empire Residencies',
    location: 'Colombo 2',
    sector: 'residential',
    services: ['painting', 'waterproofing', 'sealant-application', 'high-rise-maintenance'],
    scope: 'External wall crack repair and painting, waterproofing and sealant application.',
  },
  {
    slug: 'survey-department',
    client: 'Survey Department',
    location: 'Narahenpita',
    sector: 'public',
    services: ['waterproofing'],
    scope: 'Weak concrete rectification and waterproofing.',
  },
  {
    slug: 'hemas-hospitals',
    client: 'Hemas Hospitals',
    location: 'Wattala and Thalawathugoda',
    sector: 'healthcare',
    services: ['waterproofing', 'painting', 'sealant-application', 'high-rise-maintenance'],
    scope: 'Waterproofing, painting, sealant application and crack repair.',
    image: { src: hemasHospitalsImg, alt: 'Hemas Hospitals building entrance' },
  },
  {
    slug: 'marriott-weligama',
    client: 'Marriott Hotel',
    location: 'Weligama',
    sector: 'hospitality',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
  },
  {
    slug: 'cinnamon-life',
    client: 'Cinnamon Life',
    location: 'Colombo 2',
    sector: 'hospitality',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
  },
  {
    slug: 'cinnamon-suites',
    client: 'Cinnamon Suites and Residence',
    location: 'Colombo',
    sector: 'residential',
    services: ['glass-cleaning'],
    scope: 'External facade cleaning.',
  },
  {
    slug: 'dialog',
    client: 'Dialog Head Office',
    location: 'Union Place, Colombo 2',
    sector: 'corporate',
    services: ['waterproofing', 'painting', 'sealant-application'],
    scope: 'Waterproofing including the new building rooftop, painting and sealant application.',
  },
  {
    slug: 'hsbc',
    client: 'HSBC Head Office',
    location: 'Colombo 1',
    sector: 'corporate',
    services: ['painting', 'glass-cleaning'],
    scope: 'Painting and glass washing.',
  },
  {
    slug: 'west-port-terminal',
    client: 'Access West Port Terminal',
    location: 'Colombo Port',
    sector: 'retail-industrial',
    services: ['painting'],
    scope: 'Painting of the terminal buildings.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Projects that include a service, photo projects first (data order within each group). */
export function projectsForService(slug: ServiceSlug): Project[] {
  const matches = projects.filter((p) => p.services.includes(slug));
  return [...matches.filter((p) => p.image), ...matches.filter((p) => !p.image)];
}
