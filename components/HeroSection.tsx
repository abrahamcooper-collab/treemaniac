"use client";

import Link from "next/link";

export default function HeroSection() {
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
			{/* Gradient overlay with green tint */}
			<div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(61,90,14,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.3) 100%)" }} />

			{/* Content */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-44 pb-36">
				<div className="max-w-3xl">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8 text-white font-bold text-xs uppercase tracking-[0.15em] animate-fadeInUp badge-shimmer">
						<span className="relative flex h-2.5 w-2.5">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
							<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
						</span>
						SERVING FRESNO 24/7
					</div>

					<h1
						className="text-white font-bold leading-[1.05] animate-fadeInLeft font-tenor-sans"
						style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
					>
						Fresno&apos;s Most Trusted
						<br />
						<span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #b8d94e, #8cb11c, #d4f05e)" }}>
							Tree Service
						</span>
					</h1>
					<p
						className="mt-6 text-white/90 animate-fadeInLeft delay-200"
						style={{ maxWidth: "560px", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: 1.7 }}
					>
						Professional tree removal, trimming, stump grinding &amp; emergency
						storm cleanup. Serving Fresno, Clovis, Madera &amp; surrounding
						areas.
					</p>
					<div className="mt-10 flex flex-wrap gap-5 animate-fadeInLeft delay-300">
						<a
							href="tel:+15593695748"
							className="inline-flex items-center gap-3 bg-green-gradient hover:opacity-90 text-white font-bold px-9 py-5 rounded-full text-lg transition-all shadow-2xl border-none btn-glow"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
							</svg>
							Call Now: (559) 369-5748
						</a>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-forest-green font-bold px-9 py-5 rounded-full text-lg transition-all shadow-2xl btn-glow"
						>
							Get a Free Quote
							<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>
						</Link>
					</div>
				</div>
			</div>

			{/* Grass Image — static, no scroll listener */}
			<div
				className="absolute bottom-0 w-full h-16 sm:h-24 md:h-32 xl:h-40 pointer-events-none bg-repeat-x bg-bottom z-10"
				style={{
					backgroundImage: "url('/grass.png')",
					backgroundSize: "contain",
				}}
			/>
		</section>
	);
}
