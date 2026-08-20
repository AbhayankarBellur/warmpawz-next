"use client";

import { useEffect, useRef, useState } from "react";

const rows = [
	{ label: "Gross Revenue (GMV)", y1: "₹3.24 Cr", y2: "₹14.74 Cr", y3: "₹37.35 Cr" },
	{ label: "Net Platform Revenue", y1: "₹0.58 Cr", y2: "₹2.70 Cr", y3: "₹7.04 Cr" },
	{ label: "EBITDA", y1: "(₹2.51 Cr)", y2: "(₹0.82 Cr)", y3: "₹3.03 Cr", highlight: true },
	{ label: "Active Users (EOY)", y1: "~5,500", y2: "~12,600", y3: "~25,100" },
	{ label: "Active Providers (EOY)", y1: "~115", y2: "~230", y3: "~345" },
];

const FinancialsCard = () => {
	const [visible, setVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) setVisible(true); },
			{ threshold: 0.15 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`bg-white rounded-2xl p-6 border-2 border-[#F5A855] shadow-lg h-full
				transition-all duration-700 ease-out delay-[350ms]
				hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]
				${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
		>
			<div className="flex items-start justify-between mb-3">
				<h2 className="text-lg font-extrabold text-[#F69052] uppercase tracking-wide">
					3-Year Financial Snapshot Per City
				</h2>
				<span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full"></span>
			</div>
			<div className="w-10 h-0.5 bg-[#F5A855] rounded-full mb-4" />
			<div className="overflow-x-auto">
				<table className="w-full text-xs">
					<thead>
						<tr>
							<th className="text-left text-gray-500 font-semibold pb-2 pr-3"></th>
							<th className="text-center text-gray-700 font-bold pb-2 px-2">Year 1</th>
							<th className="text-center text-gray-700 font-bold pb-2 px-2">Year 2</th>
							<th className="text-center text-[#F69052] font-extrabold pb-2 px-2">Year 3</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100">
						{rows.map((row, i) => (
							<tr key={i} className={`transition-colors duration-200 ${row.highlight ? "bg-green-50" : "hover:bg-[#FFF2E6]/50"}`}>
								<td className="py-2 pr-3 text-gray-600 font-medium whitespace-nowrap">{row.label}</td>
								<td className="py-2 px-2 text-center text-gray-700 font-semibold">{row.y1}</td>
								<td className="py-2 px-2 text-center text-gray-700 font-semibold">{row.y2}</td>
								<td className={`py-2 px-2 text-center font-bold ${row.highlight ? "text-green-600" : "text-[#F69052]"}`}>
									{row.y3}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-3 bg-[#FFF2E6] rounded-lg px-3 py-2 border border-[#F5A855]/40">
				<p className="text-[10px] font-bold text-gray-700 text-center">
					Path to EBITDA+ by Month 27 (per 3-yr model)
				</p>
			</div>
		</div>
	);
};

export default FinancialsCard;
