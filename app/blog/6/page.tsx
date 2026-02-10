"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle6 = () => {
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
							January 10, 2026
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Hair Shedding in Popular Dog & Cat Breeds
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-6.png"
							alt="Hair Shedding in Popular Dog & Cat Breeds"
							fill
							className="object-cover"
							style={{ objectPosition: "center 45%" }}
						/>
					</div>

					{/* Article Content */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Shedding is not a flaw. It's a feature. A seasonal, emotional,
							sometimes dramatic feature. All pets shed—some politely, some like
							they're auditioning for a wool factory.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Labrador Retriever:</strong>{" "}
							Sheds like it's a full-time job. Short hair, but plenty of it.
							Peaks during seasonal changes. Dense double coat built for
							swimming and weather. Reality check: You'll find fur in places the
							dog hasn't visited.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Golden Retriever:</strong>{" "}
							Graceful. Loving. Floats fur instead of shedding it. Long double
							coat with constant renewal. Reality check: Your black clothes are
							no longer black.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">German Shepherd:</strong> The
							OG "shedding machine." Thick undercoat that blows out seasonally.
							Reality check: Vacuum considers this breed a personal challenge.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Beagle:</strong> Short-haired
							but sneaky shedder. Dense coat plus active skin turnover. Reality
							check: You don't see it coming. It's already there.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Indie Dogs (Indian Pariah Dogs):
							</strong>{" "}
							Low to moderate shedding. Naturally adaptive coat. Reality check:
							Minimal fuss, maximum practicality.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Indian Domestic Cat (Indie Cats):
							</strong>{" "}
							Low to moderate shedding. Short, climate-friendly coat. Reality
							check: Self-grooming champions.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Persian Cats:</strong> Luxury
							comes at a price—hair. Lots of it. Long, thick coat with daily
							maintenance needs. Reality check: Skipping grooming is not an
							option.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Maine Coon:</strong> Majestic
							and floofy. Seasonal heavy shedding. Weather-resistant coat.
							Reality check: Fur tumbleweeds are real.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Siamese Cats:</strong> Minimal
							shedding. Maximum attitude. Short, fine coat. Reality check: Your
							furniture survives, barely.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Brush. Then brush again:
							</strong>{" "}
							3–4 times a week for heavy shedders. Daily for long coats. Removes
							loose fur before it redecorates your home.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Nutrition matters (a lot):
							</strong>{" "}
							Good protein, omega-3s (fish oil, flaxseed), and proper hydration
							equals healthier skin equals less shedding.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Regular baths, not overbaths:
							</strong>{" "}
							Once every 3–4 weeks with pet-safe shampoo. Overwashing dries skin
							leading to more shedding.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Coconut oil massage (yes, really):
							</strong>{" "}
							Tiny amounts, once a week. Great for dry skin and shine. Patch
							test first.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Clean environment:</strong>{" "}
							Wash bedding weekly. Use lint rollers unapologetically. Accept
							your fate kindly.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Vet check if shedding is sudden or extreme:
							</strong>{" "}
							Hair loss isn't the same as shedding. Rule out allergies,
							parasites, hormonal issues.
						</p>

						{/* Conclusion */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
								Shedding doesn't mean your pet is unhealthy. It means they're
								alive, growing, adapting—and leaving tiny reminders of their
								love everywhere. Fur on your clothes. Fur on your sofa. Fur in
								your heart. Worth it. Always.
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

export default BlogArticle6;
