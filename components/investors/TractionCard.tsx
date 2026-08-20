"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
	{ value: "95+", label: "Service Providers", sub: "Onboarded · Bangalore" },
	{ value: "200", label: "Pet Parents", sub: "Active on platform" },
	{ value: "10+", label: "Categories", sub: "Across pet care" },
];

const techTiles = [
	{ icon: "📱", label: "4 Native Apps", sub: "iOS + Android" },
	{ icon: "🚚", label: "Pan India", sub: "Hyperlocal delivery" },
	{ icon: "🌐", label: "Multi-Region", sub: "Scale-ready infra" },
	{ icon: "📡", label: "Observability", sub: "Full platform telemetry" },
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

			{/* Traction stats */}
			<div className="grid grid-cols-3 gap-2 mb-3">
				{stats.map((s, i) => (
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

			{/* Tech capability tiles */}
			<div className="grid grid-cols-2 gap-2">
				{techTiles.map((t, i) => (
					<div
						key={i}
						className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100
							transition-all duration-300 hover:border-[#F5A855] hover:bg-[#FFF2E6] hover:scale-[1.03]"
					>
						<span className="text-base leading-none">{t.icon}</span>
						<div>
							<div className="text-xs font-bold text-gray-900">{t.label}</div>
							<div className="text-[10px] text-gray-500">{t.sub}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TractionCard;
