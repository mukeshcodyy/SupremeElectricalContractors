import type { IconName } from './icons';

export type ServiceSlug = 'residential' | 'commercial' | 'industrial' | 'maintenance';

export interface Service {
  slug: ServiceSlug;
  /** Short name, also used as the "Job type" value on the quote form. */
  name: string;
  icon: IconName;
  /** H1 on the service page. */
  heading: string;
  metaTitle: string;
  metaDescription: string;
  /** One-liner for service cards. */
  summary: string;
  /** Three key items shown on service cards. */
  highlights: string[];
  /** Intro paragraphs at the top of the service page. */
  intro: string[];
  included: { title: string; text: string; icon: IconName }[];
  /** Answers may contain simple HTML links. The phone number is linked automatically. */
  faqs: { question: string; answer: string }[];
  /** Hero photo. Add `file` (a filename in src/assets/photos/) to replace the placeholder. */
  photo: { caption: string; alt: string; file?: string };
}

export const services: Service[] = [
  {
    slug: 'residential',
    name: 'Residential',
    icon: 'home',
    heading: 'Residential Electrician',
    metaTitle: 'Residential Electrician Melbourne North | Supreme Electrical Contractors',
    metaDescription:
      'Switchboard upgrades, lighting, power points, safety switches, renovations and fault finding for homes in Melbourne’s north. Call 0437 898 022 for a free quote.',
    summary: 'Safe, tidy electrical work for your home, from a single power point to a full renovation.',
    highlights: ['Switchboard upgrades', 'Lighting & power points', 'Safety switches & fault finding'],
    intro: [
      'Whether it’s one new power point, a switchboard upgrade or the wiring for a full renovation, we treat your home with the same care we’d want in our own.',
      'With over 20 years in the trade, we’ll explain what needs doing in plain English, quote it clearly and get it done safely and to standard.',
    ],
    included: [
      {
        title: 'Switchboard upgrades',
        icon: 'switchboard',
        text: 'Replace an old fuse board with a modern switchboard, circuit breakers and safety switches.',
      },
      {
        title: 'Lighting',
        icon: 'lightbulb',
        text: 'Indoor and outdoor lighting, from LED downlights to feature and garden lights.',
      },
      {
        title: 'Power points',
        icon: 'plug',
        text: 'New and extra power points where you need them – kitchens, home offices, garages and outdoors.',
      },
      {
        title: 'Safety switches',
        icon: 'shieldCheck',
        text: 'Safety switches (RCDs) installed and tested to help protect your household from electric shock.',
      },
      {
        title: 'Renovations',
        icon: 'hammer',
        text: 'Electrical planning, wiring and fit-off for kitchen, bathroom and extension renovations.',
      },
      {
        title: 'Fault finding',
        icon: 'search',
        text: 'Power tripping or lights flickering? We track down the cause and fix it safely.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my switchboard needs upgrading?',
        answer:
          'Common signs include old ceramic fuses instead of circuit breakers, no safety switches, power that trips often, or a board with no room for new circuits. If you’re not sure, attach a photo of your switchboard to your <a href="/contact/?service=residential#quote">quote request</a> and we’ll take a look.',
      },
      {
        question: 'Why do I need safety switches?',
        answer:
          'A safety switch (RCD) cuts the power in a fraction of a second when it detects electricity leaking to earth – for example, through a person. They’re one of the most important safety devices in your home, and we can install and test them on your power and lighting circuits.',
      },
      {
        question: 'Can you work with my builder on a renovation?',
        answer:
          'Yes. We can work with you or your builder from the planning stage – power point and lighting layouts, new circuits and the final fit-off – so everything ends up where you want it.',
      },
      {
        question: 'Are your quotes free?',
        answer:
          'Yes. Tell us about the job (a photo helps) and we’ll give you a clear, free quote before any work starts.',
      },
    ],
    photo: {
      caption: 'Completed residential job',
      alt: 'Open-plan kitchen and dining area with feature and downlighting',
      file: 'kitchen-dining.jpg',
    },
  },
  {
    slug: 'commercial',
    name: 'Commercial',
    icon: 'building',
    heading: 'Commercial Electrician',
    metaTitle: 'Commercial Electrician Melbourne | Supreme Electrical Contractors',
    metaDescription:
      'Office and retail fit-outs, commercial lighting, data cabling, emergency and exit lighting and maintenance in Melbourne. Call 0437 898 022 for a free quote.',
    summary: 'Fit-outs, lighting, data and compliance work for offices, shops and commercial spaces.',
    highlights: ['Office & retail fit-outs', 'Lighting & data cabling', 'Emergency & exit lighting'],
    intro: [
      'Offices, shops and commercial spaces need power, lighting and data that simply work. We look after the electrical side of your fit-out or upgrade and help keep your premises safe and compliant.',
      'We’ll plan the work with you to keep disruption to your business to a minimum.',
    ],
    included: [
      {
        title: 'Office & retail fit-outs',
        icon: 'briefcase',
        text: 'Power, lighting and data for new fit-outs and refurbishments, from first fix to final fit-off.',
      },
      {
        title: 'Commercial lighting',
        icon: 'lightbulb',
        text: 'Energy-efficient LED lighting for offices, shops and workspaces, inside and out.',
      },
      {
        title: 'Data cabling',
        icon: 'network',
        text: 'Data and network cabling, neatly installed and clearly labelled.',
      },
      {
        title: 'Emergency & exit lighting',
        icon: 'doorOpen',
        text: 'Installation, routine testing and maintenance of emergency and exit lights, with records kept.',
      },
      {
        title: 'Maintenance',
        icon: 'wrench',
        text: 'Ongoing maintenance and repairs to keep your premises safe and running.',
      },
    ],
    faqs: [
      {
        question: 'Can you work around our trading hours?',
        answer:
          'Let us know your trading hours when you ask for a quote. We’ll plan the work around your business to keep disruption to a minimum.',
      },
      {
        question: 'Do you handle complete fit-outs?',
        answer:
          'Yes. We can look after the electrical side of an office or retail fit-out from start to finish – power, lighting, data and switchboard work – and work alongside your builder or shopfitter.',
      },
      {
        question: 'Do you test emergency and exit lighting?',
        answer:
          'Yes. Emergency and exit lights need regular testing to make sure they work when they’re needed. We install, test and maintain them, and keep records so you can show they’ve been checked.',
      },
      {
        question: 'Can you install data cabling?',
        answer:
          'Yes. We install data and network cabling for offices and shops, including new data points and tidy, labelled cable runs.',
      },
    ],
    photo: {
      caption: 'Completed commercial job',
      alt: 'Aerial view of an office and warehouse complex with a car park',
      file: 'office-warehouse-complex-aerial.jpg',
    },
  },
  {
    slug: 'industrial',
    name: 'Industrial',
    icon: 'factory',
    heading: 'Industrial Electrician',
    metaTitle: 'Industrial Electrician Melbourne | Supreme Electrical Contractors',
    metaDescription:
      'Factory and warehouse installations, three-phase power, machinery connections and switchboards for Melbourne industrial sites. Call 0437 898 022 for a free quote.',
    summary: 'Installations, three-phase power and switchboards for factories, warehouses and workshops.',
    highlights: ['Factory & warehouse installations', 'Three-phase power', 'Machinery connections'],
    intro: [
      'Factories, warehouses and workshops need electrical systems built for heavy use. We install and upgrade the power, switchboards and connections that keep industrial sites running safely.',
      'We’ll work with your team to plan the job around your operations and keep downtime to a minimum.',
    ],
    included: [
      {
        title: 'Factory & warehouse installations',
        icon: 'warehouse',
        text: 'Electrical installations for new and existing factories and warehouses, including power and lighting.',
      },
      {
        title: 'Three-phase power',
        icon: 'zap',
        text: 'Three-phase circuits and outlets for machinery, compressors and other heavy-duty equipment.',
      },
      {
        title: 'Machinery connections',
        icon: 'cog',
        text: 'Safe connection, isolation and testing of new and relocated machinery.',
      },
      {
        title: 'Switchboards',
        icon: 'switchboard',
        text: 'Main and distribution switchboard installations, upgrades and modifications.',
      },
    ],
    faqs: [
      {
        question: 'Can you install three-phase power?',
        answer:
          'Yes. We install three-phase circuits and outlets for machinery and heavy-duty equipment, and can tell you if your switchboard or supply needs upgrading to suit.',
      },
      {
        question: 'Can you connect new or relocated machinery?',
        answer:
          'Yes. We connect, isolate and test machinery so it’s ready to run safely, whether it’s a new install or a move to another part of your site.',
      },
      {
        question: 'Can you work while our site keeps operating?',
        answer:
          'In many cases, yes. We’ll plan the job with your team – including when and where power needs to be isolated – to keep downtime to a minimum.',
      },
      {
        question: 'Do you offer ongoing maintenance for industrial sites?',
        answer:
          'Yes. We offer scheduled maintenance, testing, repairs and breakdown response. See our <a href="/services/maintenance/">maintenance services</a> for details.',
      },
    ],
    photo: {
      caption: 'Completed industrial job',
      alt: 'Aerial view of a warehouse development',
      file: 'warehouse-development-aerial.jpg',
    },
  },
  {
    slug: 'maintenance',
    name: 'Maintenance',
    icon: 'wrench',
    heading: 'Electrical Maintenance',
    metaTitle: 'Electrical Maintenance & Repairs Melbourne | Supreme Electrical Contractors',
    metaDescription:
      'Scheduled electrical maintenance, testing, repairs and breakdown response for homes, businesses and industrial sites in Melbourne. Call 0437 898 022.',
    summary: 'Scheduled maintenance, testing, repairs and breakdown response to keep you up and running.',
    highlights: ['Scheduled maintenance', 'Testing & repairs', 'Breakdown response'],
    intro: [
      'Regular maintenance keeps your electrical systems safe and reliable, and helps catch small problems before they turn into costly breakdowns.',
      'We look after homes, businesses and industrial sites with scheduled maintenance, testing, repairs and breakdown response.',
    ],
    included: [
      {
        title: 'Scheduled maintenance',
        icon: 'calendarCheck',
        text: 'Planned visits to inspect, test and service your electrical systems.',
      },
      {
        title: 'Testing',
        icon: 'activity',
        text: 'Testing of safety switches, emergency and exit lighting and electrical installations, with clear records.',
      },
      {
        title: 'Repairs',
        icon: 'wrench',
        text: 'Safe, lasting repairs to faulty power, lighting, switchboards and equipment.',
      },
      {
        title: 'Breakdown response',
        icon: 'alertTriangle',
        text: 'When something fails, call us and we’ll work to get you back up and running.',
      },
    ],
    faqs: [
      {
        question: 'What does scheduled maintenance include?',
        answer:
          'It depends on your property, but it usually includes inspecting switchboards and wiring, testing safety switches, checking emergency and exit lighting, and fixing small issues before they become big ones. We’ll put together a schedule to suit you.',
      },
      {
        question: 'Do you look after homes as well as businesses?',
        answer: 'Yes. Maintenance and repairs are available for homes, commercial premises and industrial sites.',
      },
      {
        question: 'What should I do if I have an electrical breakdown?',
        answer:
          'If it’s safe to do so, switch off the affected circuit at your switchboard and keep clear of any damaged equipment, then call us on 0437 898 022. If there’s a fire or smoke, or someone has had an electric shock, call <a href="tel:000">000</a> first.',
      },
      {
        question: 'Can you set up a regular maintenance schedule?',
        answer:
          'Yes. We’ll work out what needs checking and how often, then book visits in advance so nothing gets missed.',
      },
    ],
    photo: {
      caption: 'Maintenance and testing',
      alt: 'Supreme Electrical Contractors electrician working at a switchboard',
      file: 'switchboard-work.jpg',
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
