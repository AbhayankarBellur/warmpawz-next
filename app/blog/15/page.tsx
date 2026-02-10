"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import Image from "next/image";

const BlogArticle15 = () => {
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
						<p className="text-sm text-muted-foreground mb-4">
							January 20, 2026
						</p>
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
							Well-Known Insurance Companies Offering Pet Policies in India
						</h1>
						<div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
					</header>

					{/* Featured Image */}
					<div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
						<Image
							src="/images/blog-15.png"
							alt="Well-Known Insurance Companies Offering Pet Policies in India"
							fill
							className="object-cover"
							style={{ objectPosition: "center 100%" }}
						/>
					</div>

					{/* Introduction */}
					<div className="prose prose-lg max-w-none font-baloo">
						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Bajaj Allianz General Insurance
							</strong>{" "}
							– One of the more popular and established providers, offering dog
							insurance that can include hospitalisation, surgery, third-party
							liability and optional add-ons like OPD and vaccination coverage.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								HDFC ERGO / Vetic Shield Pet Insurance
							</strong>{" "}
							– Offers coverage for accidents, illnesses, surgeries and vet
							costs. Some policies can cover multiple pets under one plan,
							though user experience varies so read reviews before you buy.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Future Generali India Insurance
							</strong>{" "}
							– A long-standing insurer in India with dog health plans focusing
							on essential accident and illness protection.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								Digit Insurance (with Vetina)
							</strong>{" "}
							– Digit's pet plan is popular for a more digital, easy-to-manage
							experience and options for both dogs and cats.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">New India Assurance</strong> –
							A trusted public sector insurer that offers dog insurance covering
							accident, disease and liability costs.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">Oriental Insurance</strong> –
							Another well-known public sector name with pet insurance that
							includes basic medical and hospital coverage.
						</p>

						<p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
							<strong className="text-[#F69052]">
								ICICI Lombard General Insurance
							</strong>{" "}
							– Provides pet insurance with flexible coverage options for dogs.
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

export default BlogArticle15;
