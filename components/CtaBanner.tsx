import Link from "next/link";
import Image from "next/image";

export default function CtaBanner() {
	return (
		<section className="bg-white py-16 px-6">
			<div className="relative max-w-4xl mx-auto">
				{/* Mascot peeking from top right */}
				<div className="absolute -top-12 right-2 sm:-top-16 sm:-right-6 w-24 sm:w-32 z-20 pointer-events-none">
					<Image
						src="/mascot.png"
						alt="Tree Maniac mascot"
						width={160}
						height={200}
						className="object-contain drop-shadow-xl"
					/>
				</div>
				
				{/* Card — light green gradient bg with dark text (matching their light cyan CTA) */}
				<div
					className="relative overflow-hidden px-10 py-14 text-center"
					style={{
						borderRadius: "2.5rem",
						background: "linear-gradient(135deg, #dcfce7 0%, #f0fdf4 50%, #bbf7d0 100%)",
						border: "1px solid #bbf7d0",
					}}
				>
				{/* Decorative blobs */}
				<div
					className="absolute -top-10 -left-10 w-52 h-52 rounded-full opacity-30"
					style={{ background: "rgba(34,197,94,0.15)" }}
				/>
				<div
					className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full opacity-20"
					style={{ background: "rgba(27,107,42,0.1)" }}
				/>

				<div className="relative z-10">
					<h2
						className="font-tenor-sans font-bold mb-8 leading-tight"
						style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1B6B2A" }}
					>
						Transform your property with<br />Tree Maniac Tree Service Inc.!
					</h2>

					<a
						href="tel:+15593695748"
						className="inline-flex items-center gap-3 text-white font-bold px-6 py-4 rounded-full transition-colors shadow-lg"
						style={{ backgroundColor: "#1B6B2A" }}
					>
						<div
							className="w-9 h-9 rounded-full flex items-center justify-center"
							style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
						>
							<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
							</svg>
						</div>
						<div className="text-left leading-tight">
							<span className="text-xs uppercase tracking-widest opacity-75 block">GET INSTANT PRICE</span>
							<span className="text-base font-black">(559) 369-5748</span>
						</div>
					</a>
				</div>
			</div>
			</div>
		</section>
	);
}
