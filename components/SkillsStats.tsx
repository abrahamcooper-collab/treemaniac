"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
	{ label: "Tree Removal", value: 95 },
	{ label: "Tree Trimming & Pruning", value: 92 },
	{ label: "Stump Grinding", value: 90 },
	{ label: "Lot & Land Clearing", value: 88 },
	{ label: "Emergency Tree Service", value: 98 },
];

export default function SkillsStats() {
	const [animated, setAnimated] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const obs = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) setAnimated(true); },
			{ threshold: 0.3 }
		);
		if (ref.current) obs.observe(ref.current);
		return () => obs.disconnect();
	}, []);

	return (
		<section className="py-20 px-6 overflow-hidden" style={{ backgroundColor: "#f8fdf8" }}>
			<div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">

				{/* LEFT — dark CTA card */}
				<motion.div 
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="lg:w-[38%] shrink-0 rounded-3xl flex flex-col justify-center items-center text-center px-10 py-14 relative overflow-hidden"
					style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #1B6B2A 60%, #22C55E 100%)" }}
				>
					{/* Decorative blobs */}
					<div
						className="absolute -top-16 -left-16 w-56 h-56 rounded-full"
						style={{ background: "rgba(34,197,94,0.12)" }}
					/>
					<div
						className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full"
						style={{ background: "rgba(255,255,255,0.04)" }}
					/>

					<div className="relative z-10">
						<p
							className="font-tenor-sans font-bold text-white leading-snug mb-6"
							style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}
						>
							Tree Maniac Tree Service Inc.<br />
							<span style={{ color: "#dcfce7" }}>Fresno, CA</span> and surrounding areas.
						</p>
						<div className="w-16 border-t mb-6 mx-auto" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
						<p className="text-white/70 text-sm mb-2 font-medium">Get an Instant Quote</p>
						<a
							href="tel:+15593695748"
							className="font-bold text-white text-lg transition-colors hover:text-green-200 group inline-block"
						>
							<span className="inline-block transition-transform group-hover:scale-110">(559) 369-5748</span>
						</a>
					</div>
				</motion.div>

				{/* RIGHT — skill bars */}
				<motion.div 
					ref={ref} 
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					className="flex-1 flex flex-col justify-center gap-5"
				>
					<div className="mb-2">
						<div
							className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-3 text-white font-bold text-xs uppercase tracking-widest"
							style={{ backgroundColor: "#22C55E" }}
						>
							KEY SKILLS & STRENGTHS <span>🌲</span>
						</div>
						<h2
							className="font-tenor-sans font-bold leading-tight"
							style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1B6B2A" }}
						>
							Why we are considered<br />the best in business
						</h2>
					</div>

					{skills.map((s, i) => (
						<motion.div 
							key={s.label}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
						>
							<div className="flex justify-between mb-1">
								<span className="text-sm font-semibold text-gray-700">{s.label}</span>
								<span className="text-sm font-bold" style={{ color: "#22C55E" }}>{s.value}</span>
							</div>
							<div className="h-2 rounded-full bg-gray-100 overflow-hidden">
								<div
									className="h-full rounded-full transition-all duration-1000 ease-out"
									style={{
										width: animated ? `${s.value}%` : "0%",
										backgroundColor: "#22C55E",
									}}
								/>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
