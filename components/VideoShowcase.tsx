"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function VideoShowcase() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(video);
		return () => observer.disconnect();
	}, []);

	return (
		<section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-8 sm:mb-10 md:mb-14"
				>
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 sm:mb-5 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						SEE US IN ACTION <span>🌲</span>
					</div>
					<h2
						className="font-tenor-sans font-bold leading-tight"
						style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#1B6B2A" }}
					>
						Our Work Speaks for Itself
					</h2>
				</motion.div>

				{/* Video container */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96, y: 30 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl mx-auto"
					style={{
						background: "linear-gradient(135deg, #0D0D0D 0%, #1B6B2A 60%, #22C55E 100%)",
						padding: "3px",
						maxWidth: "100%",
					}}
				>
					<div className="relative rounded-[calc(1rem-3px)] sm:rounded-[calc(1.5rem-3px)] overflow-hidden bg-black">
						<video
							ref={videoRef}
							src="/video.mov"
							muted
							loop
							playsInline
							preload="metadata"
							className="w-full block"
							style={{ maxHeight: "80vh", objectFit: "contain" }}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

