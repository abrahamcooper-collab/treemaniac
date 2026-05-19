"use client";

import { useState } from "react";

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

	return (
		<section className="py-20 px-6" style={{ backgroundColor: "#f8fdf8" }}>
			<div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

				{/* LEFT */}
				<div className="lg:w-[38%] shrink-0">
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						FREQUENTLY ASKED QUESTIONS <span>🌲</span>
					</div>
					<h2
						className="font-tenor-sans leading-tight mb-6"
						style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1B6B2A" }}
					>
						Do you have a question? Find answer here
					</h2>

					<p className="text-gray-500 text-sm mb-4">200+ satisfied customers</p>
					<div className="flex items-center">
						{avatars.map((src, i) => (
							<div
								key={i}
								className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
								style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: avatars.length - i }}
							>
								<img src={src} alt="" className="w-full h-full object-cover" />
							</div>
						))}
						<div
							className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
							style={{ marginLeft: "-10px", backgroundColor: "#22C55E" }}
						>
							+3
						</div>
					</div>
				</div>

				{/* RIGHT — accordion */}
				<div className="flex-1 flex flex-col gap-3">
					{faqs.map((faq, i) => {
						const isOpen = open === i;
						return (
							<div
								key={i}
								className="rounded-2xl overflow-hidden border transition-all duration-300"
								style={{
									borderColor: isOpen ? "#22C55E" : "#e5e7eb",
									backgroundColor: isOpen ? "#f0fdf4" : "#fff",
								}}
							>
								<button
									className="w-full flex items-center justify-between px-6 py-5 text-left"
									onClick={() => setOpen(isOpen ? null : i)}
								>
									<span
										className="font-semibold text-sm"
										style={{ color: isOpen ? "#1B6B2A" : "#374151" }}
									>
										{String(i + 1).padStart(2, "0")}. {faq.q}
									</span>
									<span
										className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4 text-white font-bold text-lg leading-none"
										style={{ backgroundColor: isOpen ? "#1B6B2A" : "#22C55E" }}
									>
										{isOpen ? "−" : "+"}
									</span>
								</button>
								{isOpen && (
									<div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
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
