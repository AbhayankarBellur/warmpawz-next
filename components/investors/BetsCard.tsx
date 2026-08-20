"use client";

import { useEffect, useRef, useState } from "react";

const bets = [
	"Aggregate hyperlocal supply across 10+ pet service categories",
	"Create a full-stack lifecycle platform — health, grooming, nutrition, boarding, retail — all in one",
	"Drive engagement through community, repeat-use services, and rewarding loyalty for both providers and users",
];

const BetsCard = () => {
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
				Our Bets
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<ul className="space-y-3">
				{bets.map((bet, i) => (
					<li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
						<span className="text-[#F5A855] font-bold mt-0.5">✦</span>
						{bet}
					</li>
				))}
			</ul>
		</div>
	);
};

export default BetsCard;
