"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { AppLink } from "@/components/shared/AppLink";

const BlogArticle2 = () => {
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
							Golden Retriever – Common Behaviour Issues and Solutions
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video w-full h-full relative shrink-0 bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-2.png"
							alt="Golden Retriever – Common Behaviour Issues and Solutions"
							className="object-cover"
							fill
							style={{ objectPosition: "center 20%" }}
						/>
					</div>

					{/* Introduction */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Golden Retrievers are sunshine in fur. They're loyal,
							affectionate, and always eager to please. But this very enthusiasm
							can sometimes lead to a few funny (and sometimes frustrating)
							habits.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Chewing:</strong> They chew for
							comfort or out of sheer boredom. Those shiny shoes? Gone! Keep
							them busy with strong chew toys and daily playtime. A tired Golden
							is a good Golden.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Jumping:</strong> Their love
							overflows—right onto your clothes. Teach them to sit before
							greeting. Calm gets cuddles; jumping gets ignored.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Barking:</strong> They're
							talkative when left alone or seeking attention. Give them company,
							some puzzle toys, or gentle music when you're away.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Pulling on Leash:</strong>{" "}
							Every walk feels like a race to happiness. Use a short leash, walk
							with patience, and reward gentle steps.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Digging:</strong> Some dig out
							of joy, others for adventure. More playtime, less garden holes.
							Give them a "dig zone" if they insist.
						</p>

						{/* Conclusion */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
								With enough love, exercise, and a pinch of patience, your Golden
								will be that perfect, glowing bundle of joy who brightens every
								corner of your home.
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

export default BlogArticle2;
