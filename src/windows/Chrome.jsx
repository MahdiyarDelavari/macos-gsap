import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import React from "react";
import { ExternalLink, Search, RotateCw } from "lucide-react";

const toUrl = (rawInput) => {
	const input = (rawInput ?? "").trim();
	if (!input) return null;

	if (/^https?:\/\//i.test(input)) return input;

	const looksLikeDomain = !/\s/.test(input) && input.includes(".");
	if (looksLikeDomain) return `https://${input}`;

	// Note: Google may block embedding on some routes due to iframe headers.
	// The "igu=1" parameter often serves a lighter-weight page that can embed more reliably.
	return `https://www.google.com/search?igu=1&q=${encodeURIComponent(input)}`;
};

const Chrome = () => {
	const [value, setValue] = React.useState("https://www.google.com");
	const [src, setSrc] = React.useState("https://www.google.com/webhp?igu=1");
	const [reloadKey, setReloadKey] = React.useState(0);

	const navigate = React.useCallback(
		(nextValue) => {
			const nextUrl = toUrl(nextValue);
			if (!nextUrl) return;
			setSrc(nextUrl);
		},
		[setSrc]
	);

	const onSubmit = (e) => {
		e.preventDefault();
		navigate(value);
	};

	const goToGoogleHome = () => {
		setValue("https://www.google.com");
		setSrc("https://www.google.com/webhp?igu=1");
	};

	const openInNewTab = () => {
		const nextUrl = toUrl(value);
		if (!nextUrl) return;
		window.open(nextUrl, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="flex flex-col h-full">
			<div id="window-header">
				<WindowControls target="chrome" />
				<form onSubmit={onSubmit} className="flex-1 flex-center gap-2 px-3">
					<div className="search max-w-2xl">
						<Search className="icon mr-2 text-gray-400" />
						<input
							type=""
							value={value}
							onChange={(e) => setValue(e.target.value)}
							onClick={(e) => {
								e.target.focus();
							}}
							placeholder="Search or enter website name"
							style={{ fontSize: 15 }}
						/>
					</div>
					<button
						type="button"
						className="rounded-full bg-white border border-gray-300 px-3 py-1 hover:bg-gray-100 transition text-sm text-gray-700"
						data-no-drag="true"
						onClick={goToGoogleHome}
					>
						Google
					</button>
				</form>

				<button
					type="button"
					aria-label="Open in new tab"
					className="rounded-full bg-white border border-gray-300 p-1 hover:bg-gray-100 transition"
					onClick={openInNewTab}
					data-no-drag="true"
				>
					<ExternalLink className="icon rounded-full text-gray-500" />
				</button>

				<button
					type="button"
					aria-label="Reload"
					className="rounded-full bg-white border border-gray-300 p-1 hover:bg-gray-100 transition"
					onClick={() => setReloadKey((k) => k + 1)}
					data-no-drag="true"
				>
					<RotateCw className="icon rounded-full text-gray-500" />
				</button>
			</div>

			<div className="flex-1 bg-white">
				<iframe
					key={reloadKey}
					src={src}
					title="Chrome"
					className="w-full h-full"
					referrerPolicy="no-referrer"
					sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
				/>
			</div>
		</div>
	);
};

const ChromeWindow = WindowWrapper(Chrome, "chrome");

export default ChromeWindow;
