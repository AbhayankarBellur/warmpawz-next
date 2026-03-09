"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle21 = () => {
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
						When the Sun Gets Fierce: A Gentle Word on Heat Strokes in Our Dogs
					</h1>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				{/* Featured Image */}
				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-21.png"
						alt="When the Sun Gets Fierce: A Gentle Word on Heat Strokes in Our Dogs"
						fill
						className="object-cover"
						style={{ objectPosition: "center 25%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none font-baloo">
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Indian summers do not arrive politely. They blaze in. By April, the
						pavements are hot enough to toast papad and the air itself feels
						tired. And in the middle of this? Our dogs. Loyal, fur-coated,
						enthusiastic about life — and unfortunately, not built for 42°C
						afternoons.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Let's talk about heat stroke. Calmly. Clearly. Without panic. But
						with respect for how serious it can be.
					</p>

					{/* How Normal Dogs Respond to Summer */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						How Normal Dogs Respond to Summer
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Dogs do not sweat like we do. They cool themselves mainly by panting
						and a little through their paw pads. On warm days, you'll notice:
						Mild to moderate panting, seeking shade or cool tiles, sleeping more
						during peak heat, drinking more water, reduced appetite in the
						afternoons.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						This is normal summer behaviour. Sensible dogs slow themselves down.
						But when the heat overwhelms their ability to cool down, that's when
						trouble begins.
					</p>

					{/* What Is Heat Stroke */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						What Is Heat Stroke?
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Heat stroke happens when a dog's body temperature rises above 104°F
						(40°C) and they can no longer regulate it. At 106°F and above,
						organs begin to suffer. This is not dramatic language. It is
						physiology.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						In India, this can happen quickly — especially in: Flat-faced breeds
						(Pugs, Bulldogs, Shih Tzus), thick-coated breeds, overweight dogs,
						senior dogs, puppies, dogs exercised during peak heat, dogs left in
						parked cars (even for "just 5 minutes").
					</p>

					{/* Symptoms to Watch For */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Symptoms to Watch For
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Early signs:</strong> Heavy,
						rapid panting, excessive drooling (thick, sticky saliva), bright red
						gums, restlessness.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Progressing signs:</strong>{" "}
						Vomiting or diarrhoea, weakness or wobbling, confusion, rapid heart
						rate, glassy eyes.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">Emergency signs:</strong>{" "}
						Collapse, seizures, pale or bluish gums, unconsciousness. If you see
						these later signs, this is not a "wait and watch" situation.
					</p>

					{/* Prevention */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Prevention: What Wise Dog Parents Do in Indian Summers
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Prevention is gentle, consistent common sense. No walks after 9:30
						AM or before 6 PM (even later in peak May heat). Do the pavement
						test — place your palm on the road for 7 seconds. If it's too hot
						for you, it burns their paws.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Ensure constant access to fresh water (multiple bowls help). Provide
						shade and ventilation. Fans are good. Cross-ventilation is better.
						Avoid muzzles in summer — they restrict panting. Never leave a dog
						in a parked car. Not even with windows cracked.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Keep exercise light and short. Cooling mats, damp towels (not
						ice-cold), and shaded rest areas are helpful. Groom, but don't
						shave double-coated breeds completely — their coat also insulates
						against heat. Think of summer as a season of slower living.
					</p>

					{/* First Response */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						First Response If You Suspect Heat Stroke
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Stay calm. Your steadiness helps them. Move your dog immediately to
						shade or indoors. Begin gradual cooling: Pour room-temperature water
						(not ice water) over body. Focus on belly, groin, paws. Use a fan
						to aid evaporation. Offer small sips of water — do not force. Check
						gum colour and breathing.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">Do NOT:</strong> Use ice baths.
						Cover them with wet towels and leave them (this traps heat). Delay
						veterinary care hoping they'll "bounce back." Even if your dog
						appears to improve, internal damage can continue silently.
					</p>

					{/* When to See the Doctor */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						When to See the Doctor
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Immediately, if:</strong> Body
						feels excessively hot, there is vomiting, diarrhoea, wobbling, they
						collapse, panting does not settle within minutes of cooling.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Even mild suspected heat stroke should be evaluated. Complications
						can include kidney injury, clotting disorders, and organ stress —
						and early intervention changes outcomes dramatically.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						When in doubt, call your vet. It is never overreacting.
					</p>

					{/* A Quiet Reminder */}
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						A Quiet Reminder
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Our dogs trust us with their safety. They will chase a ball at 2 PM
						in May if we ask them to. They will sit in a sunny balcony because
						we stepped inside. They will not complain.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Summer parenting is about saying, "Not now, baby. It's too hot." And
						meaning it.
					</p>

					{/* Conclusion */}
					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
							Let this season be one of shade, water bowls, slower walks, and
							cooler tiles. Because prevention is love in its most practical
							form.
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

export default BlogArticle21;