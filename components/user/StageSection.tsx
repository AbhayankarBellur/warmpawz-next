"use client";

import { FC, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneMockup from "./PhoneMockup";
import CurvedArrow from "@/components/shared/CurvedArrow";

gsap.registerPlugin(ScrollTrigger);

interface StageSectionProps {
	stage: number;
	title: string;
	description: string;
	videoSrc: string;
	isLeft: boolean;
	showArrow: boolean;
}

// Background colors alternate: Beige, Sage, White
const backgrounds = [
	"#EDE3D8", // Warm Beige
	"#C8D5C8", // Soft Sage
	"#F9F6F3", // Warm White
];

const StageSection: FC<StageSectionProps> = ({
	stage,
	title,
	description,
	videoSrc,
	isLeft,
	showArrow,
}) => {
	const sectionRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!sectionRef.current || !contentRef.current) return;

		const mm = gsap.matchMedia();

		// Mobile scroll animation
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

		return () => mm.revert();
	}, []);

	// Cycle through backgrounds
	const bgColor = backgrounds[(stage - 1) % backgrounds.length];

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12"
			style={{ backgroundColor: bgColor }}
		>
			<div
				ref={contentRef}
				className={`max-w-[1400px] mx-auto flex flex-col ${
					isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
				} items-center justify-center gap-8 lg:gap-12 transition-all duration-500 ease-out lg:hover:scale-[1.02] lg:hover:-translate-y-1`}
			>
				{/* Phone Mockup with Shadow */}
				<div
					className="shrink-0"
					style={{
						filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.08))",
					}}
				>
					<PhoneMockup videoSrc={videoSrc} isLeft={isLeft} />
				</div>

				{/* Text Content in White Card */}
				<div className="w-full lg:flex-1 max-w-xl lg:max-w-2xl">
					{/* White Card */}
					<div
						className="bg-white rounded-2xl p-7 sm:p-9 lg:p-10 shadow-lg"
						style={{
							boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
						}}
					>
						<h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-tight mb-5 lg:mb-6 text-[#3A2A26]">
							{title}
						</h2>

						<p className="text-[18px] sm:text-[19px] lg:text-[20px] leading-[1.7] text-[#6F6663]">
							{description}
						</p>
					</div>
				</div>
			</div>

			{/* Curved Arrow - centered on mobile, alternating on desktop */}
			{showArrow && (
				<div
					className={`absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 ${
						isLeft ? "lg:right-24 xl:right-1/3" : "lg:left-24 xl:left-1/3"
					} transform translate-y-1/2 z-10`}
				>
					<CurvedArrow direction={isLeft ? "right" : "left"} />
				</div>
			)}
		</section>
	);
};

export default StageSection;
