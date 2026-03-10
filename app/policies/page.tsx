"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/policies";
import { ServiceProviderTermsBox, EndUserTermsBox, RefundPolicyBox } from "@/components/policies";

const PoliciesPage = () => {
	const [currentColorIndex, setCurrentColorIndex] = useState(0);

	// Three warm colors from the main page gradient
	const colors = [
		"#F69052", // Brand orange
		"#FAD3B5", // Warm beige
		"#FFF2E6", // Warm white
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentColorIndex((prev) => (prev + 1) % colors.length);
		}, 3000); // 3 second duration

		return () => clearInterval(interval);
	}, [colors.length]);

	return (
		<div
			className="min-h-screen transition-colors duration-3000 ease-in-out"
			style={{ backgroundColor: colors[currentColorIndex] }}
		>
			<HeroSection />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-20 pt-8">
				<ServiceProviderTermsBox />
				<EndUserTermsBox />
				<RefundPolicyBox />

				<div className="flex justify-center pt-4">
					<Link
						href="/deactivate"
						className="bg-[#f69052] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:ring-offset-2 shadow-lg hover:shadow-xl"
					>
						Request Deactivation
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PoliciesPage;
