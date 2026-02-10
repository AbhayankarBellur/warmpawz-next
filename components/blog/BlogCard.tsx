"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppLink } from "../shared/AppLink";

interface BlogCardProps {
	id: number;
	title: string;
	excerpt?: string;
	imageUrl?: string;
	date?: string;
	readTime?: string;
	onClick?: () => void;
	imagePosition?: string;
}

const BlogCard = ({
	id,
	title,
	excerpt = "Coming soon...",
	imageUrl,
	date,
	readTime,
	onClick,
	imagePosition = "30%",
}: BlogCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const mm = gsap.matchMedia();

		// Only apply scroll animation on mobile/tablet (below lg breakpoint)
		mm.add("(max-width: 1023px)", () => {
			if (cardRef.current) {
				gsap.fromTo(
					cardRef.current,
					{ scale: 0.95, opacity: 0.8 },
					{
						scale: 1.15,
						opacity: 1,
						scrollTrigger: {
							trigger: cardRef.current,
							start: "top 80%",
							end: "center center",
							scrub: 1,
						},
					}
				);
			}
		});

		return () => {
			mm.revert();
		};
	}, []);

	return (
		<div ref={cardRef}>
			<AppLink
				href={`/blog/${id}`}
				className="group bg-white rounded-2xl border-2 border-[#F5A855] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.15] cursor-pointer block"
			>
				{/* Image */}
				<div className="relative shrink-0 w-full h-48 sm:h-56 bg-linear-to-br from-[#F69052]/20 to-[#FAD3B5]/40 flex items-center justify-center overflow-hidden">
				{imageUrl ? (
					<>
						<Image
							src={imageUrl}
							alt={title}
							fill
							className="object-cover"
							style={{ objectPosition: `center ${imagePosition}` }}
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
							priority={id === 1}
						/>
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
					</>
				) : (
					<div className="text-6xl opacity-20">📝</div>
				)}
			</div>

			{/* Content */}
			<div className="p-6">
				<div className="flex justify-between items-center mb-2">
					{date && (
						<p className="text-xs sm:text-sm text-muted-foreground">{date}</p>
					)}
					{readTime && (
						<p className="text-xs sm:text-sm text-muted-foreground">
							{readTime}
						</p>
					)}
				</div>
				<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 font-baloo">
					{title}
				</h3>
				<p className="text-muted-foreground text-sm sm:text-base mb-4">
					{excerpt}
				</p>
				<div className="flex items-center justify-end">
					<span className="text-primary font-semibold text-sm group-hover:text-primary/80 transition-colors">
						Read More →
					</span>
				</div>
			</div>
		</AppLink>
		</div>
	);
};

export default BlogCard;
