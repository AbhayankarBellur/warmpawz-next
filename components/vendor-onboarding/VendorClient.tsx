"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	ContentSection,
	OnboardingSteps,
	VendorFAQSection,
} from "@/components/vendor-onboarding";
import { BackButton } from "@/components/shared";

gsap.registerPlugin(ScrollTrigger);

const VendorOnboardingClient = () => {
	useEffect(() => {
		// Refresh ScrollTrigger on mount
		ScrollTrigger.refresh();

		// Force all videos on the page to play
		const playAllVideos = () => {
			const videos = document.querySelectorAll("video");
			videos.forEach((video) => {
				if (video.paused) {
					video.play().catch(console.error);
				}
			});
		};

		// Play videos immediately and set up interval to ensure continuous playback
		playAllVideos();
		const videoInterval = setInterval(playAllVideos, 1000);

		// Handle visibility change to restart videos when page becomes visible
		const handleVisibilityChange = () => {
			if (!document.hidden) {
				setTimeout(playAllVideos, 100);
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			clearInterval(videoInterval);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);

	return (
		<>
			<BackButton className="bg-gray-100 border-gray-300 hover:bg-gray-200 text-black ml-4" />
			<ContentSection />
			<OnboardingSteps />
			<VendorFAQSection />

			{/* App Store / Play Store buttons (service provider page) - full width orange band to match page, no gap */}
			<section className="w-full bg-[#F69052] py-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center gap-4">
						<a
							href="https://apps.apple.com/in/app/warmpawz-service-provider/id6761255795"
							target="_blank"
							rel="noopener noreferrer"
							className="block"
						>
							<img
								src="/images/apple%20app%20icon.png"
								alt="Download on the App Store"
								className="h-12 md:h-14"
							/>
						</a>
						<a
							href="https://play.google.com/store/apps/details?id=com.warmpawz.vendor&pcampaignid=web_share"
							target="_blank"
							rel="noopener noreferrer"
							className="block"
						>
							<img
								src="/images/google%20playstore%20icon.png"
								alt="Get it on Google Play"
								className="h-12 md:h-14"
							/>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default VendorOnboardingClient;
