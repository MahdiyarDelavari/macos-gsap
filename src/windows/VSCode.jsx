import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import React from "react";
import { FileText, Play, FileCode2, Palette, Braces } from "lucide-react";
import Editor from "@monaco-editor/react";

const DEFAULT_FILES = {
	"index.html": `<!-- Tailwind is available. -->
<div class="min-h-screen bg-linear-to-br from-slate-50 to-slate-200 p-8">
	<div class="mx-auto max-w-xl rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm p-6">
		<div class="flex items-center justify-between gap-4">
			<h1 class="text-xl font-semibold text-slate-900">Playground</h1>
			<span id="clock" class="text-xs font-medium text-slate-500">—</span>
		</div>

		<p class="mt-2 text-sm text-slate-600">
			Edit <span class="font-mono text-slate-800">index.html</span>,
			<span class="font-mono text-slate-800">style.css</span>, and
			<span class="font-mono text-slate-800">script.js</span> then click <b>Run</b>.
		</p>

		<div class="mt-5 flex flex-wrap items-center gap-3">
			<button
				id="btn"
				class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
			>
				Click me
			</button>
			<button
				id="reset"
				class="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white transition"
			>
				Reset
			</button>
		</div>

		<p id="out" class="mt-4 text-sm text-slate-700"></p>
	</div>
</div>
`,
	"style.css": `/* Optional: add your own CSS here. */
/* Tailwind is already available.*/
`,
	"script.js": `const btn = document.getElementById('btn');
const reset = document.getElementById('reset');
const out = document.getElementById('out');
const clock = document.getElementById('clock');

const tick = () => {
	if (clock) clock.textContent = new Date().toLocaleTimeString();
};
tick();
setInterval(tick, 1000);

btn?.addEventListener('click', () => {
	if (!out) return;
	out.textContent = 'Clicked at ' + new Date().toLocaleTimeString();
});

reset?.addEventListener('click', () => {
	if (!out) return;
	out.textContent = '';
});
`,
};

const fileLanguage = (name) => {
	if (name.endsWith(".html")) return "html";
	if (name.endsWith(".css")) return "css";
	return "javascript";
};

const fileIcon = (name) => {
	if (name.endsWith(".html")) return FileCode2;
	if (name.endsWith(".css")) return Palette;
	return Braces;
};

const buildPreviewDoc = ({ html, css, js }) => {
	return `<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.tailwindcss.com"></script>
		<style>
			:root { color-scheme: light; }
			html, body { height: 100%; }
			body { margin: 0; }
			${css ?? ""}
		</style>
	</head>
	<body class="antialiased">
		${html ?? ""}
		<script>
			try {
				${js ?? ""}
			} catch (e) {
				const pre = document.createElement('pre');
				pre.style.cssText = 'color:#b91c1c;background:#fee2e2;padding:12px;border-radius:8px;white-space:pre-wrap;';
				pre.textContent = String(e && e.stack ? e.stack : e);
				document.body.appendChild(pre);
			}
		</script>
	</body>
</html>`;
};

