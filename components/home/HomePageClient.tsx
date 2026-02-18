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
				<main className="min-h-screen bg-white relative overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden z-20">
					<MainContent isVisible={showContent} />
				</main>
			)}
		</>
	);
};

export default HomePageClient;
