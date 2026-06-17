"use client";

import { useState, useEffect, useRef } from "react";
import petTrainingImage from "@/public/images/kling2.png";
import { BREAKPOINTS, ANIMATIONS, VIDEOS } from "@/config/constants";

interface LoadingScreenProps {
	onComplete: () => void;
}

interface VideoSize {
	width: string;
	height: string;
	scale: number;
}

const calculateVideoSize = (isMobile: boolean): VideoSize => {
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;
	const viewportRatio = viewportWidth / viewportHeight;
	const videoRatio = isMobile ? 9 / 16 : 16 / 9;

	let scale = 1;
	let width = "100vw";
	let height = "100vh";

	if (viewportRatio > videoRatio) {
		scale = 1.15;
		height = "120vh";
	} else {
		scale = 1.15;
		width = "120vw";
	}

	if (isMobile) {
		scale += 0.1;
	}

	return { width, height, scale };
};

const getLoadingPlaybackRate = (mediaDuration: number, targetMs: number) => {
	const targetSeconds = targetMs / 1000;
	if (!Number.isFinite(mediaDuration) || mediaDuration <= 0) return 1;
	return Math.max(1, mediaDuration / targetSeconds);
};

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
	const [videoOpacity, setVideoOpacity] = useState(1);
	const [isMobile, setIsMobile] = useState(false);
	const [videoSize, setVideoSize] = useState<VideoSize>({
		width: "100vw",
		height: "100vh",
		scale: 1.15,
	});
	const videoRef = useRef<HTMLVideoElement>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const hasFinishedRef = useRef(false);
	const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const onCompleteRef = useRef(onComplete);

	const loadingPlayDurationMs =
		ANIMATIONS.loadingTotalDuration - ANIMATIONS.loadingDissolution;

	onCompleteRef.current = onComplete;

	const finishLoading = () => {
		if (hasFinishedRef.current) return;
		hasFinishedRef.current = true;

		if (finishTimerRef.current) {
			clearTimeout(finishTimerRef.current);
			finishTimerRef.current = null;
		}

		videoRef.current?.pause();
		if (audioRef.current) {
			audioRef.current.pause();
		}

		setVideoOpacity(0);
		setTimeout(() => {
			onCompleteRef.current();
		}, ANIMATIONS.loadingDissolution);
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";
		document.body.style.position = "fixed";
		document.body.style.width = "100%";
		document.body.style.height = "100%";
		document.documentElement.style.overflow = "hidden";

		const loadingAudio = new Audio(
			"/audio/loading%20animation%20sound%20effect.wav",
		);
		loadingAudio.preload = "auto";
		loadingAudio.volume = 1;
		audioRef.current = loadingAudio;

		const interactionEvents = ["pointerdown", "touchstart", "keydown"];
		let interactionFallbackAttached = false;

		const cleanupInteractionFallback = () => {
			if (!interactionFallbackAttached) {
				return;
			}
			interactionEvents.forEach((eventName) => {
				window.removeEventListener(eventName, handleFirstInteraction);
			});
			interactionFallbackAttached = false;
		};

		const handleFirstInteraction = () => {
			void loadingAudio.play().finally(() => {
				cleanupInteractionFallback();
			});
		};

		const handleAudioReady = () => {
			loadingAudio.playbackRate = getLoadingPlaybackRate(
				loadingAudio.duration,
				loadingPlayDurationMs,
			);
		};

		loadingAudio.addEventListener("loadedmetadata", handleAudioReady);

		void loadingAudio.play().catch(() => {
			interactionEvents.forEach((eventName) => {
				window.addEventListener(eventName, handleFirstInteraction, {
					once: true,
				});
			});
			interactionFallbackAttached = true;
		});

		const imagesToPreload = [
			petTrainingImage,
			"/images/kling_20251208_Text_to_Image_I_need_to__2933_0.png",
		];

		imagesToPreload.forEach((src) => {
			const img = new Image();
			img.src = typeof src === "string" ? src : src.src;
		});

		const checkMobile = () => {
			const userAgent = navigator.userAgent.toLowerCase();
			const mobileKeywords = [
				"mobile",
				"android",
				"iphone",
				"ipad",
				"ipod",
				"blackberry",
				"windows phone",
			];
			const isMobileUserAgent = mobileKeywords.some((keyword) =>
				userAgent.includes(keyword),
			);
			const isMobileScreen = window.innerWidth <= BREAKPOINTS.mobile;

			return isMobileUserAgent || isMobileScreen;
		};

		const updateVideoSize = () => {
			const mobile = checkMobile();
			setIsMobile(mobile);
			setVideoSize(calculateVideoSize(mobile));
		};

		updateVideoSize();

		const handleResize = () => {
			updateVideoSize();
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("orientationchange", handleResize);

		// Safety fallback only — normal completion is via onEnded after full sped-up playback
		finishTimerRef.current = setTimeout(
			finishLoading,
			ANIMATIONS.loadingTotalDuration + 500,
		);

		return () => {
			if (finishTimerRef.current) {
				clearTimeout(finishTimerRef.current);
				finishTimerRef.current = null;
			}
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("orientationchange", handleResize);
			loadingAudio.removeEventListener("loadedmetadata", handleAudioReady);
			cleanupInteractionFallback();
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
				audioRef.current = null;
			}
			document.body.style.overflow = "";
			document.body.style.position = "";
			document.body.style.width = "";
			document.body.style.height = "";
			document.documentElement.style.overflow = "";
		};
	}, [loadingPlayDurationMs]);

	const handleVideoLoaded = () => {
		const video = videoRef.current;
		if (!video) return;

		video.playbackRate = getLoadingPlaybackRate(
			video.duration,
			loadingPlayDurationMs,
		);
	};

	const videoSource = isMobile ? VIDEOS.loading.mobile : VIDEOS.loading.desktop;

	return (
		<div
			className="fixed z-9999 bg-white"
			style={{
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				width: "100vw",
				height: "100dvh",
				overflow: "hidden",
				margin: 0,
				padding: 0,
			}}
		>
			<video
				ref={videoRef}
				key={videoSource}
				autoPlay
				muted
				playsInline
				webkit-playsinline="true"
				onLoadedMetadata={handleVideoLoaded}
				onEnded={finishLoading}
				className="transition-opacity duration-300 ease-out"
				style={{
					opacity: videoOpacity,
					position: "absolute",
					top: "50%",
					left: "50%",
					width: videoSize.width,
					height: videoSize.height,
					minWidth: "100vw",
					minHeight: "100dvh",
					objectFit: "cover",
					objectPosition: "center center",
					transform: `translate(-50%, -50%) scale(${videoSize.scale})`,
					margin: 0,
					padding: 0,
					display: "block",
				}}
			>
				<source src={videoSource} type="video/quicktime" />
				<source src={videoSource} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default LoadingScreen;
