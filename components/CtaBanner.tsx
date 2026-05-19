"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CtaBanner() {
	return (
		<section className="bg-white py-16 px-6">
			<motion.div 
				initial={{ opacity: 0, scale: 0.95, y: 30 }}
				whileInView={{ opacity: 1, scale: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="relative max-w-4xl mx-auto"
			>
				{/* Mascot peeking from top right */}
				<motion.div 
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="absolute -top-12 right-2 sm:-top-16 sm:-right-6 w-24 sm:w-32 z-20 pointer-events-none"
				>
					<Image
						src="/mascot.png"
						alt="Tree Maniac mascot"
						width={160}
						height={200}
						className="object-contain drop-shadow-xl"
					/>
				</motion.div>
				
				{/* Card */}
				<div
					className="relative overflow-hidden px-10 py-14 text-center rounded-3xl"
					style={{
						background: "linear-gradient(135deg, #0D0D0D 0%, #1B6B2A 60%, #22C55E 100%)",
					}}
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
					<div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
						style={{ background: "rgba(34,197,94,0.06)" }}
					/>

				<div className="relative z-10">
					<h2
						className="font-tenor-sans font-bold mb-8 leading-tight"
						style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#ffffff" }}
					>
						Transform your property with<br />Tree Maniac Tree Service Inc.!
					</h2>

					<a
						href="tel:+15593695748"
						className="inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full shadow-lg group transition-all duration-300 hover:scale-105"
						style={{
							background: "linear-gradient(135deg, #22C55E 0%, #16a34a 100%)",
							boxShadow: "0 4px 20px rgba(34,197,94,0.35)",
						}}
					>
						<div
							className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
							style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
						>
							<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
							</svg>
						</div>
						<div className="text-left leading-tight group-hover:text-green-100 transition-colors">
							<span className="text-xs uppercase tracking-widest opacity-75 block">GET INSTANT PRICE</span>
							<span className="text-base font-black">(559) 369-5748</span>
						</div>
					</a>
				</div>
			</div>
			</motion.div>
		</section>
	);
}
