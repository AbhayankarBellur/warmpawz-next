const MetricsSection = () => {
	const metrics = [
		{ value: "10,000+", label: "Happy Pet Parents" },
		{ value: "500+", label: "Trusted Providers" },
		{ value: "50,000+", label: "Services Delivered" },
		{ value: "25+", label: "Cities Covered" },
	];

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F3E6D8]">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{metrics.map((metric, index) => (
						<div key={index} className="text-center">
							<div className="text-4xl sm:text-5xl font-bold text-[#E1844A] mb-2">
								{metric.value}
							</div>
							<div className="text-lg text-[#3A2A26] font-medium">
								{metric.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MetricsSection;
