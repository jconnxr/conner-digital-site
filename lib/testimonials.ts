export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Optional — link to Google review profile */
  sourceUrl?: string;
};

/**
 * Real client quotes only. Never add invented, composite, or "representative"
 * entries — publishing testimonials that aren't from real, consenting clients
 * is an FTC problem, not just a credibility one.
 *
 * Add an entry only when you have (a) a real client, (b) their actual words,
 * and (c) written permission to publish their name and business.
 *
 * While this list is empty the Testimonials section renders an honest
 * "coming soon" state instead. Add the first entry and the card grid comes
 * back automatically — no layout work needed.
 */
export const testimonials: Testimonial[] = [];
