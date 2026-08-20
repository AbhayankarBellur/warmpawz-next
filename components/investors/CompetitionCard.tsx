"use client";

import { useEffect, useRef, useState } from "react";

const competitors = [
	{ name: "Horizontal (Instagram, Practo, Google)", gap: "Discovery with sponsored trust" },
	{ name: "Vertical (Supertails, Vetic, Pawspace, HUFT)", gap: "Fragmented, category-specific" },
	{ name: "Offline & Asset Heavy Ecosystem", gap: "Unstructured and inconsistent" },
];

const CompetitionCard = () => {
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
				transition-all duration-700 ease-out delay-300
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				Competition
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<ul className="space-y-3 mb-4">
				{competitors.map((c, i) => (
					<li key={i} className="text-sm">
						<span className="font-bold text-gray-800">{c.name}</span>
						<span className="text-gray-500"> — {c.gap}</span>
					</li>
				))}
			</ul>
			<div className="bg-[#F69052] rounded-xl p-3">
				<p className="text-xs font-bold text-white text-center">
					Warmpawz: A unified, trust-led, full-stack pet care ecosystem
				</p>
			</div>
		</div>
	);
};

export default CompetitionCard;
