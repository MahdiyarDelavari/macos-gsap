import React from "react";
import useWindowStore from "@store/window";
import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import { photosLinks, gallery } from "@constants";

const Photo = () => {
	const { openWindow, focusWindow } = useWindowStore();
	const [activeCategory, setActiveCategory] = React.useState(gallery[0]);

	const handleImageClick = (image) => {
		openWindow("imgfile", {
			name: image.name,
			src: image.img,
			image: image.img,
		});
		focusWindow("imgfile");
	};

	return (
		<>
			<div
				id="window-header"
				style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
			>
				<WindowControls target="photos" />
				<h2 className="text-[#1d1d1f] font-semibold text-sm text-center truncate max-w-xs">
					Photos
				</h2>
			</div>

			<div className="flex bg-[#f5f5f7] rounded-b-lg overflow-hidden w-150 h-100">
				{/* Sidebar */}
				<div className="w-32 border-r border-[#e5e5e7] bg-white p-3 overflow-y-auto">
					{gallery.map((cat, index) => (
						<button
							key={cat.id}
							onClick={() => setActiveCategory(cat)}
							className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition ${
								activeCategory.id === cat.id
									? "bg-[#e5e5e7] text-[#1d1d1f]"
									: "text-[#666] hover:bg-[#f5f5f7]"
							}`}
						>
							{photosLinks[index] && (
								<img
									src={photosLinks[index].icon}
									alt={cat.category}
									className="w-4 h-4"
								/>
							)}
							<span className="truncate">{cat.category}</span>
						</button>
					))}
				</div>

				{/* Gallery Grid */}
				<div className="flex-1 p-6 overflow-y-auto">
					<div className="grid grid-cols-3 gap-4">
						{activeCategory?.images && activeCategory.images.length > 0 ? (
							activeCategory.images.map((image) => (
								<div
									key={image.id}
									onClick={() => handleImageClick(image)}
									className="cursor-pointer group"
								>
									<img
										src={image.img}
										alt={image.name}
										className="w-full object-cover rounded-md shadow-sm group-hover:shadow-md transition"
									/>
									<p className="text-[#666] text-xs mt-1 text-center truncate">
										{image.name}
									</p>
								</div>
							))
						) : (
							<p className="text-[#a1a1a6] text-sm col-span-3 text-center">
								No photos
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

const PhotoWindow = WindowWrapper(Photo, "photos");

export default PhotoWindow;
