"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
	{ label: "Tree Removal", href: "/services/tree-removal" },
	{ label: "Emergency Tree Service", href: "/services/emergency-tree-service" },
	{ label: "Tree Trimming", href: "/services/tree-trimming" },
	{ label: "Stump Grinding", href: "/services/stump-grinding" },
	{ label: "Lot & Land Clearing", href: "/services/lot-clearing" },
	{
		label: "Residential Tree Services",
		href: "/services/residential-tree-services",
	},
	{
		label: "Commercial Tree Services",
		href: "/services/commercial-tree-services",
	},
];

const areas = [
	{ label: "Fresno", href: "/service-area/fresno" },
	{ label: "Clovis", href: "/service-area/clovis" },
	{ label: "Madera", href: "/service-area/madera" },
	{ label: "Sanger", href: "/service-area/sanger" },
	{ label: "Oakhurst", href: "/service-area/oakhurst" },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [areasOpen, setAreasOpen] = useState(false);

	return (
		<header className="absolute top-0 left-0 right-0 z-50">
			{/* Desktop: floating pill navbar | Mobile: full-width normal navbar */}
			<div className="lg:flex lg:justify-center lg:px-4 lg:pt-5">
				<nav className="w-full lg:max-w-7xl bg-white lg:rounded-full shadow-xl flex items-center justify-between px-6 py-3">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 shrink-0">
						<Image
							src="/logo.png"
							alt="Fresno Tree Service Logo"
							width={56}
							height={56}
						/>
					</Link>

					{/* Desktop nav links */}
					<ul className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">
						<li>
							<Link href="/" className="text-forest-green nav-link">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-forest-green nav-link transition-colors"
							>
								About Us
							</Link>
						</li>
						{/* Services dropdown */}
						<li className="relative group">
							<button
								className="flex items-center gap-1 hover:text-forest-green nav-link transition-colors"
								onClick={() => setServicesOpen(!servicesOpen)}
							>
								Services
								<svg
									className="w-3 h-3 mt-0.5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2.5}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							<div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
								{services.map((s) => (
									<Link
										key={s.href}
										href={s.href}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-forest-green normal-case font-normal tracking-normal"
									>
										{s.label}
									</Link>
								))}
							</div>
						</li>
						{/* Areas dropdown */}
						<li className="relative group">
							<button
								className="flex items-center gap-1 hover:text-forest-green nav-link transition-colors"
								onClick={() => setAreasOpen(!areasOpen)}
							>
								Areas We Serve
								<svg
									className="w-3 h-3 mt-0.5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2.5}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							<div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
								{areas.map((a) => (
									<Link
										key={a.href}
										href={a.href}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-forest-green normal-case font-normal tracking-normal"
									>
										{a.label}
									</Link>
								))}
							</div>
						</li>
						<li>
							<Link
								href="/gallery"
								className="hover:text-forest-green nav-link transition-colors"
							>
								Gallery
							</Link>
						</li>
						<li>
							<Link
								href="/faqs"
								className="hover:text-forest-green nav-link transition-colors"
							>
								FAQs
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="hover:text-forest-green nav-link transition-colors"
							>
								Contact Us
							</Link>
						</li>
					</ul>

					{/* Phone + CTA (desktop only) */}
					<div className="hidden lg:flex items-center gap-3">
						<a
							href="tel:+15593695748"
							className="flex items-center gap-2 text-sm"
						>
							<div className="w-9 h-9 rounded-full bg-green-gradient flex items-center justify-center shrink-0">
								<svg
									className="w-4 h-4 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
								</svg>
							</div>
							<div className="leading-tight">
								<div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
									Call Us Now
								</div>
								<div className="font-bold text-gray-800 text-sm">
									(559) 369-5748
								</div>
							</div>
						</a>
						<Link
							href="/contact"
							className="bg-green-gradient hover:opacity-90 text-white font-bold text-sm px-5 py-3 rounded-full transition-opacity whitespace-nowrap border-none"
						>
							Get a Free Quote
						</Link>
					</div>

					{/* Mobile hamburger */}
					<button
						className="lg:hidden p-2 rounded-full hover:bg-gray-100"
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label="Toggle menu"
					>
						<svg
							className="w-6 h-6 text-gray-700"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{mobileOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</nav>
			</div>

			{/* Mobile contact strip — full-width thin bar below navbar */}
			<div
				className="lg:hidden w-full px-4 py-2 flex items-center justify-center gap-4"
				style={{ backgroundColor: "#1a1a1a" }}
			>
				<a
					href="tel:+15593695748"
					className="flex items-center gap-1.5 text-white text-xs font-medium hover:text-green-300 transition-colors"
				>
					<svg
						className="w-3.5 h-3.5 shrink-0"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
					</svg>
					+1 (559) 369-5748
				</a>
				<span
					className="w-px h-3.5"
					style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
				/>
				<a
					href="mailto:treemaniac23@gmail.com"
					className="flex items-center gap-1.5 text-white text-xs font-medium hover:text-green-300 transition-colors"
				>
					<svg
						className="w-3.5 h-3.5 shrink-0"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					treemaniac23@gmail.com
				</a>
			</div>

			{/* Mobile menu dropdown */}
			{mobileOpen && (
				<div className="lg:hidden bg-white shadow-2xl py-6 px-6 flex flex-col gap-4 border-t border-gray-100">
					<Link
						href="/"
						className="font-semibold text-forest-green"
						onClick={() => setMobileOpen(false)}
					>
						Home
					</Link>
					<Link
						href="/about"
						className="font-semibold text-gray-700"
						onClick={() => setMobileOpen(false)}
					>
						About Us
					</Link>
					<div>
						<button
							className="font-semibold text-gray-700 w-full text-left"
							onClick={() => setServicesOpen(!servicesOpen)}
						>
							Services ▾
						</button>
						{servicesOpen && (
							<div className="mt-2 ml-4 flex flex-col gap-2">
								{services.map((s) => (
									<Link
										key={s.href}
										href={s.href}
										className="text-sm text-gray-600"
										onClick={() => setMobileOpen(false)}
									>
										{s.label}
									</Link>
								))}
							</div>
						)}
					</div>
					<div>
						<button
							className="font-semibold text-gray-700 w-full text-left"
							onClick={() => setAreasOpen(!areasOpen)}
						>
							Areas We Serve ▾
						</button>
						{areasOpen && (
							<div className="mt-2 ml-4 flex flex-col gap-2">
								{areas.map((a) => (
									<Link
										key={a.href}
										href={a.href}
										className="text-sm text-gray-600"
										onClick={() => setMobileOpen(false)}
									>
										{a.label}
									</Link>
								))}
							</div>
						)}
					</div>
					<Link
						href="/gallery"
						className="font-semibold text-gray-700"
						onClick={() => setMobileOpen(false)}
					>
						Gallery
					</Link>
					<Link
						href="/faqs"
						className="font-semibold text-gray-700"
						onClick={() => setMobileOpen(false)}
					>
						FAQs
					</Link>
					<Link
						href="/contact"
						className="font-semibold text-gray-700"
						onClick={() => setMobileOpen(false)}
					>
						Contact Us
					</Link>
					<a
						href="tel:+15593695748"
						className="font-bold text-forest-green text-lg"
					>
						(559) 369-5748
					</a>
					<Link
						href="/contact"
						className="bg-green-gradient hover:opacity-90 text-white font-bold text-center py-3 rounded-full transition-opacity border-none block w-full"
						onClick={() => setMobileOpen(false)}
					>
						Get a Free Quote
					</Link>
				</div>
			)}
		</header>
	);
}
