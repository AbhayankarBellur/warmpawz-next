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
		name: "Priya Malhotra",
		role: "Pet Parent",
		content: "If I could book my dog's groomer in one click, I'd be set. This will save me so many phone calls!",
		rating: 5,
	},
	{
		id: 2,
		name: "Arjun Rao",
		role: "Pet Parent",
		content: "With this, I'll finally get a trusted trainer without endless recommendations. Can't come soon enough!",
		rating: 4.5,
	},
	{
		id: 3,
		name: "Kavita Iyer",
		role: "Pet Parent",
		content: "I'll finally stop stressing about last-minute boarding—just a tap, and done!",
		rating: 5,
	},
	{
		id: 4,
		name: "Nikhil Sharma",
		role: "Pet Parent",
		content: "If I can find a vet near me instantly, I'm signing up day one!",
		rating: 5,
	},
	{
		id: 5,
		name: "Rhea Menon",
		role: "Pet Parent",
		content: "Adoption to sunset care—everything in one place? That's a dream for pet parents!",
		rating: 4.5,
	},
	{
		id: 6,
		name: "Suresh Verma",
		role: "Pet Parent",
		content: "This will help me schedule home visits for my pup without chasing calls. Perfect!",
		rating: 5,
	},
	{
		id: 7,
		name: "Ananya Joshi",
		role: "Service Provider",
		content: "I'll finally get clients who need tele-consults—no more missed opportunities!",
		rating: 5,
	},
	{
		id: 8,
		name: "Rahul Deshmukh",
		role: "Service Provider",
		content: "It'll put my grooming services on the map—easy for pet parents to book me!",
		rating: 4.5,
	},
	{
		id: 9,
		name: "Meera Kapoor",
		role: "Service Provider",
		content: "I'll have my entire training schedule online—no more back-and-forth with clients!",
		rating: 5,
	},
	{
		id: 10,
		name: "Varun Gupta",
		role: "Service Provider",
		content: "A single place to offer my adoption services? This will connect me to the right families!",
		rating: 5,
	},
];

const Testimonials = () => {
	return (
		<section className="w-full bg-[#C8D5C8] py-16 sm:py-20 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#3A2A26] mb-3">
					What Our Community Says
				</h2>
				<p className="text-center text-[#6F6663] text-base sm:text-lg">
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
						className="mx-4 bg-[#F9F6F3] rounded-2xl p-6 shadow-lg border-2 border-[#6F8A73] w-80 sm:w-96 shrink-0"
					>
						{/* Rating Stars */}
						<div className="flex gap-1 mb-4">
							{[...Array(5)].map((_, i) => {
								const isFullStar = i < Math.floor(testimonial.rating);
								const isHalfStar = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;
								
								return (
									<div key={i} className="relative w-5 h-5">
										{isFullStar ? (
											<svg
												className="w-5 h-5 fill-[#F69052]"
												viewBox="0 0 20 20"
											>
												<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
											</svg>
										) : isHalfStar ? (
											<>
												<svg
													className="w-5 h-5 fill-gray-300 absolute"
													viewBox="0 0 20 20"
												>
													<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
												</svg>
												<svg
													className="w-5 h-5 fill-[#F69052] absolute"
													viewBox="0 0 20 20"
													style={{ clipPath: 'inset(0 50% 0 0)' }}
												>
													<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
												</svg>
											</>
										) : (
											<svg
												className="w-5 h-5 fill-gray-300"
												viewBox="0 0 20 20"
											>
												<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
											</svg>
										)}
									</div>
								);
							})}
						</div>

						{/* Content */}
						<p className="text-[#6F6663] text-sm sm:text-base mb-6 leading-relaxed font-medium">
							&ldquo;{testimonial.content}&rdquo;
						</p>

						{/* Author */}
						<div className="border-t border-[#6F8A73]/30 pt-4">
							<h4 className="font-bold text-[#3A2A26] text-base">
								{testimonial.name}
							</h4>
							<p className="text-sm text-[#6F6663]">{testimonial.role}</p>
						</div>
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default Testimonials;
