import { site } from '../data/site';

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const phonePattern = new RegExp(escapeRegExp(site.phone.display), 'g');

/**
 * Turns every mention of the business phone number in an HTML string into a
 * click-to-call link. Use with `set:html` for copy that mentions the number.
 */
export function linkPhones(html: string): string {
  return html.replace(phonePattern, `<a href="${site.phone.href}">${site.phone.display}</a>`);
}

/** Plain text version of an HTML string, for meta tags and structured data. */
export function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}
