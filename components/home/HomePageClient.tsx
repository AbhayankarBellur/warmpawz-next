"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen, MainContent } from "@/components/home";
import { STORAGE_KEYS } from "@/config/constants";

const HomePageClient = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [showContent, setShowContent] = useState(false);
	const checkedRef = React.useRef(false);

	useEffect(() => {
		if (checkedRef.current) return;
		checkedRef.current = true;

		const hasShownLoading = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);
		if (hasShownLoading === "true") {
			// Already shown loading before — skip it
			// Use flushSync-free approach via callback
			queueMicrotask(() => {
				setIsLoading(false);
				setShowContent(true);
			});
		} else {
			// First visit — show loading screen
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
