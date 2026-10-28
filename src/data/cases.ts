// Case studies, shared by the home page and the Design page. All three are placeholders until the stories are written:
// the current site's case studies are still "Accordion content goes here!".
import type { ImageMetadata } from 'astro';
import type { PillarId } from './site';
import { photos } from './images';

export interface CaseStudy {
	who: string;
	title: string;
	outcome: string;
	/** which pillars of the loop the work used */
	pillars: PillarId[];
	/** what the background photo should show */
	photo: string;
	mood: 'ember' | 'dusk' | 'clay' | 'sand';
	image?: ImageMetadata;
	/** the case study page lives at /work/<slug>/ */
	slug: string;
	/** long-form content for the case study page; anything missing falls back to a bracketed placeholder */
	detail?: Partial<CaseDetail>;
}

export interface CaseChapter { heading: string; body: string; caption?: string; image?: ImageMetadata }
export interface CaseDetail {
	challenge: string;
	approach: string;
	result: string;
	intro: string;
	stats: { value: string; label: string }[];
	services: string[];
	siteUrl?: string;
	/** one chapter per pillar the work used, in loop order */
	chapters: Partial<Record<PillarId, CaseChapter>>;
	quote: { q: string; who: string };
	closing: string;
}

export const caseHref = (c: CaseStudy) => `/work/${c.slug}/`;

// Placeholder content for a case study page, so every page shows the full structure until the story is written
export function caseDetail(c: CaseStudy): CaseDetail {
	const ph: CaseDetail = {
		challenge: '[The problem in one or two sentences: who was struggling, with what, and what it cost the client.]',
		approach: '[What we did, in one or two sentences: the research, design, or product work that answered it.]',
		result: '[What changed, in one or two sentences, with the headline numbers.]',
		intro: `[Two or three sentences of context: who ${c.who.toLowerCase()} is, who they serve, and why this project mattered to them. Written for someone who has never heard of them.]`,
		stats: [
			{ value: '[00%]', label: '[increase in task completion]' },
			{ value: '[00%]', label: '[fewer support calls]' },
			{ value: '[00]', label: '[participants in the study]' },
		],
		services: ['[Usability testing]', '[Journey mapping]', '[Service design]', '[Section 508]'],
		chapters: {
			research: { heading: '[What we learned]', body: '[Who we talked to and how: sessions in the Arlington lab or remote, how many participants, what we watched them do. Then the finding that changed the brief, in plain words.]', caption: '[Caption: what this research artifact shows]' },
			design: { heading: '[What we shaped]', body: '[How the finding became a design: the journey map, the service blueprint, the prototype, and what we changed after testing it again with the same kinds of people.]', caption: '[Caption: what this design artifact shows]' },
			product: { heading: '[What keeps it running]', body: '[What shipped and how it is supported: the product or platform, who uses it each day, and the signal that sends us back to research.]', caption: '[Caption: the product in use]' },
		},
		quote: { q: '[A short quote from the client about working with us, or about what changed for their users.]', who: '[Name, title, organization]' },
		closing: '[The ending in two sentences: what is better now for the people on the other side, and what the next round of research will look at.]',
	};
	const d = c.detail ?? {};
	return { ...ph, ...d, chapters: { ...ph.chapters, ...d.chapters } };
}

export const cases: CaseStudy[] = [
	{ slug: 'federal-agency', who: 'Federal agency', title: '[Case study title]', outcome: '[One-sentence outcome: what changed for citizens, with a number if we have one.]', pillars: ['research', 'design'], photo: 'wireframes sketched during a study', mood: 'ember', image: photos.wireframeSketch },
	{ slug: 'health-system', who: 'Health system', title: '[Case study title]', outcome: '[One-sentence outcome: what changed for patients or staff.]', pillars: ['research', 'design', 'product'], photo: 'journey mapping on the wall', mood: 'clay', image: photos.stickyNotes },
	{ slug: 'commercial', who: 'Commercial', title: '[Case study title]', outcome: '[One-sentence outcome: what changed for customers.]', pillars: ['design', 'product'], photo: 'the product on desktop and phone', mood: 'dusk', image: photos.laptopAndPhone },
];
