import HomeHero from "../components/features/home/HomeHero";
import HomeFeatures from "../components/features/home/HomeFeatures";
import HomeDetailedFeature from "../components/features/home/HomeDetailedFeature";
import HomeTestimonials from "../components/features/home/HomeTestimonials";
import HomeFAQ from "../components/features/home/HomeFAQ";
import HomeCTA from "../components/features/home/HomeCTA";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <HomeFeatures />
      <HomeDetailedFeature />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeCTA />
    </main>
  );
};

export default HomePage;
