import { VendorClient } from "@/components/vendor-onboarding";

const VendorPage = () => {
	return (
		<>
			{/* Background Layers */}
			<div 
				className="fixed inset-0 z-0"
				style={{
					background: "linear-gradient(180deg, #FF7A33 0%, #FFBB99 60%, #FFE8D1 100%)",
				}}
			/>
			{/* Mobile Background */}
			<div 
				className="fixed inset-0 z-10 opacity-40 md:hidden"
				style={{
					backgroundImage: "url('/images/gsd.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "25% center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			{/* Desktop Background */}
			<div 
				className="fixed inset-0 z-10 opacity-40 hidden md:block"
				style={{
					backgroundImage: "url('/images/gsd.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>

			<div className="relative z-20">
				<VendorClient />
			</div>
		</>
	);
};

export default VendorPage;
