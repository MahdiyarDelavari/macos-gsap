import WindowControls from "@components/WindowControls";
import { blogPosts } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import {
	ChevronLeft,
	ChevronRight,
	Copy,
	MoveRight,
	PanelLeft,
	Plus,
	Search,
	Share,
	ShieldHalf,
} from "lucide-react";
import React from "react";

const Safari = () => {
	return (
		<>
			<div
				id="window-header"
				style={{
					boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
				}}
			>
				<WindowControls target="safari" />

				<PanelLeft className="ml-6 icon text-gray-500" />

				<div className="flex items-center gap-2 ml-4">
					<button
						aria-label="Back"
						className="rounded-full bg-white border border-gray-300 p-1 hover:bg-gray-100 transition"
					>
						<ChevronLeft className="icon rounded-full text-gray-500" />
					</button>
					<button
						aria-label="Forward"
						className="rounded-full bg-white border border-gray-300 p-1 hover:bg-gray-100 transition"
					>
						<ChevronRight className="icon rounded-full text-gray-500" />
					</button>
				</div>

				{/* Address/Search Bar */}
				<div className="flex-1 flex-center gap-2 mx-6">
					<ShieldHalf className="icon text-green-500" />
					<div className="search">
						<Search className="icon mr-2 text-gray-400" />
						<input
							type="text"
							placeholder="Search or enter website name"
							style={{ fontSize: 15 }}
						/>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<button
						aria-label="Share"
						className="rounded-full bg-white border border-gray-300 p-1 hover:bg-gray-100 transition"
					>
						<Share className="icon rounded-full text-gray-500" />
					</button>
					<button
						aria-label="New Tab"
						className="rounded-full bg-white border border-gray-300 p-1 hover:bg-gray-100 transition"
					>
						<Plus className="icon rounded-full text-gray-500" />
					</button>
					<button
						aria-label="Copy"
						className="rounded-lg bg-white border border-gray-300 p-1 hover:bg-gray-100 transition"
					>
						<Copy className="icon text-gray-500" />
					</button>
				</div>
			</div>

			{/* Content Area */}
			<div className="blog ">
				<h2>My Thoughts</h2>
				<div className="space-y-8">
					{blogPosts.map(({ id, title, date, link, image }) => (
						<div key={id} className="blog-post">
							<div className="w-28 shrink-0">
								<img src={image} alt={title} />
							</div>
							<div className="content">
								<p>{date}</p>
								<h3>{title}</h3>
								<a href={link} target="_blank" rel="noopener noreferrer">
									Check out the full post{" "}
									<MoveRight className="icon-hover ml-1 text-blue-500" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
