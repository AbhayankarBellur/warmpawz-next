"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle16 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
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
						When the Queen Sings: A Warm, Witty Guide to Cats in Heat
					</h1>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				{/* Featured Image */}
				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-16.png"
						alt="When the Queen Sings: A Warm, Witty Guide to Cats in Heat"
						fill
						className="object-cover"
						style={{ objectPosition: "center 30%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none font-baloo">
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						There are few things in life as dramatic, misunderstood, and wildly
						operatic as a cat in heat. If you've never witnessed it, imagine
						your usually dignified, self-contained feline suddenly auditioning
						for a role in a very emotional musical. There will be singing. There
						will be floor choreography. There will be intense eye contact. And
						you will question all your life choices.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						A heat cycle in a cat — technically called estrus — is simply her
						body saying, "I am ready to reproduce." Unlike humans, cats don't
						menstruate. They don't bleed. They don't sulk with chocolate.
						Instead, they announce it to the entire neighborhood. And with
						confidence.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						It usually begins around 5–9 months of age, though some ambitious
						overachievers start earlier. The signs are subtle at first — extra
						affection, more rolling, a peculiar softness. Then the opera begins.
						Loud, drawn-out vocalizations that sound like a philosophical crisis.
						She may raise her hindquarters, tread her back legs, and display what
						looks like exaggerated flirtation. It's instinct, not attitude.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						It can last about 5–7 days. And if she doesn't mate? The cycle
						pauses briefly… and then resumes. Again. And again. During breeding
						season, this can feel less like biology and more like a long-running
						series with no commercial breaks.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Here's the tender truth beneath the theatrics: she isn't being
						difficult. She isn't "acting out." She's responding to hormones. Her
						body is doing exactly what evolution designed it to do. There's
						vulnerability in that. Discomfort too. Some cats become clingy. Some
						become restless. Some stare into the distance and yowl like poets
						who've seen too much.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						As caretakers, our role is simple — provide comfort, patience, and
						safety. Keep her indoors (love makes adventurers of us all). Offer
						extra affection if she seeks it. Distract with play. Maintain
						routine.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						And if you are not planning to breed her, spaying is not just
						population control — it protects her long-term health, reducing risks
						of uterine infections and certain cancers, and yes, it restores peace
						to your soundscape.
					</p>

					{/* Conclusion */}
					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
							A cat in heat is nature at full volume. Intense, unapologetic,
							ancient. And like most things in life that feel overwhelming — it
							passes. Until next month.
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
	);
};

export default BlogArticle16;
