"use client";

import { useEffect, useState } from "react";
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
				       </div>
		       </div>
	       );
};

export default PoliciesPage;
