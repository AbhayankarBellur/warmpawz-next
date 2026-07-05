"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "./footer/ContactModal";
import SocialMediaLinks from "./footer/SocialMediaLinks";
import { AppStoreBadge, PlayStoreBadge } from "./footer/AppDownloadLinks";
import BrandSection from "./footer/BrandSection";
import LegalBar from "./footer/LegalBar";
import { AppLink } from "../shared/AppLink";
import { APP_LINKS } from "@/config/constants";

const Footer = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const pathname = usePathname();
	const appLinks =
		pathname === "/vendor-onboarding" ? APP_LINKS.vendor : APP_LINKS.customer;

	return (
		<>
			<footer className="bg-white pt-8 pb-4 px-4 sm:px-6 lg:px-8 relative z-20">
				<div className="max-w-7xl mx-auto">
					{/* Mobile Layout - Compact */}
					<div className="lg:hidden">
						<div className="flex items-start justify-between mb-6">
							{/* Left: About Us + Social + App Store */}
							<div className="flex-1 flex flex-col">
								<AppLink
									href="/about"
									className="text-base font-semibold text-gray-900 hover:text-[#f69052] transition-colors text-left block mb-3"
								>
									About Us
								</AppLink>
								<SocialMediaLinks />
								<AppStoreBadge href={appLinks.appStore} align="left" />
							</div>

							{/* Center: Contact Us Button + Brand Section below it */}
							<div className="shrink-0 mx-4 flex flex-col items-center">
								<button
									onClick={() => setIsModalOpen(true)}
									className="bg-[#f69052] text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:ring-offset-2 shadow-sm hover:shadow-md whitespace-nowrap mb-4"
								>
									Contact Us
								</button>
								<BrandSection />
							</div>

							{/* Right: Policies + Careers + Play Store */}
							<div className="flex-1 flex flex-col items-end">
								<AppLink
									href="/policies"
									className="text-base font-semibold text-gray-900 hover:text-[#f69052] transition-colors text-right block mb-3"
								>
									Policies
								</AppLink>
								<AppLink
									href="/careers"
									className="text-base font-semibold text-gray-900 hover:text-[#f69052] transition-colors text-right block"
								>
									Careers
								</AppLink>
								<PlayStoreBadge href={appLinks.playStore} align="right" />
							</div>
						</div>
					</div>

					{/* Desktop Layout */}
					<div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-12 pb-4">
						<BrandSection />

						<div className="col-span-1 flex flex-col items-start">
							<AppLink
								href="/policies"
								className="text-base font-semibold text-gray-900 hover:text-[#f69052] transition-colors text-left block mb-6"
							>
								Policies
							</AppLink>

							<AppLink
								href="/careers"
								className="text-base font-semibold text-gray-900 hover:text-[#f69052] transition-colors text-left block"
							>
								Careers
							</AppLink>
							<PlayStoreBadge href={appLinks.playStore} align="left" />
						</div>

						<div className="col-span-1 flex flex-col items-start">
							<AppLink
								href="/about"
								className="text-base font-semibold text-gray-900 hover:text-[#f69052] transition-colors text-left block mb-4"
							>
								About Us
							</AppLink>
							<SocialMediaLinks />
							<AppStoreBadge href={appLinks.appStore} align="left" />
						</div>

						<div className="col-span-1 flex flex-col items-end">
							<div className="w-full lg:w-auto flex flex-col items-end">
								<button
									onClick={() => setIsModalOpen(true)}
									className="bg-[#f69052] text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-[#E09642] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f69052] focus:ring-offset-2 shadow-sm hover:shadow-md mb-3"
								>
									Contact Us
								</button>
								<p className="text-sm text-gray-600 text-right leading-relaxed">
									Have questions or need support? We&apos;re here to help you
									and your furry friends.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>

			<LegalBar />
		</>
	);
};

export default Footer;
