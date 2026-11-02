// Client cards for the home hero strip, from Figma "MB UX Assets" › "Mediabarn alt" (node 2023:12997),
// in the design's left-to-right order. Assets supplied 2026-10-28 (public/images/hero-alt):
// the card photos come with their color tint already applied, so no overlay is added here.
// Each logo sits in the box the Figma layout gives it, as % insets of the 245 × 245 card (top right bottom left).

export interface ClientCard {
	name: string;
	photo: string;
	logo: string;
	/** where the logo sits on the card */
	box: string;
	/** Navy Federal's logo is nested one level deeper in Figma */
	inner?: string;
	/** the case study this card links to (/work/<slug>/, from src/data/cases.ts) */
	slug: string;
}

const A = '/images/hero-alt';

export const clientCards: ClientCard[] = [
	{ name: 'Navy Federal Credit Union', slug: 'navy-federal', photo: `${A}/card-navy-federal.webp`, logo: `${A}/logo-navy-federal.svg`, box: 'inset:42.43% 26.7% -6.72% 9.01%', inner: '24.74% 1.47%' },
	{ name: 'United States Postal Service', slug: 'usps', photo: `${A}/card-usps.webp`, logo: `${A}/logo-usps.svg`, box: 'inset:37.27% 15.93% 5.3% 15.93%' },
	{ name: 'IRS', slug: 'irs', photo: `${A}/card-irs.webp`, logo: `${A}/logo-irs.svg`, box: 'inset:66.25% 7.43% 4.79% 7.14%' },
	{ name: 'Sentara', slug: 'sentara', photo: `${A}/card-sentara.webp`, logo: `${A}/logo-sentara.svg`, box: 'inset:77.57% 8.14% 8.29% 7.86%' },
	{ name: 'City of Virginia Beach', slug: 'virginia-beach', photo: `${A}/card-virginia-beach.webp`, logo: `${A}/logo-virginia-beach.svg`, box: 'top:64.82%;bottom:5.3%;left:50%;translate:-50% 0;aspect-ratio:210/73.21' },
	{ name: 'Uplifting Athletes', slug: 'uplifting-athletes', photo: `${A}/card-uplifting-athletes.webp`, logo: `${A}/logo-uplifting-athletes.svg`, box: 'top:74.47%;bottom:8.39%;left:50%;translate:-50% 0;aspect-ratio:70/42' },
];
