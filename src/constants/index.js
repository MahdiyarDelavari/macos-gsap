export const navLinks = [
	{ id: 1, name: "Projects", type: "finder" },
	{ id: 2, name: "Contact", type: "contact" },
	{ id: 3, name: "Resume", type: "resume" },
];
export const navIcons = [
	{ id: 1, img: "/icons/wifi.svg", alt: "wifi" },
	{ id: 2, img: "/icons/search.svg", alt: "search" },
	{ id: 3, img: "/icons/user.svg", alt: "user" },
	{ id: 4, img: "/icons/mode.svg", alt: "mode" },
];
export const dockApps = [
	{
		id: "finder",
		name: "Portfolio",
		icon: "finder.png",
		canOpen: true,
	},
	{
		id: "safari",
		name: "Articles",
		icon: "safari.png",
		canOpen: true,
	},
	{
		id: "photos",
		name: "Gallery",
		icon: "photos.png",
		canOpen: true,
	},
	{
		id: "contact",
		name: "Contact",
		icon: "contact.png",
		canOpen: true,
	},
	{
		id: "terminal",
		name: "Skills",
		icon: "terminal.png",
		canOpen: true,
	},
	{
		id: "trash",
		name: "Archive",
		icon: "trash.png",
		canOpen: false,
	},
];

export const INITIAL_Z_INDEX = 1000;
export const WINDOW_CONFIG = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export const techStack = [

	{
		category: "Languages",
		items: ["JavaScript", "TypeScript", "Python", "C++", "C#"],
	},
	{
		category: "Frontend",
		items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript"],
	},
	{
		category: "Styling",
		items: ["Tailwind CSS", "Bootstrap", "CSS"],
	},
	{
		category: "Animation",
		items: ["GSAP", "Framer Motion", "Swiper.js"],
	},
	{
		category: "Dev Tools",
		items: ["Git", "GitHub", "VS Code", "Webpack", "Vite"],
	},
	{
		category: "P-Managers",
		items: ["npm", "Yarn", "pnpm", "Bun"],
	},
	{
		category: "Deployment",
		items: ["Vercel", "Netlify"],
	},


];

export const blogPosts = [
	{
		id: 1,
		date: "Jan 5, 2026",
		title:
			"Advanced GSAP in React: Timelines, Context, and Performance Patterns",
		image: "/images/blog1.png",
		link: "https://github.com/MahdiyarDelavari",
	},
	{
		id: 2,
		date: "Dec 18, 2025",
		title:
			"Designing Scalable Next.js Applications: App Router, Data Fetching, and Caching",
		image: "/images/blog2.png",
		link: "https://github.com/MahdiyarDelavari",
	},
	{
		id: 3,
		date: "Nov 30, 2025",
		title:
			"What I Learned by Rebuilding Complex Products with React and TypeScript",
		image: "/images/blog3.png",
		link: "https://github.com/MahdiyarDelavari",
	},
];

export const socials = [
	{
		id: 1,
		text: "Github",
		icon: "/icons/github.svg",
		bg: "#f4656b",
		link: "https://github.com/MahdiyarDelavari",
	},
	{
		id: 2,
		text: "Email",
		icon: "email",
		bg: "#4bcb63",
		link: "mailto:mahdiyardelavari@gmail.com",
	},
	{
		id: 3,
		text: "Twitter/X",
		icon: "/icons/twitter.svg",
		bg: "#ff866b",
		link: "https://x.com/Im__Mahdiyar",
	},
	{
		id: 4,
		text: "LinkedIn",
		icon: "/icons/linkedin.svg",
		bg: "#05b6f6",
		link: "https://www.linkedin.com/in/mahdiyardelavari/",
	},
];
