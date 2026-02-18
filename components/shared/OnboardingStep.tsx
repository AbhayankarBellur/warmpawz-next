"use client";

import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OnboardingStepProps {
	stepNumber: number;
	title: string;
	description: string;
	videoSrc?: string;
	isReversed?: boolean;
}

const OnboardingStep: FC<OnboardingStepProps> = ({
	stepNumber,
	title,
	description,
	videoSrc,
	isReversed = false,
}) => {
	const stepRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	// GSAP scroll-driven scale animation (matches pet parent StageSection)
	useEffect(() => {
		if (!stepRef.current) return;

		const mm = gsap.matchMedia();

		mm.add("(max-width: 1023px)", () => {
			if (stepRef.current) {
				gsap.fromTo(
					stepRef.current,
					{ scale: 0.95 },
					{
						scale: 1.05,
						ease: "power2.out",
						scrollTrigger: {
							trigger: stepRef.current,
							start: "top 80%",
							end: "center center",
							scrub: 1,
						},
					}
				);
			}
		});

		return () => mm.revert();
	}, []);

	// Ensure video plays and loops continuously
	useEffect(() => {
		const video = videoRef.current;
		if (!video || !videoSrc) return;

		let videoDuration = 0;
		const isStep3 = stepNumber === 3;

		const handleVideoLoad = () => {
			if (isStep3 && video.duration) {
				videoDuration = video.duration - 2; // Cut off last 2 seconds for step 3
			}
			video.play().catch(() => {});
		};

		const handleTimeUpdate = () => {
			// For step 3, loop before the last second
			if (isStep3 && videoDuration > 0 && video.currentTime >= videoDuration) {
				video.currentTime = 0;
				video.play().catch(() => {});
			}
		};

		const handleVideoEnd = () => {
			video.currentTime = 0;
			video.play().catch(() => {});
		};

		const handleVideoError = () => {
			// Retry loading the video
			video.load();
		};

		// Force video to play when loaded
		video.addEventListener("loadeddata", handleVideoLoad);
		video.addEventListener("canplay", handleVideoLoad);
		video.addEventListener("timeupdate", handleTimeUpdate);
		video.addEventListener("ended", handleVideoEnd);
		video.addEventListener("error", handleVideoError);

		// Use Page Visibility API to resume playback when page becomes visible
		const handleVisibilityChange = () => {
			if (!document.hidden && video.paused) {
				video.play().catch(() => {});
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		// Initial play attempt
		if (video.readyState >= 2) {
			video.play().catch(() => {});
		}

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			video.removeEventListener("loadeddata", handleVideoLoad);
			video.removeEventListener("canplay", handleVideoLoad);
			video.removeEventListener("timeupdate", handleTimeUpdate);
			video.removeEventListener("ended", handleVideoEnd);
			video.removeEventListener("error", handleVideoError);
		};
	}, [videoSrc, stepNumber]);

	// Video content with enhanced controls disabled
	const videoContent = (
		<div
			className="flex items-center justify-center bg-transparent"
		>
			{videoSrc && (
				<div
					className="relative w-[220px] h-[450px] sm:w-[280px] sm:h-[570px] rounded-[48px] overflow-hidden"
					style={{ willChange: "transform, opacity" }}
				>
					<video
						ref={videoRef}
						src={videoSrc}
						autoPlay
						loop
						muted
						playsInline
						preload="auto"
						controls={false}
						controlsList="nodownload nofullscreen noremoteplayback"
						disablePictureInPicture
						disableRemotePlayback
						className="w-full h-full object-cover video-no-controls bg-transparent"
						style={{ pointerEvents: "none" }}
						onContextMenu={(e) => e.preventDefault()}
						onDoubleClick={(e) => e.preventDefault()}
					/>
				</div>
			)}
		</div>
	);

	return (
		<div ref={stepRef} className="flex flex-col items-center gap-6">
			{/* Step number and title at the top */}
			<div className="text-center">
				<span className="text-[#F69052] font-bold text-lg sm:text-xl">Step {stepNumber}</span>
				<h3 className="text-[28px] sm:text-[32px] md:text-[38px] font-bold text-[#3A2A26] mt-2">
					{title}
				</h3>
			</div>

			{/* Video in the middle */}
			{videoContent}

			{/* Description below video */}
			<div className="w-full max-w-2xl">
				<div className="rounded-2xl p-5 sm:p-7 bg-white shadow-lg" style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.05)" }}>
					<p className="text-[18px] sm:text-[20px] leading-[1.65] text-[#6F6663] text-center">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OnboardingStep;
