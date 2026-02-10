import { VendorClient } from "@/components/vendor-onboarding";

const VendorPage = () => {
	return (
		<>
			{/* Fixed Background Layers */}
			<div 
				className="fixed inset-0 z-0"
				style={{
					background: "linear-gradient(180deg, #FF7A33 0%, #FFBB99 60%, #FFE8D1 100%)",
				}}
			/>
			<div 
				className="fixed inset-0 z-10 opacity-40"
				style={{
					backgroundImage: "url('/images/blog-15.png')",
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
