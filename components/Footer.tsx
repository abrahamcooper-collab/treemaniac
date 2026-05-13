import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
	{ label: "Tree Removal", href: "/services/tree-removal" },
	{ label: "Emergency Tree Service", href: "/services/emergency-tree-service" },
	{ label: "Tree Trimming & Pruning", href: "/services/tree-trimming" },
	{ label: "Stump Grinding", href: "/services/stump-grinding" },
	{ label: "Lot & Land Clearing", href: "/services/lot-clearing" },
	{
		label: "Residential Tree Services",
		href: "/services/residential-tree-services",
	},
];

const quickLinks = [
	{ label: "Home", href: "/" },
	{ label: "About Us", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Areas We Serve", href: "/service-area/fresno" },
	{ label: "FAQs", href: "/faqs" },
	{ label: "Contact Us", href: "/contact" },
];

export default function Footer() {
	return (
		<footer className="bg-green-gradient">
			<div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					{/* Col 1 — Logo + info + socials */}
					<div>
						<Image
							src="/logo.png"
							alt="Tree Maniac Tree Service Inc."
							width={80}
							height={80}
							className="mb-4"
						/>
						<div
							className="flex flex-col gap-2 text-sm"
							style={{ color: "rgba(255,255,255,0.55)" }}
						>
							<span className="flex items-start gap-2">
								<svg
									className="w-4 h-4 shrink-0 mt-0.5"
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
								2142 E Cromwell Ave, Fresno, CA 93720
							</span>
							<a
								href="mailto:treemaniac23@gmail.com"
								className="flex items-center gap-2 hover:text-white transition-colors"
							>
								<svg
									className="w-4 h-4 shrink-0"
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
								treemaniac23@gmail.com
							</a>
							<a
								href="tel:+15593695748"
								className="flex items-center gap-2 hover:text-white transition-colors"
							>
								<svg
									className="w-4 h-4 shrink-0"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
								</svg>
								(559) 369-5748
							</a>
						</div>
					</div>

					{/* Col 2 — Our Services */}
					<div>
						<h4 className="text-white font-bold mb-5 font-tenor-sans">
							Our Services
						</h4>
						<ul className="flex flex-col gap-2">
							{serviceLinks.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										className="text-sm transition-colors hover:text-white"
										style={{ color: "rgba(255,255,255,0.5)" }}
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Col 3 — Quick Links */}
					<div>
						<h4 className="text-white font-bold mb-5 font-tenor-sans">Links</h4>
						<ul className="flex flex-col gap-2">
							{quickLinks.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										className="text-sm transition-colors hover:text-white"
										style={{ color: "rgba(255,255,255,0.5)" }}
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Col 4 — Operating Hours */}
					<div>
						<h4 className="text-white font-bold mb-5 font-tenor-sans">
							Operating Hours
						</h4>
						<ul
							className="flex flex-col gap-2 text-sm"
							style={{ color: "rgba(255,255,255,0.5)" }}
						>
							<li>Mon – Fri &nbsp;&nbsp; Open 24/7</li>
							<li>Saturday &nbsp;&nbsp; Open 24/7</li>
							<li>Sunday &nbsp;&nbsp;&nbsp;&nbsp; Open 24/7</li>
						</ul>
						<div className="mt-6">
							<p className="text-white font-semibold text-sm mb-1">
								Contact us for an instant price:
							</p>
							<a
								href="tel:+15593695748"
								className="font-black text-base transition-colors"
								style={{ color: "#22C55E" }}
							>
								(559) 369-5748
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div
					className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
					style={{
						borderTop: "1px solid rgba(255,255,255,0.07)",
						color: "rgba(255,255,255,0.3)",
					}}
				>
					<p>© 2025 Tree Maniac Tree Service Inc. All Rights Reserved.</p>
					<div className="flex flex-col sm:flex-row items-center gap-3">
						<a
							href="https://businessupscalersllc.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white font-extrabold text-sm tracking-wide hover:text-green-400 transition-colors"
						>
							Built by Upscalers
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
