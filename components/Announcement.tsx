import Image from "next/image";

export default function Announcement() {
	return (
		<section className="bg-white pt-10 pb-14 sm:pt-14 sm:pb-16 px-4 sm:px-6">
			<div className="relative max-w-3xl mx-auto">
				{/* Exclamation icon — half outside the card */}
				<div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
					<div
						className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
						style={{ backgroundColor: "#dc2626" }}
					>
						<svg
							className="w-6 h-6 text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-4h-2V7h2v6z" />
						</svg>
					</div>
				</div>

				{/* Main card */}
				<div
					className="relative overflow-visible rounded-2xl px-8 sm:px-14 pt-10 pb-8 text-center"
					style={{
						background:
							"linear-gradient(135deg, #22C55E 0%, #34d399 40%, #6ee7b7 100%)",
						boxShadow: "0 4px 30px rgba(34,197,94,0.2)",
					}}
				>
					{/* Badge */}
					<div className="flex justify-center mb-4">
						<span
							className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white"
							style={{ backgroundColor: "#0D0D0D" }}
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
							</span>
							Important Announcement
						</span>
					</div>

					{/* Text */}
					<p
						className="text-white font-medium leading-relaxed max-w-xl mx-auto"
						style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)" }}
					>
						We&apos;re proudly serving Fresno &amp; the Central Valley —
						providing professional tree removal, trimming, and emergency
						services to keep your property safe and beautiful!
					</p>
				</div>

				{/* Mascot — bottom right, outside the card */}
				<div className="absolute -bottom-14 sm:-bottom-20 -right-2 sm:-right-8 w-24 sm:w-32 z-10 pointer-events-none">
					<Image
						src="/mascot.png"
						alt="Tree Maniac mascot"
						width={160}
						height={200}
						style={{ width: "auto", height: "auto" }}
						className="object-contain drop-shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
}
