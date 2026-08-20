"use client";

import { useEffect, useState } from "react";
import {
	HeroSection,
	MissionCard,
	MarketSizeCard,
	BetsCard,
	ProblemCard,
	TractionCard,
	CompetitionCard,
	TeamCard,
	FundingCard,
	FinancialsCard,
} from "@/components/investors";

const InvestorsPage = () => {
	const [currentColorIndex, setCurrentColorIndex] = useState(0);
	const colors = ["#F69052", "#FAD3B5", "#FFF2E6"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentColorIndex((prev) => (prev + 1) % colors.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [colors.length]);

	return (
		<div
			className="min-h-screen transition-colors duration-[3000ms] ease-in-out"
			style={{ backgroundColor: colors[currentColorIndex] }}
		>
			<div className="px-4 sm:px-6 lg:px-8 pt-32 pb-10 max-w-7xl mx-auto">
				<HeroSection />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{/* Row 1 */}
					<MissionCard />
					<MarketSizeCard />
					<ProblemCard />

					{/* Row 2 */}
					<BetsCard />
					<TractionCard />
					<CompetitionCard />

					{/* Row 3 */}
					<div className="lg:col-span-2">
						<FinancialsCard />
					</div>
					<FundingCard />

					{/* Row 4 — team full width */}
					<div className="lg:col-span-3">
						<TeamCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestorsPage;
