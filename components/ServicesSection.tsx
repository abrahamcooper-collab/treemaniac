"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
	{
		label: "Tree Removal",
		href: "/services/tree-removal",
		img: "/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG",
		desc: "Tree Maniac delivers professional tree removal across Fresno and nearby areas, keeping your property safe. From hazardous trees to full removals, we make every job clean and efficient.",
	},
	{
		label: "Emergency Tree Service",
		href: "/services/emergency-tree-service",
		img: "/services/tree-removal/IMG_0146.JPEG",
		desc: "Trust Tree Maniac for fast 24/7 emergency response in Fresno and surrounding communities. We clear fallen trees, storm damage, and blocked driveways — day or night.",
	},
	{
		label: "Tree Trimming & Pruning",
		href: "/services/tree-trimming",
		img: "/services/tree-trimming/IMG_1267.JPEG",
		desc: "Transform your trees with professional trimming and pruning services across Fresno. From shaping to deadwood removal, we keep your trees healthy and your property looking sharp.",
	},
	{
		label: "Stump Grinding",
		href: "/services/stump-grinding",
		img: "/services/stump-trimming/IMG_5892.JPEG",
		desc: "Tree Maniac specializes in fast, efficient stump grinding in Fresno and beyond. We restore lawn health and eliminate tripping hazards with professional-grade equipment.",
	},
	{
		label: "Lot & Land Clearing",
		href: "/services/lot-clearing",
		img: "/services/lot-and-land-clearing/IMG_3518.JPEG",
		desc: "Need your land cleared? Tree Maniac handles lot and land clearing across Fresno. From overgrown brush to full site prep, we keep your land clean and ready to use.",
	},
];

export default function ServicesSection() {
	return (
		<>
			{/* ── SERVICES ── */}
			<section
				className="relative bg-white pt-20"
				style={{ paddingBottom: "140px" }}
			>
				{/* Badge + heading */}
				<div className="text-center mb-12 px-6">
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						OUR SERVICES <span>🌲</span>
					</div>
					<h2
						className="font-tenor-sans font-bold text-gray-900"
						style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
					>
						Our wide variety of tree services
					</h2>
				</div>

				{/* Cards 3 + 2 */}
				<div className="max-w-5xl mx-auto px-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
						{services.slice(0, 3).map((s) => (
							<ServiceCard key={s.href} {...s} />
						))}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
						{services.slice(3).map((s) => (
							<ServiceCard key={s.href} {...s} />
						))}
					</div>
				</div>

				{/* Wave — absolute at bottom of white section */}
				<div
					className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10"
					style={{ height: "130px" }}
				>
					<svg
						className="wave-svg-anim"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 130"
						preserveAspectRatio="none"
						style={{ width: "200%", height: "100%", display: "block" }}
					>
						<path
							fill="white"
							d="M0,0 L0,65 C120,130 240,0 360,65 C480,130 600,0 720,65 C840,130 960,0 1080,65 C1200,130 1320,0 1440,65 C1560,130 1680,0 1800,65 C1920,130 2040,0 2160,65 C2280,130 2400,0 2520,65 C2640,130 2760,0 2880,65 L2880,0 Z"
						/>
					</svg>
				</div>
			</section>
		</>
	);
}

function ServiceCard({
	label,
	href,
	img,
	desc,
}: {
	label: string;
	href: string;
	img: string;
	desc: string;
}) {
	return (
		<Link
			href={href}
			className="group block rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-none relative text-center"
			style={{
				background:
					"linear-gradient(135deg, #22C55E 0%, #1B6B2A 50%, #0D0D0D 100%)",
			}}
		>
			<div className="relative w-full h-48 overflow-hidden">
				<Image
					src={img}
					alt={label}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>
			{/* Decorative blobs inside the card to match CTA */}
			<div
				className="absolute top-40 -left-10 w-32 h-32 rounded-full opacity-20 pointer-events-none"
				style={{ background: "rgba(255,255,255,0.3)" }}
			/>
			<div
				className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-15 pointer-events-none"
				style={{ background: "rgba(255,255,255,0.2)" }}
			/>

			<div className="px-6 py-8 relative z-10">
				<h3 className="font-tenor-sans font-bold text-white mb-4 leading-tight text-xl sm:text-2xl">
					{label}
				</h3>
				<p className="text-white/90 text-sm leading-relaxed line-clamp-4">
					{desc}
				</p>
			</div>
		</Link>
	);
}
