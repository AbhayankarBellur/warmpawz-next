"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle12 = () => {
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
							A Dozen Puppy Training Truths (From Someone Who's Been Outsmarted
							by a Puppy)
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-12.png"
							alt="A Dozen Puppy Training Truths (From Someone Who's Been Outsmarted by a Puppy)"
							fill
							className="object-cover"
							style={{ objectPosition: "center 70%" }}
						/>
					</div>

					{/* Introduction */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Training a puppy isn't about obedience. It's about negotiation.
							With someone who doesn't speak your language, chews your slippers,
							and still manages to steal your heart before breakfast.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Start early.</strong> Puppies
							are like soft clay—adorable, wiggly clay. Shape gently.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Consistency beats intensity.
							</strong>{" "}
							Five calm minutes every day works far better than one dramatic
							weekend of rules and resolve. Reward the good and quietly ignore
							the oops. Puppies repeat what gets applause.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Timing is everything.</strong>{" "}
							Praise immediately—puppies live fully, unapologetically, in the
							now.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Names matter.</strong> Say it
							kindly. A puppy's name should always sound like an invitation,
							never a warning. "Sit" is the gateway skill. Once they learn it,
							half of daily life suddenly becomes easier.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Biting is communication.
							</strong>{" "}
							Redirect instead of scolding. Teething happens. Furniture
							forgives… slowly.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Socialisation is education.
							</strong>{" "}
							New people, sounds, places, and dogs teach confidence better than
							commands ever will. Potty training needs patience, not punishment.
							Accidents are lessons, not failures. End training sessions on a
							win. Leave them feeling proud, not tired or confused.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Your mood trains them too.
							</strong>{" "}
							Calm hands and soft voices raise calmer dogs.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								And finally—love is the secret sauce.
							</strong>{" "}
							Skills may fade, commands may wobble, but trust stays.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Puppy training is messy, repetitive, and often hilarious. Some
							days you'll feel like a trainer. Other days, a very loyal snack
							dispenser.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Stay kind. Stay patient. One day, without warning, they'll
							listen—and your heart will do a little sit-stay too.
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

export default BlogArticle12;
