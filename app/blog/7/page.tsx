"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle7 = () => {
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
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Neutering & Spaying: Responsible Love, Not Fear
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-7.png"
							alt="Neutering and Spaying"
							fill
							className="object-cover"
							style={{ objectPosition: "center 20%" }}
						/>
					</div>

					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Think of neutering and spaying as{" "}
							<strong className="text-[#F69052]">responsible love</strong>—not
							fear, not deprivation, just good parenting.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">What is it, anyway?</strong>{" "}
							Spaying is for females. Neutering is for males. Both are safe,
							routine procedures that prevent unwanted pregnancies and a lot of
							future trouble.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Fewer surprise litters:
							</strong>{" "}
							Because "just once" adds up fast.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Calmer behaviour:</strong> Less
							roaming, marking, yowling, and "finding love at 2 a.m."
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Better health:</strong> Lower
							risk of cancers, uterine infections, and hormone-related issues.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Longer, healthier lives:
							</strong>{" "}
							Proven, boring science. The best kind.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Will my pet change?</strong>{" "}
							Yes—but mostly for the better. They don't lose their personality,
							joy, or zoomies. They just lose the urge to run away for romance.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								When should it be done?
							</strong>{" "}
							Usually between 5–6 months, but your vet knows best. Breed, size,
							and health matter—this isn't a one-size-fits-all sweater.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Recovery reality check:
							</strong>{" "}
							A few quiet days, some side-eye about the cone, extra cuddles, and
							you're done. Pets bounce back faster than we do.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">The big picture:</strong>{" "}
							Spaying and neutering reduce strays, ease shelter overcrowding,
							and make you a gold-standard pet parent. In short: fewer hormones,
							fewer worries, more years together. That's not cruel. That's kind.
						</p>

						{/* Conclusion */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
								Neutering and spaying aren't about control or
								convenience—they're about responsibility. Our pets don't choose
								the world they're born into, the streets outside, or the risks
								that come with unchecked breeding. As caretakers, we make
								decisions in their best interest, balancing individual welfare
								with the larger good. Preventing suffering, abandonment, and
								preventable disease is an ethical choice rooted in compassion,
								not dominance. That's not interference. That's stewardship.
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

export default BlogArticle7;
