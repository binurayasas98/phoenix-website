import type { Photo, ServiceSlug } from './services';

import aitkenSpenceImg from '../assets/images/project-aitken-spence.jpg';
import grandBellImg from '../assets/images/project-grand-bell.jpg';

export interface Project {
  slug: string;
  client: string;
  location: string;
  sector: string;
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
    sector: 'Aviation',
    services: ['waterproofing', 'painting'],
    scope:
      'Terminal 1 waterproofing and painting, carried out under the supervision of director Ranga Gamachchi.',
    featured: true,
  },
  {
    slug: 'aitken-spence',
    client: 'Aitken Spence Head Office',
    location: 'Vauxhall Street, Colombo 2',
    sector: 'Corporate',
    services: ['painting', 'waterproofing', 'high-rise-maintenance'],
    scope: 'Exterior painting by rope access, waterproofing and crack repair.',
    image: { src: aitkenSpenceImg, alt: 'Rope access painting at the Aitken Spence Head Office' },
    featured: true,
  },
  {
    slug: 'shangri-la',
    client: 'Shangri-La Hotel',
    location: 'Colombo',
    sector: 'Hospitality',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
    contract: 'Monthly',
    featured: true,
  },
  {
    slug: 'grand-bell',
    client: 'Grand Bell Hotel',
    location: 'Colombo 3',
    sector: 'Hospitality',
    services: ['glass-cleaning'],
    scope: 'Glass washing by rope access.',
    image: { src: grandBellImg, alt: 'Rope access glass washing at the Grand Bell Hotel' },
    featured: true,
  },
  {
    slug: 'cinnamon-garden',
    client: 'Cinnamon Garden Residence',
    location: 'Ward Place, Colombo 7',
    sector: 'Residential',
    services: ['waterproofing'],
    scope: 'Rooftop waterproofing with a sprayed-on polyurea system.',
    featured: true,
  },
  {
    slug: 'one-galle-face',
    client: 'One Galle Face',
    location: 'Colombo 2',
    sector: 'Mixed use',
    services: ['waterproofing', 'painting', 'glass-cleaning', 'high-rise-maintenance'],
    scope:
      'Car park ramp waterproofing and annual glass washing at the residence, painting and crack repair at the office tower and mall.',
    featured: true,
  },
  {
    slug: 'world-trade-center',
    client: 'World Trade Center',
    location: 'Colombo',
    sector: 'Corporate',
    services: ['glass-cleaning', 'sealant-application'],
    scope: 'Glass washing and sealant application.',
    contract: 'Annual',
  },
  {
    slug: 'civil-aviation',
    client: 'Civil Aviation Authority',
    location: 'Katunayake',
    sector: 'Aviation',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
    contract: 'Every three months',
  },
  {
    slug: 'monarch',
    client: 'Monarch Residence',
    location: 'Colombo 3',
    sector: 'Residential',
    services: ['waterproofing', 'painting', 'sealant-application', 'glass-cleaning'],
    scope:
      'Rooftop concrete slab waterproofing and painting, sealant application and glass washing.',
  },
  {
    slug: 'kandy-city-center',
    client: 'Kandy City Center',
    location: 'Kandy',
    sector: 'Retail',
    services: ['painting', 'glass-cleaning'],
    scope: 'Basement car park painting, fifth floor internal painting and roof washing.',
  },
  {
    slug: 'marine-city',
    client: 'Marine City Residence',
    location: 'Dehiwala',
    sector: 'Residential',
    services: ['painting', 'waterproofing', 'high-rise-maintenance'],
    scope:
      'Podium external wall painting, rooftop flower trough waterproofing and external crack repair.',
  },
  {
    slug: 'empire',
    client: 'Empire Residencies',
    location: 'Colombo 2',
    sector: 'Residential',
    services: ['painting', 'waterproofing', 'sealant-application', 'high-rise-maintenance'],
    scope: 'External wall crack repair and painting, waterproofing and sealant application.',
  },
  {
    slug: 'survey-department',
    client: 'Survey Department',
    location: 'Narahenpita',
    sector: 'Government',
    services: ['waterproofing'],
    scope: 'Weak concrete rectification and waterproofing.',
  },
  {
    slug: 'hemas-hospitals',
    client: 'Hemas Hospitals',
    location: 'Wattala and Thalawathugoda',
    sector: 'Healthcare',
    services: ['waterproofing', 'painting', 'sealant-application', 'high-rise-maintenance'],
    scope: 'Waterproofing, painting, sealant application and crack repair.',
  },
  {
    slug: 'marriott-weligama',
    client: 'Marriott Hotel',
    location: 'Weligama',
    sector: 'Hospitality',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
  },
  {
    slug: 'cinnamon-life',
    client: 'Cinnamon Life',
    location: 'Colombo 2',
    sector: 'Mixed use',
    services: ['glass-cleaning'],
    scope: 'Glass washing.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
