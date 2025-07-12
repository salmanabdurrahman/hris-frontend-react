import HeroSection from "../components/features/home/HeroSection";
import FeaturesSection from "../components/features/home/FeaturesSection";
import DetailedFeatureSection from "../components/features/home/DetailedFeatureSection";
import TestimonialsSection from "../components/features/home/TestimonialsSection";
import FAQSection from "../components/features/home/FaqSection";
import CTASection from "../components/features/home/CTASection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <DetailedFeatureSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
