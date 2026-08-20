"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
	"Pet parents struggle to find reliable vets, trainers, groomers, and nutritionists",
	"Service quality is inconsistent with no standardized discovery or reviews",
	"Providers lack visibility, demand aggregation, and growth tools",
];

const ProblemCard = () => {
	const [visible, setVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) setVisible(true); },
			{ threshold: 0.2 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`bg-white rounded-2xl p-6 border-2 border-[#F5A855] shadow-lg h-full
				transition-all duration-700 ease-out delay-200
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				The Problem
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<ul className="space-y-3 mb-4">
				{problems.map((p, i) => (
					<li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
						<span className="text-red-400 font-bold mt-0.5">✕</span>
						{p}
					</li>
				))}
			</ul>
			<div className="bg-[#F69052] rounded-xl p-3">
				<p className="text-xs font-extrabold text-white text-center uppercase tracking-wide">
					High-intent, high-spend category remains under-organized
				</p>
			</div>
		</div>
	);
};

export default ProblemCard;
