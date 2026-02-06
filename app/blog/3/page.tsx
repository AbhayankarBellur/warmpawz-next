"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle3 = () => {
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
					backgroundAttachment: "fixed",
				}}
			>
				<article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12 border-2 border-[#F5A855]">
					{/* Back Button */}
					<AppLink
						href="/blog"
						className="flex items-center gap-2 text-gray-600 hover:text-[#f69052] transition-colors mb-8 group"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						<span className="font-baloo">Back to Blog</span>
					</AppLink>

					{/* Header */}
					<header className="mb-12 text-center">
						<p className="text-sm text-muted-foreground mb-4">
							January 5, 2026
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Why Indies Are the Best Pet Choice for Dog Lovers in India
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-3.png"
							alt="Why Indies Are the Best Pet Choice for Dog Lovers in India"
							fill
							className="object-cover"
							style={{ objectPosition: "center 20%" }}
						/>
					</div>

					{/* Introduction */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Indies aren't "strays." They're{" "}
							<strong className="text-[#F69052]">
								survivors with soft hearts and street-smart souls
							</strong>
							. If loyalty had a face, it would wag its tail and answer to an
							Indie's name.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Built by India, for India.
							</strong>{" "}
							Indie dogs are naturally adapted to our climate, roads, seasons,
							and rhythms. Their nutrition needs are refreshingly simple —
							balanced home food like rice, roti, vegetables, eggs, curd, or
							affordable commercial dog food works beautifully. No fancy
							imported kibble required, just love served in a bowl.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Maintenance? Minimal.</strong>{" "}
							Their short coats don't demand salon visits every month, and their
							strong immunity means fewer vet visits when cared for responsibly.
							Regular vaccinations, deworming, clean water, and daily walks keep
							them thriving. Simple care, solid health.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Cost of Care:</strong> This is
							where Indies truly shine. With lower grooming expenses, fewer
							hereditary health issues, and adaptable eating habits, they're
							kinder on the wallet — without ever compromising on companionship.
							They give you premium love at a very practical price.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Challenges and Solutions:
							</strong>{" "}
							Yes, challenges exist. Some Indies may be cautious at first,
							shaped by past neglect. Others might carry minor street survival
							habits. The solution?{" "}
							<strong className="text-[#F69052]">
								Patience, routine, gentle training, and trust
							</strong>
							. What they lack in polish, they make up for in gratitude.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Indies don't just become pets — they become{" "}
							<strong className="text-[#F69052]">
								family, guards, therapists, and teachers of resilience
							</strong>
							. When you choose an Indie, you don't just save a dog. You gain a
							best friend who already knows how precious love is.
						</p>

						{/* Closing Message */}
						<div className="mt-10 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center italic">
								Once an Indie chooses you, your heart is theirs forever.
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

export default BlogArticle3;
