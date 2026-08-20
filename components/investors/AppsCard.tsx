"use client";

import { useEffect, useRef, useState } from "react";

const apps = [
	{ name: "Pet Parent", platform: "iOS + Android", desc: "Discover, book & manage pet care services" },
	{ name: "Service Provider", platform: "iOS + Android", desc: "Manage bookings, availability & earnings" },
];

const AppsCard = () => {
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
				transition-all duration-700 ease-out
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide mb-3">
				4 Native Apps
			</h2>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="space-y-3 mb-4">
				{apps.map((app, i) => (
					<div key={i} className="flex items-start gap-3 p-3 bg-[#FFF2E6] rounded-xl border border-[#F5A855]/40
						transition-all duration-300 hover:border-[#F5A855] hover:shadow-sm">
						<div className="w-9 h-9 rounded-xl bg-[#F69052] flex items-center justify-center shrink-0">
							<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.53 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
							</svg>
						</div>
						<div>
							<div className="font-bold text-gray-900 text-sm">{app.name}</div>
							<div className="text-[10px] font-bold text-[#F69052] mb-0.5">{app.platform} · Full Native</div>
							<div className="text-xs text-gray-500">{app.desc}</div>
						</div>
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 gap-2">
				<div className="bg-gray-900 rounded-lg px-3 py-2 flex items-center gap-1.5">
					<svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
						<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
					</svg>
					<span className="text-white text-[10px] font-bold">App Store</span>
				</div>
				<div className="bg-[#01875F] rounded-lg px-3 py-2 flex items-center gap-1.5">
					<svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
						<path d="M3.18 23.76c.3.17.65.19.97.08L14.08 12 3.09.16C2.77.05 2.4.07 2.1.27 1.5.65 1.5 1.56 1.5 1.56v20.89c0 0 0 .91.6 1.29l.08.02zM16.35 9.93L5.63 3.99l8.22 8.02 2.5-2.08zM19.48 11.32l-2.52-1.46-2.81 2.14 2.81 2.14 2.55-1.48c.73-.43.73-1.34-.03-1.34zM5.63 20.01l10.72-5.94-2.5-2.08-8.22 8.02z"/>
					</svg>
					<span className="text-white text-[10px] font-bold">Google Play</span>
				</div>
			</div>
		</div>
	);
};

export default AppsCard;
