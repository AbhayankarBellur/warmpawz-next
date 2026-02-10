const NewsEventsPage = () => {
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

			<div className="max-w-4xl mx-auto py-16 h-screen mt-32 relative z-20">
			<h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
				News & Events
			</h1>
			<div className="text-center text-gray-600">
				<p className="text-lg">Coming soon.</p>
			</div>
			</div>
		</>
	);
};

export default NewsEventsPage;
