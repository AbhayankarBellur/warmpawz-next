"use client";

import { ServicesPhoneFrame } from "@/components/services";
import { useEffect, useState } from "react";

const ServicesPage = () => {
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
			className="min-h-screen transition-colors duration-[3000ms] ease-in-out"
			style={{ backgroundColor: colors[currentColorIndex] }}
		>
			{/* Content */}
			<div className="px-4 sm:px-6 lg:px-8 pt-32 pb-16">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
						Our Services
					</h1>
					<p className="text-center text-gray-700 mb-8 text-lg w-[80%] lg:w-1/2 mx-auto font-semibold">
						Warmpawz brings every stage of pet care into one trusted, connected,
						compassionate ecosystem — for those who love pets and those who care
						and are concerned for them.
					</p>
					<ServicesPhoneFrame />
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
