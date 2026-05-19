"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaveReview from "@/components/LeaveReview";

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
	}

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
						<span className="text-white font-semibold">Contact Us</span>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
					</div>
					<h1
						className="font-tenor-sans text-white font-bold"
						style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
					>
						Contact Us
					</h1>
					<p className="mt-4 text-white/60 max-w-lg leading-relaxed">
						Get a free estimate or ask us anything — we&apos;re available 24/7.
					</p>
				</div>
			</section>

			{/* Contact info cards */}
			<section className="bg-white pt-16 pb-4 px-6">
				<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
					{[
						{
							icon: (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							),
							label: "Our Address",
							value: "2142 E Cromwell Ave, Fresno, CA 93720",
							href: "https://maps.google.com/?q=2142+E+Cromwell+Ave,+Fresno,+CA+93720",
						},
						{
							icon: (
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
								</svg>
							),
							label: "Phone — 24/7",
							value: "(559) 369-5748",
							href: "tel:+15593695748",
						},
						{
							icon: (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							),
							label: "Email",
							value: "treemaniac23@gmail.com",
							href: "mailto:treemaniac23@gmail.com",
						},
					].map((item) => (
						<a
							key={item.label}
							href={item.href}
							target={item.href.startsWith("http") ? "_blank" : undefined}
							rel={
								item.href.startsWith("http") ? "noopener noreferrer" : undefined
							}
							className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
						>
							<div
								className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white"
								style={{ backgroundColor: "#22C55E" }}
							>
								{item.icon}
							</div>
							<div>
								<p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
									{item.label}
								</p>
								<p className="font-semibold text-gray-800 text-sm leading-snug">
									{item.value}
								</p>
							</div>
						</a>
					))}
				</div>
			</section>

			{/* Form + Map */}
			<section className="bg-white py-16 px-6">
				<div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
					{/* Contact form */}
					<div className="flex-1">
						<div
							className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-white font-bold text-xs uppercase tracking-widest"
							style={{ backgroundColor: "#22C55E" }}
						>
							GET A FREE QUOTE <span>🌲</span>
						</div>
						<h2
							className="font-tenor-sans font-bold mb-6"
							style={{
								fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
								color: "#1B6B2A",
							}}
						>
							Send Us a Message
						</h2>

						{submitted ? (
							<div
								className="rounded-2xl p-10 text-center border"
								style={{ borderColor: "#22C55E", backgroundColor: "#f0fdf4" }}
							>
								<div
									className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
									style={{ backgroundColor: "#22C55E" }}
								>
									<svg
										className="w-8 h-8 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2.5}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3
									className="font-tenor-sans font-bold text-xl mb-2"
									style={{ color: "#1B6B2A" }}
								>
									Message Sent!
								</h3>
								<p className="text-gray-500 text-sm">
									We&apos;ll get back to you shortly. For urgent needs, call us
									at <strong>(559) 369-5748</strong> — we&apos;re available
									24/7.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="flex flex-col gap-4">
								<div className="flex flex-col sm:flex-row gap-4">
									<div className="flex-1 flex flex-col gap-1">
										<label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
											First Name
										</label>
										<input
											type="text"
											required
											placeholder="John"
											className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bright-green transition-all"
										/>
									</div>
									<div className="flex-1 flex flex-col gap-1">
										<label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
											Last Name
										</label>
										<input
											type="text"
											required
											placeholder="Smith"
											className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bright-green transition-all"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
										Phone Number
									</label>
									<input
										type="tel"
										required
										placeholder="(559) 000-0000"
										className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bright-green transition-all"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
										Email Address
									</label>
									<input
										type="email"
										required
										placeholder="john@example.com"
										className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bright-green transition-all"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
										Service Needed
									</label>
									<select
										required
										className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bright-green transition-all text-gray-700"
									>
										<option value="">Select a service...</option>
										<option>Tree Removal</option>
										<option>Emergency Tree Service</option>
										<option>Tree Trimming & Pruning</option>
										<option>Stump Grinding</option>
										<option>Lot & Land Clearing</option>
										<option>Residential Tree Services</option>
										<option>Commercial Tree Services</option>
										<option>Other</option>
									</select>
								</div>
								<div className="flex flex-col gap-1">
									<label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
										Message
									</label>
									<textarea
										rows={4}
										placeholder="Describe your project or ask a question..."
										className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-bright-green transition-all resize-y"
									/>
								</div>
								<button
									type="submit"
									className="text-white font-bold py-4 rounded-xl transition-colors text-sm mt-2"
									style={{ backgroundColor: "#1B6B2A" }}
								>
									Send Message — Get Free Quote
								</button>
							</form>
						)}
					</div>

					{/* Map */}
					<div className="lg:w-[45%] shrink-0 flex flex-col gap-4">
						<div
							className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white font-bold text-xs uppercase tracking-widest w-fit"
							style={{ backgroundColor: "#22C55E" }}
						>
							FIND US <span>🌲</span>
						</div>
						<h2
							className="font-tenor-sans font-bold"
							style={{
								fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
								color: "#1B6B2A",
							}}
						>
							Our Location
						</h2>
						<p className="text-gray-500 text-sm leading-relaxed">
							Based in Fresno, CA — serving the entire Central Valley including
							Clovis, Madera, Sanger, and Oakhurst.
						</p>
						<div
							className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-1"
							style={{ minHeight: "380px" }}
						>
							<iframe
								src="https://www.google.com/maps?q=2142+E+Cromwell+Ave,+Fresno,+CA+93720&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0, minHeight: "380px" }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Tree Maniac Tree Service Inc. - 2142 E Cromwell Ave, Fresno, CA 93720"
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
