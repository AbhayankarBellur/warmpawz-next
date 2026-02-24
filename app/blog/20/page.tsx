"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle20 = () => {
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
			<article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12 border-2 border-[#F5A855]">
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
						Nine Lives, One Calm Human: First Responses to Feline Emergencies
					</h1>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				{/* Featured Image */}
				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-20.png"
						alt="Nine Lives, One Calm Human: First Responses to Feline Emergencies"
						fill
						className="object-cover"
						style={{ objectPosition: "center 30%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none font-baloo">
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Cats are masters of disguise. They can hide pain like Oscar-worthy
						actors and then choose 2 a.m. to unveil their plot twist. When
						something goes wrong, your job isn't to become a veterinarian
						overnight. Your job is simpler, steadier, and far more powerful: stay
						calm, act wisely, and know when to hand over the reins to your vet.
						This is first response, not final treatment. Always involve your
						veterinarian when in doubt. Cats rarely "just bounce back" from
						serious symptoms. Let's walk through the common crises — gently,
						clearly, and without panic.
					</p>

					{/* Breathing Trouble */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							1. Breathing Trouble: Open-Mouth Breathing, Rapid Panting,
							Wheezing
						</strong>{" "}
						Cats are not dogs. They do not pant for fun. If your cat is breathing
						with their mouth open, stretching their neck out, breathing very fast
						at rest, or their gums look pale or bluish — this is urgent.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						First response: Do not force them into a carrier aggressively. Keep
						the environment quiet and cool. Avoid handling more than necessary.
						Transport to the nearest vet immediately. Breathing issues can signal
						asthma, heart disease, fluid in lungs, heatstroke, or trauma. Time
						matters here. This is not a "wait and watch" situation.
					</p>

					{/* Seizures */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							2. Seizures: The Frightening Few Minutes
						</strong>{" "}
						A seizure can look like paddling legs, stiffening, drooling,
						twitching, or sudden collapse. It is terrifying. But here is your
						anchor: most seizures stop within 1–3 minutes.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						During the seizure: Do not put your hand in their mouth. Cats do not
						swallow their tongues. Move nearby objects away so they don't injure
						themselves. Dim the lights. Reduce noise. Time the episode if
						possible.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						After it stops: They may seem confused, blind, restless, or
						excessively hungry. Stay calm and keep them safe. Call your vet
						immediately for guidance. If a seizure lasts more than 5 minutes, or
						multiple seizures happen in a short span, go to emergency care
						immediately. Even a single seizure warrants a vet visit within 24
						hours.
					</p>

					{/* Vomiting */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							3. Vomiting: One Hairball vs Something More
						</strong>{" "}
						Cats vomit. It's practically a hobby. But frequency and context
						matter. Watchful waiting is okay if: It's a single episode. Your cat
						is otherwise bright, eating, and drinking. No blood is present.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Call your vet if: Vomiting repeats more than twice in a day. There's
						blood or coffee-ground material. Your cat seems lethargic, hides
						excessively, or refuses food. There's suspicion of toxin ingestion
						(plants, human meds, chocolate). With kittens and seniors, don't
						delay. They dehydrate quickly.
					</p>

					{/* Urinary Distress */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							4. Urinary Distress: The Silent Emergency
						</strong>{" "}
						If your cat is going in and out of the litter box, straining, crying,
						or producing little to no urine — this is especially urgent in male
						cats. A blocked bladder can become life-threatening within 24 hours.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						First response: Check if urine is actually being produced. Do not
						wait overnight. Go to a vet immediately if there is straining with
						little or no urine. This is one of the true "drop everything and go"
						emergencies.
					</p>

					{/* Trauma */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">
							5. Trauma: Falls, Bites, Road Accidents
						</strong>{" "}
						Cats are agile, not invincible. After any trauma: Keep movement
						minimal. Place your cat gently in a carrier with a towel. Avoid
						pressing on limbs or abdomen. Even if they "seem fine," internal
						injuries can hide. Always seek veterinary evaluation after major
						trauma.
					</p>

					{/* Bleeding */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">6. Bleeding</strong> Small cuts:
						Apply gentle pressure with clean gauze for several minutes. Heavy
						bleeding: Continuous firm pressure. Immediate veterinary visit. Never
						use human antiseptics like Dettol or strong alcohol on deep wounds
						without guidance.
					</p>

					{/* Poisoning */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">7. Suspected Poisoning</strong>{" "}
						Common culprits include lilies, certain houseplants, human
						painkillers, cleaning products, and essential oils. If ingestion is
						suspected: Do not induce vomiting unless a vet instructs you. Bring
						packaging or plant samples with you. Seek immediate veterinary help.
						Lilies in particular can cause kidney failure in cats — even small
						exposures are dangerous.
					</p>

					{/* Heatstroke */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">8. Heatstroke</strong> Less common
						in cats than dogs, but possible in hot climates. Signs: Panting.
						Drooling. Lethargy. Collapse. First response: Move to a cool, shaded
						area. Offer small amounts of water. Apply cool (not ice-cold) damp
						cloths to paws and belly. Head to the vet. Rapid cooling is
						important, but overcooling can cause shock.
					</p>

					{/* Choking */}
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">9. Choking</strong> True choking
						in cats is rare but serious. Signs: Pawing at mouth. Gagging without
						producing anything. Distress. Do not blindly sweep inside the mouth.
						If visible and safe, remove the object carefully. Otherwise,
						emergency care immediately.
					</p>

					{/* Reality Check Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						A Gentle Reality Check
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Cats deteriorate quietly. By the time they show obvious distress,
						something meaningful may already be brewing. Your role is not
						heroics. It is observation.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Notice: Changes in appetite. Hiding behavior. Grooming changes.
						Litter box habits. Subtle weight loss. These whispers often matter
						more than dramatic episodes.
					</p>

					{/* Golden Rule Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						The Golden Rule
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						When unsure, call your vet. No responsible veterinarian will ever
						mock a cautious cat parent. They would much rather reassure you than
						treat a preventable crisis.
					</p>

					{/* Conclusion */}
					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
							Cats may have nine lives. But they only have one you to notice when
							something feels off. Stay calm. Act kindly. Seek help early. And
							remember — asking for veterinary support is not panic. It is love,
							properly directed.
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

export default BlogArticle20;
