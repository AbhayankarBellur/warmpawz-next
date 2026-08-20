"use client";

import { useEffect, useRef, useState } from "react";

const MarketSizeCard = () => {
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
				India Market Size
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="space-y-3 mb-4">
				<div className="flex items-center justify-between bg-[#FFF2E6] rounded-xl px-4 py-3 border border-[#F5A855]/40">
					<div>
						<div className="text-xs text-gray-500 font-medium">Products FY28</div>
						<div className="text-xl font-extrabold text-[#F69052]">~$3.4B</div>
					</div>
					<div className="text-right">
						<div className="text-xs text-gray-500 font-medium">from $1.7B in FY24</div>
						<div className="text-xs font-bold text-green-600 mt-0.5">↑ 2×</div>
					</div>
				</div>
				<div className="flex items-center justify-between bg-[#FFF2E6] rounded-xl px-4 py-3 border border-[#F5A855]/40">
					<div>
						<div className="text-xs text-gray-500 font-medium">Services FY28</div>
						<div className="text-xl font-extrabold text-[#F69052]">~$3.7B</div>
					</div>
					<div className="text-right">
						<div className="text-xs text-gray-500 font-medium">from $1.9B in FY24</div>
						<div className="text-xs font-bold text-green-600 mt-0.5">↑ 2×</div>
					</div>
				</div>
			</div>
			<div className="bg-[#F69052] rounded-xl px-4 py-3 text-center">
				<div className="text-white font-extrabold text-base">$7.0–7.5B by FY28</div>
				<div className="text-white/80 text-xs mt-0.5">18–20% CAGR · online penetration &lt;8% today</div>
			</div>
		</div>
	);
};

export default MarketSizeCard;
