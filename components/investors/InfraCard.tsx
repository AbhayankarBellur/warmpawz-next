"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
	{
		icon: "🌐",
		title: "Multi-Region Support",
		desc: "Built to scale across cities and states with region-aware routing and data residency",
	},
	{
		icon: "📡",
		title: "Full Observability",
		desc: "End-to-end tracing, metrics, and alerting across platform and provider operations",
	},
	{
		icon: "⚡",
		title: "Resilient Architecture",
		desc: "High-availability infrastructure designed for speed, stability, and failover",
	},
];

const InfraCard = () => {
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
				transition-all duration-700 ease-out delay-150
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				Platform Infrastructure
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="space-y-3">
				{pillars.map((p, i) => (
					<div
						key={i}
						className="flex items-start gap-3 p-3 bg-[#FFF2E6] rounded-xl border border-[#F5A855]/40
							transition-all duration-300 hover:border-[#F5A855] hover:shadow-sm group"
					>
						<span className="text-xl leading-none mt-0.5 group-hover:scale-110 transition-transform duration-300">
							{p.icon}
						</span>
						<div>
							<div className="font-bold text-gray-900 text-sm">{p.title}</div>
							<div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{p.desc}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfraCard;
