"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Testimonials() {
	const widgetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Trustindex scripts output immediately where they are injected,
		// so creating an element inside a wrapper is required in React setups.
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
			className="relative py-24 px-6 overflow-hidden"
			style={{
				background: "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)",
			}}
		>
			{/* Mascot placed safely at the bottom right behind text to ensure it does not overlap or hide anything */}
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

			<div className="relative z-10 max-w-5xl mx-auto text-center">
				{/* Badge */}
				<div
					className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white font-bold text-xs uppercase tracking-widest"
					style={{ backgroundColor: "#22C55E" }}
				>
					TESTIMONIAL <span>🌲</span>
				</div>

				{/* Heading */}
				<h2
					className="font-tenor-sans font-bold mb-3"
					style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1B6B2A" }}
				>
					What our happy clients say about us?
				</h2>
				<p className="text-gray-500 text-sm mb-16 max-w-xl mx-auto leading-relaxed">
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
