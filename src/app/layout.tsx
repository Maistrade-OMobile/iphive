// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
	title: "IPHIVE",
	description: "Protect Your Ideas. Discover Innovations. All in One Platform.",
	icons: {
		icon: "/images/ip.jpg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}