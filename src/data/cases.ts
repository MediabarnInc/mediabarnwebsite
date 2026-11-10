// Case studies: one per client in the home hero's logo strip (the strip links each card to its page),
// shown on the Design page too. Drafted 2026-10-29 from what we know: who each client is is public
// fact; what Mediabarn did for them is our best reading of the work and is listed in `confirm` for
// Mediabarn to check. Anything in [brackets] (numbers, quotes, links) still needs the real detail.
import type { ImageMetadata } from 'astro';
import type { PillarId } from './site';
import { photos } from './images';
import nfcuColorTokens from '@/assets/cases/nfcu-color-tokens.png';
import nfcuBrandAndUi from '@/assets/cases/nfcu-brand-and-ui.png';
import sentaraSite from '@/assets/cases/sentara-site.png';
import sentaraWorkshop from '@/assets/cases/sentara-workshop.jpg';
import upliftingDrills from '@/assets/cases/uplifting-athletes-drills.jpg';
import vbBoardwalk from '@/assets/cases/virginia-beach-boardwalk.jpg';
import uspsMail from '@/assets/cases/usps-mail.jpg';
import sentaraCampus from '@/assets/cases/sentara-campus.jpg';
import nfcuBranch from '@/assets/cases/navy-federal-branch.jpg';

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
	/** what the draft assumes and Mediabarn should confirm (shown in review notes on the page) */
	confirm?: string;
}

