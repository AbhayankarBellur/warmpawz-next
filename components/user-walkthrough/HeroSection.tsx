"use client";

import { CardStack } from "@/components/ui/card-stack";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSection = () => {
	const paragraph1 = "In a space where choices are often fragmented and guidance is informal, Warmpawz brings together trusted pet care services, shared knowledge, and lived experiences into one accessible platform. By connecting pet parents with verified service providers and clear information, the platform makes it easier to discover, compare, and choose services that truly fit their pet's needs and their own lifestyle.";
	
	const paragraph2 = "More than access, Warmpawz encourages participation. Pet parents can learn from others, share insights, and contribute to a growing community that values responsibility, compassion, and informed decision-making. Whether it's everyday care or moments of uncertainty, Warmpawz supports pet parents not just as consumers of services, but as active members of a connected pet care ecosystem built on trust.";

	const cards = [
		{
			title: "Discover & Connect",
			content: paragraph1,
		},
		{
			title: "Participate & Grow",
			content: paragraph2,
		},
	];

	// Card stack items for mobile view
	const cardStackItems = cards.map((card, index) => ({
		id: index,
		name: "",
		designation: "",
		content: (
			<div className="text-left h-full">
				<h3 className="text-[21px] font-bold text-gray-900 mb-4">{card.title}</h3>
				<p className="text-[18px] text-gray-700 leading-[1.7]">
					{card.content}
				</p>
			</div>
		),
	}));

	return (
		<section className="relative bg-[#F69052] flex flex-col items-center justify-start px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 text-center overflow-hidden">
			<div
				className="absolute top-0 left-0 right-0 h-20 sm:h-24 lg:h-28 bg-[#F69052]"
				aria-hidden="true"
			/>
			{/* Main Title */}
			<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#3A2A26] mb-4 sm:mb-8">
				Your Pet's Journey with Warmpawz
			</h1>

			{/* Subtitle */}
			<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold max-w-4xl mx-auto mb-6 sm:mb-12 px-4">
				Warmpawz helps pet parents find clarity, confidence, and care at every
				stage of their journey.
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
					Explore the journey below ↓
				</p>
			</div>
		</div>
		</section>
	);
};

export default HeroSection;
