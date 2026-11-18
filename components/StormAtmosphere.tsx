import styles from "./StormAtmosphere.module.css";

type Intensity = "heavy" | "light";

const LAYERS: Record<Intensity, { grade: boolean; nearRain: boolean; lightning: boolean; leaves: boolean }> = {
	// Hero: full storm over a photo.
	heavy: { grade: true, nearRain: true, lightning: true, leaves: true },
	// Long content bands: ambient drizzle + fog only, so nothing flashes while people read.
	light: { grade: false, nearRain: false, lightning: false, leaves: false },
};

// Fixed values (not Math.random) so server and client render identical markup.
const LEAVES = [
	{ top: "18%", size: 14, duration: 9, delay: 0 },
	{ top: "42%", size: 18, duration: 12, delay: 3.5 },
	{ top: "65%", size: 12, duration: 10, delay: 6 },
	{ top: "28%", size: 16, duration: 14, delay: 8.5 },
	{ top: "80%", size: 13, duration: 11, delay: 2 },
];

/**
 * Purely decorative storm effect (rain, fog, lightning, leaves). Fills its nearest
 * positioned ancestor, ignores pointer events, and is hidden from assistive tech.
 * Motion is disabled for users who prefer reduced motion.
 */
export default function StormAtmosphere({ intensity = "heavy" }: { intensity?: Intensity }) {
	const layers = LAYERS[intensity];

	return (
		<div className={`${styles.root} ${intensity === "light" ? styles.calm : ""}`} aria-hidden="true">
			{layers.grade && (
				<>
					<div className={styles.grade} />
					<div className={styles.vignette} />
				</>
			)}

			<div className={styles.fogB} />

			<div className={styles.rainField}>
				<div className={styles.rainFar} />
				{layers.nearRain && <div className={styles.rainNear} />}
			</div>

			<div className={styles.fogA} />

			{layers.lightning && (
				<>
					<div className={styles.lightning} />
					<div className={`${styles.lightning} ${styles.lightningLate}`} />
				</>
			)}

			{layers.leaves &&
				LEAVES.map((leaf) => (
					<svg
						key={leaf.top}
						className={styles.leaf}
						style={{ top: leaf.top, width: leaf.size, height: leaf.size, animationDuration: `${leaf.duration}s`, animationDelay: `${leaf.delay}s` }}
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M20 3C10 3 4 9 4 17c0 1.4.3 2.6.7 3.6C6 15 10 11 15 9c-4 3-7 7-8.6 12.4C7.6 21.8 8.8 22 10 22c7 0 11-7 10-19z" />
					</svg>
				))}
		</div>
	);
}