export interface CaseChapter {
	heading: string; body: string; caption?: string; image?: ImageMetadata;
	/** more images after the main one, two across */
	figures?: { image: ImageMetadata; caption: string; alt: string }[];
}
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
	{
		// Filled in from Mediabarn's answers, 2026-10-29
		slug: 'navy-federal', who: 'Navy Federal Credit Union', pillars: ['design'],
		title: 'Moving a design system to Figma',
		outcome: 'We moved Navy Federal’s design system from Adobe XD to Figma, and helped design CMD+R, the guidelines site that keeps design and code consistent.',
		photo: 'a Navy Federal branch: staff helping a service member', mood: 'dusk', image: nfcuBranch,
		confirm: 'a measurable result if there is one (components, tokens, or screens migrated; designers trained; teams using CMD+R), a quote, whether the CMD+R site is public, and that the two design system images are cleared to publish.',
		detail: {
			intro: 'Navy Federal is the largest credit union in the United States, serving service members, veterans, Department of Defense civilians, and their families. Its digital teams design for millions of members across web, mobile, and marketing.',
			challenge: 'Navy Federal’s design system lived in Adobe XD, and the teams needed it in Figma. Moving a whole system, from color tokens to components, is heavy lifting, and it had to happen without slowing down the designers who rely on it every day.',
			approach: 'For six months we worked directly with Navy Federal’s lead user experience and user interface (UX/UI) designers and stakeholders. We led the migration to Figma, helped design and build CMD+R, the web guidelines site, and supported lead and mid-level designers as they learned Figma.',
			result: 'The design system now lives in Figma, and designers, marketing, and developers have one guidelines site for design and code consistency and accessibility. [Add a measured result if there is one.]',
			stats: [
				{ value: '6', label: 'months, from October 2024 to May 2025' },
				{ value: 'XD → Figma', label: 'the whole design system, moved to one tool' },
				{ value: '[00]', label: '[components and tokens migrated]' },
			],
			services: ['Design system migration (Adobe XD to Figma)', 'Design tokens and color themes', 'Guidelines website design', 'Figma training and support', 'Accessibility'],
			siteUrl: 'https://www.navyfederal.org/',
			chapters: {
				design: {
					heading: 'One system, one source of truth',
					body: 'We rebuilt the design system in Figma: the brand colors and their full scales, semantic tokens for borders, status, and surfaces, and the components built on them, from buttons and alerts to form fields. Alongside it, we helped design CMD+R, the guidelines site where designers, marketing, and developers find the same rules for design, code, and accessibility. And we worked with Navy Federal’s designers as they made the move, so the system was theirs to run.',
					image: nfcuBrandAndUi,
					caption: 'Brand colors, color scales, icons, and components, rebuilt in Figma.',
					figures: [
						{ image: nfcuColorTokens, alt: 'A page from the CMD+R UI kit listing border color tokens, with each token’s name, notes, value, and an example swatch.', caption: 'CMD+R color themes: each token documented with its purpose, value, and an example.' },
					],
				},
			},
			quote: { q: '[A short quote from the Navy Federal design team.]', who: '[Name, title], Navy Federal Credit Union' },
			closing: 'Navy Federal’s designers now work from one system in one tool, with one site that explains how to use it. [What the team did next, if we know.]',
		},
	},
	{
		slug: 'usps', who: 'United States Postal Service', pillars: ['research', 'design'],
		title: 'Postal services everyone can use',
		outcome: 'Testing with the public, so the Postal Service’s digital services work for every kind of customer.',
		photo: 'someone opening their mail', mood: 'ember', image: uspsMail,
		confirm: 'which USPS service or site the work covered, the scope (research, design, accessibility), and the dates.',
		detail: {
			intro: 'The United States Postal Service delivers to every address in the country. Its customers are everyone: people shipping a package for the first time, small businesses printing labels, and people who rely on assistive technology.',
			challenge: 'When a service is used by the whole country, every confusing step affects millions of people. USPS needed to know where its digital services lost customers, and how to fix them without leaving anyone out.',
			approach: 'We tested with a wide mix of customers, including people with disabilities, and turned the findings into design changes that met Section 508 accessibility requirements.',
			result: '[What changed for customers, with the headline numbers.]',
			stats: [
				{ value: '[00]', label: 'customers in testing' },
				{ value: '[00%]', label: '[task completion, before and after]' },
				{ value: '508', label: 'Section 508 accessibility built in' },
			],
			services: ['Usability testing', 'Accessibility testing (Section 508)', 'Information architecture', 'UI design'],
			chapters: {
				research: { heading: 'Testing with the whole country', body: 'We recruited participants across ages, tech comfort, and abilities, including screen reader users, and watched them complete common tasks. [The finding that changed the brief.]', caption: '[A usability session]' },
				design: { heading: 'Simpler steps for everyone', body: 'We redesigned the steps that caused the most trouble, and tested again with the same kinds of people to confirm the fix worked. [What changed.]', caption: '[The redesigned service]' },
			},
			quote: { q: '[A short quote from the USPS team.]', who: '[Name, title], United States Postal Service' },
			closing: '[What is easier for customers now, and what comes next.]',
		},
	},
	{
		// Rewritten 2026-10-29: Mediabarn's work for the IRS as a whole, with the Online Account
		// notifications study (from a team member's portfolio write-up) as the worked example
		slug: 'irs', who: 'Internal Revenue Service', pillars: ['research', 'design'],
		title: 'Making the IRS easier to deal with online',
		outcome: 'Research with taxpayers and design inside the IRS design system, so online services are clearer, calmer, and easier to finish.',
		photo: 'people filling out forms', mood: 'sand', image: photos.peopleWriting,
		confirm: 'the full scope of Mediabarn’s IRS work (which services beyond the Online Account), whether it was through a prime contractor, the dates, images we can show, and a quote.',
		detail: {
			intro: 'The Internal Revenue Service (IRS) is the federal agency nearly every adult in the country deals with. More and more of that happens online, through IRS.gov and the IRS Online Account, where taxpayers check balances, make payments, and read notices about their taxes.',
			challenge: 'Dealing with taxes is stressful, and online it’s easy to miss what matters. When taxpayers can’t tell what needs their attention, they call, make mistakes, or put things off, and that costs them and the IRS time and money.',
			approach: 'We bring taxpayers into the work: comparing how other services solve the same problems, testing concepts with real people on desktop and mobile, and designing within the IRS design system with the agency’s product and business teams, through to developer handoff.',
			result: 'Online services that put what needs action first, tested with taxpayers and delivered on the IRS’s schedule, with research the agency can build on for the next release.',
			stats: [
				{ value: '12', label: 'taxpayers in one round of A/B testing, on desktop and mobile' },
				{ value: '80%+', label: 'missed a key notice in the original design' },
				{ value: '11/12', label: 'knew what needed action once we regrouped it' },
			],
			services: ['Taxpayer research', 'Comparative analysis', 'A/B usability testing', 'UI design', 'IRS design system', 'Developer handoff'],
			siteUrl: 'https://www.irs.gov/',
			chapters: {
				research: {
					heading: 'Start with how taxpayers actually behave',
					body: 'Before designing anything, we look at what’s already known: earlier testing, archived research, and how banks, retailers, and other services handle the same tasks. Then we test with taxpayers. In one study of the Online Account, 12 people tried two concepts for how the account surfaces updates. More than 80% looked straight past a notice styled like an ad, while simple cues, an unread dot or an icon for “done” or “needs action,” were understood at a glance.',
					caption: '[Concepts tested side by side, or a slide from the findings]',
				},
				design: {
					heading: 'Clear priorities, inside the IRS’s rules',
					body: 'Designing for the IRS means working within its design system and its timelines. We explore options with the product and business teams, test the strongest, and simplify when the evidence says to. In the Online Account, that meant dropping a tabbed layout that tested well but added steps, and keeping one clear list, with an icon for each type of update, an unread dot for what’s new, and the most important items first. The design met its developer handoff date.',
					caption: '[A redesigned Online Account screen]',
				},
			},
			quote: { q: '[A short quote from the IRS team.]', who: '[Name, title], Internal Revenue Service' },
			closing: 'Taxpayers can see what needs their attention without hunting for it, and the IRS has tested evidence for every next step. That’s the loop: research, design, and back to research.',
		},
	},
	{
		// Filled in from Mediabarn's answers, 2026-10-29; research detail from Mediabarn's lead designer's
		// write-up of the Sentara palliative care work (cooperjmdesign.com), used as one example
		slug: 'sentara', who: 'Sentara Health', pillars: ['research', 'design'],
		title: 'Complete care, simplified',
		outcome: 'Since 2019, research and design that took Sentara from an outdated website and no app to a relaunched patient portal and mobile app suite.',
		photo: 'Sentara Williamsburg Regional Medical Center', mood: 'clay', image: sentaraCampus,
		confirm: 'a quote, whether Sentara Health Plans was part of the work, and that the palliative care example can be shared.',
		detail: {
			intro: 'Sentara Health is a not-for-profit health system serving Virginia and northeastern North Carolina, with hospitals, medical groups, and its own health plans. Its patients and members move between many teams, buildings, and systems in a single episode of care.',
			challenge: 'When we started in 2019, Sentara’s website was outdated and there was no app. Patients and members needed one simple way to find care, manage appointments, and pay, across the website, the patient portal, and their phones.',
			approach: 'An ongoing engagement, working directly with Sentara’s stakeholders. We research with patients, caregivers, and the providers and staff who refer them; turn what we learn into personas, service design, and plain-language content; and test designs with real people before anything launches, across the website, the patient portal, and the app.',
			result: 'A rebranded, relaunched patient portal and mobile app suite, supporting member onboarding at scale, and artificial intelligence (AI) work that is changing how the team designs and how patients get help.',
			stats: [
				{ value: '2019', label: 'working together since, and still going' },
				{ value: '100%', label: 'of the design team adopted the AI upskilling we led' },
				{ value: '27%', label: 'of contact center volume projected to move to AI self-service' },
			],
			services: ['Patient, caregiver, and provider research', 'Personas and needs analysis', 'Customer experience (CX) and user experience (UX) design', 'Service design and information architecture', 'Content strategy and video storytelling', 'Patient portal and mobile app design', 'AI chatbot design', 'Figma-to-code workflows'],
			siteUrl: 'https://www.sentara.com/',
			chapters: {
				research: {
					heading: 'Research that never stops',
					body: 'Research isn’t a phase here. It runs alongside the work, so every release starts from what patients, families, and care teams actually need. For one service line, palliative care, we spoke with 15 providers, 20 support staff, and patients and caregivers in depth, and built six personas from what we heard. The finding that changed the direction: many people, some providers included, thought palliative care meant end-of-life care, so patients who could benefit early weren’t getting it. The fix wasn’t a new feature. It was clear, consistent words: care as an extra layer of support, plainly different from hospice.',
					image: sentaraWorkshop,
					caption: 'Turning research into screens: sketching and organizing flows with the team.',
				},
				design: {
					heading: 'One place for complete care',
					body: 'We design the way people look for care: several ways in depending on how much someone already knows, information revealed a step at a time, warm and real storytelling, including provider videos and patient stories, and a clear path to find care nearby. We test with patients and caregivers before launch. We also helped rebrand and relaunch Sentara’s patient portal and mobile app suite, built to bring large numbers of members on board. Since then the work has moved into AI: we piloted AI self-service chatbots, projected to handle 27% of contact center volume, and set up Figma-to-code workflows through a Model Context Protocol (MCP) server integration, so portal designs reach the front end faster. Along the way we led AI upskilling for Sentara’s design team, and every designer took it up.',
					image: sentaraSite,
					caption: 'Sentara.com: complete care, simplified.',
				},
			},
			quote: { q: '[A short quote from the Sentara team.]', who: '[Name, title], Sentara Health' },
			closing: 'Patients and families get clear, consistent answers about their care, and in testing, one tester said they’d be “100% comfortable” referring patients to what we built. Sentara’s design team ships faster with AI built into how it works. The research keeps going, and so does the work.',
		},
	},
	{
		slug: 'virginia-beach', who: 'City of Virginia Beach', pillars: ['research', 'design'],
		title: 'City services built around residents',
		outcome: 'Listening to residents, so the city’s services are easier to find and use.',
		photo: 'the Virginia Beach boardwalk at sunrise', mood: 'dusk', image: vbBoardwalk,
		confirm: 'which city department or service the work covered, the scope, and the dates.',
		detail: {
			intro: 'Virginia Beach is the most populous city in Virginia, and Mediabarn’s home for our second office and research lab. Its residents use city services for everything from permits and utilities to parks and public safety.',
			challenge: 'Residents shouldn’t need to know how the city is organized to get something done. The city needed to understand how residents look for services, and where they gave up.',
			approach: 'We ran research with residents in our Virginia Beach lab and in the community, then redesigned the paths to the services they used most.',
			result: '[What changed for residents, with the headline numbers.]',
			stats: [
				{ value: '[00]', label: 'residents in the research' },
				{ value: '[00%]', label: '[faster to find a service]' },
				{ value: '[00]', label: '[services redesigned]' },
			],
			services: ['Resident research', 'Card sorting and tree testing', 'Information architecture', 'Service design'],
			chapters: {
				research: { heading: 'How residents look for help', body: 'We asked residents to find real services and watched where they looked first, using card sorts and tree tests to see how they group the city’s work. [The finding that changed the brief.]', caption: '[A card sort session]' },
				design: { heading: 'Organized the way residents think', body: 'We reorganized the services around residents’ needs instead of the city’s departments, and tested the new structure again. [What changed.]', caption: '[The new structure]' },
			},
			quote: { q: '[A short quote from the City of Virginia Beach team.]', who: '[Name, title], City of Virginia Beach' },
			closing: '[What is easier for residents now, and what comes next.]',
		},
	},
	{
		slug: 'uplifting-athletes', who: 'Uplifting Athletes', pillars: ['design'],
		title: 'Telling the story of a cause',
		outcome: 'A digital presence that connects college football fans and players with the rare disease community.',
		photo: 'athletes running agility drills', mood: 'ember', image: upliftingDrills,
		confirm: 'what the work was (website, brand, campaign), whether research was part of it, and the dates.',
		detail: {
			intro: 'Uplifting Athletes is a nonprofit that aligns college football with the rare disease community. Through player-led chapters, it raises awareness and funds for rare disease research and gives patients and families a team behind them.',
			challenge: 'The organization needed its story to reach fans, players, donors, and families affected by rare disease, and make it easy for each of them to get involved.',
			approach: 'We designed a digital experience around those audiences, with clear paths to learn, donate, and take part.',
			result: '[What changed, with the headline numbers.]',
			stats: [
				{ value: '[00%]', label: '[increase in online donations]' },
				{ value: '[00]', label: '[chapters represented]' },
				{ value: '[00%]', label: '[more visitors getting involved]' },
			],
			services: ['Content strategy', 'Information architecture', 'UI design', 'Website design'],
			chapters: {
				design: { heading: 'A clear path to get involved', body: 'We built the site around the people Uplifting Athletes serves: fans, student athletes, donors, and families. Each gets a clear way in. [What we designed.]', caption: '[The new site]' },
			},
			quote: { q: '[A short quote from the Uplifting Athletes team.]', who: '[Name, title], Uplifting Athletes' },
			closing: '[What the new experience made possible, and what comes next.]',
		},
	},
];
