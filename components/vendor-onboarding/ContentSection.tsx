"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const ContentSection = () => {
	const paragraph1 = "By enabling direct discovery, feedback, and collaboration, Warmpawz creates space for innovation, localised services, and new care models that reflect real community needs. Beyond discovery, the platform encourages transparent standards, shared learning, and responsible practices, helping verified service providers strengthen trust, professional identity, and long-term sustainability.";

	const paragraph2 = "While preserving the human connection at the heart of care, Warmpawz empowers service providers to build meaningful relationships with pet parents and contribute to a thriving pet care ecosystem.";

	return (
		<section className="relative bg-[#F69052] flex flex-col items-center justify-start px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 text-center overflow-hidden">
			<div
				className="absolute top-0 left-0 right-0 h-20 sm:h-24 lg:h-28 bg-[#F69052]"
				aria-hidden="true"
			/>
			{/* Main Title */}
			<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#3A2A26] mb-4 sm:mb-8">
				Your Service Provider Journey with Warmpawz
			</h1>

			{/* Subtitle */}
			<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold max-w-4xl mx-auto mb-6 sm:mb-12 px-4">
				Join the Warmpawz family and start your journey as a trusted pet service provider.
			</p>

			{/* Main Content */}
		<div className="max-w-[950px] mx-auto mb-6 sm:mb-12 w-full px-5 sm:px-8">
			{/* Mobile: Editorial Text Layout (White Text) */}
			<div className="lg:hidden">
				<div 
					className="space-y-8 text-left animate-fadeIn"
					style={{
						maxWidth: "75ch",
						margin: "0 auto",
					}}
				>
					<p 
						className="text-[18px] sm:text-[20px] text-white leading-[1.8] font-normal tracking-[0.3px]"
						style={{
							fontSmooth: "antialiased",
							WebkitFontSmoothing: "antialiased",
							MozOsxFontSmoothing: "grayscale",
						}}
					>
						{paragraph1}
					</p>

					<p 
						className="text-[18px] sm:text-[20px] text-white leading-[1.8] font-normal tracking-[0.3px]"
						style={{
							fontSmooth: "antialiased",
							WebkitFontSmoothing: "antialiased",
							MozOsxFontSmoothing: "grayscale",
						}}
					>
						{paragraph2}
					</p>
				</div>
			</div>

			{/* Desktop: Premium Editorial Text Layout */}
			<div className="hidden lg:block">
				<div 
					className="space-y-8 text-left animate-fadeIn"
					style={{
						maxWidth: "75ch",
						margin: "0 auto",
					}}
				>
					<p 
						className="text-[20px] text-white leading-[1.8] font-normal tracking-[0.3px]"
						style={{
							fontSmooth: "antialiased",
							WebkitFontSmoothing: "antialiased",
							MozOsxFontSmoothing: "grayscale",
						}}
					>
						{paragraph1}
					</p>

					<p 
						className="text-[20px] text-white leading-[1.8] font-normal tracking-[0.3px]"
						style={{
							fontSmooth: "antialiased",
							WebkitFontSmoothing: "antialiased",
							MozOsxFontSmoothing: "grayscale",
						}}
					>
						{paragraph2}
					</p>
				</div>
			</div>

			{/* Journey Indicator */}
			<div className="mt-4 sm:mt-16">
				<p className="text-xl sm:text-2xl text-white md:text-3xl font-bold">
					Explore the onboarding process below ↓
				</p>
			</div>
		</div>
		</section>
	);
};

export default ContentSection;
