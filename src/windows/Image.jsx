import React from "react";
import useWindowStore from "@store/window";
import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import { Download, Info } from "lucide-react";

const Image = () => {
	const { windows } = useWindowStore();

	const data = windows.imgfile?.data;

	return (
		<>
			<div
				id="window-header"
				style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
			>
				<WindowControls target="imgfile" />
				<h2 className="text-[#1d1d1f] font-semibold text-sm text-center truncate max-w-xs">
					{data?.name || "Image File"}
				</h2>
				{data && (
					<div className="ml-auto flex items-center gap-2 mr-3">
						<button
							className="p-1 rounded hover:bg-gray-200 transition"
							title="Info"
						>
							<Info className="w-4 h-4 text-gray-600" />
						</button>
						<a
							href={data.src}
							download={data.name}
							className="p-1 rounded hover:bg-gray-200 transition"
							title="Download"
						>
							<Download className="w-4 h-4 text-gray-600" />
						</a>
					</div>
				)}
			</div>

			{data ? (
				<div className="flex flex-col bg-[#f5f5f7] p-6 rounded-b-lg overflow-y-auto max-h-96">
					<div className="flex items-center justify-center mb-4">
						<img
							src={data.image}
							alt={data.name}
							className="max-w-full max-h-80 rounded-md shadow-md object-contain"
						/>
					</div>
					<div></div>
				</div>
			) : (
				<div className="flex items-center justify-center bg-[#f5f5f7] p-8 rounded-b-lg h-40">
					<p className="text-[#a1a1a6] text-sm">No file open</p>
				</div>
			)}
		</>
	);
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
