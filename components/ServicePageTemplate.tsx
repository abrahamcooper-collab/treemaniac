import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaveReview from "@/components/LeaveReview";
import FaqSection from "@/components/FaqSection";

const allServices = [
	{ label: "Tree Removal", href: "/services/tree-removal" },
	{ label: "Emergency Tree Service", href: "/services/emergency-tree-service" },
	{ label: "Tree Trimming & Pruning", href: "/services/tree-trimming" },
	{ label: "Stump Grinding", href: "/services/stump-grinding" },
	{ label: "Lot & Land Clearing", href: "/services/lot-clearing" },
	{ label: "Residential Tree Services", href: "/services/residential-tree-services" },
	{ label: "Commercial Tree Services", href: "/services/commercial-tree-services" },
];

export interface ServicePageProps {
	title: string;
	slug: string;
	heroBgImage: string;
	heroImage: string;
	intro: string;
	importantNotes?: string[];
	whyChoosePoints: { heading: string; body: string }[];
	keywords?: string[];
}

export default function ServicePageTemplate({
	title,
	slug,
	heroBgImage,
	heroImage,
	intro,
	importantNotes,
	whyChoosePoints,
}: ServicePageProps) {
	return (
		<>
			<Navbar />

			{/* Page Hero */}
			<section
				className="relative pt-40 pb-20 px-6 overflow-hidden"
			>
				{/* Background image */}
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url('${heroBgImage}')` }}
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/50" />
				<div className="max-w-4xl mx-auto relative z-10">
					<div
						className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-sm font-medium"
						style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
					>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
						<Link href="/" className="hover:text-white transition-colors">Home</Link>
						<span>·</span>
						<Link href="/services" className="hover:text-white transition-colors">Services</Link>
						<span>·</span>
						<span className="text-white font-semibold">{title}</span>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
					</div>

					<h1 className="font-tenor-sans text-white font-bold" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", wordBreak: "keep-all", overflowWrap: "normal" }}>
						{title}
					</h1>

					<div className="mt-8">
						<a
							href="tel:+15593695748"
							className="inline-block bg-white font-bold text-sm px-8 py-3 rounded-full transition-colors hover:bg-green-50"
							style={{ color: "#3d5a0e" }}
						>
							Get Instant Price
						</a>
					</div>
				</div>
			</section>

			{/* Main content */}
			<section className="py-16 px-6">
				<div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-lg px-8 py-14 lg:px-14 flex flex-col lg:flex-row gap-12">

					{/* Left — main content */}
					<div className="flex-1 min-w-0">
						{/* Hero image */}
						<div className="relative w-full overflow-hidden rounded-2xl mb-8" style={{ height: "420px" }}>
							<Image
								src={heroImage}
								alt={title}
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover object-center"
							/>
						</div>

						{/* Intro */}
						<h2 className="font-tenor-sans font-bold mb-4" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#3d5a0e" }}>
							Tree Maniac&apos;s {title}
						</h2>
						<p className="text-gray-600 leading-relaxed mb-8">{intro}</p>


						{/* Important Notes */}
						{importantNotes && importantNotes.length > 0 && (
							<div className="mb-8">
								<h3 className="font-tenor-sans font-bold text-gray-800 mb-4" style={{ fontSize: "1.25rem" }}>
									Important Notes
								</h3>
								<ul className="flex flex-col gap-2">
									{importantNotes.map((note, i) => (
										<li key={i} className="flex items-start gap-3 text-gray-600">
											<span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#8cb11c" }}>
												<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
												</svg>
											</span>
											{note}
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Why Choose Us */}
						<h3 className="font-tenor-sans font-bold text-gray-800 mb-4" style={{ fontSize: "1.25rem" }}>
							Why choose our {title} services?
						</h3>
						<p className="text-gray-500 mb-5">
							Choosing <strong className="text-gray-700">Tree Maniac Tree Service Inc.</strong> means dependable service, professional care, and results you can trust.
						</p>
						<ul className="flex flex-col gap-4">
							{whyChoosePoints.map((p, i) => (
								<li key={i} className="flex items-start gap-3">
									<span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#8cb11c" }}>
										<svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
										</svg>
									</span>
									<p className="text-gray-600 text-sm leading-relaxed">
										<strong className="text-gray-800">{p.heading}:</strong> {p.body}
									</p>
								</li>
							))}
						</ul>
					</div>

					{/* Right sidebar */}
					<div className="lg:w-72 shrink-0 flex flex-col gap-6">

						{/* Services list */}
						<div>
							<ul className="flex flex-col gap-2">
								{allServices.map((s) => (
									<li key={s.href}>
										<Link
											href={s.href}
											className="flex items-center justify-between px-5 py-4 rounded-xl border text-sm font-medium transition-colors group"
											style={{
												borderColor: s.href === `/services/${slug}` ? "#8cb11c" : "#e5e7eb",
												backgroundColor: s.href === `/services/${slug}` ? "#f0fdf4" : "white",
												color: s.href === `/services/${slug}` ? "#5a7510" : "#374151",
											}}
										>
											<div className="flex items-center gap-3">
												<span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#f0fdf4" }}>
													<svg className="w-4 h-4" fill="none" stroke="#8cb11c" strokeWidth={1.8} viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0v9m0 0l3-3m-3 3l-3-3" />
													</svg>
												</span>
												{s.label}
											</div>
											<svg className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* CTA card */}
						<div
							className="rounded-2xl p-6"
							style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
						>
							<p className="font-tenor-sans font-bold text-gray-800 mb-4" style={{ fontSize: "1.1rem" }}>
								Get best Consultancy Now
							</p>
							<div
								className="flex items-center gap-3 p-4 rounded-xl"
								style={{ backgroundColor: "white", border: "1px solid #e5e7eb" }}
							>
								<div
									className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
									style={{ backgroundColor: "#eef5d8" }}
								>
									<svg className="w-5 h-5" fill="#8cb11c" viewBox="0 0 24 24">
										<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
									</svg>
								</div>
								<div className="border-l pl-3" style={{ borderColor: "#8cb11c" }}>
									<p className="text-xs text-gray-500 font-medium mb-0.5">Need Help? Call Us Now</p>
									<a
										href="tel:+15593695748"
										className="font-bold text-base transition-colors hover:opacity-80"
										style={{ color: "#8cb11c" }}
									>
										(559) 369-5748
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FaqSection />

			{/* CTA Banner */}
			<section className="py-12 px-6">
				<div
					className="relative max-w-4xl mx-auto overflow-hidden px-10 py-14 text-center"
					style={{
						borderRadius: "2.5rem",
						background: "linear-gradient(135deg, #8cb11c 0%, #5a7510 50%, #0D0D0D 100%)",
					}}
				>
					<div className="absolute -top-10 -left-10 w-52 h-52 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
					<div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full opacity-15" style={{ background: "rgba(255,255,255,0.2)" }} />
					<div className="relative z-10">
						<h2 className="font-tenor-sans font-bold text-white mb-8 leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}>
							Transform your property with<br />Tree Maniac Tree Service Inc.!
						</h2>
						<a
							href="tel:+15593695748"
							className="inline-flex items-center gap-3 text-white font-bold px-6 py-4 rounded-full transition-colors"
							style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)" }}
						>
							<div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
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
			</section>

			<LeaveReview />
			<Footer />
		</>
	);
}
