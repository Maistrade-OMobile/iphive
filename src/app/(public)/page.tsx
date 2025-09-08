import AboutSection from "@/components/home/AboutSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import HowSection from "@/components/home/HowSection";
import OfferSection from "@/components/home/OfferSection";
import WhySection from "@/components/home/WhySection";
import YourIdeaSection from "@/components/home/YourIdeaSection";

export default function HomePage() {
	return (
		<main className="flex flex-col gap-10 lg:gap-20">
			<HeroSection />
			<AboutSection />
			<OfferSection />
			<WhySection />
			<HowSection />
			<FaqSection />
			<YourIdeaSection />
		</main>
	);
}
