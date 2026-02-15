import {
	FoundersStory,
	Mission,
	Vision,
	Values,
	MeetTheTeam,
} from "@/components/about";

const AboutUsPage = () => {
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

			<div className="mt-28 relative z-20">
				<FoundersStory />
				<Mission />
				<Vision />
				<Values />
				<MeetTheTeam />
			</div>
		</>
	);
};

export default AboutUsPage;
