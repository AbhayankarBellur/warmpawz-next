"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FeatureSectionProps {
	title: string;
	description: string;
	imageSrc: string;
	reverse?: boolean;
	buttonText?: string;
	onButtonClick?: () => void;
	animationType?: "scale" | "slideLeft" | "slideRight";
}

const FeatureSection = ({
	title,
	description,
	imageSrc,
	reverse = false,
	buttonText,
	onButtonClick,
	animationType = "scale",
}: FeatureSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const mm = gsap.matchMedia();

		// Apply scroll animation on mobile/tablet (below lg breakpoint)
		mm.add("(max-width: 1023px)", () => {
			if (sectionRef.current) {
				if (animationType === "slideLeft") {
					// Slide in from left - full visibility
					gsap.fromTo(
						sectionRef.current,
						{ x: -100 },
						{
							x: 0,
							ease: "power2.out",
							scrollTrigger: {
								trigger: sectionRef.current,
								start: "top 80%",
								end: "top 50%",
								scrub: 0.5,
							},
						}
					);
				} else if (animationType === "slideRight") {
					// Slide in from right - full visibility
					gsap.fromTo(
						sectionRef.current,
						{ x: 100 },
						{
							x: 0,
							ease: "power2.out",
							scrollTrigger: {
								trigger: sectionRef.current,
								start: "top 80%",
								end: "top 50%",
								scrub: 0.5,
							},
						}
					);
				} else {
					// Default scale animation
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
			}
		});

		// Apply scroll animation on desktop (lg breakpoint and above)
		mm.add("(min-width: 1024px)", () => {
			if (sectionRef.current) {
				if (animationType === "slideLeft") {
					// Slide in from left - full visibility
					gsap.fromTo(
						sectionRef.current,
						{ x: -150 },
						{
							x: 0,
							ease: "power2.out",
							scrollTrigger: {
								trigger: sectionRef.current,
								start: "top 75%",
								end: "top 40%",
								scrub: 0.3,
							},
						}
					);
				} else if (animationType === "slideRight") {
					// Slide in from right - full visibility
					gsap.fromTo(
						sectionRef.current,
						{ x: 150 },
						{
							x: 0,
							ease: "power2.out",
							scrollTrigger: {
								trigger: sectionRef.current,
								start: "top 75%",
								end: "top 40%",
								scrub: 0.3,
							},
						}
					);
				} else {
					// Default scale animation
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
			}
		});

		return () => {
			mm.revert();
		};
	}, [animationType]);

	// Alternate background colors
	const bgColor = reverse ? "bg-[#EDE3D8]" : "bg-[#F9F6F3]";
	
	return (
		<section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
			<div className="max-w-7xl mx-auto">
				<div
					ref={sectionRef}
					className={`flex flex-col ${
						reverse ? "lg:flex-row-reverse" : "lg:flex-row"
					} items-center gap-8 lg:gap-12 transition-all duration-500 ease-out lg:hover:scale-[1.05] lg:hover:-translate-y-2`}
				>
					{/* Image */}
					<div className="w-full lg:w-1/2">
						<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={imageSrc}
								alt={title}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
								priority
							/>
						</div>
					</div>

					{/* Content */}
					<div className="w-full lg:w-1/2 space-y-6">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2A26]">
							{title}
						</h2>
						<p className="text-lg sm:text-xl text-[#6F6663] leading-relaxed">
							{description}
						</p>
						{buttonText && onButtonClick && (
							<button
								onClick={onButtonClick}
								className="px-8 py-4 bg-[#F69052] hover:bg-[#E09642] text-[#F9F6F3] font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl text-lg"
							>
								{buttonText}
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;
