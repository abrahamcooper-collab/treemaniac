"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SERVICE_AREAS = [
	{ name: "Fresno", state: "CA", href: "/service-area/fresno" },
	{ name: "Clovis", state: "CA", href: "/service-area/clovis" },
	{ name: "Sanger", state: "CA", href: "/service-area/sanger" },
	{ name: "Madera", state: "CA", href: "/service-area/madera" },
	{ name: "Oakhurst", state: "CA", href: "/service-area/oakhurst" },
];

/* Location pin icon (inline SVG) */
function PinIcon() {
	return (
		<svg
			className="w-5 h-5 shrink-0"
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
		</svg>
	);
}

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.2 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const } },
};

export default function ServiceAreasSection() {
	return (
		<section className="relative overflow-hidden">
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage:
						"url('/services/lot-and-land-clearing/IMG_7100.JPEG')",
				}}
			/>
			{/* Dark-blue overlay */}
			<div
				className="absolute inset-0"
				style={{ background: "linear-gradient(180deg, rgba(15,31,60,0.92) 0%, rgba(10,20,48,0.96) 100%)" }}
			/>

			<div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 text-xs font-bold uppercase tracking-widest"
					style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#ef4444" }}
				>
					<span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "#ef4444" }} />
					Service Areas
				</motion.div>

				{/* Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="font-tenor-sans font-bold text-white leading-tight mb-6"
					style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
				>
					We Are a Locally Owned Company That Prides Ourselves in Providing the Best Service Possible for the Residents of{" "}
					<span className="underline decoration-2 underline-offset-4" style={{ textDecorationColor: "#22C55E" }}>
						Fresno
					</span>
					,{" "}
					<span className="underline decoration-2 underline-offset-4" style={{ textDecorationColor: "#22C55E" }}>
						Clovis
					</span>
					,{" "}
					<span className="underline decoration-2 underline-offset-4" style={{ textDecorationColor: "#22C55E" }}>
						Madera
					</span>
					,{" "}
					<span className="underline decoration-2 underline-offset-4" style={{ textDecorationColor: "#22C55E" }}>
						Sanger
					</span>
					,{" "}
					<span className="underline decoration-2 underline-offset-4" style={{ textDecorationColor: "#22C55E" }}>
						Fowler
					</span>
					,{" "}
					<span className="underline decoration-2 underline-offset-4" style={{ textDecorationColor: "#22C55E" }}>
						Reedley
					</span>{" "}
					and the Surrounding&nbsp;Areas
				</motion.h2>

				{/* Safety note */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.5, delay: 0.25 }}
					className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-14 leading-relaxed"
				>
					We take safety very seriously and carry liability insurance to protect the homeowner.
				</motion.p>

				{/* Area buttons */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto"
				>
					{SERVICE_AREAS.map((area) => (
						<motion.div key={area.name} variants={itemVariants}>
							<Link
								href={area.href}
								scroll={true}
								onClick={() => { setTimeout(() => window.scrollTo(0, 0), 0); }}
								className="service-area-btn group flex items-center gap-3 rounded-full px-6 py-3.5 sm:px-7 sm:py-4 font-bold text-sm sm:text-base transition-all duration-300 w-full"
								style={{
									backgroundColor: "rgba(255,255,255,0.08)",
									border: "1px solid rgba(255,255,255,0.15)",
									color: "#ffffff",
								}}
							>
								<span
									className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110"
									style={{ backgroundColor: "#ef4444" }}
								>
									<PinIcon />
								</span>
								<span className="flex-1 text-left">
									{area.name}, {area.state}
								</span>
								<svg
									className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
