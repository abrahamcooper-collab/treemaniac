import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaveReview from "@/components/LeaveReview";

export const metadata: Metadata = {
	title: "Project Gallery | Tree Maniac Tree Service Inc.",
	description: "View our recent tree removal, tree trimming, and lot clearing projects in Fresno, CA. See the difference Tree Maniac makes.",
};

const images = [
	{ src: "/gallery/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG", alt: "Large tree removal project in Fresno", height: "h-64" },
	{ src: "/gallery/IMG_0146.JPEG", alt: "Emergency tree service fallen tree", height: "h-96" },
	{ src: "/gallery/IMG_1267.JPEG", alt: "Professional tree trimming", height: "h-64" },
	{ src: "/gallery/64928712513__0569535D-D259-4443-988C-BB98F86303DF.fullsizerender.JPEG", alt: "Tree care project", height: "h-80" },
	{ src: "/gallery/IMG_1271.JPEG", alt: "Stump grinding process", height: "h-64" },
	{ src: "/gallery/64928719851__7ED4100C-2EAC-41FF-9E1E-AC18B09D4815.fullsizerender.JPEG", alt: "Finished tree removal", height: "h-96" },
	{ src: "/gallery/IMG_0150.JPEG", alt: "Tree Maniac crew at work", height: "h-64" },
	{ src: "/gallery/IMG_1694.JPEG", alt: "Lot and land clearing", height: "h-80" },
	{ src: "/gallery/65697328617__39BEA32F-A543-4C0A-A595-8B0B127529B9.fullsizerender.JPEG", alt: "Heavy equipment on job site", height: "h-96" },
	{ src: "/gallery/IMG_0151.JPEG", alt: "Precision tree cutting", height: "h-64" },
	{ src: "/gallery/IMG_2440.JPEG", alt: "Debris cleanup after removal", height: "h-80" },
	{ src: "/gallery/IMG_5106.JPEG", alt: "Residential tree pruning", height: "h-64" },
];

export default function GalleryPage() {
	return (
		<main className="bg-[#fcfdfc]">
			<Navbar />

			{/* Hero */}
			<section
				className="relative pt-40 pb-20 px-6 overflow-hidden"
			>
				{/* Background image */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: "url('/gallery/IMG_0146.JPEG')" }}
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/50" />
				<div className="max-w-4xl mx-auto relative z-10 text-center lg:text-left">
					<div
						className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-sm font-medium mx-auto lg:mx-0"
						style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
					>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
						<Link href="/" className="hover:text-white transition-colors">Home</Link>
						<span>·</span>
						<span className="text-white font-semibold">Gallery</span>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
					</div>
					<h1 className="font-tenor-sans text-white font-bold" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
						Our Recent Work
					</h1>
					<p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto lg:mx-0">
						Browse our past projects to see the quality, precision, and care we bring to every job across Fresno and the Central Valley.
					</p>
				</div>
			</section>

			{/* Masonry-style Grid */}
			<section className="py-20 px-4 sm:px-6 max-w-screen-2xl mx-auto">
				<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
					{images.map((img, i) => (
						<div
							key={i}
							className="break-inside-avoid relative w-full overflow-hidden rounded-2xl group border border-gray-100 shadow-sm"
						>
							<div className={`relative w-full ${img.height}`}>
								<Image
									src={img.src}
									alt={img.alt}
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
									className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
								/>
							</div>
							
							{/* Hover Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
								<p className="text-white font-bold text-sm tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
									{img.alt}
								</p>
								<div className="w-8 h-1 bg-green-500 mt-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 origin-left" />
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA Banner */}
			<section className="bg-white pb-16 px-6">
				<div
					className="relative max-w-4xl mx-auto overflow-hidden px-10 py-14 text-center"
					style={{ borderRadius: "2.5rem", background: "linear-gradient(135deg, #22C55E 0%, #1B6B2A 50%, #0D0D0D 100%)" }}
				>
					<div className="absolute -top-10 -left-10 w-52 h-52 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
					<div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full opacity-15" style={{ background: "rgba(255,255,255,0.2)" }} />
					<div className="relative z-10">
						<h2 className="font-tenor-sans font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}>
							Like what you see?<br />Let&apos;s transform your property.
						</h2>
						<a
							href="tel:+15593695748"
							className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full transition-colors"
							style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)" }}
						>
							<span className="text-base uppercase tracking-wider">Get a Free Estimate</span>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</a>
					</div>
				</div>
			</section>

			<LeaveReview />
			<Footer />
		</main>
	);
}
