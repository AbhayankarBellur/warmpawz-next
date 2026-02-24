"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle1 = () => {
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
						Breeds of Dogs and Cats Available in India
					</h1>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				{/* Featured Image */}
				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-1.png"
						alt="Breeds of Dogs and Cats Available in India"
						fill
						className="object-cover"
						style={{ objectPosition: "center 30%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				{/* Introduction */}
				<div className="prose prose-lg max-w-none font-baloo">
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Here we are, wanting to bring to you everything you ever wished to
						know about your furry babies. So we actually sent dog-loving boys
						and girls to fetch data for you. Here, we've put together every
						known detail with fact checks from the experts — doctors and pet
						parents alike. To kick-start our little data fetch, we barked up
						every right tree.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						So here goes — the most common and loved dog breeds for Indian
						homes:
					</p>

					{/* Popular Dog Breeds */}
					<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 mt-12">
						Popular Dog Breeds
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Labrador Retriever:</strong>{" "}
						Another name for active with oodles of gentleness! Labs become
						family members instantly. Keep them in your heart and let them stay
						there. With moderate grooming needs — thick, short coats that repel
						water and welcome dry cuddles — they're perfect for warm weather.
						Labs adapt well to apartment living if they get enough exercise.
						Here's your protein buddy — chicken and eggs partner — but don't
						worry, they enjoy almost all protein-rich foods.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Golden Retriever:</strong> Get
						yourself a good dog coat brush, because here's a gorgeous mid-length
						coat dweller. He or she loves children, is a delight to train, and
						has affection as a middle name. Throw in all your love, generous
						space, daily walks, a balanced diet, and you'll have the shiniest
						friendship on the planet.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Beagle:</strong> They say the
						best things come in small packages, and the Beagle proves it. Here's
						an energetic, curious, nose-poking buddy whose short coat keeps
						grooming easy. Be careful though—this binge eater can't tell if it's
						love for your food or plain hunger. Beagles are great for families
						who love playtime and laughter.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Indie:</strong> Probably
						the most common and most underappreciated breed. The Indian Pariah
						is native, strong, and perfectly suited to our climate. Sharp,
						loyal, naturally healthy, and super adaptable, they fit beautifully
						in both independent homes and apartments. Minimal grooming, high
						intelligence, and loads of love—this desi buddy is India's true
						guardian.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Pug:</strong> Keep them
						moderately groomed and always cuddled. Pugs are born
						comedians—funny, expressive, and full of charm. They shed both
						inhibition and hair, and heat can stress them out, so keep them cool
						and cozy. Small homes suit them just fine. They love lounging on the
						couch, and you'll love watching them do it. Trick them with
						low-calorie foods—they fall for it every time.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">German Shepherd:</strong> They
						are double friendly, double coated, double easy to train, and need
						double the effort for maintenance of their fur. German Shepherds are
						loyal, alert, and super intelligent—always ready to protect and
						please their families. Their thick coat sheds seasonally, so regular
						brushing keeps things tidy. They thrive on outdoor activity, long
						walks, and purposeful play. Feed them wholesome, protein-rich
						meals—chicken, rice, and vegetables work wonders. Give them
						training, love, and trust, and you'll have a companion who
						understands not just your words, but your moods too.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Alsatian:</strong> Often mistaken
						as a different breed, the Alsatian is the same noble spirit as the
						German Shepherd, with perhaps an even more regal look. Strong,
						disciplined, and affectionate, they're excellent guard dogs and
						family protectors. Their dense coat needs regular brushing and a
						balanced diet rich in protein. Give them space to run, minds to
						train, and hearts to love—you'll never find a more loyal friend.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Shih Tzu:</strong> Here's your
						royal fluff ball wrapped in love and luxury. Shih Tzus, once lap
						dogs of Chinese emperors, are affectionate, gentle, and charming.
						Their long, silky coats need daily brushing and occasional trims.
						They eat small, frequent meals—chicken, rice, and high-quality
						kibble suit them best. Perfect for apartments, they're not big on
						workouts but huge on cuddles and companionship.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Doberman:</strong> Sleek, strong,
						and supremely loyal. Dobermans are the guardians with golden hearts.
						Their short coat is easy to maintain, and they shed very little.
						Intelligent and athletic, they love outdoor play and thrive on
						structured training. Feed them a protein-rich diet and keep them
						active—they're happiest when they have a purpose and your praise.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Siberian Husky:</strong> The snow
						prince in the tropics. With piercing blue eyes and a majestic double
						coat, Huskies are breathtakingly beautiful. But beware—they're bred
						for cold climates, so they need shade, cool surroundings, and plenty
						of hydration in India. They shed heavily and require regular
						grooming. Playful, talkative, and mischievously smart, they love
						exercise, attention, and protein-packed meals. A Husky will fill
						your heart and your home with love and fur.
					</p>

					{/* Popular Cat Breeds */}
					<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 mt-16">
						Popular Cat Breeds
					</h2>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Persian Cat:</strong> The royal
						sofa queen (or king). With that long, luxurious coat and gentle
						eyes, Persians love peace and pampering. Daily brushing keeps their
						fur flawless. They prefer quiet spaces and soft laps, enjoying
						small, nutritious meals of fish or chicken. Calm, cuddly, and
						absolutely adorable, Persians turn your home into their palace.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Siamese Cat:</strong> Talkative,
						curious, and clever—Siamese cats love to chat. Their short coats
						shed very little, and their blue eyes melt hearts. They follow you
						everywhere, eager to play or share their opinions. Protein-rich
						food, interactive toys, and plenty of love keep this chatterbox
						happy and healthy.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Indian (Indie/Desi) Cat:</strong>{" "}
						Agile, smart, and strong, these desi felines are true survivors.
						Perfectly adapted to Indian weather, they need minimal grooming and
						are rarely fussy eaters. Simple home-cooked meals and lots of
						freedom keep them healthy. Independent yet affectionate, they're
						loyal companions who'll sneak into your heart before you know it.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Maine Coon:</strong> The gentle
						giant of cats. With tufted ears, bushy tails, and dog-like devotion,
						Maine Coons are affectionate and playful. Their thick fur needs
						brushing, but they're worth every moment. High-protein meals and
						lots of interactive fun make them purr with happiness.
					</p>

					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">Ragdoll:</strong> True to their
						name, Ragdolls flop into your arms like soft toys. Sweet, patient,
						and loving, they adore being carried and cuddled. Their medium fur
						is silky and easy to maintain. Gentle with children and great with
						other pets, they're the ultimate family cats. Feed them well, love
						them deeply, and they'll reward you with endless purrs and
						affection.
					</p>

					{/* Conclusion */}
					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
							Whether it's a wagging tail or a purring heart, every pet brings
							endless love, laughter, and lessons in loyalty. Groom them, feed
							them, play them with them, and most importantly—love them. They'll
							make every day a little brighter and every heart a little softer.
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

export default BlogArticle1;
