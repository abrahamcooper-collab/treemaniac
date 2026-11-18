import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import ServiceDetailSections, { type ServiceDetailSection } from "@/components/ServiceDetailSections";
import StormAtmosphere from "@/components/StormAtmosphere";
import StormPromoPopup from "@/components/StormPromoPopup";

const IMAGE_DIR = "/services/rain-and-storm-damage";

export const metadata: Metadata = {
	title: "Rain & Storm Damage Tree Services in Fresno, CA | Tree Maniac",
	description: "Storm-damaged trees, fallen limbs, or hazardous trees after heavy rain? Tree Maniac provides preventive trimming, hazardous tree removal & 24/7 storm cleanup in Fresno, Clovis & nearby areas. Call (559) 369-5748.",
};

const STORM_SERVICES: ServiceDetailSection[] = [
	{
		heading: "Preventive Tree Trimming",
		body: "The best way to deal with storm damage is to prevent it. Overextended, dead, or poorly attached limbs are the first to break under wind and the weight of rain-soaked foliage. We thin dense canopies so wind passes through, remove weak and dead branches, and raise limbs away from roofs and power lines before storm season arrives.",
		points: [
			"Canopy thinning to reduce wind resistance",
			"Removal of dead, cracked, and weakly attached limbs",
			"Clearance trimming over roofs, driveways & lines",
		],
		images: [
			{ src: `${IMAGE_DIR}/broken-storm-limb.jpeg`, alt: "A large broken limb hanging from a street tree after a wind storm" },
		],
	},
	{
		heading: "Hazardous Tree Removal",
		body: "Some trees can't be saved. Split trunks, deep cracks at the branch union, heavy leaning, and root rot from waterlogged soil all signal a tree that could fail in the next storm. We assess the risk honestly and, when removal is the safest choice, take the tree down in controlled sections to protect everything around it.",
		points: [
			"Professional assessment of cracks, splits, and lean",
			"Controlled sectional removal near homes & structures",
			"Stump grinding available to finish the job",
		],
		images: [
			{ src: `${IMAGE_DIR}/split-trunk-hazard.jpeg`, alt: "A tree trunk with a deep vertical split at the branch union, a sign of a hazardous tree" },
		],
	},
	{
		heading: "Emergency Storm Cleanup",
		body: "When a storm leaves broken limbs and toppled trees across your yard, we respond fast. Our crew cuts up and removes fallen wood, clears debris, and leaves your property clean and safe — so you can get back to normal without the heavy lifting.",
		points: [
			"24/7 emergency response after storms",
			"Branch, limb, and debris removal & haul-away",
			"Yard left clean and safe to use",
		],
		images: [
			{ src: `${IMAGE_DIR}/backyard-fallen-tree-before.jpeg`, alt: "A storm-toppled tree lying across a backyard lawn", label: "Before" },
			{ src: `${IMAGE_DIR}/backyard-after-cleanup.jpeg`, alt: "The same backyard cleared of the fallen tree and debris", label: "After" },
		],
	},
	{
		heading: "Fallen Tree Removal",
		body: "An uprooted or snapped tree is heavy, unstable, and dangerous to move without the right equipment. Whether it has landed on your lawn, fence, roof, or vehicle, we safely lift, cut, and remove it — and we can provide photos and documentation to help with your insurance claim.",
		points: [
			"Safe removal of uprooted and snapped trees",
			"Trees removed from roofs, fences & vehicles",
			"Insurance documentation assistance",
		],
		images: [
			{ src: `${IMAGE_DIR}/uprooted-pine.jpeg`, alt: "A large uprooted pine tree fallen across a front lawn, taped off with caution tape" },
		],
	},
];

export default function RainAndStormDamagePage() {
	return (
		<ServicePageTemplate
			title="Rain & Storm Damage Tree Services"
			slug="rain-and-storm-damage"
			heroBgImage="/new_hero_image.jpeg"
			heroImage="/new_hero_image.jpeg"
			heroAtmosphere={<StormAtmosphere intensity="heavy" />}
			intro="Heavy rain and high winds can turn a healthy-looking tree into a serious hazard overnight. Saturated soil loosens roots, weak limbs snap, and entire trees can come down on homes, fences, vehicles, and power lines. Tree Maniac Tree Service Inc. helps Fresno-area property owners before, during, and after the storm — strengthening trees ahead of bad weather, removing the ones that pose a risk, and clearing storm damage quickly and safely when the worst happens."
			importantNotes={[
				"Emergency storm response available 24/7, including weekends & holidays",
				"Pre-storm inspections to spot weak limbs, cracks, and root problems",
				"Complete debris removal and haul-away after every job",
				"Photo documentation to support your insurance claim",
			]}
			whyChoosePoints={[
				{
					heading: "Before & After the Storm",
					body: "We don't just show up after damage is done — our preventive trimming and hazard assessments reduce the chances of a tree failing in the first place.",
				},
				{
					heading: "Safe Work Around Damaged Trees",
					body: "Storm-damaged trees are under unpredictable tension. Our experienced, licensed & insured crew uses the right rigging and equipment to take them down without further harm to your property.",
				},
				{
					heading: "Fast Local Response",
					body: "Based in the Central Valley, we respond quickly across Fresno, Clovis, Madera, Sanger, and Oakhurst to clear blocked driveways, roofs, and yards.",
				},
			]}
		>
			<ServiceDetailSections
				tone="storm"
				heading="Before, During & After the Storm"
				description="Central Valley storms bring saturated soil, gusting winds, and heavy limbs. Here's how we keep your trees — and everything under them — safe."
				sections={STORM_SERVICES}
				backdrop={<StormAtmosphere intensity="light" />}
			/>
			<StormPromoPopup
				schedule={{ type: "oncePerSession", delayMs: 4000 }}
				primaryAction={{ label: "Call (559) 369-5748", href: "tel:+15593695748" }}
				secondaryAction={{ label: "Request a Free Quote", href: "/contact" }}
			/>
		</ServicePageTemplate>
	);
}
