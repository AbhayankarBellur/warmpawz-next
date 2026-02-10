"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { SCROLL } from "@/config/constants";
import { useRouter } from "next/navigation";

interface BackButtonProps {
	className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
	const router = useRouter();
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleBackToHome = () => {
		router.push("/");
	};

	// Handle scroll to show/hide back button - synced with navbar
	useEffect(() => {
		// Initialize scroll position
		lastScrollY.current = window.scrollY;
		let timeoutId: NodeJS.Timeout;
		let ticking = false;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Prevent multiple rapid updates
			if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
				return;
			}

			// Clear existing timeout
			clearTimeout(timeoutId);

			if (currentScrollY < SCROLL.navbarShowThreshold) {
				// Always show at top
				setIsVisible(true);
			} else if (
				currentScrollY > lastScrollY.current &&
				currentScrollY > SCROLL.navbarHideThreshold
			) {
				// Scrolling down - hide button
				setIsVisible(false);
			} else if (currentScrollY < lastScrollY.current) {
				// Scrolling up - show button
				setIsVisible(true);
			}

			lastScrollY.current = currentScrollY;

		// Small delay to prevent rapid state changes
		timeoutId = setTimeout(() => {
			// Cleanup flag
		}, 150);
	};

	const debouncedHandleScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				handleScroll();
				ticking = false;
			});
			ticking = true;
		}
	};

		window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", debouncedHandleScroll);
			clearTimeout(timeoutId);
		};
	}, []);

	// Listen for mobile menu toggle events
	useEffect(() => {
		const handleMobileMenuToggle = (event: CustomEvent) => {
			setIsMobileMenuOpen(event.detail.isOpen);
		};

		window.addEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener);

		return () => {
			window.removeEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener);
		};
	}, []);

	return (
		<motion.button
			initial={{ opacity: 1 }}
			animate={{ 
				opacity: (isVisible && !isMobileMenuOpen) ? 1 : 0, 
				y: (isVisible && !isMobileMenuOpen) ? 0 : -24,
				pointerEvents: (isVisible && !isMobileMenuOpen) ? "auto" : "none"
			}}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			onClick={handleBackToHome}
			className={`fixed top-24 cursor-pointer left-6 z-50 p-3 backdrop-blur-sm rounded-full shadow-lg transition-colors border will-change-transform ${className || "bg-background/80 border-border hover:bg-background text-foreground"}`}
			aria-label="Go back to home"
		>
			<ArrowLeft className="w-5 h-5" />
		</motion.button>
	);
};

export default BackButton;
