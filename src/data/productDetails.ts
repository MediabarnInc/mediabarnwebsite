// Product page copy. One entry per product; /product/[slug] renders them all from here.
// Features marked [confirm] are inferred from the one-line descriptions and need a product owner's review.

export interface ProductDetail {
	slug: string;
	headlineBefore: string;
	headlineEm: string;
	headlineAfter: string;
	lede: string;
	problemTitle: string;
	problem: string[];
	features: { t: string; d: string; confirm?: boolean }[];
	audience: { t: string; d: string }[];
	/** optional pricing message (Time) */
	pricing?: string;
	cta: string;
	note?: string;
}

export const details: Record<string, ProductDetail> = {
	chirp: {
		slug: 'chirp',
		headlineBefore: 'Your club’s members and events, in ',
		headlineEm: 'one',
		headlineAfter: ' place.',
		lede: 'Chirp is a platform for country clubs to keep track of members and events. Staff spend less time reconciling spreadsheets and more time with the members they serve.',
		problemTitle: 'Clubs run on relationships, not spreadsheets.',
		problem: [
			'Most clubs keep member information in one system, event sign-ups in another, and the real story in someone’s inbox. When a member asks what’s coming up, or a manager asks who’s attending, the answer takes too long to find.',
			'Chirp brings members and events together, so the whole staff works from the same information.',
		],
		features: [
			{ t: 'Member directory', d: 'Profiles, households, and membership status, kept current in one place.', confirm: true },
			{ t: 'Event calendar', d: 'Plan dining, golf, social, and family events, and publish them to members.', confirm: true },
			{ t: 'RSVPs and attendance', d: 'Members respond in a few taps, and staff see headcounts as they change.', confirm: true },
			{ t: 'Member updates', d: 'Send announcements and reminders to the right members at the right time.', confirm: true },
		],
		audience: [
			{ t: 'General managers', d: 'See membership and event activity across the club at a glance.' },
			{ t: 'Events and membership staff', d: 'Plan events, track RSVPs, and keep records up to date without double entry.' },
			{ t: 'Members', d: 'Find out what’s happening and respond without calling the front desk.' },
		],
		cta: 'Request a Chirp demo',
	},
	edjit: {
		slug: 'edjit',
		headlineBefore: 'Internal training, built and tracked in ',
		headlineEm: 'one',
		headlineAfter: ' platform.',
		lede: 'Edjit is an eLearning platform for government contractors. Create internal courses, assign them to your team, and keep track of who has completed what.',
		problemTitle: 'Contractors have to prove their people are trained.',
		problem: [
			'Government contractors train staff on everything from security awareness to contract-specific processes. Too often, the courses live in slide decks and the completion records live in spreadsheets.',
			'Edjit puts course creation and completion tracking in the same place, so you always know where your team stands.',
		],
		features: [
			{ t: 'Course builder', d: 'Create courses from your own material, with lessons, media, and quizzes.', confirm: true },
			{ t: 'Assignments and due dates', d: 'Assign courses by team, role, or contract, and set when they’re due.', confirm: true },
			{ t: 'Completion tracking', d: 'See who has finished, who hasn’t started, and who is overdue.', confirm: true },
			{ t: 'Reports', d: 'Export training records when a contracting officer or auditor asks for them.', confirm: true },
		],
		audience: [
			{ t: 'Training and HR leads', d: 'Build courses once and keep every completion on record.' },
			{ t: 'Program and contract managers', d: 'Know your team is trained before the work starts.' },
			{ t: 'Employees', d: 'Find assigned courses, finish them, and move on.' },
		],
		cta: 'Request an Edjit demo',
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
		features: [
			{ t: 'Time tracking', d: 'Log time against clients, projects, and tasks, as you work or at the end of the day.' },
			{ t: 'Client billing', d: 'Turn tracked hours into accurate invoices without re-entering anything.' },
			{ t: 'Team utilization', d: 'See who is over capacity and who has room, so work is spread fairly.' },
			{ t: 'Performance reporting', d: 'Measure billable hours, budgets, and profitability by client, project, and person.' },
		],
		audience: [
			{ t: 'Firm owners and partners', d: 'See profitability and performance without waiting for month-end.' },
			{ t: 'Project and operations managers', d: 'Balance workloads and keep projects on budget.' },
			{ t: 'Team members', d: 'Track time quickly, then get back to the work.' },
		],
		pricing: 'Simple per-user pricing, without an enterprise contract. [Pricing details to come]',
		cta: 'Start a free trial',
		note: 'Rewritten from “track time, bill clients, optimize team time, and measure performance with confidence.” “Much more affordable” is expressed as “a price that makes sense for smaller firms” and “without an enterprise contract,” since the voice guide avoids unsupported comparisons. If we have real pricing to compare, we can be more direct. “Start a free trial” assumes a trial exists.',
	},
};
