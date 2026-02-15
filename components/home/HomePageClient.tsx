"use client";

import { useState, useEffect } from "react";
import { LoadingScreen, MainContent } from "@/components/home";
import { STORAGE_KEYS } from "@/config/constants";

const HomePageClient = () => {
	// Use lazy initialization to avoid synchronous setState in effect
	const [isLoading, setIsLoading] = useState(() => {
		if (typeof window === 'undefined') return false;
		const hasShownLoading = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);
		return hasShownLoading !== "true";
	});
	
	const [showContent, setShowContent] = useState(() => {
		if (typeof window === 'undefined') return false;
		const hasShownLoading = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);
		return hasShownLoading === "true";
	});

	useEffect(() => {
		// Mark that we've shown the loading animation (only for first visit)
		const hasShownLoading = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);
		if (hasShownLoading !== "true") {
			sessionStorage.setItem(STORAGE_KEYS.hasShownLoading, "true");
		}
	}, []);

	const handleLoadingComplete = () => {
		setIsLoading(false);
		// Small delay to ensure smooth transition
		setTimeout(() => {
			setShowContent(true);
		}, 50);
	};

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
