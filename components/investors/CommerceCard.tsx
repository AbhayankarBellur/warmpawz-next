"use client";

import { useEffect, useRef, useState } from "react";

const features = [
	{ label: "Pan India Delivery", desc: "Nationwide logistics for pet products & essentials" },
	{ label: "Hyperlocal Fulfillment", desc: "Same-day delivery within city zones" },
	{ label: "O2O Commerce", desc: "Online discovery to offline service, seamlessly bridged" },
	{ label: "Subscription-Ready", desc: "Repeat orders, auto-refills & scheduled services" },
];

const CommerceCard = () => {
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
				transition-all duration-700 ease-out delay-100
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				Commerce Infrastructure
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="space-y-2.5">
				{features.map((f, i) => (
					<div
						key={i}
						onMouseEnter={() => setHovered(i)}
						onMouseLeave={() => setHovered(null)}
						className={`flex items-start gap-3 p-3 rounded-xl border cursor-default
							transition-all duration-300
							${hovered === i ? "border-[#F5A855] bg-[#FFF2E6] shadow-sm" : "border-transparent bg-gray-50"}`}
					>
						<div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-all duration-300
							${hovered === i ? "bg-[#F69052] scale-125" : "bg-[#F5A855]"}`} />
						<div>
							<div className="font-bold text-gray-900 text-sm">{f.label}</div>
							<div className={`text-xs text-gray-500 transition-all duration-300 overflow-hidden
								${hovered === i ? "max-h-10 opacity-100 mt-0.5" : "max-h-0 opacity-0"}`}>
								{f.desc}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CommerceCard;
