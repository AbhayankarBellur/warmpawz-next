"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle8 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<main
				className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-16"
				style={{
					backgroundImage:
						"linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)",

				}}
			>
				<article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12 border-2 border-[#F5A855]">
					<AppLink
						href="/blog"
						className="flex items-center gap-2 text-gray-600 hover:text-[#f69052] transition-colors mb-8 group"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						<span className="font-baloo">Back to Blog</span>
					</AppLink>

					<header className="mb-12 text-center">
						<p className="text-sm text-muted-foreground mb-4">
							January 6, 2026
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							The Cone Chronicles: How to Beat the Frustration
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-8.png"
							alt="Pet wearing a cone"
							fill
							className="object-cover"
							style={{ objectPosition: "center 20%" }}
						/>
					</div>

					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Ah, the cone. Also known as the lamp, the satellite dish, or the
							ultimate test of patience—for pets and parents. The moment it goes
							on, your dog forgets how doors work, and your cat questions every
							life choice that led here. Frustration is natural. Manageable too.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							First, let's say this out loud:{" "}
							<strong className="text-[#F69052]">
								the cone is not punishment. It's protection.
							</strong>{" "}
							It keeps tongues away from stitches, paws off wounds, and healing
							on track. Think of it as temporary inconvenience in exchange for
							long-term comfort. Not glamorous, but effective.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Now, the frustration. Pets may freeze, sulk, bump into furniture,
							or stare at you with deep betrayal in their eyes. This is where
							you step in—with calm energy, reassurance, and a bit of
							creativity.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Keep routines steady:</strong>{" "}
							Feed them at the usual time. Walk them on familiar routes.
							Normalcy helps them accept the new accessory faster than dramatic
							sympathy ever will.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Make sure the cone fits right:
							</strong>{" "}
							Not too tight, not comically large. Soft cones or inflatable
							collars work well for many pets, especially cats or gentle dogs,
							as long as the wound remains protected.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Elevate food and water bowls:
							</strong>{" "}
							So eating doesn't feel like a daily struggle. Clear tight spaces;
							your furniture will thank you.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Replace frustration with connection:
							</strong>{" "}
							Extra cuddles (cone-friendly), slow praise, puzzle toys, and calm
							company go a long way. Healing is easier when pets feel safe, not
							sorry for themselves.
						</p>

						{/* Conclusion */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
								The cone phase ends. The bond stays. And one day soon, this will
								just be another story you laugh about—after the cone comes off,
								of course.
							</p>
						</div>
					</div>
					{/* Footer */}
					<footer className="mt-12 pt-8 border-t-2 border-[#F5A855]">
						<div className="flex items-center justify-center">
							<AppLink
								href="/blog"
								className="bg-[#F5A855] text-white px-8 py-3 rounded-full font-bold font-baloo hover:bg-[#E09642] transition-colors shadow-md hover:shadow-lg"
							>
								← Back to All Articles
							</AppLink>
						</div>
					</footer>
				</article>
			</main>
		</>
	);
};

export default BlogArticle8;
