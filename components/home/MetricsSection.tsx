"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MetricsSection = () => {
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

	const metrics = [
		{ value: "10,000+", label: "Happy Pet Parents" },
		{ value: "500+", label: "Trusted Providers" },
		{ value: "50,000+", label: "Services Delivered" },
		{ value: "25+", label: "Cities Covered" },
	];

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3E6D8]">
			<div className="max-w-7xl mx-auto">
				<div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 ease-out lg:hover:scale-[1.05] lg:hover:-translate-y-2">
					{metrics.map((metric, index) => (
						<div key={index} className="text-center">
							<div className="text-4xl sm:text-5xl font-bold text-[#E1844A] mb-2">
								{metric.value}
							</div>
							<div className="text-lg text-[#3A2A26] font-medium">
								{metric.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MetricsSection;
