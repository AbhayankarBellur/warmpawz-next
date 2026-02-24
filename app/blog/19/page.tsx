"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle19 = () => {
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
						When Paws Panic: First Responses Every Thoughtful Pet Parent Should
						Know
					</h1>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				{/* Featured Image */}
				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-19.png"
						alt="When Paws Panic: First Responses Every Thoughtful Pet Parent Should Know"
						fill
						className="object-cover"
						style={{ objectPosition: "center 30%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none font-baloo">
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						There is a particular kind of silence that falls over a home when a
						dog suddenly isn't quite right. The tail that usually thumps is
						still. The eyes that sparkle look uncertain. And in that moment, we
						don't need drama. We need clarity.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						This is not a replacement for your veterinarian's wisdom. It is
						simply a calm first page in the manual of love. Because sometimes the
						first few minutes matter — and always, your instinct does too. Let's
						walk gently through common situations, life stage by life stage.
					</p>

					{/* Puppies Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Puppies (0–12 months): Fragile, Fierce, and Still Figuring It Out
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Puppies are optimism on four legs. They are also digestive
						experiments in motion.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							1. Sudden Diarrhea or Vomiting
						</strong>{" "}
						Common cause? Something "interesting" from the floor. First response:
						Withhold food for 6–8 hours (not water). Offer small sips of clean
						water frequently. If vomiting stops, introduce bland food (boiled
						chicken and rice, lightly mashed).
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Call your vet immediately if: Vomiting persists more than 2–3 times
						in a few hours. There's blood in stool or vomit. Your puppy seems
						lethargic or refuses water. Puppies dehydrate quickly. In India
						especially, parvovirus is a real concern in unvaccinated pups. Do not
						wait and "see tomorrow" if they are dull. Tomorrow may be too late.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">
							2. Sudden Crying and Limping
						</strong>{" "}
						Likely a minor injury from enthusiastic zoomies. First response:
						Gently check the paw for thorns or glass. Do not force movement.
						Apply a cold compress for 5–10 minutes if swelling appears. Vet visit
						required if: Limping continues beyond a few hours. There is visible
						swelling, deformity, or persistent pain. Growing bones are delicate.
						What looks like drama can sometimes be a fracture.
					</p>

					{/* Adolescents & Adults Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Adolescents & Adults (1–7 years): Strong, Stubborn, Occasionally
						Silly
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						These are the dogs who believe they are invincible.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">3. Choking or Gagging</strong>{" "}
						Perhaps a bone, toy, or overenthusiastic eating. First response: Stay
						calm. Panic spreads faster than airways close. Open the mouth
						carefully and check for visible obstruction. If you can clearly see
						and safely grasp the object, remove it gently. If breathing is
						severely compromised, seek emergency veterinary care immediately. Do
						not blindly sweep fingers into the throat — you may push it deeper.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							4. Heatstroke (Especially in Indian Summers)
						</strong>{" "}
						Panting heavily. Excess drooling. Weakness. Bright red gums. First
						response: Move the dog to shade immediately. Pour room-temperature
						water over body (not ice-cold). Offer small amounts of water to
						drink. Place cool (not icy) wet cloths on groin and neck. Emergency
						vet care is mandatory. Heatstroke is not a "rest and recover"
						condition. Internal damage can continue even after cooling. Avoid ice
						baths. Rapid cooling can worsen shock.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">
							5. Sudden Allergic Reaction
						</strong>{" "}
						Facial swelling. Hives. Itching. Sometimes vomiting. First response:
						Remove possible trigger (new treat? new soap?). Contact your vet
						immediately for dosage guidance before giving any antihistamine. Never
						guess doses. Rush to emergency care if: Breathing difficulty.
						Collapse. Pale gums. Allergies can escalate quickly.
					</p>

					{/* Seniors Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Seniors (7+ years): Gentle Souls, Slower Signals
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Senior dogs don't always shout when something hurts. They whisper.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							6. Sudden Collapse or Weakness
						</strong>{" "}
						This is never "just old age." First response: Keep them lying
						comfortably. Check gum color (healthy is pink). Keep them warm and
						transport gently to a vet immediately. Possible causes range from
						heart issues to internal bleeding. Time matters here.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">
							7. Bloat (More common in large breeds, any adult age)
						</strong>{" "}
						Distended abdomen. Restlessness. Unproductive retching. First
						response: There is only one: Go to a vet immediately. Do not wait. Do
						not google longer. Bloat can become life-threatening within hours.
					</p>

					{/* Seizures Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Across All Ages: Seizures — Frightening, But Often Brief
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						A seizure can feel like the world has tilted. You may see: Sudden
						collapse, stiffening or jerking limbs, jaw chomping, excess
						salivation, loss of bladder control. It looks dramatic. It is not
						always fatal. But it must be handled correctly.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">First response:</strong> Stay
						calm. Note the time. Most seizures last under 1–2 minutes. Move
						furniture away to prevent injury. Do not restrain your dog unless
						they are in immediate danger (like near stairs). Do not put your hand
						in their mouth. They are not swallowing their tongue — but they may
						bite unintentionally. Dim the lights and reduce noise if possible.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">After the seizure:</strong> Your
						dog may seem confused, blind, restless, or clingy. This "post-ictal"
						phase can last minutes to hours. Speak softly. Offer comfort. Allow
						recovery in a quiet space.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Seek veterinary care immediately if: The seizure lasts more than 3–5
						minutes. Multiple seizures occur within 24 hours. Your dog does not
						regain awareness. This is their first seizure. Seizures can be
						triggered by epilepsy, toxins, metabolic disorders, or underlying
						illness. They always warrant veterinary evaluation — even if they stop
						quickly.
					</p>

					{/* Universal First-Aid Section */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						The Universal First-Aid Mindset
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Stay calm. Your dog reads you like scripture. Observe before acting.
						Breathing? Gum color? Responsiveness? Do not medicate without
						veterinary guidance. Human medicines can be toxic. Have your vet's
						number saved and an emergency clinic identified in advance.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						If your dog is breathing normally, alert, and stable — you may
						monitor briefly. If your dog is struggling to breathe, collapsing,
						bleeding heavily, seizing repeatedly, or severely lethargic — this is
						not an article situation. This is a veterinary situation.
					</p>

					{/* Conclusion */}
					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
							You are not overreacting by seeking help. You are being
							responsible. Dogs give us a lifetime of uncomplicated love. Our job
							is not to be doctors. It is to be attentive guardians who respond
							with steadiness and humility. The best first response is not
							heroics. It is informed calm — followed, when needed, by
							professional care. Because reassurance is beautiful. But expertise
							saves lives.
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

export default BlogArticle19;
