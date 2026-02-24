"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle5 = () => {
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
							Pet Vaccinations in India
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-5.png"
							alt="Pet Vaccinations in India"
							fill
							className="object-cover"
							style={{ objectPosition: "center 30%" }}
						/>
					</div>

					{/* Article Content */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Pet vaccinations in India are a quiet kind of love. Not flashy,
							not Instagrammable — but{" "}
							<strong className="text-[#F69052]">
								steady, responsible, and deeply protective
							</strong>
							.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							That first vet visit usually comes with a mix of nerves and hope —
							a tiny paw on the table, wide eyes looking up at you as if to ask,
							"You've got me, right?" And you do.{" "}
							<strong className="text-[#F69052]">
								Vaccines are your promise kept
							</strong>
							.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							In a country like ours — warm, bustling, beautifully chaotic —
							diseases travel fast.{" "}
							<strong className="text-[#F69052]">
								Parvo, distemper, leptospirosis and rabies
							</strong>{" "}
							don't care how loved a pet is. What they do respect is prevention.
							A few timely injections can save months of heartbreak, hospital
							visits, and helpless waiting.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							And cats — especially the ones who pretend they don't need us —
							need this protection just as much.{" "}
							<strong className="text-[#F69052]">
								Feline panleukopenia, calicivirus, herpesvirus and rabies
							</strong>{" "}
							are silent, serious threats. Indoor royalty or balcony explorers,
							vaccination keeps their independence intact.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							There may be mild fever, a quiet day, extra cuddles demanded — or
							dramatic sulking. That's normal. What follows is{" "}
							<strong className="text-[#F69052]">
								freedom: to play, to explore, to nap in peace, to grow old with
								curiosity intact
							</strong>
							.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							Vaccinating your pet isn't about fear. It's about{" "}
							<strong className="text-[#F69052]">foresight</strong>. About
							choosing care before crisis. About saying, "I plan to keep you
							safe for as long as I can."
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
							Because love isn't just treats and toys.{" "}
							<strong className="text-[#F69052]">
								Sometimes, love is a small needle, a steady hand, and a lifetime
								of wagging tails and grateful purrs.
							</strong>
						</p>

						{/* Puppy Vaccination Schedule */}
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 mt-12">
							Puppy Vaccination Schedule (India – All Breeds)
						</h2>

						<div className="overflow-x-auto mb-8">
							<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden">
								<thead>
									<tr className="bg-[#F69052] text-white">
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Puppy Age (Days)
										</th>
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Vaccine
										</th>
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Booster
										</th>
										<th className="p-3 text-left font-bold">
											Immunity Against
										</th>
									</tr>
								</thead>
								<tbody className="text-sm sm:text-base">
									<tr className="border-b border-[#F5A855] bg-white hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											30
										</td>
										<td className="p-3 border-r border-[#F5A855]">Puppy DP</td>
										<td className="p-3 border-r border-[#F5A855]">-</td>
										<td className="p-3">Canine distemper, Parvo</td>
									</tr>
									<tr className="border-b border-[#F5A855] bg-[#FFF2E6]/50 hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											45
										</td>
										<td className="p-3 border-r border-[#F5A855]">DHPPiL</td>
										<td className="p-3 border-r border-[#F5A855]">-</td>
										<td className="p-3">
											Distemper, Parvo, Hepatitis, Parainfluenza, Leptospirosis
										</td>
									</tr>
									<tr className="border-b border-[#F5A855] bg-white hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											60
										</td>
										<td className="p-3 border-r border-[#F5A855]">
											Canine Corona
										</td>
										<td className="p-3 border-r border-[#F5A855]">-</td>
										<td className="p-3">Coronavirus diseases in puppies</td>
									</tr>
									<tr className="border-b border-[#F5A855] bg-[#FFF2E6]/50 hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											75
										</td>
										<td className="p-3 border-r border-[#F5A855]">-</td>
										<td className="p-3 border-r border-[#F5A855]">DHPPiL</td>
										<td className="p-3">
											Distemper, Parvo, Hepatitis, Parainfluenza, Leptospirosis
										</td>
									</tr>
									<tr className="border-b border-[#F5A855] bg-white hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											90
										</td>
										<td className="p-3 border-r border-[#F5A855]">
											Anti-Rabies
										</td>
										<td className="p-3 border-r border-[#F5A855]">
											Canine Corona
										</td>
										<td className="p-3">Rabies, Canine Corona</td>
									</tr>
									<tr className="border-b border-[#F5A855] bg-[#FFF2E6]/50 hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											105
										</td>
										<td className="p-3 border-r border-[#F5A855]">-</td>
										<td className="p-3 border-r border-[#F5A855]">DHPPiL</td>
										<td className="p-3">
											Distemper, Parvo, Hepatitis, Parainfluenza, Leptospirosis
										</td>
									</tr>
									<tr className="bg-white hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											120
										</td>
										<td className="p-3 border-r border-[#F5A855]">
											Kennel Cough
										</td>
										<td className="p-3 border-r border-[#F5A855]">
											Anti-Rabies
										</td>
										<td className="p-3">Bordetella (Kennel Cough), Rabies</td>
									</tr>
								</tbody>
							</table>
						</div>

						<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10 text-center italic font-semibold bg-[#F69052]/10 p-4 rounded-lg border-l-4 border-[#F69052]">
							All repeat vaccines (boosters) are essential. One vaccine is never
							enough to build lasting immunity.
						</p>

						{/* Kitten Vaccination Schedule */}
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 mt-12">
							Kitten Vaccination Schedule (India)
						</h2>

						<div className="overflow-x-auto mb-8">
							<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden">
								<thead>
									<tr className="bg-[#F69052] text-white">
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Age of Kitten (Days)
										</th>
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Vaccine
										</th>
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Booster
										</th>
										<th className="p-3 text-left font-bold">
											Immunity Against
										</th>
									</tr>
								</thead>
								<tbody className="text-sm sm:text-base">
									<tr className="border-b border-[#F5A855] bg-white hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											60
										</td>
										<td className="p-3 border-r border-[#F5A855]">CRP</td>
										<td className="p-3 border-r border-[#F5A855]">-</td>
										<td className="p-3">
											Feline Calicivirus, Rhinotracheitis (Feline herpesvirus),
											Panleukopenia
										</td>
									</tr>
									<tr className="border-b border-[#F5A855] bg-[#FFF2E6]/50 hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											90
										</td>
										<td className="p-3 border-r border-[#F5A855]">
											Anti-Rabies
										</td>
										<td className="p-3 border-r border-[#F5A855]">CRP</td>
										<td className="p-3">
											Rabies, Feline Calicivirus, Rhinotracheitis, Panleukopenia
										</td>
									</tr>
									<tr className="bg-white hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											120
										</td>
										<td className="p-3 border-r border-[#F5A855]">-</td>
										<td className="p-3 border-r border-[#F5A855]">
											CRP and Anti-Rabies
										</td>
										<td className="p-3">
											Rabies, Feline Calicivirus, Rhinotracheitis, Panleukopenia
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10 text-center italic font-semibold bg-[#F69052]/10 p-4 rounded-lg border-l-4 border-[#F69052]">
							Note: Wait at least 21 days after the final kitten vaccination
							before allowing socialisation.
						</p>

						{/* Adult Cat Vaccination Schedule */}
						<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 mt-12">
							Adult Cat Vaccination Schedule
						</h2>

						<div className="overflow-x-auto mb-8">
							<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden">
								<thead>
									<tr className="bg-[#F69052] text-white">
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Timeline
										</th>
										<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
											Vaccine
										</th>
										<th className="p-3 text-left font-bold">
											Boosts Antibodies Against
										</th>
									</tr>
								</thead>
								<tbody className="text-sm sm:text-base">
									<tr className="bg-white hover:bg-[#FFF2E6]">
										<td className="p-3 border-r border-[#F5A855] font-semibold">
											1 year since last vaccine
										</td>
										<td className="p-3 border-r border-[#F5A855]">
											CRP and Anti-Rabies
										</td>
										<td className="p-3">
											Feline Calicivirus, Rhinotracheitis (Feline herpesvirus),
											Panleukopenia, Rabies
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10 text-center italic font-semibold bg-[#F69052]/10 p-4 rounded-lg border-l-4 border-[#F69052]">
							Never skip your cat's annual booster shots. Vaccination remains
							the only dependable protection against these diseases.
						</p>

						{/* Closing Message */}
						<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
							<p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-center font-semibold">
								Protect today. Cherish tomorrow. 💙
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

export default BlogArticle5;
