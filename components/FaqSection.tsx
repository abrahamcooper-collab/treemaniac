"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
	{
		q: "What areas do you serve?",
		a: "We proudly provide tree services across Fresno, Clovis, Madera, Sanger, Oakhurst, and the surrounding Central Valley communities.",
	},
	{
		q: "Do you offer affordable pricing?",
		a: "Yes — Tree Maniac offers free estimates with no hidden fees. We provide competitive, transparent pricing for every job, big or small.",
	},
	{
		q: "Are your services available year-round?",
		a: "Absolutely. Our crew is available 24/7, 365 days a year — including holidays — for routine tree care and emergency storm response.",
	},
	{
		q: "How reliable is your service?",
		a: "We show up on time, complete every job right the first time, and leave your property clean. Our reputation is built on trust and consistency.",
	},
];

const avatars = [
	"/services/tree-removal/IMG_0146.JPEG",
	"/services/tree-trimming/IMG_1271.JPEG",
	"/services/stump-trimming/IMG_5892.JPEG",
];

export default function FaqSection() {
	const [open, setOpen] = useState<number | null>(0);
	const ref = useScrollReveal();

	return (
		<section className="py-24 px-6" ref={ref}>
			<div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-xl px-8 py-16 lg:px-14 flex flex-col lg:flex-row gap-14 items-start">

				{/* LEFT */}
				<div className="lg:w-[38%] shrink-0 reveal-left">
					<div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-6 text-white font-bold text-xs uppercase tracking-[0.12em] badge-shimmer">
						FREQUENTLY ASKED QUESTIONS <span>🌲</span>
					</div>
					<h2
						className="font-tenor-sans leading-tight mb-7"
						style={{ fontSize: "clamp(2.2rem, 4.5vw, 3rem)", color: "#3d5a0e" }}
					>
						Do you have a question? <span className="gradient-text">Find answer here</span>
					</h2>

					<p className="text-gray-500 mb-5" style={{ fontSize: "1.05rem" }}>200+ satisfied customers</p>
					<div className="flex items-center">
						{avatars.map((src, i) => (
							<div
								key={i}
								className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md"
								style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: avatars.length - i }}
							>
								<img src={src} alt="" className="w-full h-full object-cover" />
							</div>
						))}
						<div
							className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md badge-shimmer"
							style={{ marginLeft: "-10px" }}
						>
							+3
						</div>
					</div>
				</div>

				{/* RIGHT — accordion */}
				<div className="flex-1 flex flex-col gap-3 reveal-right">
					{faqs.map((faq, i) => {
						const isOpen = open === i;
						return (
							<div
								key={i}
								className="rounded-2xl overflow-hidden border transition-all duration-300"
								style={{
									borderColor: isOpen ? "#8cb11c" : "#e5e7eb",
									backgroundColor: isOpen ? "#f0fdf4" : "#fff",
								}}
							>
								<button
									className="w-full flex items-center justify-between px-6 py-6 text-left"
									onClick={() => setOpen(isOpen ? null : i)}
								>
									<span
										className="font-semibold"
										style={{ color: isOpen ? "#3d5a0e" : "#374151", fontSize: "1.05rem" }}
									>
										{String(i + 1).padStart(2, "0")}. {faq.q}
									</span>
									<span
										className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 text-white font-bold text-lg leading-none transition-transform"
										style={{
											background: isOpen ? "linear-gradient(135deg, #5a7510, #8cb11c)" : "#8cb11c",
											transform: isOpen ? "rotate(45deg)" : "rotate(0)",
										}}
									>
										+
									</span>
								</button>
								{isOpen && (
									<div className="px-6 pb-6 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
										{faq.a}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
