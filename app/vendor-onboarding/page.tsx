import { VendorClient } from "@/components/vendor-onboarding";

const VendorPage = () => {
	return (
		<>
			{/* Sage Green Background Behind Navbar */}
			<div className="fixed top-0 left-0 right-0 h-24 bg-[#C8D5C8] z-0" />
			<div className="relative z-10">
				<VendorClient />
			</div>
		</>
	);
};

export default VendorPage;
