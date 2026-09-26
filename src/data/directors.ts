import type { ImageMetadata } from 'astro';
import christyImg from '../assets/images/director-christy.jpg';
import rangaImg from '../assets/images/director-ranga.jpg';

// [CONFIRM] Titles, the spelling "Gamachchi" and both messages with each director before launch.
export interface Director {
  slug: string;
  name: string;
  title: string;
  pullQuote: string;
  /** Continues the pull quote as one quote: the pull quote in ink, then this message in graphite. */
  message: string;
  photo: ImageMetadata;
  alt: string;
  note?: string;
}

export const directors: Director[] = [
  {
    slug: 'christy',
    name: 'Mr. Christy Marcelline',
    title: 'Founder and Managing Director',
    pullQuote: "Quality isn't just a promise. It's our identity.",
    message:
      'At Phoenix Decorators, we believe every project deserves craftsmanship that lasts a lifetime. Our work is built on precision, responsibility and a deep commitment to delivering results that add real value to every home and business we serve.',
    photo: christyImg,
    alt: 'Mr. Christy Marcelline, Founder and Managing Director of Phoenix Decorators',
  },
  {
    slug: 'ranga',
    name: 'Mr. Ranga Gamachchi',
    title: 'Director and General Manager',
    pullQuote: 'Our mission is simple: deliver work we can be proud of, and service our clients can trust.',
    message:
      "Every wall we touch reflects our commitment to excellence, professionalism and long-term reliability. We aim to exceed expectations through consistent quality, transparent communication and genuine respect for our clients' spaces.",
    photo: rangaImg,
    alt: 'Mr. Ranga Gamachchi, Director and General Manager of Phoenix Decorators',
    note: 'Ranga personally supervised the waterproofing and painting of Terminal 1 at Bandaranaike International Airport.',
  },
];
