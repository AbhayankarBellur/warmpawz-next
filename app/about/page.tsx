"use client";

import { useEffect, useState } from "react";
import {
	FoundersStory,
	Mission,
	Vision,
	Values,
	MeetTheTeam,
} from "@/components/about";

const AboutUsPage = () => {
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
			<div className="pt-28">
				<FoundersStory />
				<Mission />
				<Vision />
				<Values />
				<MeetTheTeam />
			</div>
		</div>
	);
};

export default AboutUsPage;
