"use client";

import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Testimonial {
	id: number;
	name: string;
	role: string;
	content: string;
	rating: number;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Raghavendra Shenoy",
		role: "Pet Parent",
		content: "As a parent of a senior pet, an option to get my vet to come home for health visits is definitely a must",
		rating: 5,
	},
	{
		id: 2,
		name: "Sharad Hegde",
		role: "Pet Parent",
		content: "If i can get to choose between 2 service providers based on price of service and quality, i would love to buy everything on the marketplace",
		rating: 5,
	},
	{
		id: 3,
		name: "Smriti Menon",
		role: "Pet Parent",
		content: "The one difficult service I have struggled to get is a good boarding center. If i could get visibility into all available boarding centers across the city, i could plan my outings much better",
		rating: 5,
	},
	{
		id: 4,
		name: "Rashmi Balakesavan",
		role: "Pet Parent",
		content: "I would have loved a reminder system for vaccinations when my pup was growing up. A system like that would be invaluable, wish i had it 2 years ago",
		rating: 5,
	},
	{
		id: 5,
		name: "Mohit Saxena",
		role: "Pet Parent",
		content: "If there was a system that gave me immediate visibility into actual pet friendly hideaways, my holiday planning would have been stress free, i would just pay to have this sorted",
		rating: 5,
	},
	{
		id: 6,
		name: "Smitha Huttinagadde",
		role: "Pet Parent",
		content: "I would love to find tailored food and nutrition support. Too many groups telling me too many things, I wish i could leave the thinking to the experts and find Nutrition support in one place",
		rating: 5,
	},
];

const Testimonials = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const mm = gsap.matchMedia();

		// Only apply scroll animation on mobile/tablet (below lg breakpoint)
		mm.add("(max-width: 1023px)", () => {
			if (sectionRef.current) {
				gsap.fromTo(
					sectionRef.current,
					{ scale: 0.95 },
					{
						scale: 1.05,
						ease: "power2.out",
						scrollTrigger: {
							trigger: sectionRef.current,
							start: "top 80%",
							end: "center center",
							scrub: 1,
						},
					}
				);
			}
		});

		return () => {
			mm.revert();
		};
	}, []);

	return (
		<section ref={sectionRef} className="w-full bg-[#F9F6F3] py-16 sm:py-20 lg:py-24 transition-all duration-500 ease-out lg:hover:scale-[1.02]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#3A2A26] mb-3">
					What Our Community Says
				</h2>
				<p className="text-center text-[#6F6663] text-base sm:text-lg">
					Join thousands of happy pet parents and service providers
				</p>
			</div>

			<Marquee
				gradient={false}
				speed={40}
				pauseOnHover={true}
				className="overflow-hidden"
			>
				{testimonials.map((testimonial) => (
					<div
						key={testimonial.id}
						className="mx-4 bg-[#F9F6F3] rounded-2xl p-6 shadow-lg border-2 border-[#6F8A73] w-80 sm:w-96 shrink-0"
					>
						{/* Rating Stars */}
						<div className="flex gap-1 mb-4">
							{[...Array(5)].map((_, i) => {
								const isFullStar = i < Math.floor(testimonial.rating);
								const isHalfStar = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;
								
								return (
									<div key={i} className="relative w-5 h-5">
										{isFullStar ? (
											<svg
												className="w-5 h-5 fill-[#F69052]"
												viewBox="0 0 20 20"
											>
												<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
											</svg>
										) : isHalfStar ? (
											<>
												<svg
													className="w-5 h-5 fill-gray-300 absolute"
													viewBox="0 0 20 20"
												>
													<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
												</svg>
												<svg
													className="w-5 h-5 fill-[#F69052] absolute"
													viewBox="0 0 20 20"
													style={{ clipPath: 'inset(0 50% 0 0)' }}
												>
													<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
												</svg>
											</>
										) : (
											<svg
												className="w-5 h-5 fill-gray-300"
												viewBox="0 0 20 20"
											>
												<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
											</svg>
										)}
									</div>
								);
							})}
						</div>

						{/* Content */}
						<p className="text-[#6F6663] text-sm sm:text-base mb-6 leading-relaxed font-medium">
							&ldquo;{testimonial.content}&rdquo;
						</p>

						{/* Author */}
						<div className="border-t border-[#6F8A73]/30 pt-4">
							<h4 className="font-bold text-[#3A2A26] text-base">
								{testimonial.name}
							</h4>
							<p className="text-sm text-[#6F6663]">{testimonial.role}</p>
						</div>
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default Testimonials;
