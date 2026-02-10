"use client";

import Marquee from "react-fast-marquee";

interface Testimonial {
	id: number;
	name: string;
	role: string;
	content: string;
	rating: number;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Pet Parent",
		content: "Warmpawz made finding a trusted dog walker so easy! The verification process gave me peace of mind.",
		rating: 5,
	},
	{
		id: 2,
		name: "Mike Chen",
		role: "Service Provider",
		content: "As a pet groomer, Warmpawz helped me connect with more clients and grow my business significantly.",
		rating: 5,
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		role: "Pet Parent",
		content: "The platform is incredibly user-friendly. I found the perfect vet for my cat within minutes!",
		rating: 5,
	},
	{
		id: 4,
		name: "David Park",
		role: "Service Provider",
		content: "Warmpawz streamlined my booking process and helped me reach pet parents who truly need my services.",
		rating: 5,
	},
	{
		id: 5,
		name: "Jessica Williams",
		role: "Pet Parent",
		content: "From adoption guidance to everyday care, Warmpawz has been my go-to platform. Highly recommend!",
		rating: 5,
	},
	{
		id: 6,
		name: "Alex Thompson",
		role: "Service Provider",
		content: "The transparency and trust built into the platform makes it easy to showcase my expertise and credentials.",
		rating: 5,
	},
];

const Testimonials = () => {
	return (
		<section className="w-full bg-white/30 backdrop-blur-sm py-16 sm:py-20 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-3">
					What Our Community Says
				</h2>
				<p className="text-center text-gray-600 text-base sm:text-lg">
					Join thousands of happy pet parents and service providers
				</p>
			</div>

			<Marquee
				gradient={false}
				speed={40}
				pauseOnHover={true}
				className="overflow-hidden"
			>
				{testimonials.map((testimonial) => (
					<div
						key={testimonial.id}
						className="mx-4 bg-white rounded-2xl p-6 shadow-lg border-2 border-[#F5A855] w-80 sm:w-96 shrink-0"
					>
						{/* Rating Stars */}
						<div className="flex gap-1 mb-4">
							{[...Array(testimonial.rating)].map((_, i) => (
								<svg
									key={i}
									className="w-5 h-5 fill-[#F69052]"
									viewBox="0 0 20 20"
								>
									<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
								</svg>
							))}
						</div>

						{/* Content */}
						<p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed font-medium">
							&ldquo;{testimonial.content}&rdquo;
						</p>

						{/* Author */}
						<div className="border-t border-gray-200 pt-4">
							<h4 className="font-bold text-gray-800 text-base">
								{testimonial.name}
							</h4>
							<p className="text-sm text-gray-500">{testimonial.role}</p>
						</div>
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default Testimonials;
