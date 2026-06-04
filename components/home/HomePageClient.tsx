"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen, MainContent } from "@/components/home";
import { STORAGE_KEYS } from "@/config/constants";

const HomePageClient = () => {
	// null = haven't checked yet, true = show loading, false = skip loading
	const [isLoading, setIsLoading] = useState<boolean | null>(null);
	const [showContent, setShowContent] = useState(false);
	const checkedRef = React.useRef(false);

	useEffect(() => {
		if (checkedRef.current) return;
		checkedRef.current = true;

		const hasShownLoading = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);
		if (hasShownLoading === "true") {
			// Already shown loading before — go straight to content
			// Use queueMicrotask to avoid synchronous setState in effect
			queueMicrotask(() => {
				setIsLoading(false);
				setShowContent(true);
			});
		} else {
			// First visit — show loading screen
			sessionStorage.setItem(STORAGE_KEYS.hasShownLoading, "true");
			queueMicrotask(() => {
				setIsLoading(true);
			});
		}
	}, []);

	const handleLoadingComplete = () => {
		setIsLoading(false);
		// Small delay to ensure smooth transition
		setTimeout(() => {
			setShowContent(true);
		}, 50);
	};

	// Don't render anything visible until we've checked sessionStorage,
	// but fill the viewport so the footer doesn't jump to the top
	if (isLoading === null) {
		return <div className="min-h-screen bg-white" />;
	}

	return (
		<>
			{/* Loading screen overlays the content */}
			{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
			{/* Render main content only when needed */}
			{!isLoading && (
				<>
					<main className="bg-white relative [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
						<MainContent isVisible={showContent} />
					</main>

					{/* App Store / Play Store buttons (pet parent) - outside main element for guaranteed visibility */}
					<section className="w-full bg-[#EDE3D8] py-6 relative z-10">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="flex items-center justify-center gap-4">
								<a
									href="https://apps.apple.com/in/app/warmpawz/id6761255735"
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
									href="https://play.google.com/store/apps/details?id=com.warmpawz.customer&pcampaignid=web_share"
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
			)}
		</>
	);
};

export default HomePageClient;
