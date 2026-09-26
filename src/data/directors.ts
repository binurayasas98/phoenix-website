import type { ImageMetadata } from 'astro';
import christyImg from '../assets/images/director-christy.jpg';
import rangaImg from '../assets/images/director-ranga.jpg';

// [CONFIRM] Titles, the spelling "Gamachchi" and both statements with each director before launch.
export interface Director {
  slug: string;
  name: string;
  title: string;
  pullQuote: string;
  statement: string;
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
    statement:
      'At Phoenix Decorators, we are committed to delivering reliable, high-quality solutions that protect buildings and extend their life. With a strong focus on technical excellence, quality materials and professional workmanship, we meet the specific needs of every project. Our goal is to build lasting relationships with our clients through trust, performance and consistent results.',
    photo: christyImg,
    alt: 'Mr. Christy Marcelline, Founder and Managing Director of Phoenix Decorators',
  },
  {
    slug: 'ranga',
    name: 'Mr. Ranga Gamachchi',
    title: 'Director and General Manager',
    pullQuote: 'Our mission is simple: deliver work we can be proud of, and service our clients can trust.',
    statement:
      'We specialise in technically sound, durable solutions tailored to the demands of modern construction. Our work is guided by detailed site assessments, correct system selection and strict compliance with manufacturer specifications and industry standards. By combining skilled workmanship, proven materials and quality control at every stage, we ensure long-term performance and reliability in every project.',
    photo: rangaImg,
    alt: 'Mr. Ranga Gamachchi, Director and General Manager of Phoenix Decorators',
    note: 'Ranga personally supervised the waterproofing and painting of Terminal 1 at Bandaranaike International Airport.',
  },
];
