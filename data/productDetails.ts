// Product page copy. One entry per product; /product/[slug] renders them all from here.
// Features marked [confirm] are inferred from the one-line descriptions and need a product owner's review.
// Chirp and Edjit were updated 2026-10-29 from their own sites (predictablechirp.com, edjit.com).

import type { ImageMetadata } from 'astro';
import chirpDashboard from '@/assets/products/chirp-dashboard.png';
import chirpBrief from '@/assets/products/chirp-brief.png';
import chirpInterests from '@/assets/products/chirp-interests.png';
import chirpMessages from '@/assets/products/chirp-messages.png';
import chirpRoles from '@/assets/products/chirp-roles.png';
import edjitDashboard from '@/assets/products/edjit-dashboard.png';
import edjitCourse from '@/assets/products/edjit-course.png';
import edjitModules from '@/assets/products/edjit-modules.png';
import edjitQuiz from '@/assets/products/edjit-quiz.png';
import edjitResults from '@/assets/products/edjit-results.png';
import timeTimesheet from '@/assets/products/time-timesheet.png';
import timeApproved from '@/assets/products/time-approved.png';
import timeWeek from '@/assets/products/time-week.png';
import timeFeedback from '@/assets/products/time-feedback.png';

export interface ProductDetail {
	slug: string;
	headlineBefore: string;
	headlineEm: string;
	headlineAfter: string;
	lede: string;
	problemTitle: string;
	problem: string[];
	features: { t: string; d: string; confirm?: boolean; image?: ImageMetadata; alt?: string }[];
	/** the hero screenshot */
	shot?: { image: ImageMetadata; alt: string; caption?: string };
	audience: { t: string; d: string }[];
	/** optional pricing message */
	pricing?: string;
	/** the product's own site, linked from the hero and the pricing box */
	site?: { url: string; label: string };
	/** organizations named on the product's own site */
	usedBy?: string[];
	cta: string;
	note?: string;
}

