// Photography from mediabarninc.com (supplied 2026-10-26). Astro resizes and converts these at build time.
// team-at-wall is an Adobe Stock image licensed for the current site: confirm the license covers the redesign.
import officeLobby from '@/assets/photos/office-lobby.jpg';
import throughTheGlass from '@/assets/photos/through-the-glass.jpg';
import teamAtWall from '@/assets/photos/team-at-wall.jpg';
import laptopAndPhone from '@/assets/photos/laptop-and-phone.png';
import wireframeSketch from '@/assets/photos/wireframe-sketch.png';
import cafeLaptop from '@/assets/photos/cafe-laptop.png';
import stickyNotes from '@/assets/photos/sticky-notes.png';
import interviewCamera from '@/assets/photos/interview-camera.png';
import emptyChair from '@/assets/photos/empty-chair.png';
import peopleWriting from '@/assets/photos/people-writing.png';
import healthMeeting from '@/assets/photos/health-meeting.png';
import telehealthNurse from '@/assets/photos/telehealth-nurse.png';
import researchInterview from '@/assets/photos/research-interview.jpg';
import designWorkshop from '@/assets/photos/design-workshop.jpg';
import sunsetDesk from '@/assets/photos/sunset-desk.webp';
import keith from '@/assets/team/keith.png';
import jason from '@/assets/team/jason.png';
import greg from '@/assets/team/greg.png';
import mauro from '@/assets/team/mauro.jpg';

export const photos = {
	officeLobby, throughTheGlass, teamAtWall, laptopAndPhone, wireframeSketch, cafeLaptop,
	stickyNotes, interviewCamera, emptyChair, peopleWriting, healthMeeting, telehealthNurse,
	researchInterview, designWorkshop, sunsetDesk,
};
export const headshots = { keith, jason, greg, mauro };

// Client and contract-vehicle logos live in /public/logos, shown as one-color marks
export const clientLogos = [
	{ name: 'IRS', src: '/logos/clients/irs.png' },
	{ name: 'Social Security Administration', src: '/logos/clients/ssa.svg' },
	{ name: 'NIST', src: '/logos/clients/nist.svg' },
	{ name: 'USPS', src: '/logos/clients/usps.svg' },
	{ name: 'CMS', src: '/logos/clients/cms.svg' },
	{ name: 'FDA', src: '/logos/clients/fda.svg' },
	{ name: 'Sentara Health', src: '/logos/clients/sentara.svg' },
	{ name: 'Sentara Health Plans', src: '/logos/clients/sentara-health-plans.svg' },
	{ name: 'City of Virginia Beach', src: '/logos/clients/virginia-beach.svg' },
	{ name: 'Uplifting Athletes', src: '/logos/clients/uplifting-athletes.svg' },
];
export const vehicleLogos = [
	{ name: 'GSA', src: '/logos/vehicles/gsa.png' },
	{ name: 'Digital Services Coalition', src: '/logos/vehicles/dsc.svg' },
	{ name: 'SBA', src: '/logos/vehicles/sba.svg' },
];
