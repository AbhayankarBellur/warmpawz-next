"use client";

import { CardStack } from "@/components/ui/card-stack";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const ContentSection = () => {
	const paragraph1 = "By enabling direct discovery, feedback, and collaboration, Warmpawz creates space for innovation, localised services, and new care models that reflect real community needs. Beyond discovery, the platform encourages transparent standards, shared learning, and responsible practices, helping verified service providers strengthen trust, professional identity, and long-term sustainability.";

	const paragraph2 = "While preserving the human connection at the heart of care, Warmpawz empowers service providers to build meaningful relationships with pet parents and contribute to a thriving pet care ecosystem.";

	const cards = [
		{
			title: "Innovate & Connect",
			content: paragraph1,
		},
		{
			title: "Build & Grow",
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
		<section className="relative bg-[#C8D5C8] flex flex-col items-center justify-start px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 text-center overflow-hidden">
			<div
				className="absolute top-0 left-0 right-0 h-20 sm:h-24 lg:h-28 bg-[#C8D5C8]"
				aria-hidden="true"
			/>
			{/* Main Title */}
			<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#3A2A26] mb-4 sm:mb-8">
				Your Service Provider Journey with Warmpawz
			</h1>

			{/* Subtitle */}
			<p className="hidden sm:block text-xl sm:text-2xl md:text-3xl text-[#6F6663] font-semibold max-w-4xl mx-auto mb-6 sm:mb-12">
				Join the Warmpawz family and start your journey as a trusted pet service provider.
			</p>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto mb-6 sm:mb-12 w-full">
				{/* Mobile: Card Stack with auto-rotation */}
				<div className="lg:hidden flex items-center justify-center px-4">
					<CardStack items={cardStackItems} offset={10} scaleFactor={0.06} />
				</div>

				{/* Desktop: White Card Layout */}
				<div
					className="hidden lg:block rounded-2xl bg-white shadow-lg p-8 sm:p-10"
					style={{
						boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
					}}
				>
					<div className="space-y-6 text-left">
						<TextGenerateEffect
							words={paragraph1}
							className="text-[18px] sm:text-[19px] lg:text-[20px] text-[#6F6663] leading-[1.7]"
						/>

						<TextGenerateEffect
							words={paragraph2}
							className="text-[18px] sm:text-[19px] lg:text-[20px] text-[#6F6663] leading-[1.7]"
						/>
					</div>
				</div>
			</div>

			{/* Journey Indicator */}
			<div className="mt-4 sm:mt-16">
				<p className="text-xl sm:text-2xl text-[#3A2A26] md:text-3xl font-bold">
					Explore the onboarding process below ↓
				</p>
			</div>
		</section>
	);
};

export default ContentSection;
