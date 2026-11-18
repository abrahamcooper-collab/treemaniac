"use client";

import { usePathname } from "next/navigation";
import StormPromoPopup, { type PromoSchedule } from "@/components/StormPromoPopup";

const STORM_PAGE = "/services/rain-and-storm-damage";
const SCHEDULE: PromoSchedule = { type: "repeat", everyMs: 20_000 };

/**
 * Site-wide rainy-season promo: reappears every 20s and sends visitors to the
 * storm damage page. Skipped on that page, which has its own popup — remounting
 * when the visitor leaves it restarts the 20s timer.
 */
export default function SiteStormPromo() {
	const pathname = usePathname();
	if (pathname === STORM_PAGE) return null;

	return (
		<StormPromoPopup
			schedule={SCHEDULE}
			primaryAction={{ label: "Get Yourself Booked", href: STORM_PAGE }}
			secondaryAction={{ label: "Call (559) 369-5748", href: "tel:+15593695748" }}
		/>
	);
}
