"use client";

import { useEffect, useRef, useState } from "react";

const breakdown = [
	{ label: "Marketing & CAC", pct: 35, color: "#F69052" },
	{ label: "Salary & Teams", pct: 25, color: "#F5A855" },
	{ label: "Operations", pct: 20, color: "#FAC16B" },
	{ label: "Tech & Infrastructure", pct: 15, color: "#FAD3B5" },
	{ label: "Legal & Contingency", pct: 5, color: "#FCEBD5" },
];

const FundingCard = () => {
	const [visible, setVisible] = useState(false);
	const [animated, setAnimated] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					setTimeout(() => setAnimated(true), 300);
				}
			},
			{ threshold: 0.2 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`bg-white rounded-2xl p-6 border-2 border-[#F5A855] shadow-lg h-full
				transition-all duration-700 ease-out delay-400
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<div className="flex items-start justify-between mb-1">
				<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide">
					Seed Round
				</h2>
				<div className="text-right">
					<div className="text-2xl font-extrabold text-gray-900">$2.0M</div>
					<div className="text-[10px] text-gray-500">Bangalore, India</div>
				</div>
			</div>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="space-y-2.5">
				{breakdown.map((item, i) => (
					<div key={i}>
						<div className="flex justify-between text-xs mb-1">
							<span className="font-semibold text-gray-700">{item.label}</span>
							<span className="font-bold text-gray-900">{item.pct}%</span>
						</div>
						<div className="w-full bg-gray-100 rounded-full h-2">
							<div
								className="h-2 rounded-full transition-all duration-1000 ease-out"
								style={{
									width: animated ? `${item.pct}%` : "0%",
									backgroundColor: item.color,
									transitionDelay: `${i * 100}ms`,
									border: item.pct === 5 ? "1px solid #F5A855" : "none",
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FundingCard;
