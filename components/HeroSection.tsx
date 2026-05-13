"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage:
						"url('/services/lot-and-land-clearing/IMG_7100.JPEG')",
				}}
			/>
			{/* Dark overlay — lighter on right to let image show */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25" />

			{/* Content */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-40 pb-32">
				<div className="max-w-3xl">
					<h1
						className="text-white font-bold leading-tight animate-fadeInLeft font-tenor-sans"
						style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
					>
						Fresno's Most Trusted
						<br />
						Tree Service —<br />
						Available 24/7
					</h1>
					<p
						className="mt-5 text-white/85 text-lg animate-fadeInLeft delay-200"
						style={{ maxWidth: "520px" }}
					>
						Professional tree removal, trimming, stump grinding &amp; emergency
						storm cleanup. Serving Fresno, Clovis, Madera &amp; surrounding
						areas.
					</p>
					<div className="mt-8 flex flex-wrap gap-4 animate-fadeInLeft delay-300">
						<a
							href="tel:+15593695748"
							className="inline-flex items-center gap-2 bg-green-gradient hover:opacity-90 text-white font-bold px-7 py-4 rounded-full text-base transition-colors shadow-lg border-none"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
							</svg>
							Call Now: (559) 369-5748
						</a>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-forest-green font-bold px-7 py-4 rounded-full text-base transition-colors shadow-lg"
						>
							Get a Free Quote
						</Link>
					</div>
				</div>
			</div>

			{/* Grass Image with scroll animation */}
			<div
				className="absolute bottom-0 w-full h-16 sm:h-24 md:h-32 xl:h-40 pointer-events-none bg-repeat-x bg-bottom z-10"
				style={{
					backgroundImage: "url('/grass.png')",
					backgroundSize: "contain",
					backgroundPositionX: `-${scrollY * 0.5}px`,
				}}
			/>
		</section>
	);
}
