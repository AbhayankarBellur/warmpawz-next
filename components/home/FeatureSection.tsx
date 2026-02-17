import Image from "next/image";

interface FeatureSectionProps {
	title: string;
	description: string;
	imageSrc: string;
	reverse?: boolean;
	buttonText?: string;
	onButtonClick?: () => void;
}

const FeatureSection = ({
	title,
	description,
	imageSrc,
	reverse = false,
	buttonText,
	onButtonClick,
}: FeatureSectionProps) => {
	// Alternate background colors
	const bgColor = reverse ? "bg-[#C8D5C8]" : "bg-[#F9F6F3]";
	
	return (
		<section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
			<div className="max-w-7xl mx-auto">
				<div
					className={`flex flex-col ${
						reverse ? "lg:flex-row-reverse" : "lg:flex-row"
					} items-center gap-8 lg:gap-12`}
				>
					{/* Image */}
					<div className="w-full lg:w-1/2">
						<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={imageSrc}
								alt={title}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
								priority
							/>
						</div>
					</div>

					{/* Content */}
					<div className="w-full lg:w-1/2 space-y-6">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2A26]">
							{title}
						</h2>
						<p className="text-lg sm:text-xl text-[#6F6663] leading-relaxed">
							{description}
						</p>
						{buttonText && onButtonClick && (
							<button
								onClick={onButtonClick}
								className="px-8 py-4 bg-[#F69052] hover:bg-[#E09642] text-[#F9F6F3] font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl text-lg"
							>
								{buttonText}
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;
