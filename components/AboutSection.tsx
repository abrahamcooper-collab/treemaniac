import Image from "next/image";
import Link from "next/link";

const bullets = [
	"Trusted in Fresno & the Central Valley",
	"Affordable Tree Service Packages",
	"Year-Round Property Tree Care",
];

const services = [
	"Tree Removal",
	"Emergency Tree Service",
	"Tree Trimming & Pruning",
	"Stump Grinding",
	"Lot & Land Clearing",
	"Residential & Commercial Tree Care",
];

export default function AboutSection() {
	return (
		<section className="bg-white py-20 px-6">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
				{/* Left — image collage + stat badge */}
				<div className="relative w-full lg:w-1/2 shrink-0 flex justify-center py-10 lg:py-0">
					{/* Decorative background shape */}
					<div className="absolute top-4 left-4 w-[80%] h-full bg-green-gradient opacity-20 rounded-[3rem] -z-10"></div>

					<div className="relative w-full max-w-[480px]">
						{/* Main Image */}
						<div className="relative aspect-[4/5] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl border-4 border-white">
							<Image
								src="/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG"
								alt="Tree Maniac crew member at work"
								fill
								className="object-cover object-center hover:scale-105 transition-transform duration-700"
							/>
						</div>

						{/* Overlapping Small Image */}
						<div className="absolute -bottom-10 -left-6 sm:-left-12 w-40 sm:w-48 aspect-square rounded-full border-8 border-white overflow-hidden shadow-xl z-20">
							<Image
								src="/services/tree-trimming/IMG_1267.JPEG"
								alt="Professional tree trimming"
								fill
								className="object-cover object-center"
							/>
						</div>

						{/* Stat badge */}
						<div
							className="absolute top-8 -right-4 sm:-right-8 rounded-2xl px-5 py-4 text-center shadow-2xl border-4 border-white z-20 flex flex-col items-center justify-center animate-floatUp"
							style={{ minWidth: "130px", backgroundColor: "#22C55E" }}
						>
							<p
								className="text-white font-black tracking-tighter leading-none mb-1"
								style={{ fontSize: "2.8rem" }}
							>
								200<span className="text-2xl">+</span>
							</p>
							<p className="text-white font-bold text-[10px] uppercase tracking-widest leading-snug">
								Satisfied
								<br />
								Customers
							</p>
						</div>
					</div>
				</div>

				{/* Right — content */}
				<div className="w-full lg:w-1/2">
					{/* Badge */}
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						ABOUT TREE MANIAC <span>🌲</span>
					</div>

					<h2
						className="font-bold leading-tight mb-5 font-tenor-sans"
						style={{
							fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
							color: "#1B6B2A",
							lineHeight: 1.15,
						}}
					>
						Your trusted tree service and removal experts in Fresno, CA.
					</h2>

					<p className="text-gray-500 text-base leading-relaxed mb-5">
						At{" "}
						<strong className="text-gray-700">
							Tree Maniac Tree Service Inc.
						</strong>
						, we keep properties across Fresno safe, clean, and beautiful.
						Locally owned and trusted throughout the Central Valley, we provide
						reliable tree removal, trimming, and emergency services with fair
						pricing and professional results.
					</p>

					{/* » Bullets */}
					<ul className="flex flex-col gap-2 mb-7">
						{bullets.map((b) => (
							<li
								key={b}
								className="flex items-center gap-3 font-medium text-gray-700"
							>
								<span
									className="font-black text-base"
									style={{ color: "#1B6B2A" }}
								>
									»
								</span>
								{b}
							</li>
						))}
					</ul>

					{/* Services list — left green border */}
					<div
						className="border-l-4 pl-5 mb-9 flex flex-col gap-2"
						style={{ borderColor: "#1B6B2A" }}
					>
						{services.map((s) => (
							<span key={s} className="text-gray-600 text-sm font-medium">
								{s}
							</span>
						))}
					</div>

					{/* CTAs */}
					<div className="flex flex-wrap items-center gap-5">
						<Link
							href="/about"
							className="text-white font-bold px-8 py-4 rounded-full transition-colors shadow-md text-sm"
							style={{ backgroundColor: "#1B6B2A" }}
						>
							Learn More
						</Link>

						<a href="tel:+15593695748" className="flex items-center gap-3">
							<div
								className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
								style={{ backgroundColor: "#dcfce7" }}
							>
								<svg className="w-5 h-5" fill="#22C55E" viewBox="0 0 24 24">
									<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
								</svg>
							</div>
							<div className="leading-tight">
								<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
									Have Questions?
								</p>
								<p className="font-bold text-sm text-gray-800">
									(559) 369-5748
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
