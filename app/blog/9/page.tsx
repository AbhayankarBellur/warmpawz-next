"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle9 = () => {
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
							January 4, 2026
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Cats and the Litterbox: A Love Story (Mostly)
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-9.png"
							alt="Cat with litterbox"
							fill
							className="object-cover"
							style={{ objectPosition: "center 40%" }}
						/>
					</div>

					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Cats are born knowing many things—how to nap like it's a
							profession, how to judge silently, and yes, where to pee.{" "}
							<strong className="text-[#F69052]">
								Pee-training a cat is less "training" and more "not messing it
								up."
							</strong>
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Start with the right litterbox:
							</strong>{" "}
							Quiet corner, easy access, no audience. Cats like privacy; this is
							not a group activity. One cat, one box—add an extra if you can.
							Think of it as giving them options, not confusion.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Choose a litter that feels natural under their paws:
							</strong>{" "}
							Nothing too perfumed or dramatic. Cats prefer subtlety. Scoop
							daily. A dirty litterbox is a strong suggestion to pee
							elsewhere—like your favourite rug.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Bring your cat to the box gently after meals and naps:
							</strong>{" "}
							No force, no lectures. If accidents happen, clean calmly and move
							on. Never punish. Cats don't connect anger with action; they only
							connect it with you.
						</p>

						{/* Conclusion */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
								Most importantly, trust the cat. They want to be clean. They
								want routine. Get the setup right, keep it respectful, and your
								cat will handle the rest—with dignity, precision, and a little
								side-eye.
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

export default BlogArticle9;
