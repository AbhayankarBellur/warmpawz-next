"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { STORAGE_KEYS } from "@/config/constants";

interface ClientLayoutProps {
	children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
	const pathname = usePathname();
	const [shouldShowNav, setShouldShowNav] = useState(false);

	useEffect(() => {
		// Async check to avoid synchronous setState in effect
		const checkNavVisibility = async () => {
			// Small delay to ensure client-side hydration is complete
			await new Promise(resolve => setTimeout(resolve, 0));
			
			if (pathname === "/") {
				const hasShownLoading = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);
				
				if (hasShownLoading === "true") {
					setShouldShowNav(true);
				} else {
					// Poll for loading completion
					const interval = setInterval(() => {
						const updated = sessionStorage.getItem(STORAGE_KEYS.hasShownLoading);
						if (updated === "true") {
							setShouldShowNav(true);
							clearInterval(interval);
						}
					}, 100);
					
					return () => clearInterval(interval);
				}
			} else {
				// Non-home pages: show navbar immediately
				setShouldShowNav(true);
			}
		};

		checkNavVisibility();
	}, [pathname]);

	return (
		<>
			{shouldShowNav && <NavBar />}
			{children}
			<Footer />
		</>
	);
};

export default ClientLayout;
