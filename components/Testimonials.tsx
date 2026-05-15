"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Testimonials() {
	const widgetRef = useRef<HTMLDivElement>(null);
	const ref = useScrollReveal();

	useEffect(() => {
		if (widgetRef.current && !widgetRef.current.querySelector("script")) {
			const script = document.createElement("script");
			script.src =
				"https://cdn.trustindex.io/loader.js?d5b532771c1c8764fe26dc6d18f";
			script.defer = true;
			script.async = true;
			widgetRef.current.appendChild(script);
		}
	}, []);

	return (
		<section
			className="relative py-28 px-6 overflow-hidden"
			ref={ref}
		>
			{/* Mascot */}
			<div className="absolute -bottom-4 -right-2 sm:-bottom-2 sm:right-10 w-28 sm:w-40 z-0 pointer-events-none opacity-80">
				<Image
					src="/mascot.png"
					alt="Tree Maniac mascot"
					width={160}
					height={200}
					style={{ width: "auto", height: "auto" }}
					className="object-contain"
				/>
			</div>

			<div className="relative z-10 max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-xl px-8 py-16 lg:px-14 text-center reveal-scale">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-6 text-white font-bold text-xs uppercase tracking-[0.12em] badge-shimmer">
					TESTIMONIAL <span>🌲</span>
				</div>

				{/* Heading */}
				<h2
					className="font-tenor-sans font-bold mb-4"
					style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", color: "#3d5a0e" }}
				>
					What our happy clients <span className="gradient-text">say about us?</span>
				</h2>
				<p className="text-gray-500 mb-16 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "1.05rem" }}>
					Hear from satisfied clients across Fresno, CA who trust{" "}
					<strong className="text-gray-700">
						Tree Maniac Tree Service Inc.
					</strong>{" "}
					for professional tree removal, trimming, and emergency tree care.
				</p>

				{/* Trustindex Review Widget */}
				<div className="w-full flex justify-center">
					<div className="w-full min-h-[300px]" ref={widgetRef}></div>
				</div>
			</div>
		</section>
	);
}
