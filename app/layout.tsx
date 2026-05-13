import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeadingScrollAnimation from "@/components/HeadingScrollAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tree Maniac Tree Service Inc. | Fresno, CA | 24/7 Tree Service",
	description:
		"Professional tree removal, trimming, stump grinding & emergency storm cleanup in Fresno, CA. Serving Clovis, Madera, Sanger & surrounding areas. Call (559) 369-5748.",
	keywords:
		"tree service Fresno CA, tree removal Fresno CA, tree trimming Fresno CA, emergency tree service, stump grinding",
	icons: {
		icon: "/logo.png",
		apple: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className} suppressHydrationWarning>
				<HeadingScrollAnimation />
				{children}
			</body>
		</html>
	);
}
