"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const OFFSETS = {
	left: { x: -60 },
	right: { x: 60 },
	bottom: { y: 36 },
} as const;

interface RevealProps {
	children: ReactNode;
	/** Side the content slides in from. */
	from?: keyof typeof OFFSETS;
	delay?: number;
	className?: string;
}

/** Fades and slides its content in the first time it scrolls into view. */
export default function Reveal({ children, from = "bottom", delay = 0, className }: RevealProps) {
	const prefersReducedMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={prefersReducedMotion ? false : { opacity: 0, ...OFFSETS[from] }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}
