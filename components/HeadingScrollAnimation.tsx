"use client";

import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * HeadingScrollAnimation
 * ---------------------
 * Splits every <h1>–<h6> inside <section> tags into per-character <span>s
 * and progressively reveals them (opacity + translateX) as the user scrolls.
 *
 * Each character is assigned a stagger index. As the heading scrolls into view,
 * characters animate from faded+shifted-left to fully-visible, one by one,
 * driven entirely by scroll position (not time-based CSS transitions).
 */

// How many pixels of scroll "travel" it takes for a single heading to fully reveal
const HEADING_SCROLL_RANGE = 350;
// Extra delay (in px of scroll) per character
const PER_CHAR_OFFSET = 12;
// How far left (px) each char starts before sliding into place
const X_SHIFT = 14;
// Min opacity for the faded/hidden state
const MIN_OPACITY = 0.12;

interface ProcessedHeading {
	el: HTMLElement;
	chars: HTMLSpanElement[];
}

export default function HeadingScrollAnimation() {
	const pathname = usePathname();
	const headingsRef = useRef<ProcessedHeading[]>([]);
	const rafRef = useRef<number | null>(null);

	/** Split text nodes into individual <span class="sa-char"> */
	const spanifyHeading = useCallback((heading: HTMLElement): HTMLSpanElement[] => {
		const charSpans: HTMLSpanElement[] = [];
		let charIndex = 0;

		function walk(node: Node) {
			if (node.nodeType === Node.TEXT_NODE) {
				const text = node.textContent;
				if (!text) return;
				const frag = document.createDocumentFragment();
				// Split preserving whitespace groups
				const tokens = text.split(/(\s+)/);
				for (const token of tokens) {
					if (!token) continue;
					if (token.trim() === "") {
						// Whitespace — keep as-is
						frag.appendChild(document.createTextNode(token));
					} else {
						// Word — wrap to prevent mid-word line breaks
						const wordWrap = document.createElement("span");
						wordWrap.style.display = "inline-block";
						wordWrap.style.whiteSpace = "nowrap";
						for (let i = 0; i < token.length; i++) {
							const span = document.createElement("span");
							span.textContent = token[i];
							span.className = "sa-char";
							span.style.display = "inline-block";
							span.style.opacity = String(MIN_OPACITY);
							span.style.transform = `translateX(-${X_SHIFT}px)`;
							span.style.willChange = "opacity, transform";
							span.dataset.charIdx = String(charIndex);
							wordWrap.appendChild(span);
							charSpans.push(span);
							charIndex++;
						}
						frag.appendChild(wordWrap);
					}
				}
				node.parentNode?.replaceChild(frag, node);
			} else if (node.nodeType === Node.ELEMENT_NODE) {
				const el = node as HTMLElement;
				if (!el.classList.contains("sa-char")) {
					Array.from(el.childNodes).forEach(walk);
				}
			}
		}

		Array.from(heading.childNodes).forEach(walk);
		return charSpans;
	}, []);

	/** Main scroll handler — runs every rAF */
	const updateOnScroll = useCallback(() => {
		const viewportH = window.innerHeight;

		for (const { el, chars } of headingsRef.current) {
			const rect = el.getBoundingClientRect();
			// "progress" = how far the heading has scrolled into view
			// 0 = just entered bottom,  1 = fully scrolled past trigger zone
			const triggerTop = viewportH * 0.92; // start revealing when top of heading is at 92% of viewport height
			const rawProgress = triggerTop - rect.top;

			for (const span of chars) {
				const idx = Number(span.dataset.charIdx ?? 0);
				// Each char needs (idx * PER_CHAR_OFFSET) more scroll pixels before it starts
				const charProgress = (rawProgress - idx * PER_CHAR_OFFSET) / HEADING_SCROLL_RANGE;
				const t = Math.max(0, Math.min(1, charProgress)); // clamp 0–1

				// Eased value (ease-out cubic)
				const eased = 1 - Math.pow(1 - t, 3);

				const opacity = MIN_OPACITY + (1 - MIN_OPACITY) * eased;
				const x = X_SHIFT * (1 - eased);

				span.style.opacity = String(opacity);
				span.style.transform = `translateX(-${x}px)`;
			}
		}

		rafRef.current = requestAnimationFrame(updateOnScroll);
	}, []);

	useEffect(() => {
		// Small delay so DOM is settled after React renders
		const timer = setTimeout(() => {
			// Clean up previous processed headings (if navigating between pages)
			headingsRef.current = [];

			const headings = document.querySelectorAll<HTMLElement>(
				"section h1, section h2, section h3, section h4, section h5, section h6"
			);

			headings.forEach((heading) => {
				// Prevent re-processing
				if (heading.dataset.saProcessed) return;
				heading.dataset.saProcessed = "true";

				// Strip any old animation classes that might conflict
				heading.classList.remove(
					"animate-fadeInLeft",
					"animate-fadeInUp",
					"scroll-heading-hidden",
					"animate-fadeInLeft-scroll",
				);

				const chars = spanifyHeading(heading);
				headingsRef.current.push({ el: heading, chars });
			});

			// Start the scroll-driven loop
			if (headingsRef.current.length > 0) {
				rafRef.current = requestAnimationFrame(updateOnScroll);
			}
		}, 120);

		return () => {
			clearTimeout(timer);
			if (rafRef.current !== null) {
				cancelAnimationFrame(rafRef.current);
			}
		};
	}, [pathname, spanifyHeading, updateOnScroll]);

	return null;
}
