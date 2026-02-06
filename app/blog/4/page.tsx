"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle4 = () => {
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
							Your First Month with a Pet
						</h1>
						<p className="text-lg sm:text-xl text-[#F69052] font-semibold italic mb-6">
							A warm pause for the little one with warm paws!
						</p>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-4.png"
							alt="Your First Month with a Pet"
							fill
							className="object-cover"
							style={{ objectPosition: "center 30%" }}
						/>
					</div>

					{/* Article Content */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							The first month with a new family member who has four paws is
							nothing short of life-altering. It begins with excitement — new
							bowls, a tiny bed, that first car ride home — but quickly unfolds
							into something deeper, quieter, and far more powerful. Your days
							start revolving around{" "}
							<strong className="text-[#F69052]">
								feeding times, bathroom breaks, and tentative tail wags
							</strong>
							. Your nights grow lighter, even with interrupted sleep, because
							there's a small heartbeat trusting you completely.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							In just a few weeks,{" "}
							<strong className="text-[#F69052]">routines shift</strong>. You
							wake up earlier, step outside more often, notice the sky, the
							wind, the small joys you once rushed past. Laughter becomes
							frequent — at clumsy jumps, crooked zoomies, and the way they
							somehow steal socks and hearts at the same speed. There are
							challenges too: chewed corners, accidents, moments of doubt. But
							every problem brings a solution rooted in{" "}
							<strong className="text-[#F69052]">
								patience, consistency, and learning together
							</strong>
							.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							What truly surprises you is the{" "}
							<strong className="text-[#F69052]">emotional change</strong>. Pets
							don't just live in your home; they live in your moments. They
							sense your stress, sit closer on hard days, and celebrate ordinary
							wins like they're milestones. The house feels fuller, warmer, more
							alive. Silence feels strange without their presence.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							By the end of the first month, you realise something profound —{" "}
							<strong className="text-[#F69052]">
								you didn't just adopt a pet, you adopted a new way of living
							</strong>
							. One with{" "}
							<strong className="text-[#F69052]">
								responsibility, empathy, structure, and unconditional love
							</strong>
							. Pets change your lives forever, not loudly or dramatically, but
							gently, steadily, and always for the better.
						</p>

						{/* Closing Message */}
						<div className="mt-10 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-center font-semibold italic">
								The first month is just the beginning. The love lasts forever.
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

export default BlogArticle4;
