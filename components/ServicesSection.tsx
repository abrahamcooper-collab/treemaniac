"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
	const ref = useScrollReveal();

	return (
		<>
			{/* ── SERVICES ── */}
			<section
				ref={ref}
				className="relative bg-white pt-24 pb-24"
			>
				{/* Badge + heading */}
				<div className="text-center mb-14 px-6">
					<div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-6 text-white font-bold text-xs uppercase tracking-[0.12em] badge-shimmer reveal">
						OUR SERVICES <span>🌲</span>
					</div>
					<h2
						className="font-tenor-sans font-bold reveal reveal-d1"
						style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", color: "#3d5a0e" }}
					>
						Our wide variety of <span className="gradient-text">tree services</span>
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
			className="group block rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-none relative text-center service-card"
			style={{
				background:
					"linear-gradient(135deg, #8cb11c 0%, #5a7510 50%, #0D0D0D 100%)",
			}}
		>
			<div className="relative w-full h-48 overflow-hidden">
				<Image
					src={img}
					alt={label}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
				<h3 className="font-tenor-sans font-bold text-white mb-4 leading-tight" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>
					{label}
				</h3>
				<p className="text-white/90 leading-relaxed line-clamp-4" style={{ fontSize: "0.95rem" }}>
					{desc}
				</p>
			</div>
		</Link>
	);
}
