"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle10 = () => {
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
							January 2, 2026
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							10 Funny Cat Behaviours That Make Them Utterly Adorable
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-10.png"
							alt="Funny cat behaviours"
							fill
							className="object-cover"
							style={{ objectPosition: "center 40%" }}
						/>
					</div>

					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Cats don't try to be funny. That's the joke. They simply exist—and
							comedy happens around them.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">The Sudden Sprint:</strong>{" "}
							Nothing is chasing them. Everything is chasing them. Zoom.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Sitting in Squares (or Anything Square-ish):
							</strong>{" "}
							A box. A lid. A random sheet of paper. If it has edges, it has
							purpose.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Knocking Things Off… Slowly:
							</strong>{" "}
							Maintaining eye contact. Testing gravity. Repeating the
							experiment.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">The 3 a.m. Opera:</strong> A
							solo performance for an audience of one. You. Lucky you.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">The Laptop Lie-Down:</strong>{" "}
							Your work clearly needs warmth. And fur. Mostly fur.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								The 'I Fit, Therefore I Sit' Logic:
							</strong>{" "}
							Half a body in. Tail out. Success.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								The Sudden Affection Attack:
							</strong>{" "}
							Ignore you all day. Sit on your chest the moment you're busy.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Talking Back:</strong> You
							speak. They reply. You don't understand a word—but the tone is
							clear.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								The Existential Stare at Nothing:
							</strong>{" "}
							Is it a ghost? A thought? We may never know.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Pretending They Didn't Do That:
							</strong>{" "}
							Mischief committed. Face wiped clean. Innocence restored.
						</p>

						{/* Conclusion */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
								Living with a cat is living with quiet chaos—soft, funny,
								unpredictable chaos that curls up beside you and purrs. And
								honestly, we wouldn't have it any other way.
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

export default BlogArticle10;
