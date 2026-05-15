"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
	{ label: "Tree Removal", value: 95 },
	{ label: "Tree Trimming & Pruning", value: 92 },
	{ label: "Stump Grinding", value: 90 },
	{ label: "Lot & Land Clearing", value: 88 },
	{ label: "Emergency Tree Service", value: 98 },
];

export default function SkillsStats() {
	const [animated, setAnimated] = useState(false);
	const barRef = useRef<HTMLDivElement>(null);
	const ref = useScrollReveal();

	useEffect(() => {
		const obs = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) setAnimated(true); },
			{ threshold: 0.3 }
		);
		if (barRef.current) obs.observe(barRef.current);
		return () => obs.disconnect();
	}, []);

	return (
		<section className="py-24 px-6" ref={ref}>
			<div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-xl px-8 py-16 lg:px-14 flex flex-col lg:flex-row gap-10 items-stretch">

				{/* LEFT — dark CTA card */}
				<div
					className="lg:w-[38%] shrink-0 rounded-3xl flex flex-col justify-center items-center text-center px-10 py-16 reveal-left"
					style={{ background: "linear-gradient(150deg, #1a1a1a 0%, #0D0D0D 100%)" }}
				>
					<p
						className="font-tenor-sans font-bold text-white leading-snug mb-7"
						style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)" }}
					>
						Tree Maniac Tree Service Inc.<br />
						<span style={{ color: "#8cb11c" }}>Fresno, CA</span> and surrounding areas.
					</p>
					<div className="w-16 border-t mb-7" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
					<p className="text-white/50 mb-2" style={{ fontSize: "1rem" }}>Get an Instant Quote</p>
					<a
						href="tel:+15593695748"
						className="font-bold text-white text-xl transition-colors hover:text-green-400"
					>
						(559) 369-5748
					</a>
				</div>

				{/* RIGHT — skill bars */}
				<div ref={barRef} className="flex-1 flex flex-col justify-center gap-6 reveal-right">
					<div className="mb-3">
						<div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-4 text-white font-bold text-xs uppercase tracking-[0.12em] badge-shimmer">
							KEY SKILLS & STRENGTHS <span>🌲</span>
						</div>
						<h2
							className="font-tenor-sans font-bold leading-tight"
							style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#3d5a0e" }}
						>
							Why we are considered<br />the <span className="gradient-text">best in business</span>
						</h2>
					</div>

					{skills.map((s) => (
						<div key={s.label}>
							<div className="flex justify-between mb-2">
								<span className="font-semibold text-gray-700" style={{ fontSize: "1rem" }}>{s.label}</span>
								<span className="font-bold" style={{ color: "#8cb11c", fontSize: "1rem" }}>{s.value}%</span>
							</div>
							<div className="h-3 rounded-full bg-gray-100 overflow-hidden">
								<div
									className="h-full rounded-full transition-all duration-1000 ease-out"
									style={{
										width: animated ? `${s.value}%` : "0%",
										background: "linear-gradient(90deg, #5a7510, #8cb11c, #b8d94e)",
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
