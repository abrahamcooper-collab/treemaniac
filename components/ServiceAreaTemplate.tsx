import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaveReview from "@/components/LeaveReview";
import FaqSection from "@/components/FaqSection";

const allServices = [
	{ label: "Tree Removal", href: "/services/tree-removal", img: "/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG", desc: "Safe, professional tree removal for residential and commercial properties." },
	{ label: "Emergency Tree Service", href: "/services/emergency-tree-service", img: "/services/tree-removal/IMG_0146.JPEG", desc: "24/7 rapid response for fallen trees, storm damage, and urgent hazards." },
	{ label: "Tree Trimming & Pruning", href: "/services/tree-trimming", img: "/services/tree-trimming/IMG_1267.JPEG", desc: "Expert trimming and pruning to keep your trees healthy and beautiful." },
	{ label: "Stump Grinding", href: "/services/stump-grinding", img: "/services/stump-trimming/IMG_5892.JPEG", desc: "Fast, clean stump removal restoring your yard to a smooth, usable surface." },
	{ label: "Lot & Land Clearing", href: "/services/lot-clearing", img: "/services/lot-and-land-clearing/IMG_3518.JPEG", desc: "Complete lot and land clearing — trees, brush, stumps, and debris removed." },
	{ label: "Residential Tree Services", href: "/services/residential-tree-services", img: "/services/tree-trimming/IMG_1695.JPEG", desc: "Full range of tree care for homeowners across the Central Valley." },
	{ label: "Commercial Tree Services", href: "/services/commercial-tree-services", img: "/services/lot-and-land-clearing/IMG_6450.JPEG", desc: "Large-scale tree services for businesses, HOAs, and property managers." },
];


const bullets = [
	"Trusted in Fresno & the Central Valley",
	"Affordable Tree Service Packages",
	"Year-Round Property Tree Care",
];

export interface ServiceAreaProps {
	city: string;
	state?: string;
	intro: string;
	nearbyAreas: string[];
	heroBgImage?: string;
	heroImage?: string;
}

