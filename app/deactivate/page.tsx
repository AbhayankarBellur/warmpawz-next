"use client";

import { useEffect, useState } from "react";
import { AccountDeletionForm } from "@/components/deactivate";

const DeactivatePage = () => {
	const [currentColorIndex, setCurrentColorIndex] = useState(0);

	const colors = [
		"#F69052",
		"#FAD3B5",
		"#FFF2E6",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentColorIndex((prev) => (prev + 1) % colors.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [colors.length]);

	return (
		<div
			className="min-h-screen transition-colors duration-3000 ease-in-out"
			style={{ backgroundColor: colors[currentColorIndex] }}
		>
			<div className="pt-28 pb-20">
				<div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
					<AccountDeletionForm />
				</div>
			</div>
		</div>
	);
};

export default DeactivatePage;
