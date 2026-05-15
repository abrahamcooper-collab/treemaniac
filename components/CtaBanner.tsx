"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CtaBanner() {
	const ref = useScrollReveal();

	return (
		<section className="py-20 px-6" ref={ref}>
			<div className="relative max-w-4xl mx-auto reveal-scale">
				{/* Mascot peeking from top right */}
				<div className="absolute -top-14 right-2 sm:-top-18 sm:-right-8 w-28 sm:w-36 z-20 pointer-events-none">
					<Image
						src="/mascot.png"
						alt="Tree Maniac mascot"
						width={160}
						height={200}
						className="object-contain drop-shadow-xl"
					/>
				</div>
				
				<div
					className="relative overflow-hidden px-12 py-18 text-center"
					style={{
						borderRadius: "2.5rem",
						background: "linear-gradient(135deg, #8cb11c 0%, #5a7510 40%, #2d4508 70%, #0D0D0D 100%)",
					}}
				>
				{/* Decorative blobs */}
				<div
					className="absolute -top-14 -left-14 w-60 h-60 rounded-full opacity-20 animate-float-slow"
					style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)" }}
				/>
				<div
					className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full opacity-15"
					style={{ background: "radial-gradient(circle, rgba(184,217,78,0.3), transparent 70%)", animationDelay: "3s" }}
				/>

				<div className="relative z-10">
					<h2
						className="font-tenor-sans font-bold text-white mb-10 leading-tight"
						style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
					>
						Transform your property with<br />Tree Maniac Tree Service Inc.!
					</h2>

					<a
						href="tel:+15593695748"
						className="inline-flex items-center gap-4 text-white font-bold px-8 py-5 rounded-full transition-all btn-glow"
						style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", fontSize: "1.05rem" }}
					>
						<div
							className="w-11 h-11 rounded-full flex items-center justify-center"
							style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
						>
							<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
							</svg>
						</div>
						<div className="text-left leading-tight">
							<span className="text-xs uppercase tracking-widest opacity-75 block">GET INSTANT PRICE</span>
							<span className="text-lg font-black">(559) 369-5748</span>
						</div>
					</a>
				</div>
			</div>
			</div>
		</section>
	);
}
