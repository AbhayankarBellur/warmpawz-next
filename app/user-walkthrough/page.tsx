import UserWalkthroughClient from "@/components/user-walkthrough/UserWalkthroughClient";

const UserWalkthroughPage = () => {
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
				className="fixed inset-0 z-10 opacity-60 md:hidden"
				style={{
					backgroundImage: "url('/images/scruffy.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "25% center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			{/* Desktop Background */}
			<div 
				className="fixed inset-0 z-10 opacity-60 hidden md:block"
				style={{
					backgroundImage: "url('/images/scruffy.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>

			<div className="relative z-20">
				<UserWalkthroughClient />
			</div>
		</>
	);
};

export default UserWalkthroughPage;
