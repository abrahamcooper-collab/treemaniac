"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
		img: "https://unsplash.com/photos/a-man-in-a-yellow-helmet-is-climbing-up-a-tree-eaf5cOAt66g",
		desc: "Transform your trees with professional trimming and pruning services across Fresno. From shaping to deadwood removal, we keep your trees healthy and your property looking sharp.",
	},
	{
		label: "Stump Grinding",
		href: "/services/stump-grinding",
		img: "https://unsplash.com/photos/man-in-black-jacket-and-blue-denim-jeans-holding-orange-and-black-power-tool-Whc7yVd45wA",
		desc: "Tree Maniac specializes in fast, efficient stump grinding in Fresno and beyond. We restore lawn health and eliminate tripping hazards with professional-grade equipment.",
	},
	{
		label: "Lot & Land Clearing",
		href: "/services/lot-clearing",
		img: "/services/lot-and-land-clearing/IMG_3518.JPEG",
		desc: "Need your land cleared? Tree Maniac handles lot and land clearing across Fresno. From overgrown brush to full site prep, we keep your land clean and ready to use.",
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
	return (
		<>
			{/* ── SERVICES ── */}
			<section
				className="relative pt-20"
				style={{ backgroundColor: "#ffffff", paddingBottom: "140px" }}
			>
				{/* Badge + heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 px-6"
				>
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						OUR SERVICES <span>🌲</span>
					</div>
					<h2
						className="font-tenor-sans font-bold text-gray-900"
						style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
					>
						Our wide variety of tree services
					</h2>
				</motion.div>

				{/* Cards 3 + 2 */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="max-w-5xl mx-auto px-6"
				>
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
				</motion.div>

				{/* Wave — absolute at bottom of section */}
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
							fill="#ffffff"
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
		<motion.div variants={itemVariants} className="h-full">
			<Link
				href={href}
				className="group block rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 text-center h-full relative"
				style={{
					background: "linear-gradient(135deg, #0D0D0D 0%, #1B6B2A 60%, #22C55E 100%)",
				}}
			>
				{/* Decorative blobs */}
				<div
					className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-30 pointer-events-none transition-transform group-hover:scale-150 duration-700"
					style={{ background: "rgba(34,197,94,0.15)" }}
				/>
				<div
					className="absolute top-1/2 -left-10 w-32 h-32 rounded-full opacity-10 pointer-events-none transition-transform group-hover:scale-125 duration-700"
					style={{ background: "rgba(255,255,255,0.1)" }}
				/>

				<div className="relative w-full h-48 overflow-hidden z-20">
					<Image
						src={img}
						alt={label}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover group-hover:scale-105 transition-transform duration-500"
					/>
				</div>

				<div className="px-6 py-8 relative z-20 flex flex-col h-[calc(100%-12rem)]">
					<h3
						className="font-tenor-sans font-bold mb-4 leading-tight text-xl sm:text-2xl transition-colors"
						style={{ color: "#ffffff" }}
					>
						{label}
					</h3>
					<p className="text-white/80 text-sm leading-relaxed line-clamp-4">
						{desc}
					</p>
				</div>
			</Link>
		</motion.div>
	);
}
