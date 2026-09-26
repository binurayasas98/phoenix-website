import { site } from './site';
import type { Faq } from './services';

// "Common questions" on the contact page (/contact#faq). Also output as FAQPage structured data.
export const commonFaqs: Faq[] = [
  {
    q: 'Is the quotation free?',
    a: 'Yes. Consultations and quotations are free, with no obligation.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We are based in Colombo and work across Sri Lanka, with most projects in the Western Province. Recent work includes Kandy, Galle, Weligama and Mirissa.',
  },
  {
    q: 'Are you registered and insured?',
    a: 'Yes. We are registered with CIDA at SP2 level for painting and waterproofing, and every project is covered by third-party insurance.',
  },
  {
    q: 'Can you work while the building is in use?',
    a: 'Yes. We plan the work in sections and agree timings with you, so occupants and operations are disturbed as little as possible.',
  },
  {
    q: 'Do you offer maintenance contracts?',
    a: 'Yes. Clients use us on monthly, quarterly and annual contracts, and we can propose a plan for your building.',
  },
  {
    q: 'What guarantee do you give?',
    a: `A written workmanship guarantee of ${site.warranty.years}+ years, depending on the system installed. The exact period is stated in your quotation.`,
  },
];
