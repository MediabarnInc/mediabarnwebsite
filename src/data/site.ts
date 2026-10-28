// Single source for the three pillars and the products. Pages and nav read from here.

export type PillarId = 'research' | 'design' | 'product';

export interface Pillar {
  id: PillarId;
  name: string;
  /** what the pillar does in the loop: Understand → Design → Run */
  verb: string;
  href: string;
  /** the visitor's own words: used by the home page's “What do you need?” router */
  need: string;
  oneLiner: string;
  /** 3 highlights shown wherever the pillar is summarized */
  highlights: string[];
  /** how it hands off to the next pillar in the loop */
  handoff: string;
}

// Order is the loop order: research feeds design, design becomes product, product data feeds research.
export const pillars: Pillar[] = [
  {
    id: 'research',
    name: 'Research',
    verb: 'Understand',
    href: '/research/',
    need: 'understand what my users actually do',
    oneLiner: 'Usability testing, recruiting, focus groups, and lab facilities in Arlington, Virginia.',
    highlights: ['Usability and mobile testing', 'Participant recruiting', 'Focus group and lab rental'],
    handoff: 'What we learn in the lab becomes the brief for design.',
  },
  {
    id: 'design',
    name: 'Design',
    verb: 'Shape',
    href: '/design/',
    need: 'fix or rethink an experience',
    oneLiner: 'Human-Centered Design (HCD) for service design, customer experience, and user experience.',
    highlights: ['Journey maps and service blueprints', 'UX and UI design, prototypes', 'Accessibility and 508 compliance'],
    handoff: 'When the same problem shows up across clients, we build a product for it.',
  },
  {
    id: 'product',
    name: 'Product',
    verb: 'Run',
    href: '/product/',
    need: 'run my organization with better tools',
    oneLiner: 'Software we build and support, shaped by the same research and design methods.',
    highlights: ['Chirp, Edjit, CXAlign', 'Mediabarn Time', 'Built and supported by our team'],
    handoff: 'Every product is tested with real users, so it keeps feeding research.',
  },
];

export const pillar = (id: PillarId) => pillars.find((p) => p.id === id)!;

export interface Product {
  slug: string;
  name: string;
  /** who it is for, as an overline */
  for: string;
  summary: string;
  href: string;
}

export const products: Product[] = [
  {
    slug: 'chirp',
    name: 'Chirp',
    for: 'Country clubs',
    summary: 'Members, events, and RSVPs in one place, so club staff spend less time on spreadsheets and more time with members.',
    href: '/product/chirp/',
  },
  {
    slug: 'edjit',
    name: 'Edjit',
    for: 'Government contractors',
    summary: 'An eLearning platform for building internal courses and tracking who has completed them.',
    href: '/product/edjit/',
  },
  {
    slug: 'cx-align',
    name: 'CXAlign',
    for: 'Healthcare leaders',
    summary: 'One clear view of patient experience work: priorities, initiatives, research, and the teams moving it forward.',
    href: '/product/cx-align/',
  },
  {
    slug: 'time',
    name: 'Mediabarn Time',
    for: 'Professional services teams',
    summary: 'Track time, bill clients, see where team hours go, and measure performance, without enterprise pricing.',
    href: '/product/time/',
  },
];

export const contact = {
  email: 'contactus@mediabarninc.com',
  phone: '703.964.0440',
  offices: [
    { name: 'Arlington (research lab)', lines: ['2200 Clarendon Blvd., #1401', 'Arlington, VA 22201'] },
    { name: 'Virginia Beach', lines: ['4500 Main Street, #630', 'Virginia Beach, VA 23462'] },
  ],
};
