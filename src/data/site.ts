// The single place for company details. Change a value here and it updates across the whole site.

export const site = {
  name: 'Phoenix Decorators',
  legalName: 'Phoenix Decorators (Pvt) Ltd',
  url: 'https://www.phoenixdecorator.com',
  since: 2011,
  projectsCompleted: 350,
  cidaGrade: 'SP2',

  phone: {
    display: '+94 77 036 2222',
    href: 'tel:+94770362222',
  },
  whatsappNumber: '94770362222',
  email: 'info@phoenixdecorator.com',

  headOffice: {
    label: 'Head office',
    address: 'No. 328, Midland Estate, Welihena South, Kochchikade, Sri Lanka',
    lines: ['No. 328, Midland Estate', 'Welihena South, Kochchikade', 'Sri Lanka'],
  },
  commercialOffice: {
    label: 'Commercial office',
    address: '141, D R Wijewardena Mawatha, Colombo 10, Sri Lanka',
    lines: ['141, D R Wijewardena Mawatha', 'Colombo 10', 'Sri Lanka'],
  },
  hours: 'Monday to Saturday, 8.00 am to 5.00 pm',
  hoursNote: 'Closed on major public holidays.',
  urgentLine: 'Urgent leak? Call or WhatsApp +94 77 036 2222.',

  facebookUrl: 'https://www.facebook.com/people/Phoenix-Decorators-pvt-ltd/61570341385061/',
  linkedinUrl: 'https://lk.linkedin.com/company/phoenix-decorators-pvt-ltd',
  // [CONFIRM] Leave empty to keep hidden.
  instagramUrl: '',
  // [CONFIRM] Leave empty to keep hidden.
  companyProfileUrl: '',

  // Waterproofing carries a 25+ year guarantee. Other services: the period is stated in the quotation.
  warranty: {
    waterproofingYears: 25,
    label: '25+ year waterproofing guarantee',
    short: '25+ year waterproofing guarantee',
  },

  // Shown only while enabled and before the expiry date (YYYY-MM-DD).
  announcement: {
    enabled: false,
    text: 'Book a pre-monsoon waterproofing inspection',
    link: '/quote?service=waterproofing',
    expires: '2026-11-30',
  },

  // Analytics scripts load only when an ID is filled in.
  analytics: {
    gtmId: '',
    ga4Id: '',
    metaPixelId: '',
  },

  whatsappMessages: {
    general: "Hi Phoenix Decorators, I'd like a quote for work on my building.",
    access: "Hi Phoenix Decorators, I'd like advice on access for work at height on my building.",
    contact: 'Hi Phoenix Decorators, I have a question about my building.',
    notSure: "Hi Phoenix Decorators, I'm not sure which service I need. Can you help?",
    urgent: 'Hi Phoenix Decorators, I have an urgent leak and need help.',
    profile: 'Hi Phoenix Decorators, please send me your company profile.',
  },

  // Used while companyProfileUrl is empty: "Request our company profile" by email.
  profileEmail: {
    subject: 'Company profile request',
    body: 'Hello, please send me your company profile and registration details. Thank you.',
  },
} as const;

export function whatsappUrl(message: string = site.whatsappMessages.general): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const profileEmailUrl = `mailto:${site.email}?subject=${encodeURIComponent(
  site.profileEmail.subject,
)}&body=${encodeURIComponent(site.profileEmail.body)}`;

export function serviceWhatsappMessage(serviceName: string): string {
  return `Hi Phoenix Decorators, I'd like a quote for ${serviceName.toLowerCase()}.`;
}

export function isAnnouncementActive(now: Date = new Date()): boolean {
  const { enabled, expires } = site.announcement;
  if (!enabled) return false;
  if (!expires) return true;
  return now.getTime() <= new Date(`${expires}T23:59:59+05:30`).getTime();
}

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const labels = {
  quote: 'Get a free quote',
  whatsapp: 'Chat on WhatsApp',
  call: 'Call us',
} as const;
