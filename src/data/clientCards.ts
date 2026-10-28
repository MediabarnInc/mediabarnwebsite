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
}

const A = '/images/hero-alt';

export const clientCards: ClientCard[] = [
	{ name: 'Navy Federal Credit Union', photo: `${A}/card-navy-federal.png`, logo: `${A}/logo-navy-federal.svg`, box: 'inset:42.43% 26.7% -6.72% 9.01%', inner: '24.74% 1.47%' },
	{ name: 'United States Postal Service', photo: `${A}/card-usps.png`, logo: `${A}/logo-usps.svg`, box: 'inset:37.27% 15.93% 5.3% 15.93%' },
	{ name: 'IRS', photo: `${A}/card-irs.png`, logo: `${A}/logo-irs.svg`, box: 'inset:66.25% 7.43% 4.79% 7.14%' },
	{ name: 'Sentara', photo: `${A}/card-sentara.png`, logo: `${A}/logo-sentara.svg`, box: 'inset:77.57% 8.14% 8.29% 7.86%' },
	{ name: 'City of Virginia Beach', photo: `${A}/card-virginia-beach.png`, logo: `${A}/logo-virginia-beach.svg`, box: 'top:64.82%;bottom:5.3%;left:50%;translate:-50% 0;aspect-ratio:210/73.21' },
	{ name: 'Uplifting Athletes', photo: `${A}/card-uplifting-athletes.png`, logo: `${A}/logo-uplifting-athletes.svg`, box: 'top:74.47%;bottom:8.39%;left:50%;translate:-50% 0;aspect-ratio:70/42' },
];
