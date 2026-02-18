"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const mm = gsap.matchMedia();

		// Only apply scroll animation on mobile/tablet (below lg breakpoint)
		mm.add("(max-width: 1023px)", () => {
			if (contentRef.current) {
				gsap.fromTo(
					contentRef.current,
					{ scale: 0.95 },
					{
						scale: 1.05,
						ease: "power2.out",
						scrollTrigger: {
							trigger: contentRef.current,
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
		<section className="w-full px-6 sm:px-8 lg:px-16 pt-40 pb-20 lg:pt-48 lg:pb-24 bg-[#EDE3D8]">
			<div ref={contentRef} className="max-w-4xl mx-auto text-center transition-all duration-500 ease-out lg:hover:scale-[1.05] lg:hover:-translate-y-2">
				{/* Main Headline */}
				<h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold leading-tight mb-5 sm:mb-6 text-[#3A2A26]">
					<span className="font-light block">Trusted Pet Care</span>
					<span className="font-bold block">That Actually Works</span>
					<span className="font-medium block">For Modern Families</span>
				</h1>

				{/* Subheading */}
				<p className="text-[16px] sm:text-[20px] lg:text-[22px] font-normal text-[#3A2A26] mb-7 sm:mb-9 leading-relaxed max-w-2xl mx-auto">
					Connect with verified pet care professionals. Book services instantly. Join a caring community.
				</p>

				{/* Pill Blocks - Benefits */}
				<div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
					<div className="bg-[#F9F6F3] px-6 py-3 rounded-full shadow-md border border-[#6F8A73]/20">
						<span className="text-[14px] sm:text-[16px] font-semibold text-[#3A2A26]">✓ Verified Experts</span>
					</div>
					<div className="bg-[#F9F6F3] px-6 py-3 rounded-full shadow-md border border-[#6F8A73]/20">
						<span className="text-[14px] sm:text-[16px] font-semibold text-[#3A2A26]">✓ Instant Booking</span>
					</div>
					<div className="bg-[#F9F6F3] px-6 py-3 rounded-full shadow-md border border-[#6F8A73]/20">
						<span className="text-[14px] sm:text-[16px] font-semibold text-[#3A2A26]">✓ Trusted Community</span>
					</div>
				</div>

				{/* Supporting Text */}
				<p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-[#3A2A26]/80 leading-relaxed max-w-3xl mx-auto">
					More than a marketplace — a connected ecosystem built on <span className="font-semibold">trust, transparency,</span> and <span className="font-semibold">shared responsibility</span> for better lives for pets.
				</p>
			</div>
		</section>
	);
};

export default HeroSection;
