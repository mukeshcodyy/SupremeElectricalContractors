/**
 * Business details used across the whole site. Change them here and every page,
 * the footer, the quote form and the structured data follow.
 *
 * Anything starting with "[PLACEHOLDER" still needs real information from the
 * business. Placeholders are highlighted on the page so they are easy to spot.
 */
export const site = {
  name: 'Supreme Electrical Contractors',
  shortName: 'Supreme Electrical',
  contactName: 'Alex',

  phone: {
    display: '0437 898 022',
    href: 'tel:0437898022',
    international: '+61 437 898 022',
  },
  email: 'alex@supreme-electrical.au',

  address: {
    street: '25 Jutland Way',
    suburb: 'Epping',
    state: 'VIC',
    postcode: '3076',
    country: 'AU',
    region: 'Melbourne’s north',
  },

  social: {
    instagram: {
      url: 'https://www.instagram.com/supremeelectricalcontractors/',
      handle: '@supremeelectricalcontractors',
    },
    facebook: {
      url: 'https://www.facebook.com/profile.php?id=61556111511519',
    },
  },

  licence: {
    rec: '[PLACEHOLDER]',
    electrical: '[PLACEHOLDER]',
    insurance: '[PLACEHOLDER - insurer and level of cover]',
    abn: '[PLACEHOLDER]',
  },

  hours: '[PLACEHOLDER - business hours]',
  serviceAreas: '[PLACEHOLDER - suburbs to be confirmed]',

  /**
   * Concept build: keeps search engines from indexing pages that still contain
   * placeholders. Set to false when the site launches.
   */
  noindex: true,
} as const;

export const fullAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;

const mapsQuery = encodeURIComponent(`${fullAddress}, Australia`);
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith('[PLACEHOLDER');
}

/** The three steps shown on every service page. Text may contain the phone number, which is linked automatically. */
export const processSteps = [
  {
    title: 'Enquire',
    icon: 'phone',
    text: `Call ${site.contactName} on ${site.phone.display} or send a quote request with a few details and a photo of the job.`,
  },
  {
    title: 'Quote',
    icon: 'fileText',
    text: 'We’ll talk through what you need and give you a clear, upfront quote before any work starts.',
  },
  {
    title: 'Job done',
    icon: 'checkCircle',
    text: 'The work is completed safely and to standard, the site is left tidy, and we walk you through what was done.',
  },
] as const;