const VSCode = () => {
	const [files, setFiles] = React.useState(() => ({ ...DEFAULT_FILES }));
	const [activeFile, setActiveFile] = React.useState("index.html");
	const [showPreview, setShowPreview] = React.useState(false);
	const [previewKey, setPreviewKey] = React.useState(0);
	const previewDoc = React.useMemo(() => {
		return buildPreviewDoc({
			html: files["index.html"] ?? "",
			css: files["style.css"] ?? "",
			js: files["script.js"] ?? "",
		});
	}, [files]);

	const runPreview = () => {
		setShowPreview(true);
		setPreviewKey((k) => k + 1);
	};

	return (
		<>
			<div id="window-header">
				<WindowControls target="vscode" />
				<p className="flex-1 text-center text-xs font-medium text-gray-500 select-none">
					Visual Studio Code
				</p>
				<div className="w-12" />
			</div>

			<div className="flex h-full bg-white">
				<div className="w-12 shrink-0 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-2 gap-1">
					<button
						type="button"
						className={
							"w-10 h-10 grid place-items-center rounded-md transition " +
							(!showPreview
								? "bg-white shadow-sm border border-gray-200"
								: "hover:bg-gray-200")
						}
						aria-label="Explorer"
						onClick={() => setShowPreview(false)}
					>
						<FileText className="w-5 h-5 text-gray-600" />
					</button>
					<button
						type="button"
						className={
							"w-10 h-10 grid place-items-center rounded-md transition " +
							(showPreview
								? "bg-white shadow-sm border border-gray-200"
								: "hover:bg-gray-200")
						}
						aria-label="Preview"
						onClick={runPreview}
					>
						<Play className="w-5 h-5 text-gray-600" />
					</button>
				</div>

				<div className="w-50 shrink-0 bg-gray-50 border-r border-gray-200 flex flex-col min-h-0">
					<div className="p-3 border-b border-gray-200">
						<p className="text-[11px] font-semibold text-gray-500 tracking-wider">
							EXPLORER
						</p>
						<p className="text-xs text-gray-600 mt-1 truncate">PLAYGROUND</p>
					</div>
					<ul className="p-2 space-y-1 text-sm overflow-auto min-h-0">
						{Object.keys(files).map((name) => {
							const active = name === activeFile && !showPreview;
							const Icon = fileIcon(name);
							return (
								<li
									key={name}
									className={
										"flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors " +
										(active
											? "bg-blue-100 text-blue-700"
											: "text-gray-700 hover:bg-gray-200")
									}
									onClick={() => {
										setShowPreview(false);
										setActiveFile(name);
									}}
								>
									<Icon className="w-4 h-4 text-gray-500" />
									<span className="truncate">{name}</span>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="flex-1 flex flex-col min-w-0">
					<div className="border-b border-gray-200 bg-white">
						<div className="h-10 flex items-stretch justify-between px-2">
							<div className="flex items-stretch gap-1 min-w-0">
								<button
									type="button"
									className={
										"h-full px-3 text-sm border-b-2 transition-colors truncate max-w-65 " +
										(!showPreview
											? "border-blue-500 text-gray-900 bg-gray-50"
											: "border-transparent text-gray-600 hover:text-gray-900")
									}
									onClick={() => setShowPreview(false)}
								>
									{activeFile}
								</button>
								<button
									type="button"
									className={
										"h-full px-3 text-sm border-b-2 transition-colors " +
										(showPreview
											? "border-blue-500 text-gray-900 bg-gray-50"
											: "border-transparent text-gray-600 hover:text-gray-900")
									}
									onClick={runPreview}
								>
									Preview
								</button>
							</div>

							<div className="flex items-center gap-2">
								<button
									type="button"
									className="text-xs px-2.5 py-1.5 rounded-md border border-gray-200 bg-blue-800 text-white hover:bg-blue-500 transition"
									onClick={runPreview}
								>
									Run
								</button>
							</div>
						</div>
					</div>

					<div className="flex-1 min-h-0">
						{showPreview ? (
							<iframe
								key={previewKey}
								title="Preview"
								srcDoc={previewDoc}
								className="w-full h-full bg-white"
								sandbox="allow-scripts allow-forms allow-modals"
								referrerPolicy="no-referrer"
							/>
						) : (
							<Editor
								className="py-5 pr-7"
								height="100%"
								language={fileLanguage(activeFile)}
								value={files[activeFile] ?? ""}
								onChange={(next) => {
									setFiles((prev) => ({ ...prev, [activeFile]: next ?? "" }));
								}}
								options={{
									minimap: { enabled: false },
									fontSize: 13,
									fontFamily:
										"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
									scrollBeyondLastLine: false,
									automaticLayout: true,
									wordWrap: "on",
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

const VSCodeWindow = WindowWrapper(VSCode, "vscode");

export default VSCodeWindow;
