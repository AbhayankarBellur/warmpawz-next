"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Service, services } from "@/config/constants";

const ServicesPhoneFrame = () => {
	const [selectedService, setSelectedService] = useState<Service | null>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handleServiceClick = (service: Service) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedService(service);
			setIsTransitioning(false);
		}, 150);
	};

	const handleBack = () => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedService(null);
			setIsTransitioning(false);
		}, 150);
	};

	return (
		<div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
			{/* Mobile Phone Frame */}
			<div className="relative w-70 sm:w-[320px] md:w-90 aspect-[9/19.5] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
				{/* Phone inner bezel */}
				<div
					className="relative rounded-[2rem] overflow-hidden w-full h-full"
					style={{
						background:
							"linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)",
					}}
				>
					{/* Dynamic Island / Notch */}
					<div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-20" />

					{/* Content Area */}
					<div className="relative w-full h-full pt-8 px-3">
						<div
							className={`transition-opacity duration-300 h-full ${
								isTransitioning ? "opacity-0" : "opacity-100"
							}`}
						>
							{!selectedService ? (
								// Grid View
								<div className="h-full flex flex-col pb-4 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
									<h2 className="text-center text-lg font-bold text-[#1F2937] mb-4">
										Our Services
									</h2>
									<div className="grid grid-cols-2 gap-3 auto-rows-min">
										{services.map((service) => (
											<button
												key={service.id}
												onClick={() => handleServiceClick(service)}
												className="
                          bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 
                          transition-all duration-200 
                          hover:-translate-y-0.5
						  cursor-pointer
                          hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                        "
											>
											<div className="relative w-16 h-16">
												<Image
													src={service.image}
													alt={service.name}
													fill
													sizes="64px"
													className="object-contain"
													priority
												/>
											</div>
												<span className="text-sm font-semibold text-[#1F2937]">
													{service.name}
												</span>
											</button>
										))}
									</div>
								</div>
							) : (
								// Expanded Service View
								<div className="h-full flex flex-col relative pb-4">
									{/* Back Button */}
									<button
										onClick={handleBack}
										className="absolute top-2 left-1 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:bg-white transition-colors cursor-pointer"
										aria-label="Go back to services"
									>
										<ArrowLeft className="w-5 h-5 text-[#1F2937]" />
									</button>

									{/* Service Icon at Top Center */}
									<div className="flex justify-center items-start pt-0 mb-2">
									<div className="relative w-20 h-20">
										<Image
											src={selectedService.image}
											alt={selectedService.name}
											fill
											sizes="80px"
											className="object-contain"
											priority
										/>
									</div>
								</div>

								{/* Service Name Below Image */}
								<h3 className="text-xl font-bold text-[#1F2937] text-center mb-4">
									{selectedService.name}
								</h3>

									{/* Two Content Boxes or Single Box based on data */}
									<div className="flex-1 flex flex-col justify-center px-4 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-2.5">
										{selectedService.forParents && selectedService.forProviders ? (
											<>
												{/* For Pet Parents Box */}
												<article className="bg-white rounded-2xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
													<h4 className="text-lg font-bold text-[#1F2937] mb-3 text-center">
														For Pet Parents
													</h4>
													<p className="text-[#1F2937] text-center text-base leading-relaxed">
														{selectedService.forParents}
													</p>
												</article>

												{/* For Providers Box */}
												<article className="bg-white rounded-2xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
													<h4 className="text-lg font-bold text-[#1F2937] mb-3 text-center">
														{selectedService.providerLabel || "For Service Providers"}
													</h4>
													<p className="text-[#1F2937] text-center text-base leading-relaxed">
														{selectedService.forProviders}
													</p>
												</article>
											</>
										) : (
											// Fallback to original single box layout
											<div className="bg-white rounded-2xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
												<h3 className="text-xl font-bold text-[#1F2937] mb-3 text-center">
													{selectedService.name}
												</h3>
												<p className="text-[#1F2937] text-center text-sm leading-relaxed">
													{selectedService.description}
												</p>
											</div>
										)}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Side buttons */}
				<div className="absolute top-20 -left-1 w-1 h-8 bg-gray-900 rounded-l-sm" />
				<div className="absolute top-32 -left-1 w-1 h-12 bg-gray-900 rounded-l-sm" />
				<div className="absolute top-32 -right-1 w-1 h-16 bg-gray-900 rounded-r-sm" />
			</div>
		</div>
	);
};

export default ServicesPhoneFrame;