export default function ServiceAreaTemplate({
	city,
	state = "CA",
	intro,
	nearbyAreas,
	heroBgImage = "/services/tree-removal/IMG_0146.JPEG",
	heroImage = "/services/tree-trimming/IMG_1271.JPEG",
}: ServiceAreaProps) {
	return (
		<>
			<Navbar />

			{/* Hero */}
			<section
				className="relative pt-40 pb-20 px-6 overflow-hidden"
			>
				{/* Background image */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url('${heroBgImage}')` }}
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/50" />
				<div className="max-w-4xl mx-auto relative z-10">
					<div
						className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-sm font-medium"
						style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
					>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
						<Link href="/" className="hover:text-white transition-colors">Home</Link>
						<span>·</span>
						<span className="text-white font-semibold">{city}, {state}</span>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
					</div>
					<h1 className="font-tenor-sans text-white font-bold" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
						{city}, {state}
					</h1>
					<div className="mt-8">
						<a
							href="tel:+15593695748"
							className="inline-block bg-white font-bold text-sm px-8 py-3 rounded-full transition-colors hover:bg-green-50"
							style={{ color: "#1B6B2A" }}
						>
							Get Instant Price
						</a>
					</div>
				</div>
			</section>

			{/* About + image */}
			<section className="bg-white py-20 px-6">
				<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

					{/* Left arch image */}
					<div className="relative w-full lg:w-1/2 shrink-0 flex justify-center">
						<div className="relative w-full max-w-[480px]">
							<div className="overflow-hidden w-full" style={{ borderRadius: "50% 50% 8px 8px / 12% 12% 100% 100%" }}>
								<div className="aspect-[4/5] relative">
									<Image src={heroImage} alt={`Tree service in ${city}, ${state}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
								</div>
							</div>
							<div
								className="absolute bottom-4 right-0 rounded-2xl px-6 py-5 text-center shadow-xl"
								style={{ minWidth: "130px", backgroundColor: "#22C55E" }}
							>
								<p className="text-white font-black leading-none" style={{ fontSize: "3rem" }}>200+</p>
								<p className="text-white font-semibold text-sm mt-1 leading-snug">Satisfied<br />Customers</p>
							</div>
						</div>
					</div>

					{/* Right content */}
					<div className="w-full lg:w-1/2">
						<div
							className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-white font-bold text-xs uppercase tracking-widest"
							style={{ backgroundColor: "#22C55E" }}
						>
							ABOUT TREE MANIAC <span>🌲</span>
						</div>
						<h2
							className="font-bold leading-tight mb-5 font-tenor-sans"
							style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1B6B2A", lineHeight: 1.15 }}
						>
							Your trusted tree service experts in {city}, {state}.
						</h2>
						<p className="text-gray-500 text-base leading-relaxed mb-5">
							At <strong className="text-gray-700">Tree Maniac Tree Service Inc.</strong>, {intro}
						</p>
						<ul className="flex flex-col gap-2 mb-7">
							{bullets.map((b) => (
								<li key={b} className="flex items-center gap-3 font-medium text-gray-700">
									<span className="font-black text-base" style={{ color: "#1B6B2A" }}>»</span>
									{b}
								</li>
							))}
						</ul>
						<div className="flex flex-wrap items-center gap-5">
							<a
								href="tel:+15593695748"
								className="text-white font-bold px-8 py-4 rounded-full transition-colors shadow-md text-sm"
								style={{ backgroundColor: "#1B6B2A" }}
							>
								Get Instant Price
							</a>
							<a href="tel:+15593695748" className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#dcfce7" }}>
									<svg className="w-5 h-5" fill="#22C55E" viewBox="0 0 24 24">
										<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
									</svg>
								</div>
								<div className="leading-tight">
									<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Have Questions?</p>
									<p className="font-bold text-sm text-gray-800">(559) 369-5748</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Services grid */}
			<section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)" }}>
				<div className="max-w-5xl mx-auto text-center mb-12">
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						OUR SERVICES <span>🌲</span>
					</div>
					<h2
						className="font-tenor-sans font-bold mb-4"
						style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1B6B2A" }}
					>
						Complete Tree Care for {city}
					</h2>
					<p className="text-gray-500 text-sm max-w-xl mx-auto">
						At <strong className="text-gray-700">Tree Maniac Tree Service Inc.</strong>, we make tree care simple and stress-free. Our {city}, {state} services include:
					</p>
				</div>
				<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{allServices.map((s) => (
						<Link
							key={s.href}
							href={s.href}
							className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
						>
							<div className="relative w-full overflow-hidden" style={{ height: "180px" }}>
								<Image src={s.img} alt={s.label} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
							</div>
							<div className="p-5" style={{ backgroundColor: "#f0fdf4" }}>
								<h3 className="font-tenor-sans font-bold text-gray-900 mb-2">{s.label}</h3>
								<p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Map + nearby areas */}
			<section className="bg-white py-16 px-6">
				<div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-0 overflow-hidden rounded-2xl shadow-lg">

					{/* Left CTA panel */}
					<div
						className="lg:w-72 shrink-0 flex flex-col justify-center items-center text-center px-10 py-14"
						style={{ backgroundColor: "#1B6B2A" }}
					>
						<div className="mb-6">
							<svg className="w-14 h-14 mx-auto opacity-60" fill="none" stroke="white" strokeWidth={1.2} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<p className="font-tenor-sans font-bold text-white text-xl mb-6 leading-snug">
							Fill out the form to get an instant quote
						</p>
						<div className="w-full border-t mb-6" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
						<p className="text-white/60 text-xs mb-1">Get Instant Price</p>
						<a
							href="tel:+15593695748"
							className="font-bold text-white text-lg hover:text-green-300 transition-colors"
						>
							(559) 369-5748
						</a>
					</div>

					{/* Right: heading + map */}
					<div className="flex-1 flex flex-col">
						<div className="p-8 pb-4">
							<h2 className="font-tenor-sans font-bold mb-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1B6B2A" }}>
								Areas We Serve Near {city}, {state}
							</h2>
							<p className="text-gray-500 text-sm leading-relaxed">
								While we&apos;re based in <strong className="text-gray-700">Fresno, CA</strong>, Tree Maniac Tree Service Inc. proudly serves nearby communities including{" "}
								<strong className="text-gray-700">{nearbyAreas.join(", ")}</strong>.
							</p>
						</div>
						<div className="flex-1 min-h-64">
							<iframe
								src="https://www.google.com/maps?q=2142+E+Cromwell+Ave,+Fresno,+CA+93720&output=embed"
								width="100%"
								height="320"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Tree Maniac Tree Service Inc. - 2142 E Cromwell Ave, Fresno, CA 93720"
							/>
						</div>
					</div>
				</div>
			</section>

			<FaqSection />


			{/* CTA Banner */}
			<section className="bg-white pb-16 px-6">
				<div
					className="relative max-w-4xl mx-auto overflow-hidden px-10 py-14 text-center"
					style={{ borderRadius: "2.5rem", background: "linear-gradient(135deg, #22C55E 0%, #1B6B2A 50%, #0D0D0D 100%)" }}
				>
					<div className="absolute -top-10 -left-10 w-52 h-52 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
					<div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full opacity-15" style={{ background: "rgba(255,255,255,0.2)" }} />
					<div className="relative z-10">
						<h2 className="font-tenor-sans font-bold text-white mb-8 leading-tight" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
							Serving {city} and nearby areas.<br />Call us anytime — 24/7.
						</h2>
						<a
							href="tel:+15593695748"
							className="inline-flex items-center gap-3 text-white font-bold px-6 py-4 rounded-full transition-colors"
							style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)" }}
						>
							<div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
								<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
								</svg>
							</div>
							<div className="text-left leading-tight">
								<span className="text-xs uppercase tracking-widest opacity-75 block">GET INSTANT PRICE</span>
								<span className="text-base font-black">(559) 369-5748</span>
							</div>
						</a>
					</div>
				</div>
			</section>

			<LeaveReview />
			<Footer />
		</>
	);
}
