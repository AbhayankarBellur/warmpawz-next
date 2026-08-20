"use client";

import { useEffect, useRef, useState } from "react";

const team = [
	{
		avatar: "VB",
		name: "Vikram Bellur",
		role: "Founder & CEO",
		exp: "29 YOE",
		traits: ["0→1 builder", "Tech-led problem solving", "Strategic clarity & empathy"],
	},
	{
		avatar: "KH",
		name: "Ketan Hirani",
		role: "Product & Engineering",
		exp: "19 YEO",
		traits: ["Mission-critical platforms", "Speed, stability, resilience", "Future tech commitment"],
	},
	{
		avatar: "ND",
		name: "Niranjan Delavictoire",
		role: "Marketing & Partnerships",
		exp: "30 YEO",
		traits: ["Brand & trust at scale", "Customer-first mindset", "Ecosystem growth"],
	},
];

const TeamCard = () => {
	const [visible, setVisible] = useState(false);
	const [hovered, setHovered] = useState<number | null>(null);
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
				transition-all duration-700 ease-out delay-[350ms]
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				Why Us
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="space-y-3">
				{team.map((m, i) => (
					<div
						key={i}
						onMouseEnter={() => setHovered(i)}
						onMouseLeave={() => setHovered(null)}
						className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-300 cursor-default
							${hovered === i ? "border-[#F5A855] bg-[#FFF2E6]" : "border-transparent bg-gray-50"}`}
					>
						<div className="w-10 h-10 rounded-full bg-[#F69052] flex items-center justify-center text-white font-bold text-sm shrink-0">
							{m.avatar}
						</div>
						<div className="min-w-0">
							<div className="flex items-center gap-2 flex-wrap">
								<span className="font-bold text-gray-900 text-sm">{m.name}</span>
								<span className="text-[10px] bg-[#F5A855]/20 text-[#F69052] font-bold px-1.5 py-0.5 rounded-full">{m.exp}</span>
							</div>
							<div className="text-xs text-gray-500 mb-1">{m.role}</div>
							<div className={`flex flex-wrap gap-1 transition-all duration-300 overflow-hidden ${hovered === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
								{m.traits.map((t, j) => (
									<span key={j} className="text-[10px] bg-[#F5A855]/10 text-gray-700 px-1.5 py-0.5 rounded-full">
										{t}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamCard;
