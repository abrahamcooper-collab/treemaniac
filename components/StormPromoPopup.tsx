"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StormAtmosphere from "@/components/StormAtmosphere";
import styles from "./StormPromoPopup.module.css";

const SEEN_KEY = "storm-promo-seen";

export interface PromoAction {
	label: string;
	/** `tel:` links render as a phone call button; anything else is an internal route. */
	href: string;
}

export type PromoSchedule =
	/** Opens once per browser session, `delayMs` after mount. */
	| { type: "oncePerSession"; delayMs: number }
	/** Opens `everyMs` after mount, then again `everyMs` after each close. */
	| { type: "repeat"; everyMs: number };

interface StormPromoPopupProps {
	schedule: PromoSchedule;
	primaryAction: PromoAction;
	secondaryAction?: PromoAction;
}

// Storage can throw (private mode, blocked site data); the popup must still work without it.
function hasSeenThisSession(): boolean {
	try {
		return sessionStorage.getItem(SEEN_KEY) === "1";
	} catch {
		return false;
	}
}

function markSeenThisSession() {
	try {
		sessionStorage.setItem(SEEN_KEY, "1");
	} catch {
		// Not persisted: the popup may show again on the next visit.
	}
}

/**
 * Rainy-season booking promo built on the native <dialog> (focus trap,
 * Esc-to-close, screen-reader semantics). Content is fixed; the schedule and
 * buttons are configured per placement.
 */
export default function StormPromoPopup({ schedule, primaryAction, secondaryAction }: StormPromoPopupProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	const open = useCallback(() => {
		const dialog = dialogRef.current;
		if (!dialog || dialog.open) return;
		dialog.showModal();
		setIsOpen(true);
	}, []);

	const close = () => dialogRef.current?.close();

	// Timer is (re)armed whenever the dialog is closed, which gives the repeat
	// schedule its "N seconds after each close" behaviour.
	useEffect(() => {
		if (isOpen) return;

		if (schedule.type === "oncePerSession") {
			if (hasSeenThisSession()) return;
			const timer = setTimeout(() => {
				markSeenThisSession();
				open();
			}, schedule.delayMs);
			return () => clearTimeout(timer);
		}

		const timer = setTimeout(open, schedule.everyMs);
		return () => clearTimeout(timer);
	}, [isOpen, open, schedule]);

	return (
		<dialog
			ref={dialogRef}
			className={styles.dialog}
			aria-labelledby="storm-promo-title"
			aria-describedby="storm-promo-desc"
			onClose={() => setIsOpen(false)}
			// A click on the dialog element itself (not its card) is a click on the backdrop.
			onClick={(e) => e.target === e.currentTarget && close()}
		>
			<div className="relative overflow-hidden rounded-3xl text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10 bg-[linear-gradient(180deg,#0b1d20_0%,#071214_100%)]">
				<div className="relative h-36 sm:h-44">
					<Image src="/new_hero_image.jpeg" alt="" fill sizes="448px" className="object-cover" />
					{isOpen && <StormAtmosphere intensity="heavy" />}
					<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,#0b1d20_100%)]" />
				</div>

				<button
					type="button"
					onClick={close}
					aria-label="Close"
					className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white bg-black/40 hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ADE80] transition-colors"
				>
					<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
					</svg>
				</button>

				<div className="relative px-6 sm:px-8 pb-8 -mt-6">
					<span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#0b1d20] bg-[#4ADE80]">
						<span className="relative flex h-2 w-2" aria-hidden="true">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0b1d20] opacity-60 motion-reduce:animate-none" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0b1d20]" />
						</span>
						Rainy Season Booking
					</span>

					<h2 id="storm-promo-title" className="font-tenor-sans font-bold text-[#E3F2EF] mt-4 mb-2" style={{ fontSize: "clamp(1.8rem, 6vw, 2.3rem)" }}>
						Get Booked Soon
					</h2>
					<p id="storm-promo-desc" className="text-[#B9CFCB] leading-relaxed">
						We have only a few slots left for the rainy season. Reserve your storm-prep trimming or inspection before they&apos;re gone.
					</p>

					<div className="mt-5 text-left" aria-hidden="true">
						<div className="flex justify-between text-xs font-semibold mb-1.5">
							<span className="text-[#CFE1DD]">Season slots</span>
							<span className="text-[#FBBF24]">Almost full</span>
						</div>
						<div className="h-2 rounded-full bg-white/10 overflow-hidden">
							<div className={`h-full w-[88%] origin-left rounded-full bg-[linear-gradient(90deg,#22C55E,#FBBF24)] ${styles.meterFill}`} />
						</div>
					</div>

					<div className="mt-7 flex flex-col gap-3">
						<ActionLink action={primaryAction} variant="primary" onNavigate={close} />
						{secondaryAction && <ActionLink action={secondaryAction} variant="secondary" onNavigate={close} />}
						<button type="button" onClick={close} className="text-sm text-[#8FA9A4] hover:text-[#CFE1DD] transition-colors mt-1">
							Maybe later
						</button>
					</div>
				</div>
			</div>
		</dialog>
	);
}

const ACTION_CLASSES = {
	primary: "px-6 py-3.5 font-bold text-white bg-[#22C55E] hover:bg-[#1FAF53]",
	secondary: "px-6 py-3 font-semibold text-[#E3F2EF] ring-1 ring-white/25 hover:bg-white/10",
} as const;

function ActionLink({ action, variant, onNavigate }: { action: PromoAction; variant: keyof typeof ACTION_CLASSES; onNavigate: () => void }) {
	const className = `inline-flex items-center justify-center gap-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ADE80] ${ACTION_CLASSES[variant]}`;

	if (action.href.startsWith("tel:")) {
		return (
			<a href={action.href} className={className}>
				<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.45 2.33.7 3.58.7a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.45.7 3.57a1 1 0 01-.25 1.02l-2.33 2.2z" />
				</svg>
				{action.label}
			</a>
		);
	}

	// Close before client-side navigation: a layout-level popup would otherwise stay open on the next page.
	return (
		<Link href={action.href} onClick={onNavigate} className={className}>
			{action.label}
		</Link>
	);
}
