"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle17 = () => {
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
						The Right Fuel at the Right Time: A Dog's Nutritional Journey
					</h1>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				{/* Featured Image */}
				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-17.png"
						alt="The Right Fuel at the Right Time: A Dog's Nutritional Journey"
						fill
						className="object-cover"
						style={{ objectPosition: "center 30%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none font-baloo">
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						A dog does not "grow up." A dog unfolds. And if you've lived with
						one long enough, you'll notice something beautiful — their body
						changes faster than their emotional age. One month they are chewing
						your footwear. The next, they are guarding your gate like a retired
						army officer.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						But here's the part we often miss in Indian homes: Their nutritional
						needs change as dramatically as their personalities. Let's walk
						through it — like a good evening stroll.
					</p>

					{/* Puppyhood Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Puppyhood (2–12 months): The Infrastructure Phase
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						This is the "under construction" period. Bones lengthen. Muscles
						sprout. Teeth fall out. Energy explodes. A puppy is not a small
						adult dog. It is a biological startup in hyper-growth mode.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What they need:</strong> Higher
						protein (for muscle development), good fats (for brain development),
						calcium & phosphorus balance (for bones), smaller, frequent meals
						(3–4 times a day).
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">In an Indian home:</strong> Soft
						rice + boiled chicken (no masala, no salt), curd rice (plain,
						minimal curd if tolerated), mashed pumpkin or carrot, well-cooked egg
						(start small), commercial puppy kibble soaked in warm water.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Avoid leftover sambar rice, oily gravies, or bones from mutton curry.
						Our food is built for spice tolerance. Their gut is not. This is also
						when overfeeding creates lifelong joint problems — especially in
						Labradors and Indies who will eat as if famine is imminent.
					</p>

					{/* Adolescence Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Adolescence (1–2 years): The Gym Bro Phase
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						The body is almost adult-sized. The brain? Not quite. Energy is high.
						Metabolism is strong. They can digest more variety — but this is
						where bad habits also set in.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What they need:</strong> Balanced
						protein (not excess), controlled calories, joint support (especially
						large breeds), structured feeding times (2 meals a day).
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">In an Indian kitchen:</strong>{" "}
						Rice + boiled chicken + a spoon of coconut oil (small quantity), ragi
						in small amounts for fiber (if tolerated), curd (probiotic support),
						steamed beans, pumpkin, bottle gourd, rotis broken into pieces and
						soaked in chicken broth (occasionally).
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Avoid parotta pieces, biryani rice, fried snacks, sweets. Yes, even
						if they stare at you like tragic poets. At this stage, many pet
						parents confuse enthusiasm with hunger. Not the same thing.
					</p>

					{/* Adulthood Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Adulthood (2–7 years): The Stability Phase
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						These are the steady years. Appetite stabilizes. Energy becomes
						predictable. The dog now matches your rhythm. This is also where
						silent weight gain creeps in — especially in apartment dogs in cities
						where walks are shorter than traffic signals.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What they need:</strong> Moderate
						protein, controlled fat, fiber for gut health, portion discipline.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Indian home meals:</strong> 50%
						rice or millets + 30% protein (chicken, egg, paneer occasionally) +
						20% vegetables, fish (boneless, fully cooked) once a week, plain
						curd, homemade bone broth (strained, no spices).
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Salt, chilli powder, garam masala — still a no. Many urban dogs now
						live with borderline obesity. We think "healthy" means "chubby." It
						does not. You should be able to feel ribs without pressing hard. That
						is the test.
					</p>

					{/* Senior Years Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Senior Years (7+ years): The Graceful Slowdown
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						This is when they start sleeping a little longer. Joints whisper.
						Digestion slows. Eyes soften. Food must become gentler.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">What they need:</strong>{" "}
						Easier-to-digest protein, lower calories, joint support (omega-3,
						glucosamine), softer textures.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Indian home options:</strong> Soft
						rice + shredded chicken, light khichdi (no tadka), pumpkin mash, egg
						whites (less yolk if overweight), slightly warm meals (not cold from
						fridge).
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Hydration becomes critical. Senior dogs often drink less. Adding
						water or broth to food helps. This is also when emotional nourishment
						matters. Eating slows. Sitting beside them while they eat matters.
					</p>

					{/* Indian Households Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						A Word About Indian Households
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						In many Indian homes, dogs eat: Leftover rice with rasam, milk daily,
						biscuit treats, chapati with ghee. Some survive. Some thrive. But
						survival is not the benchmark anymore. We now know better.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Milk is not mandatory. Biscuits are not love. Spice is not harmless.
						And feeding from the dining table creates a psychological hierarchy
						confusion that trainers will later charge you to fix.
					</p>

					{/* The Quiet Principle Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						The Quiet Principle
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						A dog's bowl should change as its life stage changes. Not
						dramatically. Not expensively. But thoughtfully. You don't need
						imported salmon from Norway. You need balance, portion awareness, and
						less masala.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						In an Indian home context, simplicity wins: Boiled, lightly cooked,
						fresh, measured.
					</p>

					{/* Conclusion */}
					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
							Because ultimately, feeding a dog is not about generosity. It is
							about stewardship. And growth — like love — needs the right fuel at
							the right time.
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

export default BlogArticle17;
