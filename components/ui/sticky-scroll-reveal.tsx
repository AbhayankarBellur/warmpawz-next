"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const backgroundColors = [
	"#EDE3D8", // Warm Beige
	"#C8D5C8", // Soft Sage
	"#F9F6F3", // Warm White
];

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		content?: React.ReactNode;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		container: ref,
		offset: ["start start", "end end"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		// Use first 70% of scroll for all card transitions, remaining 30% keeps last card locked
		const scaledProgress = Math.min(latest / 0.7, 1.0);
		const rawIndex = scaledProgress * (cardLength - 1);
		const closestIndex = Math.min(Math.round(rawIndex), cardLength - 1);
		setActiveCard(closestIndex);
	});

	return (
		<motion.div
			animate={{
				backgroundColor: backgroundColors[activeCard % backgroundColors.length],
			}}
			className="relative h-screen overflow-y-scroll rounded-md"
			ref={ref}
		>
			{/* Scroll area: cards transition in first 70%, last 30% keeps Ageing locked */}
			<div className="relative" style={{ height: `${content.length * 60}vh` }}>
				<div className="sticky top-0 h-screen flex items-center justify-center space-x-10 px-10">
				<div className="max-w-2xl">
					<motion.div
						key={activeCard}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.1 }}
					>
						<h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold text-[#3A2A26]">
							{(() => {
								const stepMatch = content[activeCard].title.match(/^(Step \d+:\s*)(.*)/);
								if (stepMatch) {
									return (
										<>
											<span className="block text-[#F69052] text-[20px] sm:text-[22px] lg:text-[24px] font-bold mb-2">{stepMatch[1].trim()}</span>
											{stepMatch[2]}
										</>
									);
								}
								return content[activeCard].title;
							})()}
						</h2>
						<p className="text-[18px] sm:text-[19px] lg:text-[20px] leading-[1.7] mt-6 max-w-lg text-[#6F6663]">
							{content[activeCard].description}
						</p>
					</motion.div>
				</div>
				
				<div
					className={cn(
						"hidden lg:block",
						contentClassName,
					)}
				>
					{content[activeCard].content ?? null}
				</div>
			</div>
			</div>
		</motion.div>
	);
};
