import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import { Download } from "lucide-react";
import React, { useState } from "react";
const Resume = () => {
	const [currentImage, setCurrentImage] = useState(1);

	const toggleImage = () => {
		setCurrentImage((prev) => (prev === 1 ? 2 : 1));
	};

	return (
		<>
			<div id="window-header">
				<WindowControls target="resume" />
				<h2 className="text-[#1d1d1f] font-semibold text-sm text-center truncate max-w-xs">
					Resume.pdf
				</h2>
				<a
					href="files/resume.pdf"
					download
					className="cursor-pointer bg-[#d1d1d6] hover:bg-[#c7c7cc] text-[#1d1d1f] font-medium p-2 rounded-md shadow-sm hover:shadow-md transition-all flex items-center justify-center"
					title="Download Resume"
				>
					<Download className="w-5 h-5" />
				</a>
			</div>
			<div className="flex flex-col items-center justify-center bg-[#f5f5f7] p-5 rounded-b-lg">
				<img
					src={`files/${currentImage}.png`}
					alt={`Resume Page ${currentImage}`}
					className="max-w-[50vh] h-auto m-3 shadow-md rounded-md"
				/>
				<button
					onClick={toggleImage}
					className="bg-[#d1d1d6] hover:bg-[#c7c7cc] text-[#1d1d1f] font-medium text-sm py-1 px-4 rounded-md shadow-sm hover:shadow-md transition-all mt-4 transform hover:scale-105"
				>
					Page {currentImage === 1 ? 2 : 1}
				</button>
			</div>
		</>
	);
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
