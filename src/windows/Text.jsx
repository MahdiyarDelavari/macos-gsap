import React from "react";
import useWindowStore from "@store/window";
import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";

const Text = () => {
	const { windows } = useWindowStore();

	const data = windows.txtfile?.data;

	return (
		<>
			<div
				id="window-header"
				style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
			>
				<WindowControls target="txtfile" />
				<h2 className="text-[#1d1d1f] font-semibold text-sm text-center truncate max-w-xs">
					{data?.name || "Text File"}
				</h2>
			</div>

			{data ? (
				<div className="flex flex-col bg-[#f5f5f7] p-6 rounded-b-lg overflow-y-auto space-y-4 max-w-150">
					{data.image && (
						<img
							src={data.image}
							alt={data.name}
							className="max-w-full w-36 rounded-md shadow-md object-cover"
						/>
					)}
					{data.subtitle && (
						<h3 className="text-[#1d1d1f] font-semibold text-base mt-2">
							{data.subtitle}
						</h3>
					)}
					{data.description &&
						data.description.map((para, index) => (
							<p
								key={index}
								className="text-[#333] text-sm leading-6"
                            >
								{para}
							</p>
						))}
				</div>
			) : (
				<div className="flex items-center justify-center bg-[#f5f5f7] p-8 rounded-b-lg h-40">
					<p className="text-[#a1a1a6] text-sm">No file open</p>
				</div>
			)}
		</>
	);
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
