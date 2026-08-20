"use client";

import { useEffect, useRef, useState } from "react";

const insights = [
	"Pet parents behave like family-first consumers, not transactional users",
	"Discovery today is word-of-mouth and community-driven, not platform-driven",
	"Supply exists — but is invisible, unstructured, and underutilized",
	"Trust + convenience will unlock disproportionate engagement",
];

const InsightsCard = () => {
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
				transition-all duration-700 ease-out delay-100
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				Our Insights
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<ul className="space-y-3">
				{insights.map((insight, i) => (
					<li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
						<span className="text-[#F5A855] font-bold mt-0.5">→</span>
						{insight}
					</li>
				))}
			</ul>
		</div>
	);
};

export default InsightsCard;
