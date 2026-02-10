"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle11 = () => {
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
							December 30, 2025
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Transitioning from Winter: A Gentle Pet Care Guide
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-11.png"
							alt="Transitioning from Winter"
							fill
							className="object-cover"
							style={{ objectPosition: "center 40%" }}
						/>
					</div>

					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Winter tiptoes out in India. Not with drama—just a few confused
							mornings, surprise afternoons, and pets who don't know whether to
							cuddle or sprawl. As pet parents, this in-between season is our
							gentle reminder to recalibrate.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Start with coats—yours and theirs:
							</strong>{" "}
							Thick winter beds can feel like overkill now, so lighten the
							layers without taking them away completely. Early mornings still
							nip. Hydration becomes quietly important again; water bowls need
							refilling more often, even if your pet pretends otherwise. Food
							portions may need a tiny rethink too—less "keep warm" calories,
							more "keep active" balance.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Shedding will show up uninvited:
							</strong>{" "}
							It always does. Brushing becomes therapy—for them and for your
							sofa. Baths should be timely, not frequent, because changing
							weather can confuse skin faster than it confuses us.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Walks need a time upgrade:
							</strong>{" "}
							Midday sun can get ambitious, so earlier or later outings keep
							paws and tempers cool. Watch for seasonal sniffles, ticks, and
							that vague low-energy mood that says, "Something's changing, but I
							can't explain it."
						</p>

						{/* Conclusion */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
								Mostly, stay observant. Pets don't read calendars; they read us.
								Ease them through the shift, one small adjustment at a time.
								Seasons change. Love stays steady.
							</p>
						</div>
					</div>
				</article>
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
			</main>
		</>
	);
};

export default BlogArticle11;
