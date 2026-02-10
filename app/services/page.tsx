import { ServicesPhoneFrame } from "@/components/services";

const ServicesPage = () => {
	return (
		<>
			{/* Fixed Background Layers - Covers Entire Viewport Including Navbar */}
			{/* Gradient Layer */}
			<div 
				className="fixed inset-0 z-0"
				style={{
					background: "linear-gradient(180deg, #FF7A33 0%, #FFBB99 60%, #FFE8D1 100%)",
				}}
			/>
			
			{/* Image Layer on top of gradient */}
			<div 
				className="fixed inset-0 z-10 opacity-40"
				style={{
					backgroundImage: "url('/images/shakira.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>

			<div className="px-4 sm:px-6 lg:px-8 mt-32 relative min-h-screen z-20">
				<div className="max-w-6xl mx-auto relative">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
						Our Services
					</h1>
					<p className="text-center text-gray-900 mb-8 text-lg w-[80%] lg:w-1/2 mx-auto font-semibold">
						Warmpawz brings every stage of pet care into one trusted, connected,
						compassionate ecosystem — for those who love pets and those who care
						and are concerned for them.
					</p>
					<ServicesPhoneFrame />
				</div>
			</div>
		</>
	);
};

export default ServicesPage;
