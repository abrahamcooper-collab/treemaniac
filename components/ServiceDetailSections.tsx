import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "./ServiceDetailSections.module.css";

export interface ServiceDetailImage {
	src: string;
	alt: string;
	/** Short overlay tag, e.g. "Before" / "After". */
	label?: string;
}

export interface ServiceDetailSection {
	heading: string;
	body: string;
	points?: string[];
	/** One or two images; two render side by side (e.g. a before/after pair). */
	images: ServiceDetailImage[];
}

type Tone = "light" | "storm";

const TONES: Record<Tone, {
	section: string;
	index: string;
	heading: string;
	body: string;
	point: string;
	imageFrame: string;
	imageShade: boolean;
	sway: boolean;
}> = {
	light: {
		section: "bg-gray-50",
		index: "text-[#22C55E]",
		heading: "text-[#1B6B2A]",
		body: "text-gray-600",
		point: "text-gray-600",
		imageFrame: "shadow-lg",
		imageShade: false,
		sway: false,
	},
	storm: {
		section: "bg-[linear-gradient(180deg,#071214_0%,#0d2427_45%,#091a1c_100%)]",
		index: "text-[#4ADE80]",
		heading: "text-[#E3F2EF]",
		body: "text-[#B9CFCB]",
		point: "text-[#CFE1DD]",
		imageFrame: "ring-1 ring-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.75),0_0_45px_rgba(45,212,191,0.08)]",
		imageShade: true,
		sway: true,
	},
};

interface ServiceDetailSectionsProps {
	sections: ServiceDetailSection[];
	heading?: string;
	description?: string;
	tone?: Tone;
	/** Decorative layer rendered behind the content (e.g. weather effects). */
	backdrop?: ReactNode;
}

/**
 * Full-width rows describing the sub-services of a service page.
 * Rows alternate image/text sides on large screens, stack on mobile, and
 * slide in as they scroll into view.
 */
export default function ServiceDetailSections({ sections, heading, description, tone = "light", backdrop }: ServiceDetailSectionsProps) {
	const theme = TONES[tone];

	return (
		<section className={`relative overflow-hidden py-20 px-6 ${theme.section}`}>
			{backdrop}

			<div className="relative z-10 max-w-6xl mx-auto">
				{heading && (
					<Reveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
						<h2 className={`font-tenor-sans font-bold mb-4 ${theme.heading}`} style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
							{heading}
						</h2>
						{description && <p className={`leading-relaxed ${theme.body}`}>{description}</p>}
					</Reveal>
				)}

				<div className="flex flex-col gap-16 lg:gap-24">
					{sections.map((section, i) => {
						const imageFirst = i % 2 === 0;
						return (
							<article
								key={section.heading}
								className={`flex flex-col gap-8 lg:gap-14 lg:items-center ${imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"}`}
							>
								<Reveal from={imageFirst ? "left" : "right"} className={imageColumnClass(section.images.length > 1)}>
									<SectionImages images={section.images} theme={theme} />
								</Reveal>

								<Reveal from={imageFirst ? "right" : "left"} delay={0.15} className="flex-1 min-w-0">
									<span className={`text-sm font-semibold tracking-widest uppercase ${theme.index}`}>
										{String(i + 1).padStart(2, "0")}
									</span>
									<h2 className={`font-tenor-sans font-bold mt-2 mb-4 ${theme.heading}`} style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
										{section.heading}
									</h2>
									<p className={`leading-relaxed mb-6 ${theme.body}`}>{section.body}</p>

									{section.points && section.points.length > 0 && (
										<ul className="flex flex-col gap-2">
											{section.points.map((point) => (
												<li key={point} className={`flex items-start gap-3 ${theme.point}`}>
													<span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#22C55E" }}>
														<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
														</svg>
													</span>
													{point}
												</li>
											))}
										</ul>
									)}
								</Reveal>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

// Source photos are small portrait shots (~384×512), so the column is capped
// near their native width to avoid visible upscaling blur.
function imageColumnClass(isPair: boolean) {
	return `w-full shrink-0 mx-auto lg:mx-0 grid gap-4 ${isPair ? "grid-cols-2 max-w-xl lg:w-[36rem]" : "max-w-sm lg:w-96"}`;
}

function SectionImages({ images, theme }: { images: ServiceDetailImage[]; theme: (typeof TONES)[Tone] }) {
	const isPair = images.length > 1;

	return images.map((image) => (
		<div
			key={image.src}
			className={`group relative w-full aspect-[3/4] overflow-hidden rounded-2xl ${theme.imageFrame} ${theme.sway ? styles.sway : ""}`}
		>
			<Image
				src={image.src}
				alt={image.alt}
				fill
				sizes={isPair ? "(max-width: 640px) 50vw, 288px" : "(max-width: 640px) 100vw, 384px"}
				className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
			/>
			{theme.imageShade && (
				<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,18,20,0.55),transparent_45%)]" aria-hidden="true" />
			)}
			{image.label && (
				<span className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "rgba(27,107,42,0.9)" }}>
					{image.label}
				</span>
			)}
		</div>
	));
}
