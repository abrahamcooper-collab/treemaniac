"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = [
	{
		label: "Affordable Pricing",
		title: "Affordable Pricing",
		body: "delivers trusted tree care with transparent, competitive pricing across Fresno, Clovis, Madera, Sanger, and surrounding areas — no hidden fees, ever.",
		bullets: ["Free Estimates on Every Job", "No Surprise or Hidden Fees", "Flexible Options for Any Budget"],
		img: "/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG",
	},
	{
		label: "Year-Round Care",
		title: "Year-Round Care",
		body: "is available 24/7, 365 days a year — including holidays — for routine tree care and emergency storm cleanup. Any season, any time.",
		bullets: ["Available Every Season & Holiday", "24/7 Emergency Response", "Consistent Service All Year Long"],
		img: "/services/tree-trimming/IMG_1267.JPEG",
	},
	{
		label: "Expert Employees",
		title: "Expert Employees",
		body: "brings licensed, insured, and experienced crew to every job in Fresno and the Central Valley. We deliver professional results with precision and care.",
		bullets: ["Licensed & Fully Insured Team", "Years of Hands-On Experience", "Professional Results Every Time"],
		img: "/services/tree-removal/IMG_0146.JPEG",
	},
	{
		label: "Reliable Service",
		title: "Reliable Service",
		body: "shows up on time, completes every job right the first time, and leaves your property clean — guaranteed. Our reputation is built on trust.",
		bullets: ["On-Time Arrivals, Every Visit", "Job Done Right the First Time", "Clean Property After Every Job"],
		img: "/services/lot-and-land-clearing/IMG_3518.JPEG",
	},
	{
		label: "Customer Satisfaction",
		title: "Customer Satisfaction",
		body: "delivers trusted tree care with 100% customer satisfaction across Fresno, Clovis, Madera, Sanger, and the surrounding Central Valley, CA.",
		bullets: ["Happy Clients Across Central Valley", "5-Star Ratings on Google", "Repeat Customers in Every Service Area"],
		img: "/services/stump-trimming/IMG_5892.JPEG",
	},
];

export default function WhyChooseUs() {
	const [active, setActive] = useState(4);
	const tab = tabs[active];

	return (
		<section className="relative bg-white overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				{/* Top: cyan-green left panel + photo right */}
				<div className="flex flex-col lg:flex-row" style={{ minHeight: "420px" }}>

					{/* LEFT — forest green panel */}
					<div
						className="relative flex flex-col justify-start px-10 pt-14 pb-0 lg:w-[42%] shrink-0"
						style={{ backgroundColor: "#1B6B2A" }}
					>
						<div
							className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 font-bold text-xs uppercase tracking-widest w-fit text-white"
							style={{ backgroundColor: "#155222" }}
						>
							WHY CHOOSE US <span>🌲</span>
						</div>

						<h2
							className="font-tenor-sans font-bold text-white leading-tight mb-10"
							style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
						>
							Premium Tree Services<br />You Can Rely On
						</h2>

						{/* Tab list */}
						<ul className="flex flex-col">
							{tabs.map((t, i) => (
								<li key={t.label}>
									<button
										onClick={() => setActive(i)}
										className="w-full text-left flex items-center gap-3 py-3 transition-all duration-200 hover:pl-2"
										style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
									>
										<span
											className="flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-200 text-sm font-semibold"
											style={
												active === i
													? { backgroundColor: "#22C55E", color: "#fff" }
													: { color: "rgba(255,255,255,0.8)" }
											}
										>
											<span style={{ fontSize: "0.7rem" }}>›</span>
											{t.label}
										</span>
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* RIGHT — photo */}
					<div className="relative flex-1 min-h-75 lg:min-h-0 overflow-hidden group">
						<Image key={tab.img} src={tab.img} alt={tab.label} fill className="object-cover object-center transition-all duration-700 group-hover:scale-105" />
					</div>
				</div>

				{/* Bottom: green strip left + dark content card right */}
				<div className="flex flex-col lg:flex-row">
					<div className="lg:w-[42%] shrink-0" style={{ backgroundColor: "#1B6B2A", minHeight: "60px" }} />
					<div 
						className="flex-1 px-10 py-10 relative overflow-hidden" 
						style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #1B6B2A 60%, #22C55E 100%)" }}
					>
						{/* Decorative blobs */}
						<div
							className="absolute -top-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
							style={{ background: "rgba(34,197,94,0.12)" }}
						/>
						<div
							className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
							style={{ background: "rgba(255,255,255,0.04)" }}
						/>

						<motion.div
							key={tab.title}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="relative z-10"
						>
							<h3
								className="font-tenor-sans font-bold text-white mb-4 leading-snug"
								style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
							>
								{tab.title}
							</h3>
							<p className="text-white/80 text-sm leading-relaxed mb-6 max-w-lg">
								<span className="font-semibold" style={{ color: "#dcfce7" }}>Tree Maniac Tree Service Inc.</span>{" "}
								{tab.body}
							</p>
							<ul className="flex flex-col gap-3">
								{tab.bullets.map((b) => (
									<li key={b} className="flex items-center gap-3">
										<span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#22C55E" }}>
											<svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
											</svg>
										</span>
										<span className="text-white font-medium text-sm">{b}</span>
									</li>
								))}
							</ul>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
