import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrack, setCurrentTrack] = useState(0);
	const [volume, setVolume] = useState(0.5);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const audioRef = useRef(null);

	const tracks = [
		{
			id: 1,
			title: "The Fate of Ophelia",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - The Fate of Ophelia.mp3",
		},
		{
			id: 2,
			title: "Elizabeth Taylor",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Elizabeth Taylor.mp3",
		},
		{
			id: 3,
			title: "Opalite",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Opalite.mp3",
		},
		{
			id: 4,
			title: "Father Figure",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Father Figure.mp3",
		},
		{
			id: 5,
			title: "Eldest Daughter",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Eldest Daughter.mp3",
		},
		{
			id: 6,
			title: "Ruin The Friendship",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Ruin The Friendship.mp3",
		},
		{
			id: 7,
			title: "Actually Romantic",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Actually Romantic.mp3",
		},
		{
			id: 8,
			title: "Wi$h Li$t",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Wi$h Li$t.mp3",
		},
		{
			id: 9,
			title: "Wood",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Wood.mp3",
		},
		{
			id: 10,
			title: "CANCELLED!",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - CANCELLED!.mp3",
		},
		{
			id: 11,
			title: "Honey",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - Honey.mp3",
		},
		{
			id: 12,
			title: "The Life of a Showgirl",
			artist: "Taylor Swift",
			album: "",
			cover: "/files/song.png",
			src: "/music/Taylor Swift - The Life of a Showgirl.mp3",
		},
	];

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateTime = () => setCurrentTime(audio.currentTime);
		const updateDuration = () => setDuration(audio.duration);

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", updateDuration);

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
			audio.removeEventListener("loadedmetadata", updateDuration);
		};
	}, []);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.volume = volume;
	}, [volume]);

	const togglePlay = () => {
		const audio = audioRef.current;
		if (!audio) return;
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		setIsPlaying(!isPlaying);
	};

	const stopPlayback = () => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.pause();
		audio.currentTime = 0;
		setIsPlaying(false);
		setCurrentTime(0);
	};

	const selectTrack = (index) => {
		stopPlayback();
		setCurrentTrack(index);
	};

	const changeTrack = (direction) => {
		let newTrack = currentTrack + direction;
		if (newTrack < 0) newTrack = tracks.length - 1;
		if (newTrack >= tracks.length) newTrack = 0;
		selectTrack(newTrack);
	};

	const adjustVolume = (e) => {
		const newVolume = Number.parseFloat(e.target.value);
		setVolume(newVolume);
	};

	const handleProgressChange = (e) => {
		const audio = audioRef.current;
		if (!audio) return;
		const newTime = Number.parseFloat(e.target.value);
		audio.currentTime = newTime;
		setCurrentTime(newTime);
	};

	const formatTime = (time) => {
		if (isNaN(time)) return "0:00";
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	return (
		<>
			<div id="window-header">
				<WindowControls target="musicplayer" />
				<p className="flex-1 text-center text-xs font-medium text-gray-500">
					Music
				</p>
				<div className="w-12" />
			</div>
			<div className="bg-white flex h-full">
				<div className="sidebar">
					<div className="sidebar-section">
						<h3>Library</h3>
						<ul>
							<li className="active">
								<img
									src="/icons/file.svg"
									className="w-4 opacity-70"
									alt=""
									aria-hidden="true"
								/>
								<p className="truncate text-sm font-medium">Taylor's Songs</p>
							</li>
						</ul>
					</div>
					<div className="sidebar-section flex-1 min-h-0">
						<h3>Playlists</h3>
						<ul className="sidebar-scroll">
							{tracks.map((track, index) => (
								<li
									key={track.id}
									onClick={() => selectTrack(index)}
									className={index === currentTrack ? "active" : "not-active"}
								>
									<img
										src="/icons/atom.svg"
										className="w-4 opacity-60 bg-blue-400 "
										alt=""
										aria-hidden="true"
									/>
									<p className="truncate text-sm font-medium">{track.title}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="content">
					<audio
						ref={audioRef}
						src={tracks[currentTrack].src}
						onEnded={() => changeTrack(1)}
					/>

					<div className="player">
						{/* Album Artwork */}
						<div className="mb-5">
							<div
								className={`artwork p-1 ${
									isPlaying ? "animate-spin-r-slow" : ""
								}`}
							>
								{tracks[currentTrack].cover ? (
									<img
										src={tracks[currentTrack].cover}
										alt={`${tracks[currentTrack].title} cover`}
										className={`h-full w-full rounded-full object-cover ${
											isPlaying ? "animate-spin-l-slow" : ""
										}`}
										loading="lazy"
									/>
								) : (
									<span className="text-white text-5xl">♪</span>
								)}
							</div>
						</div>

						{/* Track Info */}
						<div className="text-center mb-4">
							<h2 className="text-lg font-semibold text-gray-900 mb-0.5">
								{tracks[currentTrack].title}
							</h2>
							<p className="text-gray-500 text-sm">
								{tracks[currentTrack].artist}
							</p>
						</div>

						{/* Progress Bar */}
						<div className="w-full max-w-sm mb-4">
							<input
								type="range"
								min="0"
								max={duration || 0}
								value={currentTime}
								onChange={handleProgressChange}
								className="w-full h-1 bg-gray-200! rounded-lg appearance-none cursor-pointer slider"
							/>
							<div className="flex justify-between text-xs text-gray-500 mt-1">
								<span>{formatTime(currentTime)}</span>
								<span>{formatTime(duration)}</span>
							</div>
						</div>

						{/* Playback Controls */}
						<div className="flex items-center gap-4 mb-5">
							<button
								className="text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => changeTrack(-1)}
								aria-label="Previous"
							>
								<SkipBack size={22} fill="currentColor" />
							</button>
							<button
								className="play-btn"
								onClick={togglePlay}
								aria-label={isPlaying ? "Pause" : "Play"}
							>
								{isPlaying ? (
									<Pause size={24} fill="currentColor" />
								) : (
									<Play size={24} fill="currentColor" />
								)}
							</button>
							<button
								className="text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => changeTrack(1)}
								aria-label="Next"
							>
								<SkipForward size={22} fill="currentColor" />
							</button>
						</div>

						{/* Volume Control */}
						<div className="flex items-center gap-3 w-full max-w-xs">
							<Volume2 size={18} className="text-gray-500" />
							<input
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={adjustVolume}
								className="w-full h-1 bg-gray-200! rounded-lg appearance-none cursor-pointer slider"
							/>
						</div>
					</div>
					{isPlaying && (
						<div className="h-14 flex gap-2 bg-white/70 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-md p-5 mt-4 mx-auto now-playing-bar">
							{[
								1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
								19, 20, 21, 22, 23, 24
							].map((bar) => (
								<div
									key={bar}
									className={`indicator-line w-0.5 h-6
                                    ${isPlaying ? "active" : ""}
                                    ${bar % 2 === 0
										? "bg-gray-400"
										: "bg-blue-300"
									}
								`}
									style={{ animationDelay: `${bar * 0.1}s` }}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

const MusicPlayerWindow = WindowWrapper(MusicPlayer, "musicplayer");

export default MusicPlayerWindow;
