// Real testimonials only, each with the client's permission. Never invent one.
// The home testimonials section renders only when this list has items.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  permissionConfirmed: boolean;
}

export const testimonials: Testimonial[] = [];
