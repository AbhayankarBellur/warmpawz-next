"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle13 = () => {
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
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Best Foods for Senior Dogs in India: Feeding the Golden Years
							Right
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-13.png"
							alt="Best Foods for Senior Dogs in India: Feeding the Golden Years Right"
							fill
							className="object-cover"
							style={{ objectPosition: "center 15%" }}
						/>
					</div>

					{/* Introduction */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Senior dogs don't suddenly grow old. They soften into it. A slower
							walk, longer naps, wiser eyes—and a tummy that now prefers comfort
							over drama. Feeding them right is less about fancy labels and more
							about kindness in a bowl. As dogs age (usually 7+ years for most
							breeds in India), their metabolism slows, joints complain a little
							louder, and digestion asks for patience.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							The best food for senior dogs is easy to digest, nutritionally
							dense, and gentle on the gut.
						</p>

						<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 mt-12">
							Protein
						</h2>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Quality matters more than quantity.
							</strong>{" "}
							Think boiled chicken, fish, eggs, or well-cooked paneer in
							moderation. Protein helps maintain muscle mass, which seniors
							quietly lose if we're not careful.
						</p>

						<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 mt-12">
							Carbohydrates
						</h2>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Light and friendly.</strong>{" "}
							Rice, oats, ragi, and sweet potato work beautifully in Indian
							homes. Skip heavy wheat and anything too oily—it only invites
							bloating and discomfort.
						</p>

						<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 mt-12">
							Fats
						</h2>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Wisely chosen.</strong> A
							little coconut oil or fish oil supports joints, skin, and that
							dignified senior shine. Too much, however, turns walks into
							waddles.
						</p>

						<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 mt-12">
							Fibre
						</h2>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">The quiet hero.</strong>{" "}
							Pumpkin, bottle gourd, carrots, and green beans help digestion and
							keep constipation away—an unspoken but very real senior issue. If
							you prefer commercial senior dog food, choose brands available in
							India that clearly mention senior formulation, joint support, and
							controlled calories. Always transition slowly—old stomachs dislike
							surprises.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							And finally, fresh water, always. Seniors forget to drink, just
							like they forget why they walked into a room.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Feeding a senior dog isn't about extending life at all costs—it's
							about making every day softer, easier, and full of comfort.
							Because they've spent years looking after us. Now, the bowl is our
							way of saying I've got you.
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

export default BlogArticle13;
