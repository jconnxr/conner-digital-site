export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Optional — link to Google review profile */
  sourceUrl?: string;
};

/**
 * Client quotes for the homepage testimonials section.
 * IMPORTANT: entries below are still layout placeholders (not real published reviews).
 * Replace with real names, businesses, and quotes only when you have permission to publish.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "They explained everything in plain English and our new site actually brings in calls—we’re not guessing anymore.",
    name: "Local service owner",
    role: "Oklahoma City metro",
    rating: 5,
  },
  {
    quote: "No runaround. We talk to the same person every time, and follow-up is fast.",
    name: "Small business operator",
    role: "Central Oklahoma",
    rating: 5,
  },
  {
    quote: "Finally have booking and leads in one place instead of scattered texts and voicemails.",
    name: "Practice administrator",
    role: "Tulsa area",
    rating: 5,
  },
];
