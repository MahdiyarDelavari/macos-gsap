import WindowControls from "@components/WindowControls";
import { techStack } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import React from "react";

const Terminal = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="terminal" />
				<h2>Tech Stack</h2>
			</div>
			<div className="techstack">
				<p>
					<span className="font-bold">@Mahdiyar %</span>
					show tech stack
				</p>
				<div className="label">
					<p className="w-32">Category</p>
					<p>Technologies</p>
				</div>

				<ul className="content flex flex-col gap-1.5">
					{techStack.map(({ category, items }) => (
						<li key={category} className="flex items-center">
							<Check className="check" size={20} />
							<h3>{category}</h3>
							<ul>
								{items.map((item, index) => (
                                    <li key={item}>
										{item}{index < items.length - 1 ? "," : ""}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<div className="footnote">
					<p>
						<Check className="check" size={20} /> 5 Of 5 Stacks Loaded
						Successfully (100%)
					</p>
					<p className="text-black">
						<Flag size={15} fill="black" />
						Render Time : 6ms
					</p>
				</div>
				<p className="mt-8 mb-6">
                    <span className="font-bold">@Mahdiyar %</span>
				</p>
			</div>
		</>
	);
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
