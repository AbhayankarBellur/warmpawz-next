import { HeroSection } from "@/components/policies";

const PoliciesPage = () => {
	return (
		<>
			{/* Fixed Background Layers */}
			<div 
				className="fixed left-0 right-0 top-[-10vh] bottom-[-10vh] z-0"
				style={{
					background: "linear-gradient(180deg, #FF7A33 0%, #FFBB99 60%, #FFE8D1 100%)",
				}}
			/>
			<div 
				className="fixed left-0 right-0 top-[-10vh] bottom-[-10vh] z-10 opacity-40"
				style={{
					backgroundImage: "url('/images/shakira.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>

			<div className="relative z-20">
				<HeroSection />
			</div>
		</>
	);
};

export default PoliciesPage;
