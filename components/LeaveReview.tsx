import Image from "next/image";

const GOOGLE_REVIEW_URL =
	"https://www.google.com/search?q=Tree+Maniac+Tree+Service+Inc.&stick=H4sIAAAAAAAA_-NgU1I1qLCwMEk2TzJOsTSySEo1TE2yMqhINE1JM7FIMjFKMTQzsbRIXsQqG1KUmqrgm5iXmZisAGYHpxaVZSanKnjmJesBAIy9QDxJAAAA&hl=en&mat=Cbj2EtEqEPMlElcBTVDHnkymhtjumjvm6vBcGtngpuoQLr72An7-JAkgH6yBFLyeZJHKCJ2yhvSVKK4a1SlTtG0TB3c_mPjdLX4ixw_SE0uGl-qF27JBitbVwwZ1RxkAM_A&authuser=0";

export default function LeaveReview() {
	return (
		<section className="bg-white py-16 px-6">
			<div className="relative max-w-4xl mx-auto">
				{/* Mascot peeking from bottom left */}
				<div
					className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-12 w-24 sm:w-36 z-20 pointer-events-none"
					style={{ transform: "scaleX(-1)" }}
				>
					<Image
						src="/mascot.png"
						alt="Tree Maniac mascot"
						width={160}
						height={200}
						className="object-contain drop-shadow-xl"
					/>
				</div>

				<div
					className="relative overflow-hidden rounded-3xl"
					style={{
						background:
							"linear-gradient(135deg, #0D0D0D 0%, #1B6B2A 60%, #22C55E 100%)",
					}}
				>
					{/* Decorative circles */}
					<div
						className="absolute -top-16 -right-16 w-56 h-56 rounded-full"
						style={{ background: "rgba(34,197,94,0.12)" }}
					/>
					<div
						className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full"
						style={{ background: "rgba(255,255,255,0.04)" }}
					/>
					<div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
						style={{ background: "rgba(34,197,94,0.06)" }}
					/>

					<div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-8 sm:px-14 py-14">
						{/* Left content */}
						<div className="flex-1 text-center lg:text-left">
							<div
								className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 font-bold text-xs uppercase tracking-widest"
								style={{
									backgroundColor: "rgba(255,255,255,0.1)",
									color: "rgba(255,255,255,0.7)",
								}}
							>
								<svg className="w-4 h-4" fill="#FBBF24" viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
								</svg>
								YOUR FEEDBACK MATTERS
							</div>

							<h2
								className="font-tenor-sans font-bold text-white mb-4 leading-tight"
								style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
							>
								Leave Us a Review
							</h2>

							<p
								className="text-sm leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
								style={{ color: "rgba(255,255,255,0.6)" }}
							>
								Your experience matters to us! If we've earned your trust, we'd
								love for you to share a few words on Google. Your review helps
								us grow and helps other homeowners find reliable tree care.
							</p>

							{/* Stars row */}
							<div className="flex items-center gap-1 mb-8 justify-center lg:justify-start">
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className="w-7 h-7"
										fill="#FBBF24"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
								))}
								<span className="ml-2 text-white/60 text-sm font-medium">
									5.0
								</span>
							</div>

							{/* CTA button */}
							<a
								href={GOOGLE_REVIEW_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
								style={{
									background:
										"linear-gradient(135deg, #22C55E 0%, #16a34a 100%)",
									boxShadow: "0 4px 20px rgba(34,197,94,0.35)",
								}}
							>
								{/* Google "G" icon */}
								<svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
									<path
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
										fill="#4285F4"
									/>
									<path
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										fill="#34A853"
									/>
									<path
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										fill="#FBBC05"
									/>
									<path
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										fill="#EA4335"
									/>
								</svg>
								Leave Us a Review on Google
								<svg
									className="w-4 h-4 transition-transform group-hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									strokeWidth={2.5}
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</a>
						</div>

						{/* Right — Logo / visual */}
						<div className="shrink-0 hidden lg:flex flex-col items-center gap-4">
							<div
								className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-2xl"
								style={{ borderColor: "rgba(255,255,255,0.15)" }}
							>
								<Image
									src="/logo.png"
									alt="Tree Maniac Tree Service Inc."
									width={128}
									height={128}
									className="object-cover w-full h-full"
								/>
							</div>
							<p className="text-white font-bold text-sm text-center leading-snug">
								Tree Maniac
								<br />
								<span className="text-white/50 text-xs font-medium">
									Tree Service Inc.
								</span>
							</p>
							{/* Google badge */}
							<div
								className="flex items-center gap-2 rounded-full px-4 py-2 mt-1"
								style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
							>
								<svg className="w-4 h-4" viewBox="0 0 24 24">
									<path
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
										fill="#4285F4"
									/>
									<path
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										fill="#34A853"
									/>
									<path
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										fill="#FBBC05"
									/>
									<path
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										fill="#EA4335"
									/>
								</svg>
								<span className="text-white/70 text-xs font-semibold">
									Google Reviews
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
