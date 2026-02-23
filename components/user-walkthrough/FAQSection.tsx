"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
	question: string;
	answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
	{
		question: "What is Warmpawz and how does it help pet parents?",
		answer:
			"Warmpawz is a trusted pet care platform that helps pet parents discover verified services, learn from shared experiences, and make informed decisions. It brings together care providers and community knowledge to support pets through every stage of life.",
	},
	{
		question: "Can I find pet services near me on Warmpawz?",
		answer:
			"Yes. Warmpawz helps pet parents discover local pet care services — including veterinary care, nutritionists, grooming, boarding, walking, and training — based on their location and their pet's specific needs. Warmpawz endeavors to be Hyperlocal in all its services.",
	},
	{
		question: "How does Warmpawz ensure pet care services are trustworthy?",
		answer:
			"Warmpawz focuses on transparency and verification by encouraging clear provider information, shared standards, and community feedback. This helps pet parents understand what to expect and choose services with greater confidence. Warmpawz also encourages and onboards community referred service providers that ensures that most service providers on the platform have delivered satisfactory at least and superlative at best experience historically.",
	},
	{
		question: "Is Warmpawz suitable for first-time pet parents?",
		answer:
			"Absolutely! Warmpawz is designed to support both new and experienced pet parents by providing guidance, shared learning, and access to trusted pet care services, making it easier to navigate unfamiliar decisions.",
	},
	{
		question: "Can pet parents contribute to the Warmpawz community?",
		answer: (
			<>
				Yes. Pet parents are encouraged to share experiences, insights, and feedback that help strengthen the pet care ecosystem. Warmpawz values participation and collective learning as essential to better care. Pet Parents can write to{" "}
				<a 
					href="mailto:contact@warmpawz.com" 
					className="text-primary hover:underline font-medium"
				>
					contact@warmpawz.com
				</a>{" "}
				to recommend providers, make suggestions for service improvements and contribute with their experience.
			</>
		),
	},
];

const FAQSection = () => {
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
			title: "Hyperlocal Discovery",
			description: "Find nearby trusted pet services instantly with smart, location-based discovery and real availability."
		},
		{
			title: "Trusted, Verified Network",
			description: "Book confidently with screened, verified providers backed by real pet parent reviews."
		},
		{
			title: "One Place for Every Pet Need",
			description: "Manage bookings, health records, shopping, reminders, and care — all in one app."
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
							Everything you need to know about Warmpawz and how we support pet
							parents
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

export default FAQSection;
