import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Announcement from "@/components/Announcement";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqSection from "@/components/FaqSection";
import SkillsStats from "@/components/SkillsStats";
import Testimonials from "@/components/Testimonials";
import StatsBanner from "@/components/StatsBanner";
import CtaBanner from "@/components/CtaBanner";
import LeaveReview from "@/components/LeaveReview";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#8cb11c]">
      <Navbar />
      <HeroSection />
      <Announcement />
      <Image src="/banner_img.png" width={820} height={800} alt="Tree Banner" className="w-full max-w-[80vw] h-auto mx-auto block" />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <FaqSection />
      <SkillsStats />
      <Testimonials />
      <StatsBanner />
      <CtaBanner />
      <LeaveReview />
      <Footer />
    </main>
  );
}
