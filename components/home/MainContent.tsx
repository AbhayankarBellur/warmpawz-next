"use client";

import { useRef, useState } from "react";
import petTrainingImage from "@/public/images/pet-training.png";
import serviceProviderImage from "@/public/images/service_provider.png";
import PhoneMockupCenter from "./PhoneMockupCenter";
import LandingSection from "./LandingSection";
import MobileSection from "./MobileSection";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import { useDesktopHoverAnimations } from "@/hooks/useDesktopHoverAnimations";
import { useMobileScrollAnimations } from "@/hooks/useMobileScrollAnimations";
import { useRouter } from "next/navigation";

interface MainContentProps {
	isVisible: boolean;
}

const MainContent = ({ isVisible }: MainContentProps) => {
	const router = useRouter();

	const [hoveredSection, setHoveredSection] = useState<number | null>(null);
	const petParentRef = useRef<HTMLDivElement>(null);
	const serviceProviderRef = useRef<HTMLDivElement>(null);
	const petParentImageRef = useRef<HTMLDivElement>(null);
	const serviceProviderImageRef = useRef<HTMLDivElement>(null);
	const petParentButtonRef = useRef<HTMLButtonElement>(null);
	const serviceProviderButtonRef = useRef<HTMLButtonElement>(null);
	const mobileParentImageRef = useRef<HTMLDivElement>(null);
	const mobileParentButtonRef = useRef<HTMLButtonElement>(null);
	const mobileProviderImageRef = useRef<HTMLDivElement>(null);
	const centerPhoneRef = useRef<HTMLDivElement>(null);
	const mobilePhoneRef = useRef<HTMLDivElement>(null);

	const handleNavigation = (path: string) => {
		router.push(path);
	};

	// Use custom hooks for animations
	useDesktopHoverAnimations({
		hoveredSection,
		petParentImageRef,
		serviceProviderImageRef,
		petParentButtonRef,
		serviceProviderButtonRef,
		centerPhoneRef,
	});

	useMobileScrollAnimations({
		mobileParentImageRef,
		mobileParentButtonRef,
		mobileProviderImageRef,
		mobilePhoneRef,
	});

	return (
		<>
			{/* Fixed Background Layers - Covers Entire Viewport */}
			{/* Gradient Layer */}
			<div 
				className={`fixed inset-0 z-0 transition-opacity duration-1000 ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}
				style={{
					background: "linear-gradient(180deg, #FF7A33 0%, #FFBB99 60%, #FFE8D1 100%)",
				}}
			/>
			
			{/* Image Layer on top of gradient */}
			<div 
				className={`fixed inset-0 z-10 transition-opacity duration-1000 ${
					isVisible ? "opacity-40" : "opacity-0"
				}`}
				style={{
					backgroundImage: "url('/images/blog-3.png')",
					backgroundSize: "cover",
					backgroundPosition: "top",
					backgroundRepeat: "no-repeat",
				}}
			/>

			<div
				className={`min-h-screen font-body transition-all duration-1000 ease-out overflow-x-hidden relative z-20 ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
				}`}
			>
				{/* Hero Section - Below Navbar, Above Main Content */}
				<HeroSection />

			{/* Mobile Layout (Vertical Stack) - Hidden on lg+ */}
			<div className="flex flex-col items-center justify-center min-h-screen lg:hidden relative px-4 sm:px-6 py-8 pt-12">
				{/* Pet Parent Section - Top */}
				<MobileSection
					title="Pet Parent"
					image={petTrainingImage}
					navigateTo="/user-walkthrough"
					onNavigate={handleNavigation}
					imageRef={mobileParentImageRef}
					buttonRef={mobileParentButtonRef}
					className="mb-16 sm:mb-20"
				/>

				{/* Center Mobile Frame with Warmpawz Heading */}
				<div className="flex flex-col items-center mb-8 sm:mb-10">
					<PhoneMockupCenter ref={mobilePhoneRef} variant="mobile" />
				</div>

				{/* Service Provider Section - Bottom */}
				<MobileSection
					title="Service Provider"
					image={serviceProviderImage}
					navigateTo="/vendor-onboarding"
					onNavigate={handleNavigation}
					imageRef={mobileProviderImageRef}
					className="-mt-20 sm:-mt-24 pt-10 md:-mt-28"
				/>
			</div>

			{/* Desktop/Laptop Layout (Horizontal Split Screen) - Hidden below lg */}
			<div className="hidden lg:flex h-screen w-full relative">
				{/* Pet Parent Section - Left Side (Full Height) */}
				<LandingSection
					ref={petParentRef}
					title="Pet Parent"
					image={petTrainingImage}
					navigateTo="/user-walkthrough"
					onNavigate={handleNavigation}
					onMouseEnter={() => setHoveredSection(0)}
					onMouseLeave={() => setHoveredSection(null)}
					imageRef={petParentImageRef}
					buttonRef={petParentButtonRef}
				/>

				{/* Center Mobile Frame with Warmpawz Heading - Floating */}
				<div
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto"
					onMouseEnter={() => setHoveredSection(2)}
					onMouseLeave={() => setHoveredSection(null)}
				>
					<PhoneMockupCenter ref={centerPhoneRef} variant="desktop" />
				</div>

				{/* Service Provider Section - Right Side (Full Height) */}
				<LandingSection
					ref={serviceProviderRef}
					title="Service Provider"
					image={serviceProviderImage}
					navigateTo="/vendor-onboarding"
					onNavigate={handleNavigation}
					onMouseEnter={() => setHoveredSection(1)}
					onMouseLeave={() => setHoveredSection(null)}
					imageRef={serviceProviderImageRef}
					buttonRef={serviceProviderButtonRef}
				/>
			</div>

			{/* Testimonials Section */}
			<Testimonials />
		</div>
		</>
	);
};

export default MainContent;
