const WORK_LOCATION = {
	id: 100,
	type: "work",
	name: "Work",
	icon: "/icons/work.svg",
	kind: "folder",
	children: [
		// ▶ Project 1
		{
			id: 1,
			name: "Youtube Clone",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-5", // icon position inside Finder
			windowPosition: "top-[5vh] left-5", // optional: Finder window position
			children: [
				{
					id: 1,
					name: "Youtube Clone.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"Elegant, lightweight YouTube-style frontend built with React and Vite.",
						"Clean component structure: Navbar, Sidebar, Feed, PlayVideo, Recommended.",
						"Tailwind CSS for rapid, responsive styling.",
						"Integrates with YouTube Data API to fetch and play videos, show recommendations.",
						"Features: browse popular videos, responsive grid, detailed player view, channel info, like/share/save, comments, sidebar with subscriptions.",
                        "Tech: React 19, Vite, Tailwind CSS, React Router DOM, YouTube Data API v3.",
                        
					],
				},
				{
					id: 2,
					name: "github",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://github.com/MahdiyarDelavari/youtube-clone",
					position: "top-10 right-20",
				},
			],
		},

		// ▶ Project 2
		{
			id: 2,
			name: "Entrepreneurs App",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-52 right-80",
			windowPosition: "top-[20vh] left-7",
			children: [
				{
					id: 1,
					name: "Entrepreneurs App.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 right-10",
					description: [
						"Submit a startup pitch with title, description, category, image URL and a Markdown pitch body.",
						"Browse all startups and search by query",
						"Filter startups by category",
						"View detailed pitch page with full description and image",
						"Lightweight authentication using GitHub(via NextAuth)",
						"Responsive design with Tailwind CSS",
						"Built with Next.js, React, Tailwind CSS, NextAuth, and MongoDB",
						"Client - side toast notifications and form validation using Zod",
					],
				},
				{
					id: 2,
					name: "github",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
                    href: "https://github.com/MahdiyarDelavari/entrepreneurs_next",
					position: "top-20 left-20",
				}
			],
		},
	],
};

const ABOUT_LOCATION = {
	id: 101,
	type: "about",
	name: "About me",
	icon: "/icons/info.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-5",
			image: "/images/tardis.png",
		},
		{
			id: 2,
			name: "casual-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-28 right-72",
			image: "/images/tardis.png",
		},
		{
			id: 3,
			name: "conference-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-52 left-80",
			image: "/images/tardis.png",
		},
		{
			id: 4,
			name: "about-me.txt",
			icon: "/images/txt.png",
			kind: "file",
			fileType: "txt",
			position: "top-6 left-90",
			subtitle: "Meet the Developer Behind the Code",
			image: "/images/tardis.png",
			description: [
				"Hey! I’m Mahdiyar 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
				"I specialize in JavaScript, React, and Next.js and I love making things feel smooth, fast, and just a little bit delightful.",
				"I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
				"Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
			],
		},
	],
};

const RESUME_LOCATION = {
	id: 102,
	type: "resume",
	name: "Resume",
	icon: "/icons/file.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "Resume.pdf",
			icon: "/images/pdf.png",
			kind: "file",
			fileType: "pdf",
		},
	],
};

const TRASH_LOCATION = {
	id: 103,
	type: "trash",
	name: "Trash",
	icon: "/icons/trash.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "trash1.png",
			icon: "/images/blog1.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-10",
			image: "/images/blog1.png",
		},
		{
			id: 2,
			name: "trash2.png",
			icon: "/images/blog2.png",
			kind: "file",
			fileType: "img",
			position: "top-40 left-80",
			image: "/images/blog2.png",
		},
	],
};

export const locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
	trash: TRASH_LOCATION,
};
