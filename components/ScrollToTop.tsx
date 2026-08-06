"use client";

import { useEffect } from "react";

/**
 * Tiny client component that scrolls the window to the top on mount.
 * Uses `behavior: "instant"` to bypass CSS `scroll-behavior: smooth`
 * which can interfere with Next.js page-transition scroll restoration.
 */
export default function ScrollToTop() {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, []);
	return null;
}
