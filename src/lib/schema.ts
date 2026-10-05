/**
 * schema.org structured data (JSON-LD). The layout adds the WebSite and Electrician
 * nodes to every page; pages can pass extra nodes such as Service, FAQPage and
 * BreadcrumbList.
 */
import { site } from '../data/site';
import { services, type Service } from '../data/services';
import { stripTags } from './text';

type Node = Record<string, unknown>;

const abs = (path: string, base: URL) => new URL(path, base).href;
export const businessId = (base: URL) => abs('/#business', base);

export function websiteSchema(base: URL): Node {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website', base),
    url: abs('/', base),
    name: site.name,
    inLanguage: 'en-AU',
    publisher: { '@id': businessId(base) },
  };
}

export function businessSchema(base: URL): Node {
  return {
    '@type': 'Electrician',
    '@id': businessId(base),
    name: site.name,
    url: abs('/', base),
    telephone: site.phone.international,
    email: site.email,
    image: abs('/og-image.png', base),
    logo: abs('/icon-512.png', base),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.instagram.url, site.social.facebook.url],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${service.name} electrical services`,
          url: abs(`/services/${service.slug}/`, base),
        },
      })),
    },
  };
}

export function serviceSchema(service: Service, base: URL): Node {
  return {
    '@type': 'Service',
    '@id': abs(`/services/${service.slug}/#service`, base),
    name: `${service.name} electrical services`,
    serviceType: `${service.name} electrician`,
    description: service.metaDescription,
    url: abs(`/services/${service.slug}/`, base),
    provider: { '@id': businessId(base) },
  };
}

export function faqSchema(faqs: Service['faqs']): Node {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: stripTags(faq.answer) },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[], base: URL): Node {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(item.path, base),
    })),
  };
}
