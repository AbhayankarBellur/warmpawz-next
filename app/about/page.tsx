import {
	FoundersStory,
	Mission,
	Vision,
	Values,
	MeetTheTeam,
} from "@/components/about";

const AboutUsPage = () => {
	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Background Layers */}
			<div 
				className="absolute inset-0 z-0"
				style={{
					background: "linear-gradient(180deg, #FF7A33 0%, #FFBB99 60%, #FFE8D1 100%)",
				}}
			/>
			<div 
				className="absolute inset-0 z-10 opacity-40"
				style={{
					backgroundImage: "url('/images/shakira.jpeg')",
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
		</div>
	);
};

export default AboutUsPage;
