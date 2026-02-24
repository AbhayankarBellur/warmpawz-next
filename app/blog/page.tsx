"use client";

import { BackButton } from "@/components/shared";
import { BlogCard } from "@/components/blog";
import { blogArticles } from "@/data/blogArticles";
import { useEffect, useState } from "react";

const BlogPage = () => {
	const [currentColorIndex, setCurrentColorIndex] = useState(0);

	// Three warm colors from the main page gradient
	const colors = [
		"#F69052", // Brand orange
		"#FAD3B5", // Warm beige
		"#FFF2E6", // Warm white
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentColorIndex((prev) => (prev + 1) % colors.length);
		}, 3000); // 3 second duration

		return () => clearInterval(interval);
	}, [colors.length]);

	// Image positions matching individual blog pages
	const imagePositions = [
		"30%",
		"20%",
		"20%",
		"30%",
		"30%",
		"45%",
		"20%",
		"20%",
		"30%",
		"30%",
		"30%",
		"70%",
		"15%",
		"50%",
		"100%",
		"30%",
		"30%",
		"30%",
		"30%",
		"30%",
	];

	// Map blogArticles data to the format expected by BlogCard
	const blogPosts = blogArticles.map((article, index) => ({
		id: index + 1,
		title: article.title,
		excerpt: article.excerpt,
		imageUrl: article.image,
		readTime: article.readTime,
		imagePosition: imagePositions[index] || "30%",
	}));

	return (
		<div 
			className="min-h-screen transition-colors duration-[3000ms] ease-in-out"
			style={{ backgroundColor: colors[currentColorIndex] }}
		>
			<div className="px-4 sm:px-6 lg:px-8 pt-32">
				<BackButton className="bg-secondary border-border hover:bg-muted text-foreground" />
				<div className="max-w-7xl mx-auto py-16 sm:py-24">
					{/* Header */}
					<div className="text-center mb-12 sm:mb-16">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
							Blogs
						</h1>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
							Discover insights, tips, and stories about pet care
						</p>
					</div>

					{/* Blog Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
						{blogPosts.map((post) => (
							<BlogCard key={post.id} {...post} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;