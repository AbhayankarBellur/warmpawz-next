import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ArticleHeaderProps {
	category: string;
	readTime: string;
	date: string;
	title: string;
	excerpt: string;
	author: string;
	onBack: () => void;
}

const ArticleHeader = ({
	category,
	readTime,
	date,
	title,
	excerpt,
	author,
	onBack,
}: ArticleHeaderProps) => {
	return (
		<>
			{/* Back Button */}
			<button
				onClick={onBack}
				className="flex items-center gap-2 text-gray-600 hover:text-[#f69052] transition-colors mb-8 group"
			>
				<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
				<span>Back to Blog</span>
			</button>

			{/* Header */}
			<header className="mb-8">
				<div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
					<span className="bg-[#F5A855] text-white px-3 py-1 rounded-full text-xs font-semibold">
						{category}
					</span>
					<span>{readTime}</span>
					<span>•</span>
					<span>{date}</span>
				</div>
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
					{title}
				</h1>
				<p className="text-xl text-gray-600 mb-4">{excerpt}</p>
				<div className="flex items-center gap-3 text-sm text-gray-500">
					<span className="font-semibold">By {author}</span>
				</div>
			</header>
		</>
	);
};

interface ArticleContentProps {
	image: string;
	title: string;
	content: string[];
}

const ArticleContent = ({ image, title, content }: ArticleContentProps) => {
	return (
		<>
			{/* Featured Image */}
			<div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-12 mt-8">
				<img 
					src={image} 
					alt={title} 
					loading="eager"
					className="w-full h-full object-cover" 
					style={{ objectPosition: 'center 30%' }}
				/>
			</div>

			{/* Content */}
			<div className="prose prose-lg max-w-none">
				{content.map((paragraph, index) => (
					<p key={index} className="text-gray-700 leading-relaxed mb-6">
						{paragraph}
					</p>
				))}
			</div>
		</>
	);
};

interface ArticleFooterProps {
	author: string;
	date: string;
	onBackToBlog: () => void;
}

const ArticleFooter = ({ author, date, onBackToBlog }: ArticleFooterProps) => {
	return (
		<footer className="mt-12 pt-8 border-t border-gray-200">
			<div className="flex items-center justify-between">
				<div className="text-sm text-gray-600">
					<p className="font-semibold text-gray-900 mb-1">Written by {author}</p>
					<p>{date}</p>
				</div>
				<button
					onClick={onBackToBlog}
					className="bg-[#F5A855] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E09642] transition-colors"
				>
					Read More Articles
				</button>
			</div>
		</footer>
	);
};

export { ArticleHeader, ArticleContent, ArticleFooter };
