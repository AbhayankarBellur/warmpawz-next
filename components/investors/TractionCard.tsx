"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
	{ value: "95+", label: "Service Providers", sub: "Onboarded · Bangalore" },
	{ value: "200", label: "Pet Parents", sub: "Active on platform" },
	{ value: "10+", label: "Categories", sub: "Across pet care" },
];

const TractionCard = () => {
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
				transition-all duration-700 ease-out delay-[250ms]
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				Key Milestones
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="grid grid-cols-3 gap-3">
				{milestones.map((s, i) => (
					<div
						key={i}
						className="text-center bg-[#FFF2E6] rounded-xl p-3 border border-[#F5A855]/40
							transition-transform duration-300 hover:scale-105"
					>
						<div className="text-2xl font-extrabold text-[#F69052]">{s.value}</div>
						<div className="text-xs font-bold text-gray-800 mt-1">{s.label}</div>
						<div className="text-[10px] text-gray-500 mt-0.5">{s.sub}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TractionCard;
