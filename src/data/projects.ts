/**
 * Project gallery. To add a project: put the photo in src/assets/photos/, set `photo`
 * to its filename, and write `alt` text describing what the photo actually shows.
 */
export type ProjectCategory = 'residential' | 'commercial' | 'industrial';

export interface Project {
  /** Used for the card's anchor on the Projects page, e.g. /projects/#switchboard-upgrade */
  slug: string;
  title: string;
  category: ProjectCategory;
  suburb: string;
  description: string;
  alt: string;
  photo?: string;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'industrial', label: 'Industrial' },
];

const SUBURB = '[PLACEHOLDER - suburb]';

// Photos are from the business's current website. Titles describe what each photo shows;
// suburbs and job details still need to come from the business.
// Ordered so the first six (shown on the home page) mix all three types.
export const projects: Project[] = [
  {
    slug: 'open-plan-kitchen',
    title: 'Open-plan kitchen & dining',
    category: 'residential',
    suburb: SUBURB,
    description: '[PLACEHOLDER - lighting and power work on this home]',
    alt: 'Open-plan kitchen and dining area with feature and downlighting',
    photo: 'kitchen-dining.jpg',
  },
  {
    slug: 'office-warehouse-development',
    title: 'Office & warehouse development',
    category: 'commercial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - electrical work on this development]',
    alt: 'Aerial view of a new two-storey office and warehouse development',
    photo: 'office-warehouse-aerial.jpg',
  },
  {
    slug: 'industrial-warehouse',
    title: 'Industrial warehouse',
    category: 'industrial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - power, lighting or switchboard work installed]',
    alt: 'Aerial view of a new industrial warehouse beside a road',
    photo: 'industrial-warehouse-aerial.jpg',
  },
  {
    slug: 'townhouse-build',
    title: 'Townhouse build',
    category: 'residential',
    suburb: SUBURB,
    description: '[PLACEHOLDER - number of homes and electrical work involved]',
    alt: 'Townhouses under construction with work vans parked out the front',
    photo: 'townhouse-build-vans.jpg',
  },
  {
    slug: 'office-warehouse-complex',
    title: 'Office & warehouse complex',
    category: 'commercial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - electrical work on this complex]',
    alt: 'Aerial view of an office and warehouse complex with a car park',
    photo: 'office-warehouse-complex-aerial.jpg',
  },
  {
    slug: 'warehouse-development',
    title: 'Warehouse development',
    category: 'industrial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - electrical work on this development]',
    alt: 'Aerial view of a warehouse development',
    photo: 'warehouse-development-aerial.jpg',
  },
  {
    slug: 'new-home-kitchen',
    title: 'New home kitchen',
    category: 'residential',
    suburb: SUBURB,
    description: '[PLACEHOLDER - lighting and power points installed]',
    alt: 'White kitchen with a stone island bench in a new home',
    photo: 'white-kitchen.jpg',
  },
  {
    slug: 'warehouse-high-level-work',
    title: 'Warehouse high-level work',
    category: 'industrial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - what was installed at height]',
    alt: 'Electrician working from a Supreme-branded scissor lift under a warehouse roof',
    photo: 'warehouse-scissor-lift.jpg',
  },
  {
    slug: 'commercial-building',
    title: 'Commercial building',
    category: 'commercial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - electrical work on this building]',
    alt: 'Aerial view of a commercial building on a street corner',
    photo: 'commercial-building-aerial.jpg',
  },
  {
    slug: 'townhouse-development',
    title: 'Townhouse development',
    category: 'residential',
    suburb: SUBURB,
    description: '[PLACEHOLDER - number of homes and electrical work involved]',
    alt: 'Aerial view of a row of new townhouses',
    photo: 'townhouse-development-aerial.jpg',
  },
  {
    slug: 'warehouse-construction',
    title: 'Warehouse construction',
    category: 'industrial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - electrical work on this build]',
    alt: 'Aerial view of a warehouse under construction',
    photo: 'warehouse-construction-aerial.jpg',
  },
  {
    slug: 'residential-development',
    title: 'Residential development site',
    category: 'residential',
    suburb: SUBURB,
    description: '[PLACEHOLDER - electrical work on this site]',
    alt: 'Aerial view of a residential development site being prepared',
    photo: 'residential-subdivision-aerial.jpg',
  },
  {
    slug: 'industrial-estate',
    title: 'Industrial estate',
    category: 'industrial',
    suburb: SUBURB,
    description: '[PLACEHOLDER - electrical work on this estate]',
    alt: 'Aerial view of warehouses in an industrial estate',
    photo: 'industrial-estate-aerial.jpg',
  },
];

export const categoryLabel = (id: ProjectCategory) =>
  projectCategories.find((category) => category.id === id)?.label ?? id;
