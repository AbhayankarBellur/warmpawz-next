"use client";

import { useEffect, useState } from "react";

interface TextGenerateEffectProps {
	words: string;
	className?: string;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
	words,
	className = "",
}) => {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < words.length) {
			const timeout = setTimeout(() => {
				setDisplayedText(prev => prev + words[currentIndex]);
				setCurrentIndex(prev => prev + 1);
			}, 10); // Speed of typing animation

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, words]);

	return (
		<p className={className}>
			{displayedText}
			{currentIndex < words.length && (
				<span className="inline-block w-1 h-5 bg-current ml-1 animate-pulse" />
			)}
		</p>
	);
};
