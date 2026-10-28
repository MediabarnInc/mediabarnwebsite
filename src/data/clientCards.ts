// Client cards for the /alt/ hero strip, from Figma "MB UX Assets" › "Mediabarn alt" (node 2023:12997),
// in the design's left-to-right order. Each card: a photo, a tint over it, and the client's white logo.
// Logos are the Figma layers as exported: one SVG, or a set of vector pieces placed by inset (top right bottom left).
// Asset files: public/images/hero-alt (scripts/fetch-hero-alt-assets.sh).

type Piece = { src: string; inset: string };
export interface ClientCard {
	name: string;
	photo: string;
	tint: string;
	/** a single logo SVG placed by inset, with an optional inner inset (Navy Federal) */
	logo?: { src: string; inset: string; inner?: string };
	/** a logo built from pieces inside a centered box of a given aspect ratio, from `top` to `bottom` */
	pieces?: { aspect: string; top: string; bottom: string; items: Piece[] };
	shadow?: boolean;
	/** Figma layer name, when the client isn't named in the file */
	note?: string;
}

const A = '/images/hero-alt';
const vb = (i: number, inset: string): Piece => ({ src: `${A}/vb/v${i}.svg`, inset });
const ts = (i: number, inset: string): Piece => ({ src: `${A}/test/v${i}.svg`, inset });

export const clientCards: ClientCard[] = [
	{
		name: 'Navy Federal Credit Union', photo: `${A}/card-navy-federal.png`, tint: 'rgba(79,116,203,.38)',
		logo: { src: `${A}/logo-navy-federal.svg`, inset: '42.43% 26.7% -6.72% 9.01%', inner: '24.74% 1.47%' },
	},
	{ name: 'United States Postal Service', photo: `${A}/card-usps.png`, tint: 'rgba(87,82,78,.53)', logo: { src: `${A}/logo-usps.svg`, inset: '37.27% 15.93% 5.3% 15.93%' } },
	{ name: 'IRS', photo: `${A}/card-irs.png`, tint: 'rgba(30,65,170,.38)', logo: { src: `${A}/logo-irs.svg`, inset: '66.25% 7.43% 4.79% 7.14%' } },
	{ name: 'Sentara', photo: `${A}/card-sentara.png`, tint: 'rgba(129,117,112,.38)', logo: { src: `${A}/logo-sentara.svg`, inset: '77.57% 8.14% 8.29% 7.86%' } },
	{
		name: 'City of Virginia Beach', photo: `${A}/card-virginia-beach.png`, tint: 'rgba(84,227,238,.2)',
		pieces: {
			aspect: '874.65 / 304.92', top: '64.82%', bottom: '5.3%',
			items: [
				vb(0, '19.77% 37.09% 74.67% 60.84%'), vb(1, '19.77% 19.51% 74.67% 78.42%'), vb(2, '19.77% 7.53% 74.67% 90.4%'),
				vb(3, '28.85% 40.2% 52.62% 52.89%'), vb(4, '28.85% 37.32% 52.62% 61.06%'), vb(5, '28.3% 31.23% 52.6% 64.92%'),
				vb(6, '28.3% 23.58% 43.35% 69.47%'), vb(4, '28.85% 19.74% 52.62% 78.65%'), vb(7, '28.3% 11.55% 52.6% 82.5%'),
				vb(4, '28.85% 7.76% 52.62% 90.63%'), vb(8, '28.31% 0 52.14% 94.02%'), vb(9, '58.07% 38.43% 12.2% 54.61%'),
				vb(10, '68.18% 30.44% 12.2% 63.02%'), vb(11, '68.18% 23.16% 12.27% 70.86%'), vb(12, '68.19% 16.03% 12.2% 78.07%'),
				vb(13, '58.07% 8.73% 12.74% 85.32%'), vb(14, '0 49.48% 0 0'),
			],
		},
	},
	{
		name: 'Client', note: 'Figma layer “testlogo 1”', photo: `${A}/card-test.png`, tint: 'rgba(238,156,84,.2)',
		pieces: {
			aspect: '612 / 122.4', top: '74.47%', bottom: '8.39%',
			items: [
				ts(0, '0 78.33% 0 0'), ts(1, '44.74% 48.82% 0 42.65%'), ts(2, '44.75% 30.59% -0.01% 61.76%'), ts(3, '44.75% 11.67% -0.01% 80.69%'),
				ts(4, '44.57% 66.67% 0 24.8%'), ts(5, '44.49% 3.21% -0.02% 89.88%'), ts(6, '44.74% 20.91% 0 70.62%'), ts(7, '44.74% 58.56% 0 32.97%'),
				ts(8, '44.74% 39.61% 0 52.75%'), ts(9, '-0.01% 3% 68.63% 90.77%'), ts(10, '0 13.33% 68.6% 80.49%'), ts(11, '0 68.73% 68.62% 25.39%'),
				ts(12, '0 58.8% 68.76% 35.59%'), ts(13, '0 36.08% 68.75% 58.73%'), ts(14, '0 28.14% 68.81% 65.88%'), ts(15, '0 50.23% 68.81% 44.61%'),
				ts(16, '0 23.73% 68.81% 75%'), ts(16, '0 45.59% 68.81% 53.14%'), ts(17, '93.02% 0 0 98.73%'), ts(18, '93.67% 1.57% -0.01% 97.37%'),
				ts(19, '55.38% 89.48% 11.14% 9.2%'),
			],
		},
	},
	{
		name: 'NIST', photo: `${A}/card-nist.png`, tint: 'rgba(84,135,238,.2)', shadow: true,
		pieces: { aspect: '645.3 / 170.53', top: '72.32%', bottom: '5.02%', items: [{ src: `${A}/logo-nist.svg`, inset: '0' }] },
	},
];
