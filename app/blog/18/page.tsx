"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle18 = () => {
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
						From Whiskered Whispers to Regal Stares: A Cat's Growth Story
					</h1>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				{/* Featured Image */}
				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-18.png"
						alt="From Whiskered Whispers to Regal Stares: A Cat's Growth Story"
						fill
						className="object-cover"
						style={{ objectPosition: "center 30%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none font-baloo">
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Cats do not grow. They unfold. Quietly. Elegantly. Like a secret you
						are privileged to witness. And at every stage of that unfolding,
						their bodies are asking for something different from the bowl you
						place before them. Let's walk through it — gently, whisker by
						whisker.
					</p>

					{/* 0-2 Months Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						0–2 Months: The Milk-Drunk Beginning
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						This is the season of wobble and wonder. Kittens are all softness
						and closed eyes, guided by warmth and instinct.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What's happening:</strong> Rapid
						growth. Brain development. Bones quietly mapping their future
						strength. Their immune systems borrowing protection from mother's
						milk.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">What they need:</strong> Mother's
						milk is gold. If that's not possible, a proper kitten milk replacer —
						never cow's milk (their tiny tummies will protest loudly). Protein and
						fat are not luxuries here; they are architecture. Everything is being
						built.
					</p>

					{/* 2-6 Months Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						2–6 Months: Tiny Predator in Training
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Suddenly the wobble becomes a sprint. Curtains tremble. Ankles are
						ambushed.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What's happening:</strong>{" "}
						Explosive growth. Muscle development. Baby teeth giving way to adult
						ones. Energy levels that defy physics.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What they need:</strong>{" "}
						High-protein, high-calorie kitten food. Real animal protein first.
						Taurine is non-negotiable — cats cannot manufacture enough of it on
						their own. It protects their heart, vision, and quiet feline dignity.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						In an Indian home, some pet parents are tempted to offer bits of roti
						or rice. A nibble won't harm, but remember — cats are obligate
						carnivores. Their bodies are designed for meat, not chapati
						diplomacy. Small, frequent meals work best. Their stomachs are small,
						but their ambitions are not.
					</p>

					{/* 6-12 Months Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						6–12 Months: The Awkward Aristocrat
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						They look grown. They act dramatic. They are, biologically, still
						teenagers.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What's happening:</strong> Growth
						begins to slow but hasn't finished. Hormones stir. Personalities
						sharpen. Some breeds (like larger ones) continue growing well past a
						year.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">What they need:</strong> Continue
						kitten-formulated food until at least 10–12 months. Protein remains
						essential, but calorie control starts to matter. This is when
						overfeeding can quietly set the stage for future weight struggles. If
						neutered/spayed, metabolism may dip slightly. Portions may need
						thoughtful adjustment — not drastic cuts, just mindful balance.
					</p>

					{/* 1-7 Years Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						1–7 Years: The Prime Years
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						This is the era of confident strides and sunlit naps. They know the
						house. They know you. They know exactly when to wake you.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What's happening:</strong>{" "}
						Maintenance mode. Muscle mass stabilizes. Activity levels differ
						wildly — some are Olympic gymnasts, others are philosophical
						observers.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What they need:</strong>{" "}
						High-quality adult cat food with strong animal protein content.
						Controlled fat. Adequate hydration. Wet food becomes especially
						important here. Cats are historically desert animals; they are poor
						voluntary drinkers. Moisture in food supports kidney health
						long-term.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						If feeding home-cooked additions (boiled chicken, small bits of
						fish), ensure they are plain — no salt, no masala, no onion, no
						garlic. Our food is fragrant; their livers are not impressed. Portion
						control is kindness. Obesity in cats is heartbreak wrapped in fluff.
					</p>

					{/* 7+ Years Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						7+ Years: The Graceful Elder
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						The leaps are lower. The naps are longer. The eyes, somehow, are
						wiser.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What's happening:</strong>{" "}
						Metabolism slows. Kidney function may gradually decline. Joints begin
						negotiating with gravity.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">What they need:</strong> Easily
						digestible protein — still crucial, never drastically reduced unless
						medically advised. Lower phosphorus levels for kidney support.
						Omega-3 fatty acids for joint comfort. Regular vet checks become part
						of love. Subtle weight loss or gain matters more now. Texture can
						matter too. Older cats may prefer softer food if dental changes creep
						in.
					</p>

					{/* Gentle Truth Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						A Gentle Truth About Cats and Food
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Cats are not small dogs. They are biologically precise creatures.
						They require: Animal protein as a primary fuel, taurine, preformed
						Vitamin A, arachidonic acid. These are not dietary preferences. They
						are survival requirements.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						And while love is abundant in Indian homes — bowls of milk, a saucer
						of rice, a sharing of curd — a cat's body thrives on
						species-appropriate nutrition.
					</p>

					{/* Real Nourishment Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						The Real Nourishment
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						At every stage, nutrition is not just about growth. It is about
						preventing silent suffering years later. Kidney disease. Diabetes.
						Joint pain. Many of these stories begin quietly in the bowl.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						So we feed thoughtfully. We adjust gently. We watch their coat, their
						eyes, their litter box habits. Because growth in cats is not loud. It
						is subtle. And so is decline.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						To raise a cat well is to notice the quiet things — the way their
						body changes, the way their appetite shifts, the way their energy
						settles. And to respond, not react.
					</p>

					{/* Conclusion */}
					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
							From milk-drunk kitten to sun-warmed elder, their needs evolve. Our
							job is simple. Keep learning. Keep adjusting. Keep loving — in
							protein percentages and portion sizes as much as in chin scratches.
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

export default BlogArticle18;