export const details: Record<string, ProductDetail> = {
	chirp: {
		slug: 'chirp',
		headlineBefore: 'Know which members are ',
		headlineEm: 'drifting',
		headlineAfter: ', and what to do next.',
		lede: 'Chirp is a member engagement platform for private clubs. It reads from the systems your club already uses, spots which members are disengaging and why, and tells staff what to do about it.',
		problemTitle: 'By the time a resignation letter arrives, it’s too late.',
		problem: [
			'Members rarely announce they’re drifting away. They just come in less: fewer rounds, fewer dinners, fewer events. The signs are spread across the club’s systems, and nobody has time to connect them.',
			'Chirp sits above the software you already have. It doesn’t replace anything. It connects the signals, ranks what matters today, and drafts the outreach, so staff can act while there’s still time.',
		],
		shot: { image: chirpDashboard, alt: 'Chirp’s Brief for a club: today’s priorities, quiet members to re-engage, events with open seats, recorded attendance by week, and the next actions to review.', caption: 'Shown with Harbor Ridge, a demonstration club.' },
		features: [
			{ t: 'The Brief', d: 'Every morning, what changed: members at risk and why, revenue exposure by cause, and the few actions worth taking today, each with an estimated value.', image: chirpBrief, alt: 'The Brief: the potential value of today’s three actions, with at-risk value, open-seat revenue, and dues and food and beverage revenue.' },
			{ t: 'Interests, inferred', d: 'Chirp learns what members care about from what they actually do, and shows where interest outruns what the calendar offers.', image: chirpInterests, alt: 'A chart comparing member interest in sailing, arts, golf, racquet, and family events with what the calendar offers.' },
			{ t: 'Chirps', d: 'Targeted messages drafted for the right members, from event invitations to personal check-ins. Chirp follows every send to the reply, booking, or visit it produced, and nothing sends without staff review.', image: chirpMessages, alt: 'Response rates by message type: personal invitations, targeted Chirps, and the club-wide newsletter.' },
			{ t: 'Roles and access', d: 'Each role sees what it needs, sends need approval, two-step verification is required for all staff, and every action is logged.', image: chirpRoles, alt: 'Roles and access settings for a club’s staff, with two-step verification required and today’s activity log.' },
		],
		audience: [
			{ t: 'General managers and boards', d: 'See engagement and revenue at risk across the club, with the reasons behind it.' },
			{ t: 'Membership directors', d: 'Know who needs a call this week, and why, before they decide not to renew.' },
			{ t: 'Events and communications staff', d: 'Fill events and send fewer, better messages to the members who want them.' },
		],
		pricing: 'Plans for one club start at $1,250 a month, or $12,000 a year.',
		site: { url: 'https://www.predictablechirp.com/', label: 'predictablechirp.com' },
		cta: 'Book a private demo',
		note: 'From predictablechirp.com (2026-10-29). It also lists security (multi-factor sign-in, encryption, AWS hosting), integrations (CSV and Excel at launch; Jonas, Northstar, and ForeTees planned), and three plans with add-ons. Its numbers are for a demo club, so none are used in the copy; the screenshots (supplied 2026-10-29) show that demo club, Harbor Ridge, and say so.',
	},
	edjit: {
		slug: 'edjit',
		headlineBefore: 'Workplace learning, just in ',
		headlineEm: 'time',
		headlineAfter: '.',
		lede: 'Edjit (Education Just In Time) is an all-in-one workplace learning platform. Build internal courses, assign them to your team, and keep track of who has completed what. Flexible, scalable, and built around the learner.',
		problemTitle: 'Teams have to prove their people are trained.',
		problem: [
			'Government agencies and contractors train staff on everything from security awareness to contract-specific processes. Too often, the courses live in slide decks and the completion records live in spreadsheets.',
			'Edjit puts course creation and completion tracking in the same place, so you always know where your team stands.',
		],
		shot: { image: edjitDashboard, alt: 'An Edjit learner dashboard: courses in progress with completion bars and due dates, and courses due next.' },
		features: [
			{ t: 'Courses people finish', d: 'Every course shows its progress at a glance, with modules people can work through a few minutes at a time.', image: edjitCourse, alt: 'An Edjit course page for a leadership course, 82% complete, with 3 of 8 modules done.' },
			{ t: 'Due dates and groups', d: 'Assign courses to the groups that need them, from staff and security to management, and set when they’re due.', image: edjitModules, alt: 'A course’s due date, length, list of modules with completed ones checked, description, and the groups it’s assigned to.' },
			{ t: 'Quizzes', d: 'Check what people learned with quizzes built into the course, one question at a time.', image: edjitQuiz, alt: 'An Edjit quiz, question 1 of 6, with multiple-choice answers.' },
			{ t: 'Pass marks and retakes', d: 'Administrators set the score needed to pass. Learners see which questions they missed and can retake the quiz to complete the course.', image: edjitResults, alt: 'Quiz results showing a score below the administrator’s 90% pass mark, the questions answered incorrectly, and a Retake Quiz button.' },
		],
		audience: [
			{ t: 'Training and HR leads', d: 'Build courses once and keep every completion on record.' },
			{ t: 'Program and contract managers', d: 'Know your team is trained before the work starts.' },
			{ t: 'Employees', d: 'Find assigned courses, finish them, and move on.' },
		],
		pricing: 'Packages for every size of team, with a 30-day money-back guarantee.',
		site: { url: 'https://www.edjit.com/', label: 'edjit.com' },
		usedBy: ['Pennsylvania State Senate', 'United States Digital Service (USDS)', 'U.S. Office of Personnel Management (OPM)'],
		cta: 'Request an Edjit demo',
		note: 'From edjit.com (2026-10-29): the product is styled “EdJIT” there; this site says “Edjit” (confirm which to use). The features now follow the product screenshots supplied 2026-10-29. Two of them show test content (“Testing Quiz Dup Error”, a question about duplicating a mod): swap for screens with real course content before launch.',
	},
	'cx-align': {
		slug: 'cx-align',
		headlineBefore: 'Bring patient experience into ',
		headlineEm: 'clearer',
		headlineAfter: ' view.',
		lede: 'CXAlign helps healthcare leaders see priorities, track customer experience (CX) initiatives, identify gaps sooner, and make better-informed decisions about what comes next.',
		problemTitle: 'Patient experience work doesn’t happen in one place.',
		problem: [
			'It lives across journeys, research, priorities, initiatives, and the teams responsible for moving that work forward. When it’s scattered, leaders can’t see what’s working, what’s stalled, or where the gaps are.',
			'CXAlign is designed to connect it all.',
		],
		features: [
			{ t: 'Journeys', d: 'Keep patient journeys and their pain points connected to the work that addresses them.' },
			{ t: 'Priorities', d: 'See what matters most across the organization, and why.' },
			{ t: 'Initiatives', d: 'Track CX initiatives, their owners, and their progress in one view.' },
			{ t: 'Gaps', d: 'Spot the journeys and priorities with no work against them, sooner.' },
		],
		audience: [
			{ t: 'CX and patient experience leaders', d: 'Show the whole portfolio of work, and its progress, in one place.' },
			{ t: 'Executives', d: 'Make decisions about what comes next with a clear view of where things stand.' },
			{ t: 'Initiative owners', d: 'Keep your work connected to the priorities and research behind it.' },
		],
		cta: 'Request a CXAlign demo',
		note: 'Lede and problem copy are from the provided description, edited lightly for the voice guide. Feature names are drawn from that description (journeys, priorities, initiatives, gaps).',
	},
	time: {
		slug: 'time',
		headlineBefore: 'Know where your team’s time goes, and ',
		headlineEm: 'bill',
		headlineAfter: ' for it.',
		lede: 'Mediabarn Time helps professional services teams track time, bill clients accurately, balance workloads, and measure performance, at a price that makes sense for smaller firms.',
		problemTitle: 'Time is the product, so tracking it shouldn’t cost a fortune.',
		problem: [
			'Firms that bill by the hour need to know where every hour went. The tools that do this well are often priced and built for large enterprises, and the ones that are affordable leave the hard parts to spreadsheets.',
			'Mediabarn Time covers time tracking, billing, and team reporting in one tool, priced for teams that don’t need an enterprise contract.',
		],
		shot: { image: timeTimesheet, alt: 'A Mediabarn Time weekly timesheet: hours by day for three projects, grouped by client, with daily totals and a Submit for approval button.' },
		features: [
			{ t: 'Time tracking', d: 'Log hours against clients, projects, and tasks in one weekly grid, grouped by client, with daily totals as you go. Jump to any week from the calendar.', image: timeWeek, alt: 'The week picker, a calendar with the current week highlighted.' },
			{ t: 'Approvals', d: 'Submit the week for approval. Approved weeks lock, and anyone who needs to fix something can request a change instead of editing history. Time off sits right in the timesheet.', image: timeApproved, alt: 'An approved, locked timesheet with a Request change button and a time-off row.' },
			{ t: 'Billing and reporting', d: 'Turn tracked hours into accurate invoices, and see billable hours, budgets, and team workload by client, project, and person.', confirm: true },
			{ t: 'Feedback built in', d: 'Report a bug or share an idea from any screen, with screenshots or a recording, and the page you were on attached automatically.', image: timeFeedback, alt: 'The Send feedback dialog, with a type, short title, description, and screenshot attachment.' },
		],
		audience: [
			{ t: 'Firm owners and partners', d: 'See profitability and performance without waiting for month-end.' },
			{ t: 'Project and operations managers', d: 'Balance workloads and keep projects on budget.' },
			{ t: 'Team members', d: 'Track time quickly, then get back to the work.' },
		],
		pricing: 'Simple per-user pricing, without an enterprise contract. [Pricing details to come]',
		cta: 'Start a free trial',
		note: 'Rewritten from “track time, bill clients, optimize team time, and measure performance with confidence.” “Much more affordable” is expressed as “a price that makes sense for smaller firms” and “without an enterprise contract,” since the voice guide avoids unsupported comparisons. If we have real pricing to compare, we can be more direct. “Start a free trial” assumes a trial exists. Screenshots supplied 2026-10-29 show the employee side (timesheet, approvals, feedback) during the beta; billing and reporting have no screenshot yet, so that feature is still to confirm. The screenshots show real client and project names: confirm that’s OK to publish.',
	},
};
