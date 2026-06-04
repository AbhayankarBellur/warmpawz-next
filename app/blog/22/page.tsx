"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle22 = () => {
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
				<AppLink
					href="/blog"
					className="flex items-center gap-2 text-gray-600 hover:text-[#f69052] transition-colors mb-8 group"
				>
					<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
					<span className="font-baloo">Back to Blog</span>
				</AppLink>

				<header className="mb-12 text-center">
					<p className="text-sm sm:text-base font-semibold text-[#F69052] uppercase tracking-wide mb-3 font-baloo">
						Warmpawz Pawints Program
					</p>
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-baloo">
						Loyalty, Reimagined for Pet Care
					</h1>
					<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 font-baloo">
						A loyalty and rewards program designed for pet parents who believe
						that consistent care deserves consistent recognition.
					</p>
					<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
				</header>

				<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
					<Image
						src="/images/blog-22.png"
						alt="Warmpawz Pawints Program — Loyalty, Reimagined for Pet Care"
						fill
						className="object-cover"
						style={{ objectPosition: "center 30%" }}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
					/>
				</div>

				<div className="prose prose-lg max-w-none font-baloo">
					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-4">
						Program Overview
					</h2>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Pawints is the loyalty currency of the Warmpawz ecosystem — a
						rewards program designed not to incentivise spending, but to recognise
						the ongoing effort of being a thoughtful, engaged pet parent.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						From the moment you join Warmpawz, every meaningful action you take
						contributes to your Pawints balance. Whether you complete your pet's
						profile, book a wellness consultation, write a review, or refer a
						friend, the programme acknowledges your engagement and returns real
						value.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Pawints are simple to earn, easy to redeem, and designed to grow
						naturally alongside your pet care journey. There are no complicated
						tiers, no arbitrary expiry cliffs, and no hidden conditions. What you
						earn, you keep, and what you keep, you spend on the very care that
						earned them.
					</p>

					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Why Pawints Exist
					</h2>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Pet care is not a transaction. It is a habit. A relationship. A
						responsibility that renews every week, every vaccination cycle, every
						grooming visit.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">
							Most loyalty programmes reward spending. Pawints rewards
							consistency.
						</strong>
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						We built Pawints because we believe that a pet parent who books a
						monthly grooming session deserves more than a receipt. And a pet
						parent who takes the time to complete their pet's health profile, book
						follow-up consultations, and engage with their care providers deserves
						to be recognised for that consistency.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						The programme is also designed to lower the friction of trying new
						services on the platform. When your Pawints balance makes a nutrition
						consultation more accessible, you are more likely to consider a service
						you might otherwise have skipped. That is better outcomes for your pet,
						and a stronger relationship between you and your care network.
					</p>

					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						What Are Pawints?
					</h2>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Pawints are Warmpawz's internal reward currency. They are earned
						through specific actions on the platform and redeemed against
						bookings, products, and services across the entire Warmpawz ecosystem.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						<strong className="text-[#F69052]">1 Pawint = ₹1</strong> — redeemable
						across all services and products on the Warmpawz platform. There are no
						conversion rates, no complicated calculations, and no
						points-to-voucher mechanics. Your Pawints balance reflects a direct
						rupee equivalent, applied cleanly at checkout against any eligible
						transaction.
					</p>

					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						How You Earn Pawints
					</h2>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Earning is structured around moments that matter in a pet parent's
						journey. The actions that earn the most are the ones that build the
						most value — for your pet, for your care network, and for the wider
						community.
					</p>

					<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
						Onboarding &amp; Profile Completion
					</h3>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Your relationship with Warmpawz begins here. A complete profile is the
						foundation of personalised care recommendations and provider matching.
					</p>
					<div className="overflow-x-auto mb-6">
						<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden min-w-[280px]">
							<thead>
								<tr className="bg-[#F69052] text-white">
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Action
									</th>
									<th className="p-3 text-left font-bold">Reward</th>
								</tr>
							</thead>
							<tbody className="text-sm sm:text-base">
								<tr className="border-b border-[#F5A855] bg-white hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">Sign up</td>
									<td className="p-3 font-semibold">50 Pawints</td>
								</tr>
								<tr className="border-b border-[#F5A855] bg-[#FFF2E6]/50 hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">
										Complete pet profile
									</td>
									<td className="p-3 font-semibold">75 Pawints</td>
								</tr>
								<tr className="bg-white hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">
										Update health records
									</td>
									<td className="p-3 font-semibold">100 Pawints</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 text-justify">
						Profile includes:
					</p>
					<ul className="list-disc pl-6 mb-10 text-base sm:text-lg text-gray-700 space-y-2">
						<li>Name, breed, age, weight</li>
						<li>Medical history and vaccination records</li>
						<li>Dietary notes and emergency contacts</li>
						<li>Veterinary preferences</li>
					</ul>

					<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
						Platform Engagement
					</h3>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Every booking you make on the platform signals an active, engaged pet
						parent. The programme recognises your commitment to consistent care.
						Applicable for every service listed on the platform.
					</p>
					<p className="text-base sm:text-lg font-semibold text-[#F69052] mb-3">
						Service Bookings
					</p>
					<div className="overflow-x-auto mb-6">
						<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden min-w-[280px]">
							<thead>
								<tr className="bg-[#F69052] text-white">
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Action
									</th>
									<th className="p-3 text-left font-bold">Reward</th>
								</tr>
							</thead>
							<tbody className="text-sm sm:text-base">
								<tr className="border-b border-[#F5A855] bg-white hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">First booking</td>
									<td className="p-3">50 Pawints per ₹1000 spent</td>
								</tr>
								<tr className="bg-[#FFF2E6]/50 hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">
										Subsequent bookings
									</td>
									<td className="p-3">30 Pawints per ₹1000 spent</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-base sm:text-lg font-semibold text-[#F69052] mb-3">
						Product Purchases
					</p>
					<div className="overflow-x-auto mb-4">
						<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden min-w-[280px]">
							<thead>
								<tr className="bg-[#F69052] text-white">
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Action
									</th>
									<th className="p-3 text-left font-bold">Reward</th>
								</tr>
							</thead>
							<tbody className="text-sm sm:text-base">
								<tr className="border-b border-[#F5A855] bg-white hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">First purchase</td>
									<td className="p-3">50 Pawints per ₹1000 spent</td>
								</tr>
								<tr className="bg-[#FFF2E6]/50 hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">
										Subsequent purchases
									</td>
									<td className="p-3">75 Pawints per ₹1000 spent</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10 italic font-semibold bg-[#F69052]/10 p-4 rounded-lg border-l-4 border-[#F69052]">
						Bonus: Every 3rd purchase earns 2× Pawints.
					</p>

					<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
						Reviews &amp; Verified Feedback
					</h3>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 text-justify">
						Honest, detailed reviews improve care quality for every pet parent on
						the platform.
					</p>
					<div className="overflow-x-auto mb-4">
						<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden min-w-[280px]">
							<thead>
								<tr className="bg-[#F69052] text-white">
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Action
									</th>
									<th className="p-3 text-left font-bold">Reward</th>
								</tr>
							</thead>
							<tbody className="text-sm sm:text-base">
								<tr className="bg-white hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">
										Verified post-service review
									</td>
									<td className="p-3 font-semibold">75 Pawints</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10 italic font-semibold bg-[#F69052]/10 p-4 rounded-lg border-l-4 border-[#F69052]">
						Bonus: Every 3rd review earns double Pawints (monthly cap applies).
					</p>

					<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
						Referrals
					</h3>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 text-justify">
						Every pet parent or service provider you bring to Warmpawz extends
						the care community.
					</p>
					<div className="overflow-x-auto mb-4">
						<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden min-w-[280px]">
							<thead>
								<tr className="bg-[#F69052] text-white">
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Action
									</th>
									<th className="p-3 text-left font-bold">Reward</th>
								</tr>
							</thead>
							<tbody className="text-sm sm:text-base">
								<tr className="bg-white hover:bg-[#FFF2E6]">
									<td className="p-3 border-r border-[#F5A855]">
										Successful referral
									</td>
									<td className="p-3 font-semibold">100 Pawints</td>
								</tr>
							</tbody>
						</table>
					</div>
					<ul className="list-disc pl-6 mb-10 text-base sm:text-lg text-gray-700 space-y-2">
						<li>Referred user must complete their first booking.</li>
						<li>5th referral earns 3× loyalty points.</li>
						<li>Referral rewards capped at 5 referrals.</li>
					</ul>

					<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
						Milestones &amp; Long-Term Engagement
					</h3>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Designed to reward consistency, not just transactions. The longer and
						more actively you engage with Warmpawz, the more you earn.
					</p>

					<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 mt-12">
						Quick Reference Reward Table
					</h2>
					<div className="overflow-x-auto mb-10">
						<table className="w-full border-2 border-[#F5A855] rounded-lg overflow-hidden min-w-[600px]">
							<thead>
								<tr className="bg-[#F69052] text-white">
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Category
									</th>
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Action
									</th>
									<th className="p-3 text-left font-bold border-r border-[#FAD3B5]">
										Reward
									</th>
									<th className="p-3 text-left font-bold">Conditions</th>
								</tr>
							</thead>
							<tbody className="text-xs sm:text-sm">
								{[
									["Onboarding", "Sign up", "50 Pawints", "One-time"],
									["Profile", "Complete profile", "75 Pawints", "One-time"],
									["Profile", "Update records", "100 Pawints", "Per update"],
									[
										"Purchase",
										"First purchase",
										"50 / ₹1000 spent",
										"First transaction",
									],
									[
										"Purchase",
										"Subsequent purchases",
										"75 / ₹1000 spent",
										"Every 3rd purchase earns 2× Pawints",
									],
									[
										"Purchase",
										"Medicines",
										"30 / ₹1000 spent",
										"All purchases",
									],
									[
										"Services",
										"All services",
										"30 / ₹1000 spent",
										"Standard",
									],
									[
										"Insurance",
										"Pet insurance",
										"100 / ₹1000 spent",
										"High-value",
									],
									[
										"Referral",
										"Refer pet parents / providers",
										"100 Pawints",
										"5th referral gets 3×",
									],
									[
										"Engagement",
										"Review",
										"75 Pawints",
										"3rd review gets 2× (capped)",
									],
									[
										"Milestone",
										"Birthday",
										"25% off coupon",
										"Valid 30 days",
									],
								].map((row, i) => (
									<tr
										key={row[1]}
										className={`border-b border-[#F5A855] ${i % 2 === 0 ? "bg-white" : "bg-[#FFF2E6]/50"} hover:bg-[#FFF2E6]`}
									>
										{row.map((cell, j) => (
											<td
												key={j}
												className={`p-3 ${j < 3 ? "border-r border-[#F5A855]" : ""} ${j === 0 ? "font-semibold" : ""}`}
											>
												{cell}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						How Redemption Works
					</h2>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Redemption is intentionally straightforward. Pawints work like a wallet
						balance — visible, accurate, and instantly applicable.
					</p>
					<ol className="list-decimal pl-6 mb-6 text-base sm:text-lg text-gray-700 space-y-2">
						<li>View available Pawints balance.</li>
						<li>Choose how many Pawints to redeem.</li>
						<li>Equivalent rupee value is deducted from the bill.</li>
						<li>Pay remaining amount using your preferred payment method.</li>
					</ol>
					<h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
						Redemption Rules
					</h3>
					<ul className="list-disc pl-6 mb-6 text-base sm:text-lg text-gray-700 space-y-2">
						<li>
							Minimum redemption threshold:{" "}
							<strong className="text-[#F69052]">399 Pawints</strong>
						</li>
						<li>
							Redeemable across veterinary consultations, grooming, training,
							nutrition services, and product purchases
						</li>
					</ul>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						A Pawint earned from a grooming review can be redeemed against a
						veterinary consultation. The ecosystem is unified.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						<strong className="text-[#F69052]">Important:</strong> Pawints cannot
						be transferred, cannot be converted to cash, and cannot be applied
						retroactively.
					</p>

					<h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 mt-12">
						The Pawints Journey
					</h2>
					<div className="bg-[#FFF2E6] border-2 border-[#F5A855] rounded-2xl p-6 sm:p-8 mb-10 text-center">
						<p className="text-base sm:text-lg font-semibold text-gray-800 font-baloo">
							Engage with the platform
						</p>
						<p className="text-[#F69052] text-2xl my-2">↓</p>
						<p className="text-base sm:text-lg font-semibold text-gray-800 font-baloo">
							Earn Pawints
						</p>
						<p className="text-[#F69052] text-2xl my-2">↓</p>
						<p className="text-base sm:text-lg font-semibold text-gray-800 font-baloo">
							Ensure consistent care
						</p>
						<p className="text-[#F69052] text-2xl my-2">↓</p>
						<p className="text-base sm:text-lg font-semibold text-gray-800 font-baloo">
							Repeat, deepen, grow
						</p>
					</div>

					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						The Bigger Picture
					</h2>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						Pawints are not a promotional mechanic. They are a philosophical
						statement about how pet care relationships should be valued. Most
						loyalty programmes operate on a logic of extraction. Pawints operate on
						a logic of alignment.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
						The more you invest in your pet's care, the more the programme invests
						in you. The milestone structure rewards behaviours associated with
						better long-term pet health outcomes: consistent vaccination, regular
						check-ins, preventive care plans, and sustained engagement with a care
						network.
					</p>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Over time, a fully engaged pet parent can meaningfully offset the cost
						of care through steady accumulation of rewards — not through one large
						prize, but through consistent recognition for responsible care.
					</p>

					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						Key Terms &amp; Conditions
					</h2>

					<h3 className="text-xl sm:text-2xl font-bold text-[#F69052] mb-3">
						Earning
					</h3>
					<ul className="list-disc pl-6 mb-8 text-base sm:text-lg text-gray-700 space-y-2">
						<li>
							Pawints are credited after successful completion of eligible actions.
						</li>
						<li>
							Booking-based Pawints are credited after service completion and
							verification.
						</li>
						<li>
							Review Pawints require submission within 14 days of service
							completion.
						</li>
						<li>
							Referral Pawints are credited after the referred user completes their
							first booking.
						</li>
						<li>
							Milestone Pawints are automatically credited after qualification.
						</li>
					</ul>

					<h3 className="text-xl sm:text-2xl font-bold text-[#F69052] mb-3">
						Redemption
					</h3>
					<ul className="list-disc pl-6 mb-8 text-base sm:text-lg text-gray-700 space-y-2">
						<li>Redeemable against any service or product on the platform.</li>
						<li>No minimum balance required to begin redeeming.</li>
						<li>Partial redemption allowed.</li>
						<li>Cannot be applied retroactively.</li>
					</ul>

					<h3 className="text-xl sm:text-2xl font-bold text-[#F69052] mb-3">
						Validity
					</h3>
					<ul className="list-disc pl-6 mb-8 text-base sm:text-lg text-gray-700 space-y-2">
						<li>Pawints do not expire while the account remains active.</li>
						<li>
							Account becomes inactive after 12 consecutive months without login
							or booking.
						</li>
						<li>
							Warmpawz may retire dormant balances with 30 days prior notice.
						</li>
					</ul>

					<h3 className="text-xl sm:text-2xl font-bold text-[#F69052] mb-3">
						General
					</h3>
					<ul className="list-disc pl-6 mb-10 text-base sm:text-lg text-gray-700 space-y-2">
						<li>No cash value. Cannot be sold, transferred, or gifted.</li>
						<li>
							Cannot be combined with promotional codes unless specified.
						</li>
						<li>
							Fraudulent earning activity may result in forfeiture and account
							review.
						</li>
						<li>
							Warmpawz may modify earning structures with 30 days notice. Existing
							balances will not be affected.
						</li>
					</ul>

					<h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 mt-12">
						A Note on Trust
					</h2>
					<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 text-justify">
						Pawints are built on the belief that the relationship between a pet
						parent and their care network should be reinforced and supported.
						Every Pawint earned represents a decision to invest in a pet's
						wellbeing. We believe that deserves recognition.
					</p>

					<div className="mt-12 pt-6 border-t-2 border-[#F5A855]">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center font-semibold mb-4">
							Designed to reward consistency, not just transactions.
						</p>
						<p className="text-lg sm:text-xl text-[#F69052] leading-relaxed text-center font-bold font-baloo">
							Your pet gives you everything. Warmpawz gives you a little back.
						</p>
					</div>
				</div>

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

export default BlogArticle22;
