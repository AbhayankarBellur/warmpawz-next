"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question: "How does Warmpawz support pet service providers in India?",
		answer:
			"Warmpawz brings service providers into a shared pet care ecosystem where they can connect with pet parents, learn from peers, and shape services that reflect Indian lifestyles. The platform supports transparency, collaboration, and responsible innovation across veterinary, grooming, boarding, training, and allied pet services.",
	},
	{
		question: "Is Warmpawz only a listing platform for pet service providers?",
		answer:
			"No. Warmpawz goes beyond listings by encouraging service providers to co-create care models, share knowledge, and build trust through verified practices and community participation. The focus is on strengthening the pet care system, not just promoting individual services. It is fully transactional and allows for service providers to sell products and services with integrated payment gateways and logistics integrations.",
	},
	{
		question:
			"Can service providers create new or customised pet care services on Warmpawz?",
		answer:
			"Yes. Warmpawz is designed to allow providers to experiment with new formats, localised offerings, and hybrid care models that suit different households, pet needs, and regional contexts across India.",
	},
	{
		question: "Can I register to provide more than one service?",
		answer:
			"Yes. Warmpawz recognizes that there could be more than one services offered by the same provider. With Transparent Onboarding rules, Warmpawz allows service providers to register multiple businesses and start offering their services quickly to the community.",
	},
	{
		question: "What types of pet service providers can join Warmpawz?",
		answer:
			"Warmpawz welcomes a wide range of pet care professionals, including veterinary clinics, groomers, boarding and daycare centres, dog walkers, trainers, behaviorists, nutritionists, Pet Cafe's, holiday homes, resorts, relocation service providers, transport service providers and other allied pet service providers committed to responsible services.",
	},
];

const VendorFAQSection = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const mm = gsap.matchMedia();

		// Desktop subtle animation for cards - no opacity change to ensure visibility
		mm.add("(min-width: 1024px)", () => {
			cardsRef.current.forEach((card, index) => {
				if (card) {
					gsap.fromTo(
						card,
						{ y: 20 },
						{
							y: 0,
							duration: 0.6,
							delay: index * 0.15,
							ease: "power2.out",
							scrollTrigger: {
								trigger: card,
								start: "top 95%",
								toggleActions: "play none none reverse",
							},
						}
					);
				}
			});
		});

		return () => mm.revert();
	}, []);

	const addCardRef = (el: HTMLDivElement | null, index: number) => {
		if (el) {
			cardsRef.current[index] = el;
		}
	};

	const features = [
		{
			title: "Access to Pet Parents",
			description: "Platform provides immediate discovery by nearby pet parents actively looking for your services. Increase visibility where demand already exists — without extra effort."
		},
		{
			title: "Consistent Engagement with Pet Parents",
			description: "Platform facilitates continuous engagement through bookings, reminders, reviews, and repeat visits. Build long-term relationships — not one-time transactions."
		},
		{
			title: "Focus on Service, Not Marketing and Logistics",
			description: "Spend more time delivering great care — less time finding customers!"
		}
	];

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#F69052]">
			<div className="max-w-4xl mx-auto">
				{/* Key Features Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#3A2A26] mb-8 lg:mb-12">
						Key Features 
					</h2>
				</div>

				{/* Feature Cards */}
				<div className="mb-16 lg:mb-20 space-y-4 lg:space-y-6">
					{features.map((feature, index) => (
						<div
							key={index}
							ref={(el) => addCardRef(el, index)}
							className="bg-white rounded-xl p-5 lg:p-6 shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
							style={{
								boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
							}}
						>
							<div className="flex items-start gap-4">
								{/* Icon Circle */}
								<div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#F69052] rounded-full flex items-center justify-center">
									<div className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
								</div>

								{/* Content */}
								<div className="flex-1">
									<h3 className="text-lg lg:text-xl font-semibold text-[#3A2A26] mb-2">
										{feature.title}
									</h3>
									<p className="text-sm lg:text-base text-[#6F6663] leading-[1.6]">
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* FAQ Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#3A2A26] mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-lg sm:text-xl text-[#3A2A26] max-w-2xl mx-auto">
						Everything you need to know about joining Warmpawz as a service provider
					</p>
				</div>

				{/* FAQ Items */}
				<div className="space-y-4">
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="rounded-xl overflow-hidden bg-white shadow-lg"
							style={{
								boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
							}}
						>
							{/* Question Button */}
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#F9F6F3] transition-colors duration-200"
							>
								<h3 className="text-[19px] sm:text-[21px] font-semibold text-[#3A2A26] pr-4">
									{faq.question}
								</h3>
								<div className="shrink-0">
									<svg
										className={`w-5 h-5 text-[#6F6663] transition-transform duration-200 ${
											openIndex === index ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</button>

							{/* Answer Content */}
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									openIndex === index
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="px-6 pb-5 pt-2">
									<p className="text-[17px] sm:text-[18px] text-[#6F6663] leading-[1.65]">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default VendorFAQSection;
