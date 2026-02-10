"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle14 = () => {
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
							January 20, 2026
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Understanding Pet Insurance in India: A Little Safety Net for Big
							Love
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-14.png"
							alt="Understanding Pet Insurance in India: A Little Safety Net for Big Love"
							fill
							className="object-cover"
							style={{ objectPosition: "center 50%" }}
						/>
					</div>

					{/* Introduction */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Bringing a pet into your life is like opening your heart without a
							lock. There's joy, mischief, muddy paws—and yes, the occasional
							vet bill that makes you blink twice. That's where{" "}
							<strong className="text-[#F69052]">pet insurance</strong> quietly
							steps in, not to replace love, but to protect it.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							In India,{" "}
							<strong className="text-[#F69052]">pet insurance</strong> is still
							a growing concept. Simply put, it helps cover unexpected medical
							expenses—accidents, illnesses, surgeries, and sometimes even
							hospitalisation. You pay a small annual premium, and in return,
							you don't have to choose between panic and payment when your pet
							needs care now.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Most Indian pet insurance plans primarily cover dogs, though cat
							coverage is slowly finding its feet. Policies usually include{" "}
							<strong className="text-[#F69052]">accident cover</strong>,{" "}
							<strong className="text-[#F69052]">
								illness-related treatment
							</strong>
							, and in some cases,{" "}
							<strong className="text-[#F69052]">third-party liability</strong>{" "}
							(helpful if your dog's enthusiasm knocks over more than just
							hearts). Routine care like vaccinations, grooming, or food is
							usually not covered—think of insurance as a rainy-day umbrella,
							not everyday sunshine.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							The key is reading the fine print—
							<strong className="text-[#F69052]">age limits</strong>,{" "}
							<strong className="text-[#F69052]">
								breed-specific conditions
							</strong>
							, <strong className="text-[#F69052]">waiting periods</strong>, and{" "}
							<strong className="text-[#F69052]">exclusions</strong> matter. An
							Indie may be easier (and cheaper) to insure than some pedigree
							breeds prone to genetic issues. Honesty about your pet's health
							history helps avoid heartbreak later.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Is pet insurance mandatory? No.
							</strong>
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Is it thoughtful? Absolutely.
							</strong>
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							For many pet parents, insurance brings peace of mind. It allows
							decisions to be guided by care, not cost, by love, not last-minute
							calculations.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Because when they look at you—tail wagging, whiskers
							twitching—they're not thinking about premiums or policies.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							They're thinking, "You've got me, right?"
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Pet insurance is one small way of saying,{" "}
							<strong>"Always."</strong>
						</p>
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

export default BlogArticle14;
