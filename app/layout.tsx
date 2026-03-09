import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { GRADIENTS } from "@/config/constants";
import { Baloo_2 } from "next/font/google";
import { siteConfig } from "@/lib/metadata";

const baloo2 = Baloo_2({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-baloo-2",
	display: "swap",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#F69052",
};

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name + " - Your Trusted Pet Care Partner",
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"pet care",
		"dog walking",
		"pet sitting",
		"pet services India",
		"dog care",
		"cat care",
		"pet grooming",
		"veterinary services",
		"pet health",
		"pet training",
	],
	authors: [{ name: "WarmPawz Team" }],
	creator: "WarmPawz",
	publisher: "WarmPawz",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: "WarmPawz - Pet Care Services",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@warmpawz",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	manifest: "/manifest.json",
	alternates: {
		canonical: siteConfig.url,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={baloo2.className}
				style={{
					background: GRADIENTS.warm,
					backgroundSize: "100% 100vh",
					minHeight: "100vh",
				}}
			>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
