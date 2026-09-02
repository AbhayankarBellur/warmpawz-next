"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const slides = [
	{
		src: "/advisoryandteam/advisory1.jpeg",
		label: "Advisory Board",
		type: "advisory" as const,
	},
	{
		src: "/advisoryandteam/advisory2.jpeg",
		label: "Advisory Board",
		type: "advisory" as const,
	},
	{
		src: "/advisoryandteam/advisory3.jpeg",
		label: "Advisory Board",
		type: "advisory" as const,
	},
];

const TeamPhotoCarousel = () => {
	const [current, setCurrent] = useState(0);
	const [animating, setAnimating] = useState(false);
	const touchStartX = useRef<number | null>(null);

	const goTo = useCallback(
		(next: number) => {
			if (animating || next === current) return;
			setAnimating(true);
			setTimeout(() => {
				setCurrent(next);
				setAnimating(false);
			}, 300);
		},
		[animating, current]
	);

	const next = () => goTo((current + 1) % slides.length);
	const prev = () => goTo((current - 1 + slides.length) % slides.length);

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return;
		const diff = touchStartX.current - e.changedTouches[0].clientX;
		if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
		touchStartX.current = null;
	};

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Our People
					</h2>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-6" />
					<p className="text-xl text-gray-800 max-w-2xl mx-auto">
						The team and advisors building Warmpawz with purpose, passion, and
						deep domain trust.
					</p>
				</div>

				{/* Carousel */}
				<div
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					{/* Fixed-size image stage — all images stacked, only current is visible */}
					<div className="relative rounded-3xl border-2 border-[#F5A855] shadow-2xl overflow-hidden bg-[#FFF2E6] aspect-video">
						{slides.map((slide, i) => (
							<div
								key={slide.src}
								className="absolute inset-0 transition-opacity duration-300 ease-in-out"
								style={{ opacity: i === current && !animating ? 1 : 0 }}
							>
								<Image
									src={slide.src}
									alt={slide.label ?? "Warmpawz Team"}
									fill
									className="object-contain"
									sizes="(max-width: 768px) 100vw, 896px"
									priority={i === 0}
								/>
							</div>
						))}

						{slides[current].label && (
							<div
								className="absolute bottom-4 left-4 z-10 transition-opacity duration-300"
								style={{ opacity: animating ? 0 : 1 }}
							>
								<span className="px-4 py-1.5 rounded-full text-sm font-bold shadow-md bg-white text-[#F69052] border border-[#F5A855]">
									{slides[current].label}
								</span>
							</div>
						)}

						{/* Hover nav zones */}
						<button
							onClick={prev}
							aria-label="Previous"
							className="absolute left-0 top-0 h-full w-12 z-20 flex items-center justify-start pl-3 opacity-0 hover:opacity-100 transition-opacity duration-200 group"
						>
							<div className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
								<svg className="w-5 h-5 text-[#F5A855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</div>
						</button>
						<button
							onClick={next}
							aria-label="Next"
							className="absolute right-0 top-0 h-full w-12 z-20 flex items-center justify-end pr-3 opacity-0 hover:opacity-100 transition-opacity duration-200 group"
						>
							<div className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
								<svg className="w-5 h-5 text-[#F5A855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</div>
						</button>
					</div>

					{/* External nav + dots */}
					<div className="flex items-center justify-between mt-6">
						<button
							onClick={prev}
							disabled={animating}
							aria-label="Previous"
							className="w-11 h-11 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 border-2 border-[#F5A855]"
						>
							<svg className="w-5 h-5 text-[#F5A855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>

						<div className="flex items-center gap-2">
							{slides.map((_, i) => (
								<button
									key={i}
									onClick={() => goTo(i)}
									disabled={animating}
									aria-label={`Go to slide ${i + 1}`}
									className={`h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed
										${i === current ? "w-8 bg-[#F5A855]" : "w-3 bg-gray-300 hover:bg-gray-400"}`}
								/>
							))}
						</div>

						<button
							onClick={next}
							disabled={animating}
							aria-label="Next"
							className="w-11 h-11 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50 border-2 border-[#F5A855]"
						>
							<svg className="w-5 h-5 text-[#F5A855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamPhotoCarousel;
