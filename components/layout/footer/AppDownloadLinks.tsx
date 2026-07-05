interface AppBadgeProps {
	href: string;
	align?: "left" | "right";
	className?: string;
}

const alignClass = (align: "left" | "right") =>
	align === "right" ? "self-end" : "self-start";

export const AppStoreBadge = ({
	href,
	align = "left",
	className = "",
}: AppBadgeProps) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={`block mt-3 ${alignClass(align)} ${className}`}
	>
		<img
			src="/images/apple%20app%20icon.png"
			alt="Download on the App Store"
			className="h-10 md:h-11 w-auto"
		/>
	</a>
);

export const PlayStoreBadge = ({
	href,
	align = "left",
	className = "",
}: AppBadgeProps) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={`block mt-3 ${alignClass(align)} ${className}`}
	>
		<img
			src="/images/google%20playstore%20icon.png"
			alt="Get it on Google Play"
			className="h-10 md:h-11 w-auto"
		/>
	</a>
);
