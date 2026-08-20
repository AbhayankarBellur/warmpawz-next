"use client";

import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
	const [visible, setVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			ref={ref}
			className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
		>
			<div className="text-center mb-10">
				<p className="text-[#000000] font-bold uppercase tracking-widest text-sm mb-3">
					Investor Overview
				</p>
				<h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight mb-4">
					Warmpawz
				</h1>
				<p className="text-2xl md:text-3xl font-semibold text-black/90">
					Pet Care. Reimagined.
				</p>
				<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mt-6" />
			</div>
		</div>
	);
};

export default HeroSection;
