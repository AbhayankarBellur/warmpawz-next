import UserWalkthroughClient from "@/components/user-walkthrough/UserWalkthroughClient";

const UserWalkthroughPage = () => {
	return (
		<>
			{/* Orange Background Behind Navbar */}
			<div className="fixed top-0 left-0 right-0 h-24 bg-[#F69052] z-0" />
			<div className="relative z-10">
				<UserWalkthroughClient />
			</div>
		</>
	);
};

export default UserWalkthroughPage;
