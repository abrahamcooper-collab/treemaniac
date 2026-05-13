import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaveReview from "@/components/LeaveReview";
import FaqSection from "@/components/FaqSection";

export const metadata = {
	title: "FAQs | Tree Maniac Tree Service Inc. | Fresno, CA",
	description:
		"Frequently asked questions about Tree Maniac's tree removal, trimming, stump grinding & emergency tree services in Fresno, CA. Call (559) 369-5748.",
};

export default function FaqsPage() {
	return (
		<>
			<Navbar />

			{/* Hero */}
			<section
				className="relative pt-40 pb-20 px-6"
				style={{
					background:
						"linear-gradient(135deg, #22C55E 0%, #1B6B2A 50%, #0D0D0D 100%)",
				}}
			>
				<div className="max-w-4xl mx-auto">
					<div
						className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-sm font-medium"
						style={{
							backgroundColor: "rgba(255,255,255,0.12)",
							color: "rgba(255,255,255,0.75)",
						}}
					>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
						<Link href="/" className="hover:text-white transition-colors">
							Home
						</Link>
						<span>·</span>
						<span className="text-white font-semibold">FAQs</span>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
					</div>
					<h1
						className="font-tenor-sans text-white font-bold"
						style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
					>
						FAQs
					</h1>
					<p className="mt-4 text-white/60 max-w-lg leading-relaxed">
						Answers to the most common questions about our tree services in
						Fresno, CA.
					</p>
					<div className="mt-8">
						<a
							href="tel:+15593695748"
							className="inline-block bg-white font-bold text-sm px-8 py-3 rounded-full transition-colors hover:bg-green-50"
							style={{ color: "#1B6B2A" }}
						>
							Get Instant Price
						</a>
					</div>
				</div>
			</section>

			{/* FAQ accordion */}
			<FaqSection />

			{/* Map section */}
			<section className="bg-white pb-16 px-6">
				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col lg:flex-row gap-0 overflow-hidden rounded-2xl shadow-lg">
						{/* Left CTA panel */}
						<div
							className="lg:w-72 shrink-0 flex flex-col justify-center items-center text-center px-10 py-14"
							style={{ backgroundColor: "#1B6B2A" }}
						>
							<div className="mb-6">
								<svg
									className="w-14 h-14 mx-auto opacity-60"
									fill="none"
									stroke="white"
									strokeWidth={1.2}
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<p className="font-tenor-sans font-bold text-white text-xl mb-6 leading-snug">
								Still have questions? We&apos;re here 24/7
							</p>
							<div
								className="w-full border-t mb-6"
								style={{ borderColor: "rgba(255,255,255,0.2)" }}
							/>
							<p className="text-white/60 text-xs mb-1">Call Us Now</p>
							<a
								href="tel:+15593695748"
								className="font-bold text-white text-lg hover:text-green-300 transition-colors"
							>
								(559) 369-5748
							</a>
							<div className="mt-6">
								<Link
									href="/contact"
									className="inline-block text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
									style={{ backgroundColor: "#22C55E" }}
								>
									Contact Us
								</Link>
							</div>
						</div>

						{/* Right: map */}
						<div className="flex-1 flex flex-col">
							<div className="p-8 pb-4">
								<h2
									className="font-tenor-sans font-bold mb-2"
									style={{
										fontSize: "clamp(1.4rem, 3vw, 2rem)",
										color: "#1B6B2A",
									}}
								>
									Visit Us in Fresno, CA
								</h2>
								<p className="text-gray-500 text-sm">
									2142 E Cromwell Ave, Fresno, CA 93720 — serving the entire
									Central Valley, available 24/7.
								</p>
							</div>
							<iframe
								src="https://www.google.com/maps?q=2142+E+Cromwell+Ave,+Fresno,+CA+93720&output=embed"
								width="100%"
								height="340"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Tree Maniac Tree Service Inc. - Fresno, CA"
							/>
						</div>
					</div>
				</div>
			</section>

			<LeaveReview />
			<Footer />
		</>
	);
}
