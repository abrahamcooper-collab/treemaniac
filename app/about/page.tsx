import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaveReview from "@/components/LeaveReview";

const steps = [
	{
		num: "1",
		title: "Get a Quote",
		desc: "Fast instant quote by phone or contact form",
		img: "/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG",
	},
	{
		num: "2",
		title: "Schedule Service",
		desc: "Pick a time that works — same-day available",
		img: "/services/tree-trimming/IMG_1267.JPEG",
	},
	{
		num: "3",
		title: "We Do the Work",
		desc: "Our crew arrives on time and gets it done right",
		img: "/services/stump-trimming/IMG_5892.JPEG",
	},
	{
		num: "4",
		title: "Enjoy the Results",
		desc: "Clean property, safe trees, happy you",
		img: "/services/lot-and-land-clearing/IMG_3518.JPEG",
	},
];

const bullets = [
	"Trusted in Fresno & the Central Valley",
	"Affordable Tree Service Packages",
	"Year-Round Property Tree Care",
];

const services = [
	"Tree Removal",
	"Emergency Tree Service",
	"Tree Trimming & Pruning",
	"Stump Grinding",
	"Lot & Land Clearing",
	"Residential & Commercial Tree Care",
];

export default function AboutPage() {
	return (
		<>
			<Navbar />

			{/* Page Hero */}
			<section
				className="relative pt-40 pb-20 px-6"
				style={{
					background:
						"linear-gradient(135deg, #22C55E 0%, #1B6B2A 50%, #0D0D0D 100%)",
				}}
			>
				<div className="max-w-4xl mx-auto">
					{/* Breadcrumb */}
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
						<span className="text-white font-semibold">About Us</span>
						<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
					</div>

					<h1
						className="font-tenor-sans text-white font-bold"
						style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
					>
						About Us
					</h1>

					<div className="mt-8">
						<Link
							href="/contact"
							className="inline-block bg-white font-bold text-sm px-8 py-3 rounded-full transition-colors hover:bg-green-50"
							style={{ color: "#1B6B2A" }}
						>
							Get Instant Price
						</Link>
					</div>
				</div>
			</section>

			{/* Logo + Tagline centered */}
			<section className="bg-white py-16 px-6 text-center border-b border-gray-100">
				<div className="max-w-2xl mx-auto">
					<Image
						src="/logo.png"
						alt="Tree Maniac Tree Service Inc."
						width={90}
						height={90}
						className="mx-auto mb-5"
					/>
					<p
						className="text-xs font-bold uppercase tracking-widest mb-4"
						style={{ color: "#22C55E" }}
					>
						LOCAL TREE SERVICE EXPERTS IN FRESNO, CA
					</p>
					<h2
						className="font-tenor-sans font-bold mb-5"
						style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1B6B2A" }}
					>
						About Tree Maniac Tree Service Inc.
					</h2>
					<p className="text-gray-500 leading-relaxed">
						<strong className="text-gray-700">
							Tree Maniac Tree Service Inc.
						</strong>{" "}
						is a professional tree care company based in Fresno, CA. We
						specialize in safe, affordable, and reliable tree services for
						homeowners and businesses throughout the Central Valley. From
						routine trimming to emergency storm response, our crew is on call
						24/7 to handle any job — big or small.
					</p>
				</div>
			</section>

			{/* Full-width image */}
			<section className="bg-white pb-0">
				<div className="max-w-4xl mx-auto px-6">
					<div
						className="relative w-full overflow-hidden rounded-2xl"
						style={{ height: "420px" }}
					>
						<Image
							src="/services/lot-and-land-clearing/IMG_6450.JPEG"
							alt="Tree Maniac crew at work in Fresno CA"
							fill
							className="object-cover object-center"
						/>
					</div>
				</div>
			</section>

			{/* About detail — image left, content right */}
			<section className="bg-white py-20 px-6">
				<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
					{/* Left — image collage + stat badge */}
					<div className="relative w-full lg:w-1/2 shrink-0 flex justify-center py-10 lg:py-0">
						{/* Decorative background shape */}
						<div className="absolute top-4 left-4 w-[80%] h-full bg-green-gradient opacity-20 rounded-[3rem] -z-10"></div>

						<div className="relative w-full max-w-[480px]">
							{/* Main Image */}
							<div className="relative aspect-[4/5] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl border-4 border-white">
								<Image
									src="/services/tree-removal/65524423604__842AC5D4-4616-4B70-A5FA-89C9903EF790.JPEG"
									alt="Tree Maniac crew member at work"
									fill
									className="object-cover object-center hover:scale-105 transition-transform duration-700"
								/>
							</div>

							{/* Overlapping Small Image */}
							<div className="absolute -bottom-10 -left-6 sm:-left-12 w-40 sm:w-48 aspect-square rounded-full border-8 border-white overflow-hidden shadow-xl z-20">
								<Image
									src="/services/tree-trimming/IMG_1267.JPEG"
									alt="Professional tree trimming"
									fill
									className="object-cover object-center"
								/>
							</div>

							{/* Stat badge */}
							<div
								className="absolute top-8 -right-4 sm:-right-8 rounded-2xl px-5 py-4 text-center shadow-2xl border-4 border-white z-20 flex flex-col items-center justify-center animate-floatUp"
								style={{ minWidth: "130px", backgroundColor: "#22C55E" }}
							>
								<p
									className="text-white font-black tracking-tighter leading-none mb-1"
									style={{ fontSize: "2.8rem" }}
								>
									200<span className="text-2xl">+</span>
								</p>
								<p className="text-white font-bold text-[10px] uppercase tracking-widest leading-snug">
									Satisfied
									<br />
									Customers
								</p>
							</div>
						</div>
					</div>

					{/* Right content */}
					<div className="w-full lg:w-1/2">
						<div
							className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-white font-bold text-xs uppercase tracking-widest"
							style={{ backgroundColor: "#22C55E" }}
						>
							ABOUT TREE MANIAC <span>🌲</span>
						</div>

						<h2
							className="font-bold leading-tight mb-5 font-tenor-sans"
							style={{
								fontSize: "clamp(2rem, 4vw, 2.8rem)",
								color: "#1B6B2A",
								lineHeight: 1.15,
							}}
						>
							Your trusted tree service and removal experts in Fresno, CA.
						</h2>

						<p className="text-gray-500 text-base leading-relaxed mb-5">
							At{" "}
							<strong className="text-gray-700">
								Tree Maniac Tree Service Inc.
							</strong>
							, we keep properties across Fresno safe, clean, and beautiful.
							Locally owned and trusted throughout the Central Valley, we
							provide reliable tree removal, trimming, and emergency services
							with fair pricing and professional results.
						</p>

						<ul className="flex flex-col gap-2 mb-7">
							{bullets.map((b) => (
								<li
									key={b}
									className="flex items-center gap-3 font-medium text-gray-700"
								>
									<span
										className="font-black text-base"
										style={{ color: "#1B6B2A" }}
									>
										»
									</span>
									{b}
								</li>
							))}
						</ul>

						<div
							className="border-l-4 pl-5 mb-9 flex flex-col gap-2"
							style={{ borderColor: "#22C55E" }}
						>
							{services.map((s) => (
								<span key={s} className="text-gray-600 text-sm font-medium">
									{s}
								</span>
							))}
						</div>

						<div className="flex flex-wrap items-center gap-5">
							<a
								href="tel:+15593695748"
								className="text-white font-bold px-8 py-4 rounded-full transition-colors shadow-md text-sm"
								style={{ backgroundColor: "#1B6B2A" }}
							>
								Call Now
							</a>

							<a href="tel:+15593695748" className="flex items-center gap-3">
								<div
									className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
									style={{ backgroundColor: "#dcfce7" }}
								>
									<svg className="w-5 h-5" fill="#22C55E" viewBox="0 0 24 24">
										<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
									</svg>
								</div>
								<div className="leading-tight">
									<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
										Have Questions?
									</p>
									<p className="font-bold text-sm text-gray-800">
										(559) 369-5748
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Process Steps */}
			<section
				className="py-20 px-6"
				style={{
					background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
				}}
			>
				<div className="max-w-5xl mx-auto text-center">
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 text-white font-bold text-xs uppercase tracking-widest"
						style={{ backgroundColor: "#22C55E" }}
					>
						OUR WORK PROCESS <span>🌲</span>
					</div>

					<h2
						className="font-tenor-sans font-bold mb-4"
						style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#1B6B2A" }}
					>
						Tree Care Made Simple in 4 Easy Steps
					</h2>

					<p className="text-gray-500 text-sm mb-14 max-w-xl mx-auto leading-relaxed">
						At{" "}
						<strong className="text-gray-700">
							Tree Maniac Tree Service Inc.
						</strong>
						, we've streamlined tree care into a stress-free process. From your
						first estimate to a perfectly completed job, our system ensures
						clear communication and reliable results — every time.
					</p>

					{/* Steps */}
					<div className="relative">
						{/* Connector line */}
						<div
							className="absolute top-[90px] left-[12%] right-[12%] h-px hidden sm:block"
							style={{ backgroundColor: "rgba(27,107,42,0.15)" }}
						/>

						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
							{steps.map((s) => (
								<div key={s.num} className="flex flex-col items-center gap-4">
									{/* Circle image */}
									<div
										className="relative w-44 h-44 rounded-full overflow-hidden ring-4 shrink-0"
										style={
											{
												"--tw-ring-color": "rgba(34,197,94,0.3)",
												boxShadow:
													"0 0 0 6px rgba(34,197,94,0.15), 0 0 0 12px rgba(34,197,94,0.06)",
											} as React.CSSProperties
										}
									>
										<Image
											src={s.img}
											alt={s.title}
											fill
											className="object-cover object-center"
										/>
									</div>

									{/* Step number bubble */}
									<div
										className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg"
										style={{ backgroundColor: "#22C55E" }}
									>
										{s.num}
									</div>

									<div>
										<p className="font-bold text-gray-800 mb-1">{s.title}</p>
										<p className="text-xs text-gray-500 leading-relaxed">
											{s.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<LeaveReview />
			<Footer />
		</>
	);
}
